import { useSearchParams } from "react-router-dom";
import resultsSheet from "../../assets/results-sheet.png";
import { useEffect, useState } from "react";
import { Result, boldQuery } from "../../other";

function SearchResult(props: { result: Result; query: string }) {
	return (
		<li className="g">
			<h3 className="r">
				<a href={props.result.link}>{boldQuery(props.query, props.result.title)}</a>
			</h3>
			<div className="s">
				<div
					className="kv"
					style={{
						marginBottom: "2px",
					}}
				>
					<cite>{decodeURIComponent(props.result.link)}</cite>
					<div className="am-dwn-arw-container">
						<div
							style={{
								display: "inline",
							}}
							aria-expanded="false"
							aria-haspopup="true"
							tabIndex={0}
							data-ved="0CBUQ7B0wAA"
						>
							<span className="am-dwn-arw" />
						</div>
						<div
							style={{
								display: "none",
							}}
							className="am-dropdown-menu"
							role="menu"
							tabIndex={-1}
						>
							<ul>
								<li className="am-dropdown-menu-item">
									<a
										className="am-dropdown-menu-item-text"
										// href="https://web.archive.org/web/20140704070543/http://google.com/url?q=http://webcache.googleusercontent.com/search%3Fq%3Dcache:SlTMZvwRe5sJ:http://en.wikipedia.org/wiki/A*_search_algorithm%252Ba%26hl%3Den%26%26ct%3Dclnk&sa=U&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CBcQIDAA&usg=AFQjCNFfTuyV2M2pcUSwKEuGl3oy7jkAbg"
									>
										Cached
									</a>
								</li>
								<li className="am-dropdown-menu-item">
									<a
										className="am-dropdown-menu-item-text"
										// href="https://web.archive.org/web/20140704070543/http://google.com/search?q=related:en.wikipedia.org/wiki/A*_search_algorithm+a&tbo=1&sa=X&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CBgQHzAA"
									>
										Similar
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<span className="st">{boldQuery(props.query, props.result.description)}</span>
				<br />
				{/* <div className="osl">
					‎
					<a href="https://web.archive.org/web/20140704070543/http://google.com/url?q=http://en.wikipedia.org/wiki/D*&sa=U&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CBoQ0gIoADAA&usg=AFQjCNHLjVWDYGgRAmJ-Zcw6WVJAu8y5zA">
						D* Lite
					</a>
					- ‎
					<a href="https://web.archive.org/web/20140704070543/http://google.com/url?q=http://en.wikipedia.org/wiki/Best-first_search&sa=U&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CBsQ0gIoATAA&usg=AFQjCNFr7LBtf9DYkjeaMPVcb7pT04GnMA">
						Best-first
					</a>
					- ‎
					<a href="https://web.archive.org/web/20140704070543/http://google.com/url?q=http://en.wikipedia.org/wiki/Admissible_heuristic&sa=U&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CBwQ0gIoAjAA&usg=AFQjCNFuxTJs6w5U6Lg6WgrDxXOz24OpCA">
						Admissible heuristic
					</a>
					- ‎
					<a href="https://web.archive.org/web/20140704070543/http://google.com/url?q=http://en.wikipedia.org/wiki/Consistent_heuristic&sa=U&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CB0Q0gIoAzAA&usg=AFQjCNGa1mtE1J0t_jMT18CehChaFXEPsA">
						Consistent heuristic
					</a>
				</div> */}
			</div>
		</li>
	);
}

function Search() {
	const [params] = useSearchParams();
	const query = params.get("q");
	const [results, setResults] = useState<Result[]>([]);
	const [search, setSearch] = useState("");
	const [autocomplete, setAutocomplete] = useState<{ query: string; suggestions: string[] }>();
	const [input, setInput] = useState(false);
	useEffect(() => {
		(async () => {
			const res = await fetch(`http://localhost:48351/autocomplete?q=${search}`);
			const json = await res.json();
			if (json.error) setAutocomplete(undefined);
			setAutocomplete(json);
		})();
	}, [search]);
	useEffect(() => {
		if (!query) return;
		if (results.length > 0) return;
		(async () => {
			const res = await fetch(`http://localhost:48351/search?q=${encodeURIComponent(query)}&count=10`);
			const data = await res.json();
			setResults(data.results);
		})();
	}, [query, results]);
	useEffect(() => {
		if (!results) return;
		console.log(results);
	}, [results]);
	return (
		<div>
			<link rel="stylesheet" type="text/css" href="a%20-%20Google%20Search_files/banner-styles.css" />
			<link rel="stylesheet" type="text/css" href="a%20-%20Google%20Search_files/iconochive.css" />
			{/* End Wayback Rewrite JS Include */}
			<meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
			<meta content="/web/20140704070543im_/http://google.com/images/google_favicon_128.png" itemProp="image" />
			<title>a - Google Search</title>
			<style
				dangerouslySetInnerHTML={{
					__html: `\n\t\t\t.j {\n\t\t\t\twidth: 34em;\n\t\t\t}\n\t\t\tbody,\n\t\t\ttd,\n\t\t\tdiv,\n\t\t\t.p,\n\t\t\ta {\n\t\t\t\tfont-family: arial, sans-serif;\n\t\t\t}\n\t\t\tbody {\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t\t#gbar {\n\t\t\t\tfloat: left;\n\t\t\t\theight: 22px;\n\t\t\t\tpadding-left: 2px;\n\t\t\t\tfont-size: 13px;\n\t\t\t}\n\t\t\t.gsfi,\n\t\t\t.gsfs {\n\t\t\t\tfont-size: 17px;\n\t\t\t}\n\t\t\t.w,\n\t\t\t.q:active,\n\t\t\t.q:visited,\n\t\t\t.tbotu {\n\t\t\t\tcolor: #11c;\n\t\t\t}\n\t\t\ta.gl {\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t\t.ads a:link {\n\t\t\t\tcolor: #0e1cb3;\n\t\t\t}\n\t\t\t#foot {\n\t\t\t\tpadding: 0 8px;\n\t\t\t}\n\t\t\t#foot a {\n\t\t\t\twhite-space: nowrap;\n\t\t\t}\n\t\t\th3 {\n\t\t\t\tfont-size: 16px;\n\t\t\t\tfont-weight: normal;\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t\t#res h3 {\n\t\t\t\tdisplay: inline;\n\t\t\t}\n\t\t\t.hd {\n\t\t\t\theight: 1px;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: -1000em;\n\t\t\t}\n\t\t\tli.g,\n\t\t\tbody,\n\t\t\thtml,\n\t\t\ttable,\n\t\t\t.std {\n\t\t\t\tfont-size: 13px;\n\t\t\t}\n\t\t\tli.g {\n\t\t\t\tmargin-bottom: 23px;\n\t\t\t\tmargin-top: 0;\n\t\t\t\tzoom: 1;\n\t\t\t}\n\t\t\tol li,\n\t\t\tul li {\n\t\t\t\tlist-style: none;\n\t\t\t}\n\t\t\th1,\n\t\t\tol,\n\t\t\tul,\n\t\t\tli {\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t\t#mbEnd h2 {\n\t\t\t\tfont-weight: normal;\n\t\t\t}\n\t\t\t.e {\n\t\t\t\tmargin: 2px 0 0.75em;\n\t\t\t}\n\t\t\t#leftnav a,\n\t\t\t.slk a {\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t\t#leftnav h2 {\n\t\t\t\tcolor: #767676;\n\t\t\t\tfont-weight: normal;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t\t#nav {\n\t\t\t\tborder-collapse: collapse;\n\t\t\t\tmargin-top: 17px;\n\t\t\t\ttext-align: left;\n\t\t\t}\n\t\t\t#nav td {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\t.nobr {\n\t\t\t\twhite-space: nowrap;\n\t\t\t}\n\t\t\t.ts {\n\t\t\t\tborder-collapse: collapse;\n\t\t\t}\n\t\t\t.s br {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.csb {\n\t\t\t\tdisplay: block;\n\t\t\t\theight: 40px;\n\t\t\t}\n\t\t\t.images_table td {\n\t\t\t\tline-height: 17px;\n\t\t\t\tpadding-bottom: 16px;\n\t\t\t}\n\t\t\t.images_table img {\n\t\t\t\tborder: 1px solid #ccc;\n\t\t\t\tpadding: 1px;\n\t\t\t}\n\t\t\t#tbd,\n\t\t\t#abd {\n\t\t\t\tdisplay: block;\n\t\t\t\tmin-height: 1px;\n\t\t\t}\n\t\t\t#abd {\n\t\t\t\tpadding-top: 3px;\n\t\t\t}\n\t\t\t#tbd li {\n\t\t\t\tdisplay: inline;\n\t\t\t}\n\t\t\t.tbfo,\n\t\t\t.tbpd {\n\t\t\t\tmargin-bottom: 8px;\n\t\t\t}\n\t\t\t#tbd .tbt li {\n\t\t\t\tdisplay: block;\n\t\t\t\tfont-size: 13px;\n\t\t\t\tline-height: 1.2;\n\t\t\t\tpadding-bottom: 3px;\n\t\t\t\tpadding-left: 8px;\n\t\t\t\ttext-indent: -8px;\n\t\t\t}\n\t\t\t.tbos,\n\t\t\t.b {\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-style: normal;\n\t\t\t}\n\t\t\t.mime {\n\t\t\t\tcolor: #12c;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: x-small;\n\t\t\t}\n\t\t\t.gac_wd {\n\t\t\t\tright: -2px !important;\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\t.soc a {\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t\t.soc {\n\t\t\t\tcolor: #808080;\n\t\t\t}\n\t\t\t.sr_color a {\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t\t.sr_color {\n\t\t\t\tcolor: #808080;\n\t\t\t}\n\t\t\t.sr_num_color {\n\t\t\t\tcolor: #e7711b;\n\t\t\t}\n\t\t\t#aob {\n\t\t\t\tborder: 1px solid #e0e0e0;\n\t\t\t\tmargin-left: -8px;\n\t\t\t\tmargin-right: -8px;\n\t\t\t\tpadding: 15px 20px 5px;\n\t\t\t}\n\t\t\t#aoba {\n\t\t\t\tfont-size: 32px;\n\t\t\t}\n\t\t\t#aobea {\n\t\t\t\tcolor: #777;\n\t\t\t\tfont-size: 16px;\n\t\t\t\tmargin-top: 5px;\n\t\t\t}\n\t\t\t#vob {\n\t\t\t\tborder: 1px solid #e0e0e0;\n\t\t\t\tpadding: 15px 15px;\n\t\t\t}\n\t\t\t#vob_t {\n\t\t\t\tfont-size: 22px;\n\t\t\t\tline-height: 22px;\n\t\t\t\tpadding-bottom: 5px;\n\t\t\t}\n\t\t\t#vob_st {\n\t\t\t\tline-height: 1.24;\n\t\t\t}\n\t\t\t.lrob_c {\n\t\t\t\tborder-width: 1px;\n\t\t\t\tborder-style: solid;\n\t\t\t\tborder-color: #eee;\n\t\t\t\tbackground-color: #fff;\n\t\t\t\tposition: relative;\n\t\t\t\tmargin-bottom: 26px;\n\t\t\t}\n\t\t\t.lrob_ans,\n\t\t\t.lrob_sh,\n\t\t\t.lrob_txt {\n\t\t\t\tfont-family: Arial;\n\t\t\t\tfont-weight: lighter;\n\t\t\t}\n\t\t\t.lrob_ans {\n\t\t\t\tmargin-bottom: 5px;\n\t\t\t}\n\t\t\t.lrob_ans {\n\t\t\t\tfont-size: xx-large;\n\t\t\t}\n\t\t\t.lrob_sh {\n\t\t\t\tfont-size: medium;\n\t\t\t}\n\t\t\t.lrob_txt {\n\t\t\t\tfont-size: small;\n\t\t\t}\n\t\t\t.lrob_c {\n\t\t\t\tmargin-left: -8px;\n\t\t\t\tmargin-right: -15px;\n\t\t\t\tpadding: 20px 20px 24px;\n\t\t\t}\n\t\t\t.lrob_bk {\n\t\t\t\tcolor: #212121;\n\t\t\t}\n\t\t\t.lrob_gy {\n\t\t\t\tcolor: #878787;\n\t\t\t}\n\t\t\t.gssb_a {\n\t\t\t\tpadding: 0 10px !important;\n\t\t\t}\n\t\t\t.gssb_c {\n\t\t\t\tleft: 132px !important;\n\t\t\t\tright: 295px !important;\n\t\t\t\ttop: 78px !important;\n\t\t\t\twidth: 572px !important;\n\t\t\t}\n\t\t\t.gssb_c table {\n\t\t\t\tfont-size: 16px !important;\n\t\t\t}\n\t\t\t.gssb_e {\n\t\t\t\tborder: 1px solid #ccc !important;\n\t\t\t\tborder-top-color: #d9d9d9 !important;\n\t\t\t}\n\t\t\t.gssb_i {\n\t\t\t\tbackground: #eee !important;\n\t\t\t}\n\t\t\t#res {\n\t\t\t\tpadding: 0 8px;\n\t\t\t}\n\t\t\t#spe {\n\t\t\t\tpadding: 0 8px;\n\t\t\t}\n\t\t\t#subform_ctrl {\n\t\t\t\tfont-size: 11px;\n\t\t\t\theight: 17px;\n\t\t\t\tmargin: 5px 3px 0 17px;\n\t\t\t}\n\t\t\t.taf {\n\t\t\t\tpadding-bottom: 3px;\n\t\t\t}\n\t\t\t.tam {\n\t\t\t\tpadding: 20px 0 3px;\n\t\t\t}\n\t\t\t.tal {\n\t\t\t\tpadding: 20px 0 3px;\n\t\t\t}\n\t\t\t.slk .sld {\n\t\t\t\twidth: 250px;\n\t\t\t}\n\t\t\t.slk {\n\t\t\t\tmargin-bottom: -3px;\n\t\t\t}\n\t\t\t.slk .asld {\n\t\t\t\tpadding-bottom: 5px;\n\t\t\t\twidth: 250px;\n\t\t\t}\n\t\t\t.slk-exp-table {\n\t\t\t\tmargin-top: 1px;\n\t\t\t\tmargin-bottom: -11px;\n\t\t\t}\n\t\t\t.slk-exp {\n\t\t\t\tcolor: #545454;\n\t\t\t}\n\t\t\t.slk-line2 {\n\t\t\t\tpadding-top: 2px;\n\t\t\t\tpadding-bottom: 1px;\n\t\t\t}\n\t\t\t.slk-line3 {\n\t\t\t\tpadding-top: 1px;\n\t\t\t\tmargin-bottom: 14px;\n\t\t\t}\n\t\t\t.ac,\n\t\t\t.st {\n\t\t\t\tline-height: 1.24;\n\t\t\t}\n\t\t\t.mfr,\n\t\t\t#ofr {\n\t\t\t\tfont-size: 16px;\n\t\t\t\tmargin: 1em 0;\n\t\t\t\tpadding: 0 8px;\n\t\t\t}\n\t\t\t.s {\n\t\t\t\tcolor: #444;\n\t\t\t}\n\t\t\t.ac {\n\t\t\t\tcolor: #545454;\n\t\t\t}\n\t\t\ta.fl,\n\t\t\t.flc a,\n\t\t\t.osl a {\n\t\t\t\tcolor: #12c;\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t\ta:link {\n\t\t\t\tcolor: #1a0dab;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\tdiv#tads a:link {\n\t\t\t\tcolor: #1a0dab;\n\t\t\t}\n\t\t\tdiv#tads .soc a:link {\n\t\t\t\tcolor: #808080;\n\t\t\t}\n\t\t\tdiv#tads .sr_color a:link {\n\t\t\t\tcolor: #808080;\n\t\t\t}\n\t\t\t.sr_color a:link {\n\t\t\t\tcolor: #808080;\n\t\t\t}\n\t\t\t.sr_color a:visited {\n\t\t\t\tcolor: #808080;\n\t\t\t}\n\t\t\t.sr_color a:hover {\n\t\t\t\tcolor: #808080;\n\t\t\t\ttext-decoration: underline;\n\t\t\t}\n\t\t\ta:visited {\n\t\t\t\tcolor: #61c;\n\t\t\t}\n\t\t\t.blg a {\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t\tcite,\n\t\t\tcite a:link {\n\t\t\t\tcolor: #006621;\n\t\t\t\tfont-style: normal;\n\t\t\t}\n\t\t\tdiv#tads cite {\n\t\t\t\tcolor: #006621;\n\t\t\t}\n\t\t\t.kv {\n\t\t\t\tfont-size: 14px;\n\t\t\t}\n\t\t\t.kvs {\n\t\t\t\tmargin-top: 1px;\n\t\t\t}\n\t\t\t.kv,\n\t\t\t.kvs,\n\t\t\t.slp {\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin-bottom: 1px;\n\t\t\t}\n\t\t\t.kt {\n\t\t\t\tborder-spacing: 2px 0;\n\t\t\t\tmargin-top: 1px;\n\t\t\t}\n\t\t\t#mbEnd li {\n\t\t\t\tmargin: 20px 8px 0 0;\n\t\t\t}\n\t\t\t.f {\n\t\t\t\tcolor: #666;\n\t\t\t}\n\t\t\t.grn {\n\t\t\t\tcolor: #093;\n\t\t\t}\n\t\t\th4.r {\n\t\t\t\tdisplay: inline;\n\t\t\t\tfont-size: small;\n\t\t\t\tfont-weight: normal;\n\t\t\t}\n\t\t\tli {\n\t\t\t\tline-height: 1.2;\n\t\t\t}\n\t\t\t.mglbl {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tvertical-align: top;\n\t\t\t\toverflow: hidden;\n\t\t\t\tposition: relative;\n\t\t\t}\n\t\t\t.nrsug {\n\t\t\t\tmargin: 0 0 2em 1.3em;\n\t\t\t}\n\t\t\t.nrsug li {\n\t\t\t\tlist-style-type: disc;\n\t\t\t}\n\t\t\t.osl {\n\t\t\t\tcolor: #777;\n\t\t\t\tmargin-top: 4px;\n\t\t\t}\n\t\t\t.r {\n\t\t\t\tfont-size: 16px;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t\t.spell {\n\t\t\t\tfont-size: 16px;\n\t\t\t}\n\t\t\t.spell_orig {\n\t\t\t\tfont-size: 13px;\n\t\t\t}\n\t\t\t.spell_orig a {\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t\t.spell_orig b i {\n\t\t\t\tfont-style: normal;\n\t\t\t\tfont-weight: normal;\n\t\t\t}\n\t\t\t.star {\n\t\t\t\tfloat: left;\n\t\t\t\tmargin-top: 1px;\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\t.th {\n\t\t\t\tborder: 1px solid #ebebeb;\n\t\t\t}\n\t\t\t.thc {\n\t\t\t\tfont-size: 11px;\n\t\t\t}\n\t\t\t.ts td {\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t\t.videobox {\n\t\t\t\tpadding-bottom: 3px;\n\t\t\t}\n\t\t\t#leftnav a:hover,\n\t\t\t#leftnav .tbou a:hover,\n\t\t\t.slk h3 a,\n\t\t\ta:hover {\n\t\t\t\ttext-decoration: underline;\n\t\t\t}\n\t\t\t#mn {\n\t\t\t\ttable-layout: fixed;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t\t#leftnav a {\n\t\t\t\tcolor: #222;\n\t\t\t\tfont-size: 13px;\n\t\t\t}\n\t\t\t#leftnav {\n\t\t\t\tpadding: 43px 4px 4px 0;\n\t\t\t}\n\t\t\t.tbos {\n\t\t\t\tcolor: #dd4b39;\n\t\t\t}\n\t\t\t.lnsec {\n\t\t\t\tborder-top: 1px solid #efefef;\n\t\t\t\tfont-size: 13px;\n\t\t\t\tmargin: 10px 0 14px 10px;\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t\t.tbt {\n\t\t\t\tmargin-bottom: 28px;\n\t\t\t}\n\t\t\t#tbd {\n\t\t\t\tpadding: 0 0 0 16px;\n\t\t\t}\n\t\t\t.tbou a {\n\t\t\t\tcolor: #222;\n\t\t\t}\n\t\t\t#center_col {\n\t\t\t\tborder: 0;\n\t\t\t\tpadding: 0 8px 0 0;\n\t\t\t}\n\t\t\t#topstuff .e {\n\t\t\t\tpadding-top: 3px;\n\t\t\t}\n\t\t\t#topstuff .sp_cnt {\n\t\t\t\tpadding-top: 6px;\n\t\t\t}\n\t\t\t#ires {\n\t\t\t\tpadding-top: 6px;\n\t\t\t}\n\t\t\t#ab_name {\n\t\t\t\tcolor: #dd4b39;\n\t\t\t\tfont: 20px "Arial";\n\t\t\t\tmargin-left: 15px;\n\t\t\t}\n\t\t\t.ab_bg {\n\t\t\t\tborder-bottom: 1px solid #dedede;\n\t\t\t\theight: 56px;\n\t\t\t\tpadding-top: 1px;\n\t\t\t}\n\t\t\t#resultStats {\n\t\t\t\tcolor: #999;\n\t\t\t\tfont-size: 13px;\n\t\t\t\toverflow: hidden;\n\t\t\t\twhite-space: nowrap;\n\t\t\t}\n\t\t\t.mslg > td {\n\t\t\t\tpadding-right: 1px;\n\t\t\t\tpadding-top: 2px;\n\t\t\t}\n\t\t\t.slk .sld {\n\t\t\t\tmargin-top: 2px;\n\t\t\t\tpadding: 5px 0 5px 5px;\n\t\t\t}\n\t\t\t.fml,\n\t\t\t.fmp {\n\t\t\t\tpadding-top: 3px;\n\t\t\t}\n\t\t\t.close_btn {\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\t#fll a,\n\t\t\t#bfl a {\n\t\t\t\tcolor: #12c !important;\n\t\t\t\tmargin: 0 12px;\n\t\t\t\ttext-decoration: none !important;\n\t\t\t}\n\t\t\t.ng {\n\t\t\t\tcolor: #dd4b39;\n\t\t\t}\n\t\t\t#mnav .b {\n\t\t\t\ttext-decoration: underline;\n\t\t\t}\n\t\t\t#mss {\n\t\t\t\tmargin: 0.33em 0 0;\n\t\t\t\tpadding: 0;\n\t\t\t\tdisplay: table;\n\t\t\t}\n\t\t\t.mss_col {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfloat: left;\n\t\t\t\twhite-space: nowrap;\n\t\t\t\tpadding-right: 16px;\n\t\t\t}\n\t\t\t#mss p {\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding-top: 5px;\n\t\t\t}\n\t\t\t.tn {\n\t\t\t\tborder-bottom: 1px solid #ebebeb;\n\t\t\t\tdisplay: block;\n\t\t\t\tfloat: left;\n\t\t\t\theight: 59px;\n\t\t\t\tline-height: 54px;\n\t\t\t\tmin-width: 980px;\n\t\t\t\tpadding: 0;\n\t\t\t\tposition: relative;\n\t\t\t\twhite-space: nowrap;\n\t\t\t}\n\t\t\t.tn-mode,\n\t\t\ta.tn-mode {\n\t\t\t\tcolor: #777;\n\t\t\t\tcursor: pointer;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfont-family: arial, sans-serif;\n\t\t\t\tfont-size: small;\n\t\t\t\theight: 54px;\n\t\t\t\tline-height: 54px;\n\t\t\t\tmargin: 0 8px;\n\t\t\t\tpadding: 0 8px;\n\t\t\t\ttext-decoration: none;\n\t\t\t\twhite-space: nowrap;\n\t\t\t}\n\t\t\t.tn-selected-mode {\n\t\t\t\tborder-bottom: 3px solid #dd4b39;\n\t\t\t\tcolor: #dd4b39;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tmargin: 2px 8px 0;\n\t\t\t}\n\t\t\ta.tn-unselected-mode:hover {\n\t\t\t\tcolor: black;\n\t\t\t\ttext-decoration: none;\n\t\t\t\twhite-space: nowrap;\n\t\t\t}\n\t\t\tbody {\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t\t.tn-div {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfloat: left;\n\t\t\t\tmargin-top: 2px;\n\t\t\t}\n\t\t\t.tn-first-mode,\n\t\t\ta.tn-first-mode {\n\t\t\t\tmargin-left: 1px;\n\t\t\t}\n\t\t\t.sd {\n\t\t\t\tline-height: 43px;\n\t\t\t\tpadding: 0 8px 0 9px;\n\t\t\t}\n\t\t\ta:active,\n\t\t\t.osl a:active,\n\t\t\t.tbou a:active,\n\t\t\t#leftnav a:active {\n\t\t\t\tcolor: #dd4b39;\n\t\t\t}\n\t\t\t#ffl a:active,\n\t\t\t#bfl a:active {\n\t\t\t\tcolor: #dd4b39 !important;\n\t\t\t}\n\t\t\t.csb {\n\t\t\t\tbackground: url(${resultsSheet})\n\t\t\t\t\tno-repeat;\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\t.close_btn {\n\t\t\t\tbackground: url(${resultsSheet})\n\t\t\t\t\tno-repeat -138px -84px;\n\t\t\t\theight: 14px;\n\t\t\t\twidth: 14px;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t.star {\n\t\t\t\tbackground: url(${resultsSheet})\n\t\t\t\t\tno-repeat -94px -245px;\n\t\t\t\theight: 13px;\n\t\t\t\twidth: 65px;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t.star div,\n\t\t\t.star span {\n\t\t\t\tbackground: url(${resultsSheet})\n\t\t\t\t\tno-repeat 0 -245px;\n\t\t\t\theight: 13px;\n\t\t\t\twidth: 65px;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t.sr {\n\t\t\t\tbackground: url(${resultsSheet})\n\t\t\t\t\tno-repeat -66px -292px;\n\t\t\t\theight: 13px;\n\t\t\t\twidth: 65px;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t.sr span {\n\t\t\t\tbackground: url(${resultsSheet})\n\t\t\t\t\tno-repeat 0 -292px;\n\t\t\t\theight: 13px;\n\t\t\t\twidth: 65px;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t.am-dwn-arw-container {\n\t\t\t\tdisplay: inline;\n\t\t\t\tmargin: 0 3px;\n\t\t\t\toutline-color: transparent;\n\t\t\t\toverflow: hidden;\n\t\t\t\tposition: relative;\n\t\t\t}\n\t\t\t.am-dwn-arw-container > div {\n\t\t\t\toutline-color: transparent;\n\t\t\t}\n\t\t\t.am-dwn-arw {\n\t\t\t\tborder-color: transparent;\n\t\t\t\tborder-style: solid dashed dashed;\n\t\t\t\tborder-top-color: green;\n\t\t\t\tborder-width: 4px 4px 0 4px;\n\t\t\t\tcursor: pointer;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfont-size: 0;\n\t\t\t\theight: 0;\n\t\t\t\tleft: 4px;\n\t\t\t\tline-height: 0;\n\t\t\t\toutline-color: transparent;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -3px;\n\t\t\t\twidth: 0;\n\t\t\t}\n\t\t\t.am-dwn-arw {\n\t\t\t\tmargin-top: -4px;\n\t\t\t}\n\t\t\t.am-dropdown-menu {\n\t\t\t\tdisplay: block;\n\t\t\t\tbackground: #fff;\n\t\t\t\tborder: 1px solid #dcdcdc;\n\t\t\t\tfont-size: 13px;\n\t\t\t\tleft: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\tposition: absolute;\n\t\t\t\tright: auto;\n\t\t\t\twhite-space: nowrap;\n\t\t\t\tz-index: 3;\n\t\t\t}\n\t\t\t.am-dropdown-menu-item {\n\t\t\t\tlist-style: none;\n\t\t\t\twhite-space: nowrap;\n\t\t\t}\n\t\t\t.am-dropdown-menu-item:hover {\n\t\t\t\tbackground-color: #eee;\n\t\t\t}\n\t\t\ta.am-dropdown-menu-item-text {\n\t\t\t\tcolor: #333;\n\t\t\t\tcursor: pointer;\n\t\t\t\tdisplay: block;\n\t\t\t\tpadding: 7px 18px;\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t\tdiv#tads a.am-dropdown-menu-item-text {\n\t\t\t\tcolor: #333;\n\t\t\t}\n\t\t\t.sfbgg {\n\t\t\t\tbackground: #f1f1f1;\n\t\t\t\tborder-bottom: 1px solid #e5e5e5;\n\t\t\t\theight: 71px;\n\t\t\t}\n\t\t\t#logocont {\n\t\t\t\tz-index: 1;\n\t\t\t\tpadding-left: 4px;\n\t\t\t\tpadding-top: 4px;\n\t\t\t}\n\t\t\t#logo {\n\t\t\t\tdisplay: block;\n\t\t\t\theight: 49px;\n\t\t\t\tmargin-top: 12px;\n\t\t\t\tmargin-left: 12px;\n\t\t\t\toverflow: hidden;\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 137px;\n\t\t\t}\n\t\t\t#logo img {\n\t\t\t\tleft: 0;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: -41px;\n\t\t\t}\n\t\t\t.lst-a {\n\t\t\t\tbackground: white;\n\t\t\t\tborder: 1px solid #d9d9d9;\n\t\t\t\tborder-top-color: silver;\n\t\t\t\twidth: 570px;\n\t\t\t}\n\t\t\t.lst-a:hover {\n\t\t\t\tborder: 1px solid #b9b9b9;\n\t\t\t\tborder-top: 1px solid #a0a0a0;\n\t\t\t\tbox-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n\t\t\t\t-webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n\t\t\t\t-moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n\t\t\t}\n\t\t\t.lst-td {\n\t\t\t\tborder: none;\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t\t.tia input {\n\t\t\t\tborder-right: none;\n\t\t\t\tpadding-right: 0;\n\t\t\t}\n\t\t\t.tia {\n\t\t\t\tpadding-right: 0;\n\t\t\t}\n\t\t\t.lst {\n\t\t\t\tbackground: none;\n\t\t\t\tborder: none;\n\t\t\t\tcolor: #000;\n\t\t\t\tfont: 16px arial, sans-serif;\n\t\t\t\tfloat: left;\n\t\t\t\theight: 22px;\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 3px 6px 2px 9px;\n\t\t\t\tvertical-align: top;\n\t\t\t\twidth: 100%;\n\t\t\t\tword-break: break-all;\n\t\t\t}\n\t\t\t.lst:focus {\n\t\t\t\toutline: none;\n\t\t\t}\n\t\t\t.lst-b {\n\t\t\t\tbackground: none;\n\t\t\t\tborder: none;\n\t\t\t\theight: 26px;\n\t\t\t\tpadding: 0 6px 0 12px;\n\t\t\t}\n\t\t\t.ds {\n\t\t\t\tborder-right: 1px solid #e7e7e7;\n\t\t\t\tposition: relative;\n\t\t\t\theight: 29px;\n\t\t\t\tmargin-left: 17px;\n\t\t\t\tz-index: 100;\n\t\t\t}\n\t\t\t.lsbb {\n\t\t\t\tbackground-image: -moz-linear-gradient(top, #4d90fe, #4787ed);\n\t\t\t\tbackground-image: -ms-linear-gradient(top, #4d90fe, #4787ed);\n\t\t\t\tbackground-image: -o-linear-gradient(top, #4d90fe, #4787ed);\n\t\t\t\tbackground-image: -webkit-gradient(\n\t\t\t\t\tlinear,\n\t\t\t\t\tleft top,\n\t\t\t\t\tleft bottom,\n\t\t\t\t\tfrom(#4d90fe),\n\t\t\t\t\tto(#4787ed)\n\t\t\t\t);\n\t\t\t\tbackground-image: -webkit-linear-gradient(\n\t\t\t\t\ttop,\n\t\t\t\t\t#4d90fe,\n\t\t\t\t\t#4787ed\n\t\t\t\t);\n\t\t\t\tbackground-image: linear-gradient(top, #4d90fe, #4787ed);\n\t\t\t\tborder: 1px solid #3079ed;\n\t\t\t\tborder-radius: 2px;\n\t\t\t\tbackground-color: #4d90fe;\n\t\t\t\theight: 27px;\n\t\t\t\twidth: 68px;\n\t\t\t}\n\t\t\t.lsbb:hover {\n\t\t\t\tbackground-image: -moz-linear-gradient(top, #4d90fe, #357ae8);\n\t\t\t\tbackground-image: -ms-linear-gradient(top, #4d90fe, #357ae8);\n\t\t\t\tbackground-image: -o-linear-gradient(top, #4d90fe, #357ae8);\n\t\t\t\tbackground-image: -webkit-gradient(\n\t\t\t\t\tlinear,\n\t\t\t\t\tleft top,\n\t\t\t\t\tleft bottom,\n\t\t\t\t\tfrom(#4d90fe),\n\t\t\t\t\tto(#357ae8)\n\t\t\t\t);\n\t\t\t\tbackground-image: -webkit-linear-gradient(\n\t\t\t\t\ttop,\n\t\t\t\t\t#4d90fe,\n\t\t\t\t\t#357ae8\n\t\t\t\t);\n\t\t\t\tbackground-color: #357ae8;\n\t\t\t\tbackground-image: linear-gradient(top, #4d90fe, #357ae8);\n\t\t\t\tborder: 1px solid #2f5bb7;\n\t\t\t}\n\t\t\t.lsb {\n\t\t\t\tbackground: transparent;\n\t\t\t\tbackground-position: 0 -343px;\n\t\t\t\tbackground-repeat: repeat-x;\n\t\t\t\tborder: none;\n\t\t\t\tcolor: #000;\n\t\t\t\tcursor: default;\n\t\t\t\tfont: 15px arial, sans-serif;\n\t\t\t\theight: 29px;\n\t\t\t\tmargin: 0;\n\t\t\t\tvertical-align: top;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t\t.lsb:active {\n\t\t\t\t-moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\n\t\t\t\t-webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\n\t\t\t\tbox-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);\n\t\t\t\tbackground: transparent;\n\t\t\t\tcolor: transparent;\n\t\t\t\toverflow: hidden;\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t\t.sbico {\n\t\t\t\tcolor: transparent;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\theight: 15px;\n\t\t\t\tmargin: 0 auto;\n\t\t\t\tmargin-top: 2px;\n\t\t\t\twidth: 15px;\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t`,
				}}
			/>
			<style
				type="text/css"
				dangerouslySetInnerHTML={{
					__html: "\n\t\t\t.gsib_a {\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding: 4px 6px 0;\n\t\t\t}\n\t\t\t.gsib_a,\n\t\t\t.gsib_b {\n\t\t\t\tvertical-align: top;\n\t\t\t}\n\t\t\t.gssb_c {\n\t\t\t\tborder: 0;\n\t\t\t\tposition: absolute;\n\t\t\t\tz-index: 989;\n\t\t\t}\n\t\t\t.gssb_e {\n\t\t\t\tborder: 1px solid #ccc;\n\t\t\t\tborder-top-color: #d9d9d9;\n\t\t\t\tbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n\t\t\t\t-moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n\t\t\t\tcursor: default;\n\t\t\t}\n\t\t\t.gssb_f {\n\t\t\t\tvisibility: hidden;\n\t\t\t\twhite-space: nowrap;\n\t\t\t}\n\t\t\t.gssb_k {\n\t\t\t\tborder: 0;\n\t\t\t\tdisplay: block;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tz-index: 988;\n\t\t\t}\n\t\t\t.gsdd_a {\n\t\t\t\tborder: none !important;\n\t\t\t}\n\t\t\t.gsmq_a {\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t\ta.gspqs_a {\n\t\t\t\tpadding: 0 3px 0 8px;\n\t\t\t}\n\t\t\t.gspqs_b {\n\t\t\t\tcolor: #666;\n\t\t\t\tline-height: 22px;\n\t\t\t}\n\t\t\t.gsls_a {\n\t\t\t\tcolor: red;\n\t\t\t}\n\t\t\t.gsn_a {\n\t\t\t\tpadding-top: 4px;\n\t\t\t\tpadding-bottom: 1px;\n\t\t\t}\n\t\t\t.gsn_b {\n\t\t\t\tdisplay: block;\n\t\t\t\tline-height: 16px;\n\t\t\t}\n\t\t\t.gsn_c {\n\t\t\t\tcolor: green;\n\t\t\t\tfont-size: 13px;\n\t\t\t}\n\t\t\t.gsq_a {\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t\t.gssb_a {\n\t\t\t\tpadding: 0 7px;\n\t\t\t}\n\t\t\t.gssb_a,\n\t\t\t.gssb_a td {\n\t\t\t\twhite-space: nowrap;\n\t\t\t\toverflow: hidden;\n\t\t\t\tline-height: 22px;\n\t\t\t}\n\t\t\t#gssb_b {\n\t\t\t\tfont-size: 11px;\n\t\t\t\tcolor: #36c;\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t\t#gssb_b:hover {\n\t\t\t\tfont-size: 11px;\n\t\t\t\tcolor: #36c;\n\t\t\t\ttext-decoration: underline;\n\t\t\t}\n\t\t\t.gssb_g {\n\t\t\t\ttext-align: center;\n\t\t\t\tpadding: 8px 0 7px;\n\t\t\t\tposition: relative;\n\t\t\t}\n\t\t\t.gssb_h {\n\t\t\t\tfont-size: 15px;\n\t\t\t\theight: 28px;\n\t\t\t\tmargin: 0.2em;\n\t\t\t}\n\t\t\t.gssb_i {\n\t\t\t\tbackground: #eee;\n\t\t\t}\n\t\t\t.gss_ifl {\n\t\t\t\tvisibility: hidden;\n\t\t\t\tpadding-left: 5px;\n\t\t\t}\n\t\t\t.gssb_i .gss_ifl {\n\t\t\t\tvisibility: visible;\n\t\t\t}\n\t\t\ta.gssb_j {\n\t\t\t\tfont-size: 13px;\n\t\t\t\tcolor: #36c;\n\t\t\t\ttext-decoration: none;\n\t\t\t\tline-height: 100%;\n\t\t\t}\n\t\t\ta.gssb_j:hover {\n\t\t\t\ttext-decoration: underline;\n\t\t\t}\n\t\t\t.gssb_l {\n\t\t\t\theight: 1px;\n\t\t\t\tbackground-color: #e5e5e5;\n\t\t\t}\n\t\t\t.gssb_m {\n\t\t\t\tcolor: #000;\n\t\t\t\tbackground: #fff;\n\t\t\t}\n\t\t\ta.gspqs_a {\n\t\t\t\tpadding-left: 0;\n\t\t\t}\n\t\t\t.gssb_e {\n\t\t\t\tborder-top: 1px solid #a2bff0;\n\t\t\t\tborder-right: 1px solid #558be3;\n\t\t\t\tborder-bottom: 1px solid #558be3;\n\t\t\t\tborder-left: 1px solid #a2bff0;\n\t\t\t}\n\t\t\t.gssb_i {\n\t\t\t\tbackground: #d5e2ff;\n\t\t\t}\n\t\t",
				}}
			/>
			<div id="gb">
				<div id="gbw">
					<div id="gbz">
						<span className="gbtcb" />
						<ol id="gbzc" className="gbtc">
							<li className="gbt">
								<a className="gbzt gbz0l gbp1" id="gb_1" href="https://web.archive.org/web/20140704070543/https://www.google.com/webhp?tab=ww">
									<span className="gbtb2" />
									<span className="gbts">Search</span>
								</a>
							</li>
							<li className="gbt">
								<a className="gbzt" id="gb_2" href="https://web.archive.org/web/20140704070543/http://www.google.com/search?q=a&um=1&ie=UTF-8&hl=en&tbm=isch&source=og&sa=N&tab=wi">
									<span className="gbtb2" />
									<span className="gbts">Images</span>
								</a>
							</li>
							<li className="gbt">
								<a className="gbzt" id="gb_8" href="https://web.archive.org/web/20140704070543/http://maps.google.com/maps?q=a&um=1&ie=UTF-8&hl=en&sa=N&tab=wl">
									<span className="gbtb2" />
									<span className="gbts">Maps</span>
								</a>
							</li>
							<li className="gbt">
								<a className="gbzt" id="gb_78" href="https://web.archive.org/web/20140704070543/https://play.google.com/?q=a&um=1&ie=UTF-8&hl=en&sa=N&tab=w8">
									<span className="gbtb2" />
									<span className="gbts">Play</span>
								</a>
							</li>
							<li className="gbt">
								<a className="gbzt" id="gb_36" href="https://web.archive.org/web/20140704070543/http://www.youtube.com/results?q=a&um=1&ie=UTF-8&sa=N&tab=w1">
									<span className="gbtb2" />
									<span className="gbts">YouTube</span>
								</a>
							</li>
							<li className="gbt">
								<a className="gbzt" id="gb_5" href="https://web.archive.org/web/20140704070543/http://news.google.com/nwshp?hl=en&tab=wn">
									<span className="gbtb2" />
									<span className="gbts">News</span>
								</a>
							</li>
							<li className="gbt">
								<a className="gbzt" id="gb_23" href="https://web.archive.org/web/20140704070543/https://mail.google.com/mail/?tab=wm">
									<span className="gbtb2" />
									<span className="gbts">Gmail</span>
								</a>
							</li>
							<li className="gbt">
								<a className="gbzt" id="gb_25" href="https://web.archive.org/web/20140704070543/https://drive.google.com/?tab=wo">
									<span className="gbtb2" />
									<span className="gbts">Drive</span>
								</a>
							</li>
							<li className="gbt">
								<a className="gbgt" id="gbztm" href="https://web.archive.org/web/20140704070543/http://www.google.com/intl/en/options/" aria-haspopup="true" aria-owns="gbd">
									<span className="gbtb2" />
									<span id="gbztms" className="gbts gbtsa">
										<span id="gbztms1">More</span>
										<span className="gbma" />
									</span>
								</a>
								<div className="gbm" id="gbd" aria-owner="gbztm">
									<div id="gbmmb" className="gbmc gbsb gbsbis">
										<ol id="gbmm" className="gbmcc gbsbic">
											<li className="gbmtc">
												<a className="gbmt" id="gb_24" href="https://web.archive.org/web/20140704070543/https://www.google.com/calendar?tab=wc">
													Calendar
												</a>
											</li>
											<li className="gbmtc">
												<a className="gbmt" id="gb_51" href="https://web.archive.org/web/20140704070543/http://translate.google.com/?q=a&um=1&ie=UTF-8&hl=en&sa=N&tab=wT">
													Translate
												</a>
											</li>
											<li className="gbmtc">
												<a className="gbmt" id="gb_17" href="https://web.archive.org/web/20140704070543/http://www.google.com/mobile/?hl=en&tab=wD">
													Mobile
												</a>
											</li>
											<li className="gbmtc">
												<a className="gbmt" id="gb_10" href="https://web.archive.org/web/20140704070543/http://www.google.com/search?q=a&um=1&ie=UTF-8&hl=en&tbo=u&tbm=bks&source=og&sa=N&tab=wp">
													Books
												</a>
											</li>
											<li className="gbmtc">
												<a className="gbmt" id="gb_212" href="https://web.archive.org/web/20140704070543/https://wallet.google.com/manage/?tab=wa">
													Wallet
												</a>
											</li>
											<li className="gbmtc">
												<a className="gbmt" id="gb_6" href="https://web.archive.org/web/20140704070543/http://www.google.com/search?q=a&um=1&ie=UTF-8&hl=en&tbo=u&tbm=shop&source=og&sa=N&tab=wf">
													Shopping
												</a>
											</li>
											<li className="gbmtc">
												<a className="gbmt" id="gb_30" href="https://web.archive.org/web/20140704070543/http://www.blogger.com/?tab=wj">
													Blogger
												</a>
											</li>
											<li className="gbmtc">
												<a className="gbmt" id="gb_27" href="https://web.archive.org/web/20140704070543/http://www.google.com/finance?q=a&um=1&ie=UTF-8&sa=N&tab=we">
													Finance
												</a>
											</li>
											<li className="gbmtc">
												<a className="gbmt" id="gb_31" href="https://web.archive.org/web/20140704070543/https://plus.google.com/photos?q=a&um=1&ie=UTF-8&sa=N&tab=wq">
													Photos
												</a>
											</li>
											<li className="gbmtc">
												<a className="gbmt" id="gb_12" href="https://web.archive.org/web/20140704070543/http://www.google.com/search?q=a&um=1&ie=UTF-8&hl=en&tbo=u&tbm=vid&source=og&sa=N&tab=wv">
													Videos
												</a>
											</li>
											<li className="gbmtc">
												<div className="gbmt gbmh" />
											</li>
											<li className="gbmtc">
												<a href="https://web.archive.org/web/20140704070543/http://www.google.com/intl/en/options/" className="gbmt">
													Even more »
												</a>
											</li>
										</ol>
										<div className="gbsbt" style={{ opacity: 0 }} />
										<div className="gbsbb" style={{ opacity: 0 }} />
									</div>
								</div>
							</li>
						</ol>
					</div>
					<div id="gbg">
						<h2 className="gbxx">Account Options</h2>
						<span className="gbtcb" />
						<ol className="gbtc">
							<li className="gbt">
								<a target="_top" href="https://web.archive.org/web/20140704070543/https://accounts.google.com/ServiceLogin?hl=en&continue=http://www.google.com/search%3Fq%3Da" id="gb_70" className="gbgt">
									<span className="gbtb2" />
									{/* <span id="gbgs4" className="gbts">
										<span id="gbi4s1">Sign in</span>
									</span> */}
								</a>
							</li>
							<li className="gbt gbtb">
								<span className="gbts" />
							</li>
						</ol>
					</div>
				</div>
				<div id="gbx3" />
				<div id="gbx4" />
			</div>
			<table id="mn" style={{ position: "relative" }} cellSpacing={0} cellPadding={0} border={0}>
				<tbody>
					<tr>
						{/* @ts-ignore */}
						<th width={132} />
						{/* @ts-ignore */}
						<th width={573} />
						{/* @ts-ignore */}
						<th width={278} />
						<th />
					</tr>
					<tr>
						<td className="sfbgg" valign="top">
							<div id="logocont">
								<h1>
									<a
										href="/"
										style={{
											background: `url(${resultsSheet}) no-repeat 0 -41px`,
											height: "37px",
											width: "95px",
											display: "block",
										}}
										id="logo"
										title="Go to Google Home"
									/>
								</h1>
							</div>
						</td>
						<td className="sfbgg" colSpan={2} style={{ paddingLeft: "0px" }} valign="top">
							<form
								style={{
									display: "block",
									margin: 0,
									background: "none",
								}}
								action="/search"
								id="tsf"
								method="GET"
								name="gs"
							>
								<table
									style={{
										marginTop: "20px",
										position: "relative",
									}}
									cellSpacing={0}
									cellPadding={0}
									border={0}
								>
									<tbody>
										<tr>
											<td>
												<div className="lst-a">
													<table cellSpacing={0} cellPadding={0}>
														<tbody>
															<tr>
																<td className="lst-td" width={555} valign="bottom">
																	<div
																		style={{
																			position: "relative",
																			zoom: 1,
																		}}
																	>
																		<input
																			onFocus={() => setInput(true)}
																			onBlur={() => setInput(false)}
																			className="lst"
																			defaultValue={query || ""}
																			title="Search"
																			autoComplete="off"
																			id="sbhost"
																			maxLength={2048}
																			name="q"
																			type="text"
																			dir="ltr"
																			spellCheck="false"
																			style={{
																				outline: "none",
																			}}
																			onChange={(e) => setSearch(e.target.value)}
																		/>
																	</div>
																	<div
																		className="autocomplete"
																		style={{
																			transform: "translateY(28px) translateX(-2px)",
																			zIndex: 1,
																			position: "relative",
																			display: input ? "block" : "none",
																		}}
																	>
																		{autocomplete?.suggestions && autocomplete.suggestions.length > 0 && (
																			<div
																				className="autocomplete-suggestions"
																				style={{
																					marginLeft: 1,
																					width: 570,
																				}}
																			>
																				{autocomplete.suggestions.map((suggestion) => (
																					<div
																						className="autocomplete-suggestion"
																						onMouseDown={() => {
																							window.location.href = `/search?q=${suggestion}`;
																							setSearch("");
																						}}
																					>
																						{boldQuery(search, suggestion)}
																					</div>
																				))}
																			</div>
																		)}
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</td>
											<td>
												<div className="ds">
													<div className="lsbb">
														<button className="lsb" value="Search" type="submit">
															<span
																className="sbico"
																style={{
																	background: `url(${resultsSheet}) no-repeat -36px -111px`,
																	height: "14px",
																	width: "13px",
																	display: "block",
																}}
															/>
														</button>
													</div>
												</div>
											</td>
											<td
												style={{
													fontSize: "11px",
													paddingLeft: "13px",
												}}
											/>
										</tr>
									</tbody>
								</table>
							</form>
						</td>
						<td className="sfbgg">&nbsp;</td>
					</tr>
					<tr style={{ position: "relative" }}>
						<td>
							<div
								style={{
									borderBottom: "1px solid #ebebeb",
									height: "59px",
								}}
							/>
						</td>
						<td colSpan={2}>
							<div className="tn">
								<div className="tn-mode tn-selected-mode tn-div tn-first-mode">Web</div>
								<div className="tn-div">
									<a className="tn-mode tn-unselected-mode" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&source=lnms&tbm=isch&sa=X&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CAUQ_AU">
										Images
									</a>
								</div>
								<div className="tn-div">
									<a className="tn-mode tn-unselected-mode" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&source=lnms&tbm=vid&sa=X&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CAYQ_AU">
										Videos
									</a>
								</div>
								<div className="tn-div">
									<a className="tn-mode tn-unselected-mode" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&source=lnms&tbm=nws&sa=X&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CAcQ_AU">
										News
									</a>
								</div>
								<div className="tn-div">
									<a className="tn-mode tn-unselected-mode" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&source=lnms&tbm=shop&sa=X&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CAgQ_AU">
										Shopping
									</a>
								</div>
								<div className="tn-div">
									<a className="tn-mode tn-unselected-mode" href="https://web.archive.org/web/20140704070543/http://maps.google.com/maps?q=a&um=1&ie=UTF-8&sa=X&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CAkQ_AU">
										Maps
									</a>
								</div>
								<div className="tn-div">
									<a className="tn-mode tn-unselected-mode" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&source=lnms&tbm=bks&sa=X&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CAoQ_AU">
										Books
									</a>
								</div>
							</div>
							<div
								style={{
									borderBottom: "1px solid #ebebeb",
									height: "59px",
								}}
							/>
						</td>
						<td>
							<div
								style={{
									borderBottom: "1px solid #ebebeb",
									height: "59px",
								}}
							/>
						</td>
					</tr>
					<tr>
						<td id="leftnav" valign="top">
							<div>
								<h2 className="hd">Search Options</h2>
								<ul className="med" id="tbd">
									<li>
										<ul className="tbt">
											<li className="tbos" id="qdr_">
												Any time
											</li>
											<li className="tbou" id="qdr_h">
												<a className="q" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&source=lnt&tbs=qdr:h&sa=X&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CA8QpwU">
													Past hour
												</a>
											</li>
											<li className="tbou" id="qdr_d">
												<a className="q" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&source=lnt&tbs=qdr:d&sa=X&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CA8QpwU">
													Past 24 hours
												</a>
											</li>
											<li className="tbou" id="qdr_w">
												<a className="q" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&source=lnt&tbs=qdr:w&sa=X&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CA8QpwU">
													Past week
												</a>
											</li>
											<li className="tbou" id="qdr_m">
												<a className="q" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&source=lnt&tbs=qdr:m&sa=X&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CA8QpwU">
													Past month
												</a>
											</li>
											<li className="tbou" id="qdr_y">
												<a className="q" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&source=lnt&tbs=qdr:y&sa=X&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CA8QpwU">
													Past year
												</a>
											</li>
										</ul>
									</li>
									<li>
										<ul className="tbt">
											<li className="tbos" id="whv_">
												All results
											</li>
											<li className="tbou" id="li_1">
												<a className="q" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&source=lnt&tbs=li:1&sa=X&ei=R1K2U9uLIsj6oATGx4LABg&ved=0CA8QpwU">
													Verbatim
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</td>
						<td valign="top">
							<div id="center_col">
								{results.length > 0 && (
									<div className="sd" id="resultStats">
										{/* About{" "}
										{`${Math.floor(
											Math.random() * 99 + 1
										).toString()}00000000`.replace(
											/\B(?=(\d{3})+(?!\d))/g,
											","
										)}{" "}
										results */}
										No result counter, sorry
									</div>
								)}
								<div id="res">
									<div id="topstuff" />
									<div id="search">
										<div id="ires">
											<ol>
												{results.map((r) => (
													<SearchResult result={r} query={query || ""} />
												))}
											</ol>
										</div>
									</div>
								</div>
							</div>
							<div id="foot">
								<table id="nav" cellSpacing={0} cellPadding={0} border={0} align="center">
									<tbody>
										{/* @ts-ignore */}
										<tr valign="top">
											<td className="b" align="left">
												<span
													className="csb"
													style={{
														backgroundPosition: "-24px 0",
														width: "28px",
													}}
												/>
												<b />
											</td>
											<td>
												<span
													className="csb"
													style={{
														backgroundPosition: "-53px 0",
														width: "20px",
													}}
												/>
												<b>1</b>
											</td>
											<td>
												<a className="fl" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&ei=R1K2U9uLIsj6oATGx4LABg&start=10&sa=N">
													<span
														className="csb"
														style={{
															backgroundPosition: "-74px 0",
															width: "20px",
														}}
													/>
													2
												</a>
											</td>
											<td>
												<a className="fl" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&ei=R1K2U9uLIsj6oATGx4LABg&start=20&sa=N">
													<span
														className="csb"
														style={{
															backgroundPosition: "-74px 0",
															width: "20px",
														}}
													/>
													3
												</a>
											</td>
											<td>
												<a className="fl" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&ei=R1K2U9uLIsj6oATGx4LABg&start=30&sa=N">
													<span
														className="csb"
														style={{
															backgroundPosition: "-74px 0",
															width: "20px",
														}}
													/>
													4
												</a>
											</td>
											<td>
												<a className="fl" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&ei=R1K2U9uLIsj6oATGx4LABg&start=40&sa=N">
													<span
														className="csb"
														style={{
															backgroundPosition: "-74px 0",
															width: "20px",
														}}
													/>
													5
												</a>
											</td>
											<td>
												<a className="fl" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&ei=R1K2U9uLIsj6oATGx4LABg&start=50&sa=N">
													<span
														className="csb"
														style={{
															backgroundPosition: "-74px 0",
															width: "20px",
														}}
													/>
													6
												</a>
											</td>
											<td>
												<a className="fl" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&ei=R1K2U9uLIsj6oATGx4LABg&start=60&sa=N">
													<span
														className="csb"
														style={{
															backgroundPosition: "-74px 0",
															width: "20px",
														}}
													/>
													7
												</a>
											</td>
											<td>
												<a className="fl" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&ei=R1K2U9uLIsj6oATGx4LABg&start=70&sa=N">
													<span
														className="csb"
														style={{
															backgroundPosition: "-74px 0",
															width: "20px",
														}}
													/>
													8
												</a>
											</td>
											<td>
												<a className="fl" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&ei=R1K2U9uLIsj6oATGx4LABg&start=80&sa=N">
													<span
														className="csb"
														style={{
															backgroundPosition: "-74px 0",
															width: "20px",
														}}
													/>
													9
												</a>
											</td>
											<td>
												<a className="fl" href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&ei=R1K2U9uLIsj6oATGx4LABg&start=90&sa=N">
													<span
														className="csb"
														style={{
															backgroundPosition: "-74px 0",
															width: "20px",
														}}
													/>
													10
												</a>
											</td>
											<td className="b" style={{ textAlign: "left" }}>
												<a
													href="https://web.archive.org/web/20140704070543/http://google.com/search?q=a&prmd=ivnsa&ei=R1K2U9uLIsj6oATGx4LABg&start=10&sa=N"
													style={{
														textAlign: "left",
													}}
												>
													<span
														className="csb"
														style={{
															backgroundPosition: "-96px 0",
															width: "71px",
														}}
													/>
													<span
														style={{
															display: "block",
															marginLeft: "53px",
														}}
													>
														Next
													</span>
												</a>
											</td>
										</tr>
									</tbody>
								</table>
								<p
									className="flc"
									id="bfl"
									style={{
										margin: "19px 0 0",
										textAlign: "center",
									}}
								>
									<a href="https://web.archive.org/web/20140704070543/http://google.com/advanced_search?q=a&prmd=ivnsa">Advanced search</a>
									<a href="https://web.archive.org/web/20140704070543/http://google.com/support/websearch/bin/answer.py?answer=134479&hl=en">Search Help</a>
									<a href="https://web.archive.org/web/20140704070543/http://google.com/tools/feedback/survey/html?productId=196&query=a&hl=en">Send feedback</a>
								</p>
								<div
									className="flc"
									id="fll"
									style={{
										margin: "19px auto 19px auto",
										textAlign: "center",
									}}
								>
									<a href="https://web.archive.org/web/20140704070543/http://google.com/">Google&nbsp;Home</a>
									<a href="https://web.archive.org/web/20140704070543/http://google.com/intl/en/ads">Advertising&nbsp;Programs</a>
									<a href="https://web.archive.org/web/20140704070543/http://google.com/services">Business Solutions</a>
									<a href="https://web.archive.org/web/20140704070543/http://google.com/intl/en/policies/">Privacy &amp; Terms</a>
									<a href="https://web.archive.org/web/20140704070543/http://google.com/intl/en/about.html">About Google</a>
								</div>
							</div>
						</td>
						<td valign="top" />
					</tr>
				</tbody>
			</table>
			<table
				style={{
					width: "569px",
					display: "none",
					top: "143px",
					left: "133px",
					position: "absolute",
				}}
				className="gstl_50 gssb_c"
				cellSpacing={0}
				cellPadding={0}
			>
				<tbody>
					<tr>
						<td className="gssb_f" />
						<td className="gssb_e" style={{ width: "100%" }} />
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Search;
