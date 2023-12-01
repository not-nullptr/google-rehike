export type Result = {
	link: string;
	title: string;
	description: string;
	date?: number;
};

export function boldQuery(query: string, text: string): JSX.Element {
	const regex = new RegExp(query.split(" ").join("|"), "gi");
	const parts = text.split(regex);

	return (
		<>
			{parts.map((part, index) => (
				<span key={index}>
					{part}
					{index !== parts.length - 1 && <b>{text.match(regex)![index]}</b>}
				</span>
			))}
		</>
	);
}
