import { useState, useEffect } from "react";
import { Design } from "../../App";
import logo from "../../assets/logo.png";
import { Result, boldQuery } from "../../other";

function Home() {
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
	return (
		<div>
			<div id="mngb">
				<div id="gb">
					<div id="gbw">
						<div id="gbz">
							<span className="gbtcb"></span>
							<ol id="gbzc" className="gbtc">
								<li className="gbt">
									<a className="gbzt gbz0l gbp1" id="gb_1" href="/webhp?tab=ww">
										<span className="gbtb2"></span>
										<span className="gbts">Search</span>
									</a>
								</li>
								<li className="gbt">
									<a className="gbzt" id="gb_2" href="/imghp?hl=en&amp;tab=wi">
										<span className="gbtb2"></span>
										<span className="gbts">Images</span>
									</a>
								</li>
								<li className="gbt">
									<a className="gbzt" id="gb_8" href="https://web.archive.org/web/20140923002314/https://maps.google.com/maps?hl=en&amp;tab=wl">
										<span className="gbtb2"></span>
										<span className="gbts">Maps</span>
									</a>
								</li>
								<li className="gbt">
									<a className="gbzt" id="gb_78" href="https://web.archive.org/web/20140923002314/https://play.google.com/?hl=en&amp;tab=w8">
										<span className="gbtb2"></span>
										<span className="gbts">Play</span>
									</a>
								</li>
								<li className="gbt">
									<a className="gbzt" id="gb_36" href="https://web.archive.org/web/20140923002314/https://www.youtube.com/?tab=w1">
										<span className="gbtb2"></span>
										<span className="gbts">YouTube</span>
									</a>
								</li>
								<li className="gbt">
									<a className="gbzt" id="gb_5" href="https://web.archive.org/web/20140923002314/https://news.google.com/nwshp?hl=en&amp;tab=wn">
										<span className="gbtb2"></span>
										<span className="gbts">News</span>
									</a>
								</li>
								<li className="gbt">
									<a className="gbzt" id="gb_23" href="https://web.archive.org/web/20140923002314/https://mail.google.com/mail/?tab=wm">
										<span className="gbtb2"></span>
										<span className="gbts">Gmail</span>
									</a>
								</li>
								<li className="gbt">
									<a className="gbzt" id="gb_49" href="https://web.archive.org/web/20140923002314/https://drive.google.com/?tab=wo">
										<span className="gbtb2"></span>
										<span className="gbts">Drive</span>
									</a>
								</li>
								<li className="gbt">
									<a className="gbgt" id="gbztm" href="https://web.archive.org/web/20140923002314/http://www.google.com/intl/en/options/" aria-haspopup="true" aria-owns="gbd">
										<span className="gbtb2"></span>
										<span id="gbztms" className="gbts gbtsa">
											<span id="gbztms1">More</span>
											<span className="gbma"></span>
										</span>
									</a>
									<div className="gbm" id="gbd">
										<div id="gbmmb" className="gbmc gbsb gbsbis">
											<ol id="gbmm" className="gbmcc gbsbic">
												<li className="gbmtc">
													<a className="gbmt" id="gb_24" href="/calendar?tab=wc">
														Calendar
													</a>
												</li>
												<li className="gbmtc">
													<a className="gbmt" id="gb_51" href="https://web.archive.org/web/20140923002314/https://translate.google.com/?hl=en&amp;tab=wT">
														Translate
													</a>
												</li>
												<li className="gbmtc">
													<a className="gbmt" id="gb_17" href="https://web.archive.org/web/20140923002314/http://www.google.com/mobile/?hl=en&amp;tab=wD">
														Mobile
													</a>
												</li>
												<li className="gbmtc">
													<a className="gbmt" id="gb_10" href="https://web.archive.org/web/20140923002314/http://books.google.com/bkshp?hl=en&amp;tab=wp">
														Books
													</a>
												</li>
												<li className="gbmtc">
													<a className="gbmt" id="gb_212" href="https://web.archive.org/web/20140923002314/https://wallet.google.com/manage/?tab=wa">
														Wallet
													</a>
												</li>
												<li className="gbmtc">
													<a className="gbmt" id="gb_6" href="https://web.archive.org/web/20140923002314/http://www.google.com/shopping?hl=en&amp;tab=wf">
														Shopping
													</a>
												</li>
												<li className="gbmtc">
													<a className="gbmt" id="gb_30" href="https://web.archive.org/web/20140923002314/https://www.blogger.com/?tab=wj">
														Blogger
													</a>
												</li>
												<li className="gbmtc">
													<a className="gbmt" id="gb_27" href="/finance?tab=we">
														Finance
													</a>
												</li>
												<li className="gbmtc">
													<a className="gbmt" id="gb_31" href="https://web.archive.org/web/20140923002314/https://plus.google.com/photos?tab=wq">
														Photos
													</a>
												</li>
												<li className="gbmtc">
													<a className="gbmt" id="gb_12" href="https://web.archive.org/web/20140923002314/http://video.google.com/?hl=en&amp;tab=wv">
														Videos
													</a>
												</li>
												<li className="gbmtc">
													<div className="gbmt gbmh"></div>
												</li>
												<li className="gbmtc">
													<a href="https://web.archive.org/web/20140923002314/http://www.google.com/intl/en/options/" className="gbmt">
														Even more »
													</a>
												</li>
											</ol>
											<div
												className="gbsbt"
												style={{
													opacity: 0,
												}}
											></div>
											<div
												className="gbsbb"
												style={{
													opacity: 0,
												}}
											></div>
										</div>
									</div>
								</li>
							</ol>
						</div>
						<div id="gbg">
							<h2 className="gbxx">Account Options</h2>
							<span className="gbtcb"></span>
							<ol className="gbtc">
								<li className="gbt">
									<a target="_top" href="https://web.archive.org/web/20140923002314/https://accounts.google.com/ServiceLogin?hl=en&amp;continue=https://www.google.com/" id="gb_70" className="gbgt">
										<span className="gbtb2"></span>
										<span id="gbgs4" className="gbts">
											{/* <span id="gbi4s1">Sign in</span> */}
										</span>
									</a>
								</li>
								<li className="gbt gbtb">
									<span className="gbts"></span>
								</li>
							</ol>
						</div>
					</div>
					<div id="gbx3"></div>
					<div id="gbx4"></div>
				</div>
			</div>
			<center>
				<span
					id="prt"
					style={{
						display: "block",
					}}
				>
					<div
						style={{
							position: "relative",
						}}
					></div>{" "}
				</span>
				<br id="lgpd" />
				<div id="lga">
					<img
						alt="Google"
						src={logo}
						style={{
							padding: "28px 0 14px",
						}}
						id="hplogo"
						width="269"
						height="95"
					/>
					<br />
					<br />
				</div>
				<form action="/search" name="f">
					<table cellSpacing="0" cellPadding="0">
						<tbody>
							<tr>
								<td width="25%">&nbsp;</td>
								<td align="center">
									<input defaultValue="en" name="hl" type="hidden" />
									<input name="source" type="hidden" defaultValue="hp" />
									<div
										className="ds"
										// style="height: 32px; margin: 4px 0"
										style={{
											height: 32,
											margin: "4px 0",
										}}
									>
										<input
											// 	style="
											// 	color: rgb(0, 0, 0);
											// 	margin: 0px;
											// 	padding: 5px 8px 0px 6px;
											// 	vertical-align: top;
											// 	outline: none;
											// "
											style={{
												color: "rgb(0, 0, 0)",
												margin: 0,
												padding: "5px 8px 0px 6px",
												verticalAlign: "top",
												outline: "none",
											}}
											autoComplete="off"
											className="lst"
											title="Google Search"
											maxLength={2048}
											name="q"
											size={57}
											dir="ltr"
											spellCheck={false}
											onChange={(e) => setSearch(e.target.value)}
										/>
										<div className="autocomplete">
											{autocomplete?.suggestions && autocomplete.suggestions.length > 0 && (
												<div
													className="autocomplete-suggestions"
													style={{
														marginLeft: 1,
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
															{boldQuery(autocomplete.query, suggestion)}
														</div>
													))}
												</div>
											)}
										</div>
									</div>
									<br style={{ lineHeight: 0 }} />
									<span className="ds">
										<span className="lsbb">
											<input
												className="lsb"
												value="Google Search"
												name="btnG"
												type="submit"
												onClick={(e) => {
													e.preventDefault();
													window.location.href = "/search?q=" + (document.querySelector(".lst") as HTMLInputElement).value.replaceAll(" ", "+");
												}}
											/>
										</span>
									</span>
									<span className="ds">
										<span className="lsbb">
											<input
												className="lsb"
												value="I'm Feeling Lucky"
												name="btnI"
												type="submit"
												onClick={async (e) => {
													e.preventDefault();
													const q = (document.querySelector(".lst") as HTMLInputElement).value;
													if (q === "") return;
													const res = await fetch("http://localhost:48351/search?q=" + q.replaceAll(" ", "+"));
													const data = (await res.json()) as Result[];
													if (data.length === 0) return;
													window.location.href = data[0].link;
												}}
											/>
										</span>
									</span>
								</td>
								<td
									className="fl sblc"
									width="25%"
									// nowrap=""
									align="left"
								>
									<a href="/advanced_search?hl=en&amp;authuser=0">Advanced search</a>
									<a
										href="#"
										onClick={() => {
											const design = localStorage.getItem("design") as Design;
											const nextDesign = Object.values(Design)[(Object.values(Design).indexOf(design) + 1) % Object.values(Design).length];
											localStorage.setItem("design", nextDesign);
											window.location.reload();
										}}
									>
										Cycle design
									</a>
								</td>
							</tr>
						</tbody>
					</table>
					<input id="gbv" name="gbv" type="hidden" defaultValue="2" />
					<input type="hidden" name="oq" />
					<input type="hidden" name="gs_l" />
				</form>
				<div id="gac_scont"></div>
				{/* <div style="font-size: 83%; min-height: 3.5em"> */}
				<div
					style={{
						fontSize: "83%",
						minHeight: "3.5em",
					}}
				>
					<br />
				</div>
				<span id="footer">
					{/* <div style="font-size: 10pt"> */}
					<div
						style={{
							fontSize: "10pt",
						}}
					>
						<div
							// style="margin: 19px auto; text-align: center"
							style={{
								margin: "19px auto",
								textAlign: "center",
							}}
							id="fll"
						>
							<a href="/intl/en/ads/">Advertising&nbsp;Programs</a>
							<a href="/services/">Business Solutions</a>
							<a href="https://web.archive.org/web/20140923002314/https://plus.google.com/116899029375914044550" rel="publisher">
								+Google
							</a>
							<a href="/intl/en/about.html">About Google</a>
						</div>
					</div>
					{/* <p style="color: #767676; font-size: 8pt"> */}
					<p
						style={{
							color: "#767676",
							fontSize: "8pt",
							// disable whitespace trim
							whiteSpace: "pre",
						}}
					>
						© 2013 - <a href="/intl/en/policies/">Privacy &amp; Terms</a>
					</p>
				</span>
			</center>
			<table
				// 	style="
				// 	width: 501px;
				// 	display: none;
				// 	top: 307px;
				// 	left: 436px;
				// 	position: absolute;
				// "
				style={{
					width: 501,
					display: "none",
					top: 307,
					left: 436,
					position: "absolute",
				}}
				className="gstl_50 gssb_c"
				cellSpacing="0"
				cellPadding="0"
			>
				<tbody>
					<tr>
						<td className="gssb_f"></td>
						{/* <td className="gssb_e" style="width: 100%"></td> */}
						<td
							className="gssb_e"
							style={{
								width: "100%",
							}}
						></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Home;
