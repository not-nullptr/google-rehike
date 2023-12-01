import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Result, boldQuery } from "../../other";
import searchSheet from "./assets/search-sheet.png";
import homeSheet from "./assets/home-sheet.png";

function SearchResult(props: { result: Result; query: string }) {
	return (
		<li>
			<div className="sa_cc">
				<div className="sb_tlst">
					<h3>
						<a href={props.result.link}>{boldQuery(props.query, props.result.title)}</a>
					</h3>
				</div>
				<a className="sa_cpt" />
				<p>{boldQuery(props.query, props.result.description)}</p>
				<div className="sb_meta">
					<cite>{boldQuery(props.query, props.result.link)}</cite>
					&nbsp;·{" "}
				</div>
			</div>
		</li>
	);
}

function Search() {
	const [params] = useSearchParams();
	const query = params.get("q");
	const [res, setRes] = useState<{
		results: Result[];
		relatedSearches: string[];
		history: string[];
	}>();
	const [dailyImage, setDailyImage] = useState<{
		start_date: string;
		end_date: string;
		url: string;
		copyright: string;
		copyright_link: string;
	}>({
		start_date: "",
		end_date: "",
		url: "",
		copyright: "",
		copyright_link: "",
	});
	const [search, setSearch] = useState("");
	const [autocomplete, setAutocomplete] = useState<{ query: string; suggestions: string[] }>();
	useEffect(() => {
		(async () => {
			const res = await fetch(`http://localhost:48351/autocomplete?q=${search}`);
			const json = await res.json();
			if (json.error) setAutocomplete(undefined);
			setAutocomplete(json);
		})();
	}, [search]);

	useEffect(() => {
		(async () => {
			const res = await fetch(`https://bing.biturl.top/?resolution=1920&format=json&index=0&mkt=en-US`);
			setDailyImage(await res.json());
		})();
		if (!query) return;
		document.title = `${query} - Bing`;
		const link = document.createElement("link");
		link.rel = "icon";
		link.href =
			"data:image/x-icon;base64,AAABAAEAEBAAAAEAGABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAAAAAABMLAAATCwAAAAAAAAAAAAAVpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8ysf97zf+24//F6f/F6f/F6f+K0/9QvP8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8krP+Z2P/////////w+f/F6f/F6f/i9P/////////T7v9Bt/8Vpv8Vpv8Vpv8Vpv/T7v/////w+f97zf8Vpv8Vpv8Vpv8Vpv9QvP/T7v/////w+f9Bt/8Vpv8Vpv97zf////////9QvP8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8krP/i9P/////i9P8Vpv8Vpv+24//////i9P8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv+K0/////////8Vpv8Vpv/F6f////////8krP8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv+n3v/////w+f8Vpv8Vpv/F6f////////+n3v8krP8Vpv8Vpv8Vpv8Vpv8Vpv9tx/////////+Z2P8Vpv8Vpv/F6f/////////////i9P+K0/9QvP9QvP9tx//F6f////////+n3v8Vpv8Vpv8Vpv/F6f/////T7v+Z2P/i9P////////////////////+24/9QvP8Vpv8Vpv8Vpv8Vpv/F6f/////F6f8Vpv8Vpv8krP9QvP9QvP9Bt/8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv/F6f/////F6f8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv9Bt/9QvP9Bt/8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8AAHBsAABhdAAAbiAAAHJ0AABsaQAAdGkAACBDAABlbgAAUEEAAEVYAAAuQwAAOy4AAEU7AABBVAAAQ00AAC5W";
		document.head.appendChild(link);
		if (res && res.results.length > 0) return;
		(async () => {
			const res = await fetch(`http://localhost:48351/search?q=${encodeURIComponent(query)}&count=10`);
			const data = await res.json();
			setRes(data);
		})();
	}, [query, res]);
	return (
		<div>
			<link rel="stylesheet" type="text/css" href="#" />
			<link rel="stylesheet" type="text/css" href="#" />
			{/* End Wayback Rewrite JS Include */}
			<meta content="text/html; charset=utf-8" httpEquiv="content-type" />
			<style
				type="text/css"
				dangerouslySetInnerHTML={{
					__html: `body{background:#fff url(${searchSheet}) repeat-x 0 -85px;font:small/normal Arial,Helvetica,Sans-Serif;margin:0;padding:0;min-width:980px}a{color:#03c;text-decoration:none}a:visited{color:#639}a:hover,h3 a{text-decoration:underline}h1,h2,h3,h4,h5,h6{color:#525051;font-size:small;font-weight:200;margin:0;padding:0}h1{font-size:93%;color:#898994}.sb_ph h1{text-transform:uppercase}h2,h3{font-size:125%}h1 a{color:#f60}h2{margin:0 0 .62em}h2,h2 a,h2 a:visited{color:#f76120}h2 span{margin-left:.47em;font-size:small;color:#525051}h2 span span,h2 cite{margin:0 .47em 0 0}h2 span a,h2 span a:hover{color:#03c}img{border:0}cite,.sb_cite{color:#568e1a;font-style:normal;word-wrap:break-word}strong{font-weight:700}.sb_count{color:#898994;font-size:93%}.sb_meta,.sb_meta a,.sb_meta a:visited{color:#a1a1a1;margin:0}.sb_alert{color:#d90026}.sb_alert a{font-style:italic}#sw_hdr,#sw_content,#sw_main,#sw_foot{width:100%;float:left}#sw_content{position:static;z-index:3;min-height:344px}#sw_canvas{padding:0 0 0 15px}#sw_main{width:100%;margin:0 0 0 -15px;padding:0 0 1.54em 15px}.sb_results,.sb_results ul,.sb_results li,.sb_results li li{list-style-type:none;margin:0;padding:0}.sb_results li{padding:0 0 1.38em}.sb_results p{margin:0;line-height:1.3em;word-wrap:break-word}.sb_results .sb_meta{line-height:1.3em}.sb_results .sb_meta li,.sp_pss li{display:inline}.sb_pag{padding:0;margin:0;width:100%;float:left}.sb_pag ul,.sb_pag li{list-style:none;margin:0;padding:0}.sb_pag li{float:left}.sb_pag h4{display:none}.sb_pag a,.sb_pag span{display:block;border:1px solid #d4d4d4;padding:.3em .7em;margin:0 .38em 0 0;text-align:center}.sb_pag a,.sb_pag a:visited{color:#f76120}a.sb_pagP,a.sb_pagN,span.sb_pagSp{padding:.38em .5em;border:none;color:#03c}a.sb_pagP:visited,a.sb_pagN:visited{color:#639}.sb_pag a:hover,a.sb_pagS{text-decoration:none;background:#fbefdb;border:1px solid #ffa615}a.sb_pagP{margin-right:.7em;padding-left:0}a:hover.sb_pagP,a:hover.sb_pagN{text-decoration:underline;background-color:transparent;border:none}#sw_hdr{position:relative;z-index:1001;_float:none;min-height:100px;_height:100px;min-width:980px}.sw_hdrr{position:relative;z-index:-1}#sw_tbbg{margin-bottom:-1.85em;height:1.85em}#sw_ltxt{font-size:170%;left:40px;position:absolute;top:44px}#sw_im{position:absolute;height:100px;width:450px;filter:alpha(opacity=0);opacity:0;top:0;left:0}#sw_imL{margin:36px 0 0 20px;_overflow:hidden;width:125px;height:45px}.sw_imLd #sw_imL{background:url(/web/20100502032809im_/http://www.bing.com/fd/s/a/j1.png) 0 -45px}#sw_imL.sc_idk{background-position:0 0}#sw_imL2,#sw_pLLogo2{display:none;_display:block;height:300px;width:125px;margin:-45px 0 0 -1px}.sw_imLd #sw_imL2{_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/fd/s/a/j1.png', sizingMethod='crop')}#sw_pLLogo{background:url(${homeSheet}) 0 -39px;_overflow:hidden;width:125px;height:45px;position:absolute;top:36px;left:20px}.sc_idk #sw_imL2{margin-top:0}#sw_im #sw_imL{_background:none}.sw_logo{display:block;height:45px;width:125px;margin:-30px 10px 0 0;float:left}#sb_form .sw_logo{margin-right:40px}.sw_logoT{color:#000;cursor:pointer;display:block;font-size:13px;position:absolute;top:-9em;z-index:-1}.sw_box a:hover{text-decoration:none}#sw_hdr .sw_box{padding:47px 0 0 20px;margin:0}#sw_hdr .sw_bd{margin-top:-2.43em}.sb_form_align{margin-left:175px;padding:5px 0 0}a.sw_cb{position:absolute;top:2.58em;right:1.58em;color:#5073b9;font-size:93%}.sw_tb,.sw_tb a,.sw_tb *{color:#fff;margin:0;padding:0}.sw_tb a:visited{color:#fff}.sw_tb{padding:.35em 0;font-size:93%;width:100%;min-height:14px}.sw_tb ul{display:block;list-style:none;float:left}.sw_tb div ul{padding-right:1.5em}ul.sw_right{float:right;white-space:nowrap;padding-right:.85em}.sw_tb ul li{border-left:solid 1px #ccc;padding:0 1.33em 0 1.58em;display:inline;zoom:1}.sw_tb div li{padding-right:0;border:0}ul.sw_right li{padding:0 0 0 .85em;border:0}.sw_right li span{padding-right:.85em;zoom:1}.sw_tbb{height:1px;font-size:1px;background:#d1d7da;opacity:.5;filter:alpha(opacity=50);width:100%;clear:both}.sc_active,.sw_u{font-weight:bold}.sw_b input{float:left;*float:none;border:0;margin:0 0 -.8em;color:#333;font-size:100%;padding:.2em .64em 0 .44em;width:24.0333em;height:1.4em;line-height:1.2em}.sw_bd{position:relative;float:left}.sw_bd2 .sw_b{float:left}input.sw_q_nrw{width:14.9333em}.sw_b .sw_qbtn{background:#f9761d url(${searchSheet}) 0 -1px;cursor:pointer;height:24px;width:24px;padding:24px 0 0;margin:0 0 -12px;overflow:hidden}#sb_form_q2{width:15.5em}.sw_b{font-size:115.9%;*font-size:113%;float:left;*float:none;border:1px #acbabd solid;background:#fff;padding:.2em .2em 1em;*padding:.13em .2em .93em;margin:0 1px 0 0;white-space:nowrap}#sw_as{left:-1px;position:relative;clear:both;display:none;font-size:small}a.sw_cb{top:2.58em}`,
				}}
			/>
			<style
				type="text/css"
				dangerouslySetInnerHTML={{
					__html: "#content{margin:0 0 0 -15px;padding:0 264px 0 0;max-width:666px}#results_area{float:left;width:100%;padding-bottom:10px}#results_container{padding:0 15px}#sidebar{float:left;margin:0 -264px 0 19px;padding:0 15px 0 0;width:230px;word-wrap:break-word}.sc_hl1,.sc_hl1 li{display:inline;margin:0;padding:0}.sb_vdl{width:100%;margin-top:.4em}#results:after,.sb_vdl:after{clear:both;content:'.';display:block;height:0;visibility:hidden}.sb_vdl ul{max-width:38%;_width:38%;margin:0 1.51em 0 3.11em;_margin:0 2.55em 0 1.18em;padding:0;float:left}.sb_vdl li{text-indent:-.77em;_text-indent:0;a:0}.sc_bullet{margin:0 .47em 0 0}.sb_ph{margin:0 0 .93em;text-align:right;color:#898994}.sb_ph h1{float:left}.sb_ph .sc_hl1,.sb_ph .sc_bullet{margin:0 0 0 .47em;font-size:93%}.sb_ph a{color:#898994;text-decoration:underline}",
				}}
			/>
			<link href="#" rel="icon" />
			<link href="#" rel="alternate" title="XML" type="text/xml" />
			<link href="#" rel="alternate" title="RSS" type="application/rss+xml" />
			<div id="sw_page">
				<div id="sw_width">
					<div id="sw_hdr">
						<div
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								zIndex: -1,
								background: `linear-gradient(to bottom, transparent 50%, #fff 100%), url(${dailyImage.url}) center/cover no-repeat`,
								/* mask making the image transparent, going from left to right */
								maskImage: "linear-gradient(135deg, black 0%, transparent 50%)",
							}}
						/>
						<div className="sw_hdrr">
							<div id="sw_tbbg" />
							<div id="sw_ltxt"></div>
							<div id="sw_pLLogo">
								<div id="sw_pLLogo2" />
							</div>
							<div id="sw_im">
								<div className="sc_idk" id="sw_imL">
									<div id="sw_imL2" />
								</div>
							</div>
						</div>
						<div className="sw_tb">
							<div>
								<ul className="sc_hl1" id="sch_scopes">
									<li className="sc_active">
										<a href="#">
											<span>Web</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span>Images</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span>Videos</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span>Shopping</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span>News</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span>Maps</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span>More</span>
										</a>
									</li>
								</ul>
							</div>
							<ul className="sc_hl1">
								<li>
									<a href="#">MSN</a>{" "}
								</li>
								<li>
									<a href="#">Hotmail</a>
								</li>
							</ul>
							<ul className="sw_right">
								<li>
									<span className="lStatus">
										<a href="#">Sign in</a>
									</span>{" "}
									|{" "}
								</li>
								<li>
									<span className="mktInd">
										<a href="#">United States</a>
									</span>{" "}
									|{" "}
								</li>
								<li className="sw_last">
									<span>
										<a href="#">Preferences</a>
									</span>
								</li>
							</ul>
						</div>
						<div className="sw_tbb" />
						<form action="/search" className="sw_box" id="sb_form">
							<a href="/" className="sw_logo">
								<span className="sw_logoT">Bing</span>
							</a>
							<div className="sw_bd">
								<div className="sw_b">
									<input
										className="sw_qbox"
										id="sb_form_q"
										name="q"
										title="Enter your search term"
										type="text"
										defaultValue={query || ""}
										autoComplete="off"
										style={{
											outline: "none",
										}}
										onChange={(e) => setSearch(e.target.value)}
									/>
									<input className="sw_qbtn" id="sb_form_go" name="go" tabIndex={0} title="Search" type="submit" />
								</div>
								{autocomplete?.suggestions && autocomplete.suggestions.length > 0 && (
									<div className="autocomplete-suggestions">
										{autocomplete.suggestions.map((suggestion) => (
											<div
												className="autocomplete-suggestion"
												onClick={() => {
													window.location.href = `/search?q=${suggestion}`;
													setSearch("");
												}}
											>
												{boldQuery(autocomplete.query, suggestion)}
											</div>
										))}
									</div>
								)}
								<div id="sw_as" />
							</div>
							<input name="form" type="hidden" defaultValue="QBRE" />
							<div className="sb_form_align" />
						</form>
						<a href="#" className="sw_cb">
							Make Bing your decision engine
						</a>
					</div>
					<div id="sw_content">
						<div />
						<div>
							<style
								type="text/css"
								dangerouslySetInnerHTML={{
									__html: `.sb_adsWv2{clear:both;padding:0 10px;margin:.7em -10px 1.39em;background-color:#f3faff;overflow:hidden;word-wrap:break-word}.sb_adsNv2{padding:0 0 .77em}.sb_adsNv2 ul,.sb_adsWv2 ul{list-style-type:none;margin:0;padding:0}.sb_adsWv2 ul{margin:0 0 .31em}.sb_add{display:block;width:100%;text-decoration:none;padding:.42em 0}.sb_addp{cursor:pointer}.sb_adN{padding:0 0 1.2em}.sb_adsNv2 h2,.sb_adsWv2 h2{color:#898994;font-size:93%;font-weight:200;margin:0 0 .9em}.sb_adsWv2 h2{float:right;margin:-.3em 0 0}.sb_add h3 a{color:#03c;text-decoration:underline;display:inline}.sb_add h3 a:visited{color:#639}.sb_adW h3,.sb_adN h3{display:inline}.sb_adsD{color:#525051;margin-left:.5em}.sb_adW cite{margin-left:.5em}.sb_adN cite{display:block;word-wrap:normal}.sb_add p{color:#000;margin:0}.sb_adW p{padding:.2em 0 0 0}.sb_adMktA,.sb_adMktA:hover,.sb_adMktA:visited{color:#898994;text-decoration:underline}.sc_cbs{white-space:nowrap}.sb_adsNv2 .sc_cbs{margin-top:.3em;display:block}.sc_cbs img{margin-bottom:-.16em}.sc_cb{color:#03c;cursor:pointer}.sc_cb:hover{text-decoration:underline}.sc_cb:visited{color:#639}.sb_adsWv2 .sc_cbs,.sb_adsWv2 .sc_cb{margin-left:.75em}.sc_cbs .sc_cb{margin-left:.5em;position:relative}.sb_adsWv2 .msg{*float:left;width:auto;margin:0}#sw_aside{*zoom:1;width:185px;float:left;margin:0 0 0 -195px;color:#525051;overflow:hidden;word-wrap:break-word}#sw_aside ul,#sw_aside li{padding:0;list-style:none}#sw_aside li{padding:4px 0;margin-top:1px}#sw_aside a,#sw_aside em{font-style:normal}div#sw_nav ul,div#sw_nav li,#sw_nav a,#sw_nav em,#sw_nav span{display:block;margin:0;padding:0;width:170px}div#sw_nav li{margin:0 0 1px}#sw_nav a,#sw_nav em{background:#f2f2f2;color:#03c;padding:4px 20px;width:130px}#sw_nav a{width:128px;border:1px #f2f2f2 solid}#sw_nav a:hover{background-color:#dadada;border-color:#dadada}#sw_nav a:focus{outline:none;border:1px #333 dotted}#sw_nav em{background:none;color:#fff;font-style:normal;font-weight:bold;position:relative}#sw_nav span{background:url(${searchSheet}) right -1px no-repeat;display:block;height:23px;margin:-23px 0 0;padding:0 40px 0 0;width:auto}#sw_nav span span{margin:0;padding:0;background-position:-24px -1px;width:71px}.sw_navA{background:#f9761d;*float:left;position:relative}.sw_nav1{text-transform:uppercase}.sw_menu{background:none;padding:0 20px 10px;font-size:93%}.sw_menu h2{color:#898994;background:none;margin:0;padding-top:10px;font-size:100%;border:0;text-transform:uppercase}.sw_menu h3{font-size:small}.sw_menu ul{margin:0 0 5px}#sc_expPane{padding-top:16px}#sc_sst{word-wrap:break-word}#sc_sst .sc_tools{color:#a1a1a1;margin-top:.5em}#sc_sst .sc_tools a{color:#a1a1a1;text-decoration:underline}#sb_foot{font-size:85%;clear:both;float:left;width:100%;border-top:solid 1px #f1f1f1}#sw_footL,#sw_footL a{color:#898994}#sb_foot ul{display:block;list-style:none;margin:5px 10px;padding:0;float:right}#sb_foot li{display:inline}#sb_foot a{margin:.4em}a#sb_feedback{color:#F76120}`,
								}}
							/>
							<style
								type="text/css"
								dangerouslySetInnerHTML={{
									__html: "#sw_canvas{padding-left:195px}",
								}}
							/>
							<style
								type="text/css"
								dangerouslySetInnerHTML={{
									__html: '.sf,.sf_wa1,.sf_wa2,.sf_wa3,.sf_wa4,.sf_wp1,.sf_wp2,.sf_wp3,.sf_wp4,.sf_wp5,.sf_wp6{float:left}.sf_wa1{width:9.23em}.sf_wa2{width:18.46em}.sf_wa3{width:27.69em}.sf_wa4{width:36.92em}.sf_wp1{width:25%}.sf_wp2{width:33%}.sf_wp3{width:50%}.sf_wp4{width:67%}.sf_wp5{width:75%}.sf_wp6{width:99%}.sf{width:100%}.sf_pra1{padding-right:9.23em}.sf_pra2{padding-right:18.46em}.sf_pra3{padding-right:27.69em}.sf_pra4{padding-right:36.92em}.sf_mra1{margin-right:-9.17em}.sf_mra2{margin-right:-18.33em}.sf_mra3{margin-right:-27.69em}.sf_mra4{margin-right:-36.92em}.sf_mla1{margin-left:11.53em}.sf_mla2{margin-left:18.46em}.sf_mla3{margin-left:27.69em}.sf_mla4{margin-left:36.92em}.sf_mlp1{margin-left:25%}.sf_mlp2{margin-left:33%}.sf_mlp3{margin-left:50%}.sf_mlp4{margin-left:67%}.sf_mlp5{margin-left:75%}.ttl{display:none}.sf_wa2.sc_m3.rule{border-right:1px solid #ddd}.sc_m1,.sc_m2,.sc_m3,.sc_m4,.sc_m5,.sc_m10,.sc_m11,.sc_m12{margin:0;clear:both}.sc_m1{margin-bottom:.77em;margin-right:.77em}.sc_m2{margin-bottom:.77em}.sc_m3{margin-right:.77em}.sc_m4{margin-top:.1em;margin-right:.77em}.sc_m5{margin-top:.5em}.sc_m6{margin-top:.5em}.sc_m7{margin-top:.3em}.sc_m8{margin-bottom:.5em}.sc_m9{margin-left:1.5em}.sc_m10{margin-top:-1em}.sc_m11{margin-top:.1em}.sc_m12{_height: 2.4em;max-height:2.5em;*max-height: 2.4em;margin-top:.1em}.sc_st div.sc_m12{overflow:hidden;text-overflow:ellipsis}.sc_st div.sc_m4{overflow:hidden;height:1.35em}.sc_bl{display:block}.sc_m1:after,.sc_m2:after,.sc_m3:after,.sc_m4:after,.sc_ib2:after{content:".";display:block;clear:both;height:0;visibility:hidden}.sc_ap1 p{display:inline;margin:0 .5em 0 0;font-size:100%}.sc_f1{font-size:120%;font-weight:bold}.sc_f2{font-size:85%;line-height:1.33em}.sc_bl1 .sc_f2,.sc_bl2 .sc_f2{font-size:100%}.sc_f3{font-size:85%;color:#525051}.sc_f4{color:#525051}.nowrap{white-space:nowrap;display:inline-block}.sn_cl,.sn_mig,.sn_vd,.sn_att,.sn_att2,.sn_pn,.sn_bi{width:100%;float:left}.sn_mm{float:left;margin:0 .77em 0 0}.sn_ig{padding:10px 0 0 0}.sn_rct{display:table;line-height:1.33em;zoom:1}.sn_rc,.sn_lc{width:18.46em;float:left}.sn_lc,.sn_att,.sn_gr,.sn_pn,.sn_pn2,.sn_bi{clear:both;margin:0}.sn_rf{margin-bottom:.5em}.sn_gr{margin-top:.5em}.sn_pn,.sn_pn2,.sn_bi,.sn_att,.sn_att2{margin-top:.77em}.sn_bi{margin-top:.3em}.sn_cl_wl{width:340px;float:left;margin-right:30px}.sn_cl_wr{border-left:1px solid #ccc;float:left;padding-left:10px;margin-left:-10px;width:138px}h4.sn_rtt a{text-decoration:underline;font-size:125%;font-weight:200}.sn_att a,.sn_att2 a,.sn_bi a,.sn_att a:visited,.sn_att2 a:visited,.sn_bi a:visited{text-decoration:underline;color:#525051}.ans2 .sc_arw{font-size:80%}.ans2 .sc_hl1 li,.ans3 .sc_hl1 li{display:inline}.ans2 ul.sc_gpl1{margin-bottom:4px}.ans2 ul.sc_gpl1 ul.sc_hl1{display:inline}.ans2 ul.sc_gpl1 h3{_clear:both;_display:inline;a:0}.ans2:after,.sn_gr:after{content:".";display:block;clear:both;height:0;visibility:hidden}.sb_results .ans li.sc_ol1li{list-style-type:decimal;margin:0}.sc_h1{margin:0 0 .4em 0;clear:left}.sc_h1 h3{display:inline;margin:0 .5em 0 0}.ans h5{font-weight:400}.ans .sc_ap1 h4,.ans h5{display:inline;margin:0 .5em 0 0;font-size:100%}.ans2 h2 div span span,.ans2 .sc_h1 div{white-space:nowrap}#results .ans h2{float:none;width:auto;margin:0 0 .62em}.sc_h1 div{display:inline;margin-right:.5em}.ans #YNF{line-height:1.8em}.ans3 .sc_rc1 img{vertical-align:-1px}.ans2 .sc_fn2 table{margin:.5em 0}.ans2 .sc_fn2 .sc_tbl2 th,.ans2 .sc_fn2 .sc_tbl2 td{padding:0 20px 0 0}.ans3{max-width:590px;_zoom:1}.ans2 .sc_tbl2 th,.ans2 .sc_tbl2 td{padding:2px 12px 2px 0;vertical-align:top}.ans2 .sc_tbl3 th,.ans2 .sc_tbl3 td{padding:2px 6px;vertical-align:top}.ans2 .sc_tblq th,.ans2 .sc_tblq td{padding:.15em 1.54em .15em 0}.ans p{margin:0;padding:0}.ans ul{list-style-type:none;margin:0;padding:0}.ans cite{font-size:85%}.ans .time{color:#525051}.ans .sc_st cite,.ans .sn_att cite,.ans .sc_bl1 cite,.ans .sc_bl2 cite,.ans .sn_att2 cite,.ans .sn_att .sc_f2,.ans .sn_att2 .sc_f2{font-size:100%}.sb_results li.sb_ans{padding:0}.ans2 h2{color:#525051}.ans h3{font-weight:bold;color:#000}.ans h3 a{font-weight:normal}.ans h4.sc_ih1{float:left;margin:0 .5em 0 0;font-weight:400}.ans2 h2 div span span a{text-decoration:none}.ans2 h2 div span span a:hover{text-decoration:underline}.ans2 h2 span{color:Black}h2 div span a:visited{color:#639}.ans .sc_tbl1 th{font-weight:400;text-align:left;padding-right:1em;vertical-align:top}.ansA .ans{background-image:none}.ansA .ans h3{color:#549c00;font-size:150%;font-weight:200}.sn_ir,.sn_vr{float:right;margin-left:10px;width:100px;height:100px}.sn_ir img{padding:1px;border:1px solid #ccc}.ansC{clear:left}.ans{margin-bottom:1.2em;_margin-bottom:1.1em;*display:inline-block;a:0}.sb_results .sa_cc .ansC .ans{margin-bottom:0}.ans ul.sc_bl2 li:first-child{margin-bottom:.3em}.ansC_bop .ans,.sb_results .ansC .ans{_left:0}.ansC_in .ans{margin-left:2.34em}.ansC_bop{margin-bottom:0;max-width:590px;min-width:480px;padding:-.77em 0 .33em 0}.ansC .ansC_h1 h3{color:#549c00;font-weight:normal;float:left}.ansC_sep{margin-top:1.92em;*margin-top: .38em;padding-top:-1.08em}.ansC_sep_bottom{padding-bottom:-1em}.ansC_sep .ans2{border-top:1px #ddd solid;padding-top:.62em}.ansC_sep_bottom .ans2{border-bottom:1px #ddd solid;padding-bottom:.62em;_margin-left:-1.6em;_width:590px}.ansC_bop .ans{*position:static;a:0}.ansC_sep_bottom .ans{margin-bottom:1em}.ansC_h1 .ansC_more{text-align:right;padding:0 .77em 0 0;font-weight:700;font-size:85%}.ansC .sc_h1 h4{font-weight:normal;margin-top:.7em}.ansC_bop .sc_m3,.ansC_bop .sc_m5{margin-bottom:.33em;*margin-bottom:.77em;a:0}.ansC_hide{display:none}.ansC h3{display:inline}.ansC ul,#results .ansC ul{margin:0}.ansC_all .ans{border:1px solid black}.ansC h2 a{color:#03c;text-decoration:underline}.ansC h2 a:visited{color:#639}.ansC h2{color:#525051}.sc_hl1 li,.sc_hl ul{display:inline}.sc_bigLine{font-size:x-large;margin-bottom:5px;display:block;line-height:normal}ul.sc_gl1{display:inline-block;line-height:1.33em}ul.sc_gl1 ul.sc_hl1{display:inline}ul.sc_gl1 h3,ul.sc_bl1 h3,ul.sc_ol1 h3{_clear:both;_display:inline;a:0}.sc_gl_more{display:block;color:#525051;text-decoration:underline}ul.sc_bl1{display:inline-block}ul.sc_bl1 li{background:url(/web/20100502032809im_/http://www.bing.com/s/bullet_3px999.gif) 0 .5em no-repeat;padding-left:.5em}ul.sc_bl1 li li{background:none;padding-left:0;margin-left:0}ul.sc_bl1 ul.sc_hl1{display:inline-block}ol.sc_ol1{margin:.2em 0;padding-left:20px;*padding-left: 27px}ol.sc_ol1 .sc_ol1li{*display:inline-block;vertical-align:top}ol.sc_ol1 ul.sc_hl1{display:inline;vertical-align:baseline}.sc_nl{padding-left:0;margin-left:0;list-style:none}.sc_nl div{margin:0 0 .4em 26px;background-color:#fff}.sc_nl_1{background:url(/web/20100502032809im_/http://www.bing.com/s/live/numbered_bullets.png) no-repeat scroll 0 0}.sc_nl_2{background:url(/web/20100502032809im_/http://www.bing.com/s/live/numbered_bullets.png) no-repeat scroll -26px 0}.sc_nl_3{background:url(/web/20100502032809im_/http://www.bing.com/s/live/numbered_bullets.png) no-repeat scroll -52px 0}ul.sc_bl1 h3,ul.sc_ol1 h3{_clear:both;_display:inline;a:0}.sc_ll1 .sc_f1{margin-top:10px;font-size:100%}.sc_ll1 .sc_fa1{font-size:100%;font-weight:bold}.sc_ll1 .sc_gl_more{color:#525051;text-decoration:underline}.sc_ll1{table-layout:fixed;border-collapse:collapse;width:100%}.sc_ll1 td{vertical-align:top;padding-right:10px;overflow:hidden}.sc_ll1 ol{margin:0;padding:0;margin-left:2.1em;*margin-left:2.2em}.sc_ll1 ol,.sc_ll1 ul{white-space:nowrap}.sc_ul1 li{padding:0 0 .3em .6em;background:url(/web/20100502032809im_/http://www.bing.com/s/combined_assets.png) no-repeat -47px -380px;display:inline-block}.sc_rvi{margin:0 0 .3em 0}.sc_rvi .sc_ap1 p{display:block}.sc_rc1,.sc_rc2{white-space:nowrap}.sc_rc2{margin-left:-2px}.sc_rc1 img{width:12px;height:12px;vertical-align:bottom}.sc_cbg{display:inline-block}.sc_cbg img{margin-right:4px;vertical-align:top}.sc_rbob{color:#568e1a}.sc_rbpb{color:#77add0}.sc_rbgc{margin-left:.5em;*margin:0;a:0}.sc_rb{display:table-cell;*display:inline-block;margin:.3em .5em 0 0;background-color:#ccc;overflow:hidden;vertical-align:top;height:10px}.sc_rbob .sc_rb{width:110px}.sc_rbpb .sc_rb{width:80px}.sc_rbob .sc_rbgb{background-color:#568e1a;display:block;height:10px}.sc_rbpb .sc_rbgb{background-color:#77add0;*display:block;height:10px}#results{zoom:1}#results_area .sb_pag{padding:1.25em 0 1.54em}.sb_results li,#results h2,.sc_seemore{float:left;width:100%}.sa_cc,#results h2 div,.sc_seemore a{max-width:590px}.sb_results li li{float:none;width:auto}#results h2{margin:0 0 .19em;color:#525051}.sb_meta a,.sb_meta a:visited,.sb_tsuf a,.sb_tsuf a:visited{color:#898994;text-decoration:underline}.sb_tsuf{white-space:nowrap;color:#898994}.sb_tlst H3,.sb_tlst div{display:inline;margin-right:1.3em}.sb_tlst,.sb_tlst H3 a{display:inline-block}#results_removed{margin:1.15em 0 1.54em;width:100%}.sa_cpt{position:absolute}#content .sw_box .sw_t{display:none}#sb_form2{margin-left:-10px}.sc_bd1,.sc_bd2,.sc_bd3,.sc_bd4,.sc_bd5,.sc_bd6,.sc_bd7{float:left;border:1px #ccc solid;padding:0;width:108px;height:108px;text-align:center}.sc_bd2{border:1px #999 solid;width:58px;height:58px}.sc_bd3,.sc_bd5,.sc_bd6,.sc_bd7{border:none;width:auto;height:auto;margin:.5em .5em 0 0}.sc_bd4{width:auto;height:auto;padding:1px;margin-right:5px}.sc_ig2 .sc_bd4{height:85px}.sc_bd5{margin-top:.6em}.sc_bd5,.sc_bd6{margin-left:.3em;white-space:nowrap}.sc_bd6{text-align:left;width:7em;margin-top:.55em;line-height:1.36em}.sc_bd7{margin-top:0}.sc_bd8,.sc_bd9,.sc_bd10,.sc_bd12,.sc_bd13,.sc_bd14{float:left;border:1px #ccc solid;padding:1px;text-align:center}.sc_bd8{width:100px;height:100px}.sc_bd9{width:76px;height:76px}.sc_bd10{width:160px;height:100px}.sc_bd12{width:156px;height:156px}.sc_bd13{width:216px;height:216px}.sc_bd14{width:156px;height:216px}.sc_bd11{float:left;border:none;padding:1px;width:160px;height:100px;text-align:center}.sc_bd5 .sc_st,.sc_bd6 .sc_st,.sc_bd7 .sc_st{float:none}.zh-CN .sc_bd5{*margin-top:.36em;a:0}.zh-CN .sc_bd7{*line-height:1.2em;a:0}.sc_ig1 .sc_bd1{margin:0 .77em .5em 0}.sc_ig1,.sc_ig2,.sc_ig3,.sc_ig5{float:left;width:100%;margin-top:.3em;height:110px;overflow:hidden}.sc_ig2{margin:0;height:89px}.sc_ig3{margin:0;height:74px}.sc_ig4{padding:10px 0 0 0}.sc_ig5{*display:inline-block;margin:0;height:74px}.sc_ig6{padding:5px 0 0 0;*display:inline-block}.sc_ig7{float:left;width:100%;height:121px;margin:0;overflow:hidden}.sc_ig8{*display:inline-block;margin:0;height:60px;overflow:hidden}.sc_ig9{padding:1px 0 0 0}.sc_ig10{height:60px;padding:0;margin-right:1px;border:none}.sc_ib1,.sc_ib4{float:left;margin:0 .77em 0 0}.sc_ib2{display:table;*display:inline-block;line-height:1.33em}.sc_ib3{float:right;margin:0 0 0 .77em}.sc_ib4{margin-right:.3em}.sc_st{clear:both;float:left;word-wrap:break-word}.sc_st div{overflow:hidden;*overflow:visible;a:0}.sc_g1{margin:0;width:240px;float:left}.sc_g1 .sf_wa1{width:120px}.sc_more{position:relative;height:13px}.sc_more LI{padding:0;zoom:normal}a.sc_mlnk{text-decoration:none}a.sc_mlnk EM{font-style:normal}a.sc_mlnk:hover EM{text-decoration:underline}.sc_more UL{border:1px solid;border-color:#ccc #999;min-width:9em;background:#fff;left:0;position:absolute;top:1.5em;width:auto}.sn_off .sc_more UL{display:none}.sn_on .sc_more UL,.sc_more UL LI,.sc_more LI UL LI A{display:block}.sn_on,.sn_off{margin-bottom:8px}.sc_more LI UL LI A{padding:1px 10px}.sc_more LI UL LI.sc_action A{padding-bottom:1em}.sc_more UL{z-index:10000000}.sc_more span{margin-left:0}.sn_map,.sn_mapnb{float:left;margin-right:.77em;padding:1px;border:1px solid #ddd}.sn_mapnb{border:none;padding:0}.sn_gr .sc_rf label{margin-bottom:0}.ansC h2 span a{text-decoration:none}.ansC h2 span a:hover{text-decoration:underline}.sc_more .sc_arw{font-size:90%}',
								}}
							/>
							<style
								type="text/css"
								dangerouslySetInnerHTML={{
									__html: ".qscontainer{padding-bottom:10px;display:inline-block;}.qscontainer h2{color:#525051;margin:0 0 0.19em;}.qscolumn{max-width:180px;padding-right:15px;float:left}.qscolumn li{display:block !important;list-style:none outside;padding:0 0 .17em}",
								}}
							/>
							<div id="sw_canvas">
								<div id="sw_aside">
									<div id="sw_nav">
										<ul>
											<li className="sw_navA">
												<em className="sw_nav1">ALL RESULTS</em>
												<span>
													<span />
												</span>
											</li>
											{/* <li>
												<a href="#">
													<strong>Shopping</strong>
												</a>
											</li>
											<li>
												<a href="#">
													<strong>
														Local listings for
													</strong>{" "}
													Cheap Office Furniture
												</a>
											</li> */}
										</ul>
									</div>
									<div id="sc_expPane">
										{res && res.relatedSearches.length > 0 && (
											<div className="sw_menu" id="sw_rel">
												<h2>Related searches</h2>
												<ul>
													{res.relatedSearches.map((r, i) => (
														<li key={i}>
															<a href={`/search?q=${r}`}>
																{boldQuery(
																	query || "",
																	r
																		.split(" ")
																		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
																		.join(" ")
																)}
															</a>
														</li>
													))}
												</ul>
											</div>
										)}
										{res && res.history.length > 0 && (
											<div className="sw_menu" id="sc_sst">
												<h2>SEARCH HISTORY</h2>
												<ul>
													{res.history
														.slice()
														.reverse()
														.map((r, i) => (
															<li key={i}>
																<a href={`/search?q=${r}`}>{r}</a>
															</li>
														))}
												</ul>
											</div>
										)}
									</div>
								</div>
								<div id="sw_main">
									<div id="content">
										<div id="results_area">
											<div id="results_container">
												<div className="sb_ph">
													<h1>All Results</h1>
													<span className="sb_count" id="count">
														1-10 of unknown results
													</span>
													<span className="sc_bullet">·</span>
													<ul className="sc_hl1">
														<li>
															<a href="#">Advanced</a>
														</li>
													</ul>
												</div>
												{/* <div className="sb_adsWv2">
													<ul>
														<li>
															<div className="sb_add sb_adW">
																<h2>
																	Sponsored
																	sites
																</h2>
																<h3>
																	<a href="#">
																		Discount{" "}
																		<strong>
																			Office
																		</strong>{" "}
																		<strong>
																			Furniture
																		</strong>
																	</a>
																</h3>
																<span className="sb_adsD">
																	·
																</span>
																<cite>
																	OfficeFurniture2go.com
																</cite>
																<p>
																	No Sales Tax
																	- Free
																	Shipping -
																	Trusted: 20+
																	Years
																	Experience
																</p>
															</div>
														</li>
													</ul>
												</div> */}
												{/* <div className="ansC">
													<div className="ans">
														<div className="ans2">
															<h2>
																<div>
																	<a href="#">
																		Shop for{" "}
																		<strong>
																			cheap
																			office
																			furniture
																		</strong>
																	</a>
																</div>
															</h2>
															<div className="ans3">
																<div>
																	<div>
																		<ul className="sc_gl1">
																			<li>
																				<ul className="sc_hl1">
																					<li>
																						<strong>
																							Top
																							brands
																						</strong>{" "}
																						·{" "}
																					</li>
																					<li>
																						<a href="#">
																							Bush
																							Industries
																						</a>{" "}
																						·{" "}
																					</li>
																					<li>
																						<a href="#">
																							Hon
																							Company
																						</a>{" "}
																						·{" "}
																					</li>
																					<li>
																						<a href="#">
																							Mayline
																						</a>{" "}
																						·{" "}
																					</li>
																					<li>
																						<a href="#">
																							DMi
																							Furniture
																						</a>{" "}
																						·{" "}
																					</li>
																					<li>
																						<a href="#">
																							Kathy
																							Ireland
																						</a>{" "}
																						·{" "}
																					</li>
																					<li>
																						<a href="#">
																							More...
																						</a>
																					</li>
																				</ul>
																			</li>
																			<li>
																				<ul className="sc_hl1">
																					<li>
																						<strong>
																							Categories
																						</strong>{" "}
																						·{" "}
																					</li>
																					<li>
																						<a href="#">
																							Desks
																						</a>{" "}
																						·{" "}
																					</li>
																					<li>
																						<a href="#">
																							Tables
																						</a>{" "}
																						·{" "}
																					</li>
																					<li>
																						<a href="#">
																							Cabinets
																						</a>
																					</li>
																				</ul>
																			</li>
																			<li>
																				<ul className="sc_hl1">
																					<li>
																						<strong>
																							Price
																						</strong>{" "}
																						·{" "}
																					</li>
																					<li>
																						<a href="#">
																							below
																							$200
																						</a>{" "}
																						·{" "}
																					</li>
																					<li>
																						<a href="#">
																							$200-$650
																						</a>{" "}
																						·{" "}
																					</li>
																					<li>
																						<a href="#">
																							above
																							$650
																						</a>{" "}
																						·{" "}
																					</li>
																					<li>
																						<span className="sc_cbg">
																							<img
																								src="/web/20100502032809im_/http://www.bing.com/s/cbcoin.gif"
																								title="Bing cashback"
																							/>
																							<a href="#">
																								Bing
																								cashback
																							</a>
																						</span>
																					</li>
																				</ul>
																			</li>
																			<li>
																				<ul className="sc_hl1">
																					<li>
																						<strong>
																							Guides
																						</strong>{" "}
																						·{" "}
																					</li>
																					<li>
																						<a href="#">
																							Computerarmoires.com
																						</a>{" "}
																						·{" "}
																					</li>
																					<li>
																						<a href="#">
																							1officefurnituremall.com
																						</a>{" "}
																						·{" "}
																					</li>
																					<li>
																						<a href="#">
																							Associatedcontent.com
																						</a>
																					</li>
																				</ul>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div> */}
												<div id="results">
													<ul id="wg0" className="sb_results">
														{res?.results.map((r, i) => (
															<SearchResult key={i} result={r} query={query || ""} />
														))}
													</ul>
												</div>
												<div className="qscontainer">
													<div>
														<h2>Related Searches</h2>
													</div>
													<div
														style={{
															width: "100%",
														}}
													>
														<div className="qscolumn">
															{/* <ul className="sc_hl1">
																<li>
																	<a href="#">
																		<strong>
																			IKEA
																		</strong>
																	</a>{" "}
																</li>
																<li>
																	<a href="#">
																		<strong>
																			Buy
																		</strong>{" "}
																		<strong>
																			Used
																		</strong>{" "}
																		Office
																		Furniture
																	</a>{" "}
																</li>
																<li>
																	<a href="#">
																		<strong>
																			Free
																		</strong>{" "}
																		Office
																		Furniture
																	</a>
																</li>
															</ul> */}
														</div>
														<div className="qscolumn">
															{/* <ul className="sc_hl1">
																<li>
																	<a href="#">
																		Cheap
																		Office{" "}
																		<strong>
																			Chairs
																		</strong>
																	</a>{" "}
																</li>
																<li>
																	<a href="#">
																		Cheap
																		Office{" "}
																		<strong>
																			Desks
																		</strong>
																	</a>{" "}
																</li>
																<li>
																	<a href="#">
																		Office{" "}
																		<strong>
																			Depot
																		</strong>
																	</a>
																</li>
															</ul> */}
														</div>
														<div className="qscolumn">
															{/* <ul className="sc_hl1">
																<li>
																	<a href="#">
																		Cheap
																		Office
																		Furniture{" "}
																		<strong>
																			Online
																		</strong>
																	</a>{" "}
																</li>
																<li>
																	<a href="#">
																		Cheap{" "}
																		<strong>
																			Home
																		</strong>{" "}
																		Office
																		Furniture
																	</a>
																</li>
															</ul> */}
														</div>
													</div>
												</div>
												{/* <div className="sb_adsWv2 sb_adsW2v2">
													<ul>
														<li>
															<div className="sb_add sb_adW">
																<h2>
																	Sponsored
																	sites
																</h2>
																<h3>
																	<a href="#">
																		Discount{" "}
																		<strong>
																			Office
																		</strong>{" "}
																		<strong>
																			Furniture
																		</strong>
																	</a>
																</h3>
																<span className="sb_adsD">
																	·
																</span>
																<cite>
																	OfficeFurniture2go.com
																</cite>
																<p>
																	No Sales Tax
																	- Free
																	Shipping -
																	Trusted: 20+
																	Years
																	Experience
																</p>
															</div>
														</li>
													</ul>
												</div>
												<div className="sb_pag">
													<h4>Pagination</h4>
													<ul>
														<li>
															<a className="sb_pagS">
																1
															</a>
														</li>
														<li>
															<a href="#">
																2
															</a>
														</li>
														<li>
															<a href="#">
																3
															</a>
														</li>
														<li>
															<a href="#">
																4
															</a>
														</li>
														<li>
															<a href="#">
																5
															</a>
														</li>
														<li>
															<a
																href="#"
																className="sb_pagN"
															>
																Next
															</a>
														</li>
													</ul>
												</div> */}
												<form action="/search" id="sb_form2" className="sw_box">
													<div className="sw_bd">
														{/* <div className="sw_b">
															<input
																type="text"
																defaultValue={
																	query || ""
																}
																title="Enter your search term"
																name="q"
																id="sb_form2_q"
																className="sw_qbox"
															/>
															<input
																type="submit"
																title="Search"
																tabIndex={0}
																name="go"
																id="sb_form2_go"
																className="sw_qbtn"
															/>
														</div> */}
													</div>
													<input type="hidden" defaultValue="QBRE3" name="form" />
												</form>
											</div>
										</div>
										{/* <div id="sidebar">
											<div className="sb_adsNv2">
												<h2>Sponsored sites</h2>
												<ul>
													<li>
														<div className="sb_add sb_adN">
															<h3>
																<a href="#">
																	Discount{" "}
																	<strong>
																		Office
																	</strong>{" "}
																	<strong>
																		Furniture
																	</strong>
																</a>
															</h3>
															<p>
																Brand Name{" "}
																<strong>
																	Office
																</strong>{" "}
																<strong>
																	Furniture
																</strong>{" "}
																at Discount
																Prices. Call Us
																Today!
															</p>
															<cite>
																www.CSNOfficeFurniture.com
															</cite>
														</div>
													</li>
												</ul>
												<div>
													<a
														href="#"
														className="sb_adMktA"
													>
														See your message here
													</a>
												</div>
											</div>
										</div> */}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="sb_foot">
						<ul id="sw_footL">
							<li>
								<a href="#">© 2010 Microsoft</a> |{" "}
							</li>
							<li>
								<a href="#">Privacy</a> |{" "}
							</li>
							<li>
								<a href="#">Legal</a> |{" "}
							</li>
							<li>
								<a href="#">Advertise</a> |{" "}
							</li>
							<li>
								<a href="#" target="_blank">
									About our ads
								</a>{" "}
								|{" "}
							</li>
							<li>
								<a href="#" id="sb_help" target="_blank">
									Help
								</a>{" "}
								|{" "}
							</li>
							<li>
								<a href="#" id="sb_feedback">
									Tell us what you think
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div id="sb_fb" />
		</div>
	);
}

export default Search;
