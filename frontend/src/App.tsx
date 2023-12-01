import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/Global.css";
import { useEffect, useState } from "react";

export enum Design {
	Bing2010 = "bing2010",
	Google2014 = "google2014",
}

function App() {
	const [routes, setRoutes] = useState<JSX.Element[]>([]);
	let design = localStorage.getItem("design") as Design;
	const hostname = window.location.hostname;
	switch (true) {
		case hostname.includes("google"):
			design = Design.Google2014;
			break;
		case hostname.includes("bing"):
			design = Design.Bing2010;
			break;
	}
	if (!design) {
		localStorage.setItem("design", Design.Google2014);
		design = Design.Google2014;
	}
	useEffect(() => {
		(async () => {
			// routes should be imported dynamically using the design name, its in ./pages/DesignName/*.tsx
			const routes = (
				(await import(/* @vite-ignore */ `./pages/${design}`)) as {
					default: {
						[key: string]: React.ComponentType;
					};
				}
			).default;
			import(`./pages/${design}/index.css`);
			setRoutes(Object.keys(routes).map((key, i) => <Route key={key} path={key} Component={routes[key]} />));
		})();
	}, [design]);
	return (
		<BrowserRouter>
			<Routes>{routes}</Routes>
		</BrowserRouter>
	);
}

export default App;
