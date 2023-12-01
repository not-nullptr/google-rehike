import fetch from "node-fetch";
import { JSDOM } from "jsdom";
import express from "express";
import cors from "cors";
import CountryLanguage from "@ladjs/country-language";
import { writeFileSync } from "fs";
const app = express();

app.use(express.json());
app.use(cors());

const history: string[] = [];

type Result = {
	link: string;
	title: string;
	description: string;
	date?: number;
};

async function getResultsUnlimited(
	query: string,
	resultCount?: number,
	params: string = "",
	exemption: string = ""
): Promise<{
	results: Result[];
	relatedSearches: string[];
}> {
	if (resultCount) {
		if (resultCount > 20) throw new Error("Max results is 20");
		if (resultCount < 1) throw new Error("Min results is 1");
	}
	const res = await fetch(
		`https://google.co.uk/search?q=${encodeURIComponent(
			query
		)}${params}&gbv=1`,
		{
			headers: {
				Cookie: `SOCS=CAISHAgBEhJnd3NfMjAyMzExMjEtMF9SQzIaAmVuIAEaBgiAoZ-rBg;GOOGLE_ABUSE_EXEMPTION=${exemption};`,
			},
		}
	);
	const text = await res.text();
	if (text.includes("Our systems have detected unusual traffic")) {
		throw new Error(
			'Google thinks you\'re a bot. Try turning down the result count. To fix this right now:\n1.    Go into an incognito window, and type any search\n2.    Solve the captcha\n3.    Go into your cookies and copy the GOOGLE_ABUSE_EXEMPTION cookie\n4.    Paste it into the settings of Google Rehike.\n\nAlternatively, disable the "Specific Result Count" setting.'
		);
	}
	const document = new JSDOM(text).window.document;
	const main = document.getElementById("main");
	const titlesRaw = main?.querySelectorAll("h3 > div");
	const results: Result[] = [];
	titlesRaw?.forEach((t) => {
		if (t.children[0]?.tagName === "SPAN") return;
		const fullResult =
			t.parentElement?.parentElement?.parentElement?.parentElement
				?.parentElement?.parentElement;
		if (!fullResult) return;
		let info: Result = {
			link: "",
			title: "",
			description: "",
		};
		const link = fullResult.querySelector("a");
		if (!link) return;
		info.link =
			new URL(
				`https://google.co.uk${link.getAttribute("href")}`
			)?.searchParams?.get("q") ?? "";
		const title = fullResult
			.querySelector("h3")
			?.querySelector("div")?.textContent;
		if (!title) return;
		info.title = title;
		const fullDescArr = Array.from(
			fullResult.children[1]?.children[0]?.children[0]?.children[0]
				?.children || []
		);
		let fullDesc: string | undefined;
		if (fullDescArr.length === 1) {
			fullDesc = fullDescArr.at(0)?.textContent?.replaceAll("�", "");
		} else if (fullDescArr.length === 2) {
			if (fullDescArr.at(-1)?.querySelector("a")) {
				fullDesc = fullDescArr.at(0)?.textContent?.replaceAll("�", "");
			} else {
				fullDesc = fullDescArr.at(-1)?.textContent?.replaceAll("�", "");
			}
		}
		let date, description;
		const dateMatch = fullDesc?.match(
			/^\d{1,2}\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}/
		);
		if (dateMatch) {
			date = dateMatch[0];
			description = fullDesc?.replace(date, "").trim();
		} else {
			description = fullDesc;
		}
		if (!description) return;
		info.description = description;
		if (date) info.date = Date.parse(date);
		results.push(info);
	});
	if (results.length === 0) return { results: [], relatedSearches: [] };
	if (resultCount) {
		let start = 10;
		while (results.length < resultCount) {
			const res = await getResults(query, undefined, `&start=${start}`);
			results.push(...res.results);
			start += 10;
		}
		if (results.length > resultCount) {
			results.splice(resultCount, results.length - resultCount);
		}
	}
	// find a div inside a span inside a div inside a div inside a div inside a div with text content "Related searches"
	const relatedSearchesElement = Array.from(
		document.querySelectorAll("div > div > div > div > span > div")
	).find((div) => div.textContent === "Related searches")?.parentElement
		?.parentElement?.parentElement?.parentElement;
	const relatedSearches = Array.from(
		relatedSearchesElement?.querySelectorAll(
			"div > div > a > div > span > div"
		) || []
	).map((a) => a.textContent || "");
	return {
		results,
		relatedSearches,
	};
}

async function getResults(
	query: string,
	resultCount?: number,
	params: string = "",
	exemption: string = ""
) {
	try {
		return await getResultsUnlimited(query, resultCount, params, exemption);
	} catch (e) {
		console.log(e);
		console.warn("Unset max results due to rate limiting.");
		return await getResultsUnlimited(query, undefined, params, exemption);
	}
}

// console.log(await getResults("youtube"));

app.get("/search", async (req, res) => {
	const { q, count, exemption } = req.query;
	if (!q) return res.status(400).json({ error: "Missing query" });
	if (typeof q !== "string")
		return res.status(400).json({ error: "Query must be a string" });
	if (count && typeof count !== "string")
		return res.status(400).json({ error: "Count must be a string" });
	if (exemption && typeof exemption !== "string")
		return res.status(400).json({ error: "Exemption must be a string" });
	try {
		const results = await getResults(q, Number(count), "", exemption);
		if (history[0] !== q) {
			history.push(q);
			if (history.length > 10) history.shift();
		}
		res.json({ ...results, history });
	} catch (e) {
		res.status(500).json({ error: (e as Error).message });
	}
});

app.get("/autocomplete", async (req, res) => {
	const { q } = req.query;
	if (!q) return res.status(400).json({ error: "Missing query" });
	if (typeof q !== "string")
		return res.status(400).json({ error: "Query must be a string" });
	try {
		const res2 = await fetch(
			`https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(
				q
			)}`
		);
		const data = (await res2.json()) as any[];
		res.json({
			query: data[0],
			suggestions: data[1],
		});
	} catch (e) {
		res.status(500).json({ error: (e as Error).message });
	}
});

app.get("/trends", async (req, res) => {
	CountryLanguage.getCountryLanguages(
		req.query.region || "GB",
		async function (err: any, languages: any) {
			if (err) {
				console.log(err);
				return res.status(500).json({ error: err.message });
			} else {
				const result = await fetch(
					`https://trends.google.com/trends/api/dailytrends?hl=${
						languages[0].iso639_1
					}-${req.query.region || "GB"}&hl=${languages[0].iso639_1}-${
						req.query.region || "GB"
					}&tz=0&geo=${req.query.region || "GB"}&ns=15`
				);
				const text = await result.text();
				res.send(text);
			}
		}
	);
});

app.listen(48351, () => console.log("Listening on port 48351"));

export {};
