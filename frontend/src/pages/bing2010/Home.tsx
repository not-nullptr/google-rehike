import { useEffect, useState } from "react";
import homeSheet from "./assets/home-sheet.png";
import { Design } from "../../App";
import { boldQuery } from "../../other";

const codeMap = {
	"Europe/Andorra": "AD",
	"Asia/Dubai": "AE",
	"Asia/Kabul": "AF",
	"Europe/Tirane": "AL",
	"Asia/Yerevan": "AM",
	"Antarctica/Casey": "AQ",
	"Antarctica/Davis": "AQ",
	"Antarctica/Mawson": "AQ",
	"Antarctica/Palmer": "AQ",
	"Antarctica/Rothera": "AQ",
	"Antarctica/Troll": "AQ",
	"America/Argentina/Buenos_Aires": "AR",
	"America/Argentina/Cordoba": "AR",
	"America/Argentina/Salta": "AR",
	"America/Argentina/Jujuy": "AR",
	"America/Argentina/Tucuman": "AR",
	"America/Argentina/Catamarca": "AR",
	"America/Argentina/La_Rioja": "AR",
	"America/Argentina/San_Juan": "AR",
	"America/Argentina/Mendoza": "AR",
	"America/Argentina/San_Luis": "AR",
	"America/Argentina/Rio_Gallegos": "AR",
	"America/Argentina/Ushuaia": "AR",
	"Pacific/Pago_Pago": "AS",
	"Europe/Vienna": "AT",
	"Australia/Lord_Howe": "AU",
	"Antarctica/Macquarie": "AU",
	"Australia/Hobart": "AU",
	"Australia/Melbourne": "AU",
	"Australia/Sydney": "AU",
	"Australia/Broken_Hill": "AU",
	"Australia/Brisbane": "AU",
	"Australia/Lindeman": "AU",
	"Australia/Adelaide": "AU",
	"Australia/Darwin": "AU",
	"Australia/Perth": "AU",
	"Australia/Eucla": "AU",
	"Asia/Baku": "AZ",
	"America/Barbados": "BB",
	"Asia/Dhaka": "BD",
	"Europe/Brussels": "BE",
	"Europe/Sofia": "BG",
	"Atlantic/Bermuda": "BM",
	"America/La_Paz": "BO",
	"America/Noronha": "BR",
	"America/Belem": "BR",
	"America/Fortaleza": "BR",
	"America/Recife": "BR",
	"America/Araguaina": "BR",
	"America/Maceio": "BR",
	"America/Bahia": "BR",
	"America/Sao_Paulo": "BR",
	"America/Campo_Grande": "BR",
	"America/Cuiaba": "BR",
	"America/Santarem": "BR",
	"America/Porto_Velho": "BR",
	"America/Boa_Vista": "BR",
	"America/Manaus": "BR",
	"America/Eirunepe": "BR",
	"America/Rio_Branco": "BR",
	"Asia/Thimphu": "BT",
	"Europe/Minsk": "BY",
	"America/Belize": "BZ",
	"America/St_Johns": "CA",
	"America/Halifax": "CA",
	"America/Glace_Bay": "CA",
	"America/Moncton": "CA",
	"America/Goose_Bay": "CA",
	"America/Toronto": "CA",
	"America/Iqaluit": "CA",
	"America/Winnipeg": "CA",
	"America/Resolute": "CA",
	"America/Rankin_Inlet": "CA",
	"America/Regina": "CA",
	"America/Swift_Current": "CA",
	"America/Edmonton": "CA",
	"America/Cambridge_Bay": "CA",
	"America/Inuvik": "CA",
	"America/Dawson_Creek": "CA",
	"America/Fort_Nelson": "CA",
	"America/Whitehorse": "CA",
	"America/Dawson": "CA",
	"America/Vancouver": "CA",
	"Europe/Zurich": "CH",
	"Africa/Abidjan": "CI",
	"Pacific/Rarotonga": "CK",
	"America/Santiago": "CL",
	"America/Punta_Arenas": "CL",
	"Pacific/Easter": "CL",
	"Asia/Shanghai": "CN",
	"Asia/Urumqi": "CN",
	"America/Bogota": "CO",
	"America/Costa_Rica": "CR",
	"America/Havana": "CU",
	"Atlantic/Cape_Verde": "CV",
	"Asia/Nicosia": "CY",
	"Asia/Famagusta": "CY",
	"Europe/Prague": "CZ",
	"Europe/Berlin": "DE",
	"America/Santo_Domingo": "DO",
	"Africa/Algiers": "DZ",
	"America/Guayaquil": "EC",
	"Pacific/Galapagos": "EC",
	"Europe/Tallinn": "EE",
	"Africa/Cairo": "EG",
	"Africa/El_Aaiun": "EH",
	"Europe/Madrid": "ES",
	"Africa/Ceuta": "ES",
	"Atlantic/Canary": "ES",
	"Europe/Helsinki": "FI",
	"Pacific/Fiji": "FJ",
	"Atlantic/Stanley": "FK",
	"Pacific/Kosrae": "FM",
	"Atlantic/Faroe": "FO",
	"Europe/Paris": "FR",
	"Europe/London": "GB",
	"Asia/Tbilisi": "GE",
	"America/Cayenne": "GF",
	"Europe/Gibraltar": "GI",
	"America/Nuuk": "GL",
	"America/Danmarkshavn": "GL",
	"America/Scoresbysund": "GL",
	"America/Thule": "GL",
	"Europe/Athens": "GR",
	"Atlantic/South_Georgia": "GS",
	"America/Guatemala": "GT",
	"Pacific/Guam": "GU",
	"Africa/Bissau": "GW",
	"America/Guyana": "GY",
	"Asia/Hong_Kong": "HK",
	"America/Tegucigalpa": "HN",
	"America/Port-au-Prince": "HT",
	"Europe/Budapest": "HU",
	"Asia/Jakarta": "ID",
	"Asia/Pontianak": "ID",
	"Asia/Makassar": "ID",
	"Asia/Jayapura": "ID",
	"Europe/Dublin": "IE",
	"Asia/Jerusalem": "IL",
	"Asia/Kolkata": "IN",
	"Indian/Chagos": "IO",
	"Asia/Baghdad": "IQ",
	"Asia/Tehran": "IR",
	"Europe/Rome": "IT",
	"America/Jamaica": "JM",
	"Asia/Amman": "JO",
	"Asia/Tokyo": "JP",
	"Africa/Nairobi": "KE",
	"Asia/Bishkek": "KG",
	"Pacific/Tarawa": "KI",
	"Pacific/Kanton": "KI",
	"Pacific/Kiritimati": "KI",
	"Asia/Pyongyang": "KP",
	"Asia/Seoul": "KR",
	"Asia/Almaty": "KZ",
	"Asia/Qyzylorda": "KZ",
	"Asia/Qostanay": "KZ",
	"Asia/Aqtobe": "KZ",
	"Asia/Aqtau": "KZ",
	"Asia/Atyrau": "KZ",
	"Asia/Oral": "KZ",
	"Asia/Beirut": "LB",
	"Asia/Colombo": "LK",
	"Africa/Monrovia": "LR",
	"Europe/Vilnius": "LT",
	"Europe/Riga": "LV",
	"Africa/Tripoli": "LY",
	"Africa/Casablanca": "MA",
	"Europe/Chisinau": "MD",
	"Pacific/Kwajalein": "MH",
	"Asia/Yangon": "MM",
	"Asia/Ulaanbaatar": "MN",
	"Asia/Hovd": "MN",
	"Asia/Choibalsan": "MN",
	"Asia/Macau": "MO",
	"America/Martinique": "MQ",
	"Europe/Malta": "MT",
	"Indian/Mauritius": "MU",
	"Indian/Maldives": "MV",
	"America/Mexico_City": "MX",
	"America/Cancun": "MX",
	"America/Merida": "MX",
	"America/Monterrey": "MX",
	"America/Matamoros": "MX",
	"America/Chihuahua": "MX",
	"America/Ciudad_Juarez": "MX",
	"America/Ojinaga": "MX",
	"America/Mazatlan": "MX",
	"America/Bahia_Banderas": "MX",
	"America/Hermosillo": "MX",
	"America/Tijuana": "MX",
	"Asia/Kuching": "MY",
	"Africa/Maputo": "MZ",
	"Africa/Windhoek": "NA",
	"Pacific/Noumea": "NC",
	"Pacific/Norfolk": "NF",
	"Africa/Lagos": "NG",
	"America/Managua": "NI",
	"Asia/Kathmandu": "NP",
	"Pacific/Nauru": "NR",
	"Pacific/Niue": "NU",
	"Pacific/Auckland": "NZ",
	"Pacific/Chatham": "NZ",
	"America/Panama": "PA",
	"America/Lima": "PE",
	"Pacific/Tahiti": "PF",
	"Pacific/Marquesas": "PF",
	"Pacific/Gambier": "PF",
	"Pacific/Port_Moresby": "PG",
	"Pacific/Bougainville": "PG",
	"Asia/Manila": "PH",
	"Asia/Karachi": "PK",
	"Europe/Warsaw": "PL",
	"America/Miquelon": "PM",
	"Pacific/Pitcairn": "PN",
	"America/Puerto_Rico": "PR",
	"Asia/Gaza": "PS",
	"Asia/Hebron": "PS",
	"Europe/Lisbon": "PT",
	"Atlantic/Madeira": "PT",
	"Atlantic/Azores": "PT",
	"Pacific/Palau": "PW",
	"America/Asuncion": "PY",
	"Asia/Qatar": "QA",
	"Europe/Bucharest": "RO",
	"Europe/Belgrade": "RS",
	"Europe/Kaliningrad": "RU",
	"Europe/Moscow": "RU",
	"Europe/Simferopol": "RU",
	"Europe/Kirov": "RU",
	"Europe/Volgograd": "RU",
	"Europe/Astrakhan": "RU",
	"Europe/Saratov": "RU",
	"Europe/Ulyanovsk": "RU",
	"Europe/Samara": "RU",
	"Asia/Yekaterinburg": "RU",
	"Asia/Omsk": "RU",
	"Asia/Novosibirsk": "RU",
	"Asia/Barnaul": "RU",
	"Asia/Tomsk": "RU",
	"Asia/Novokuznetsk": "RU",
	"Asia/Krasnoyarsk": "RU",
	"Asia/Irkutsk": "RU",
	"Asia/Chita": "RU",
	"Asia/Yakutsk": "RU",
	"Asia/Khandyga": "RU",
	"Asia/Vladivostok": "RU",
	"Asia/Ust-Nera": "RU",
	"Asia/Magadan": "RU",
	"Asia/Sakhalin": "RU",
	"Asia/Srednekolymsk": "RU",
	"Asia/Kamchatka": "RU",
	"Asia/Anadyr": "RU",
	"Asia/Riyadh": "SA",
	"Pacific/Guadalcanal": "SB",
	"Africa/Khartoum": "SD",
	"Asia/Singapore": "SG",
	"America/Paramaribo": "SR",
	"Africa/Juba": "SS",
	"Africa/Sao_Tome": "ST",
	"America/El_Salvador": "SV",
	"Asia/Damascus": "SY",
	"America/Grand_Turk": "TC",
	"Africa/Ndjamena": "TD",
	"Asia/Bangkok": "TH",
	"Asia/Dushanbe": "TJ",
	"Pacific/Fakaofo": "TK",
	"Asia/Dili": "TL",
	"Asia/Ashgabat": "TM",
	"Africa/Tunis": "TN",
	"Pacific/Tongatapu": "TO",
	"Europe/Istanbul": "TR",
	"Asia/Taipei": "TW",
	"Europe/Kyiv": "UA",
	"America/New_York": "US",
	"America/Detroit": "US",
	"America/Kentucky/Louisville": "US",
	"America/Kentucky/Monticello": "US",
	"America/Indiana/Indianapolis": "US",
	"America/Indiana/Vincennes": "US",
	"America/Indiana/Winamac": "US",
	"America/Indiana/Marengo": "US",
	"America/Indiana/Petersburg": "US",
	"America/Indiana/Vevay": "US",
	"America/Chicago": "US",
	"America/Indiana/Tell_City": "US",
	"America/Indiana/Knox": "US",
	"America/Menominee": "US",
	"America/North_Dakota/Center": "US",
	"America/North_Dakota/New_Salem": "US",
	"America/North_Dakota/Beulah": "US",
	"America/Denver": "US",
	"America/Boise": "US",
	"America/Phoenix": "US",
	"America/Los_Angeles": "US",
	"America/Anchorage": "US",
	"America/Juneau": "US",
	"America/Sitka": "US",
	"America/Metlakatla": "US",
	"America/Yakutat": "US",
	"America/Nome": "US",
	"America/Adak": "US",
	"Pacific/Honolulu": "US",
	"America/Montevideo": "UY",
	"Asia/Samarkand": "UZ",
	"Asia/Tashkent": "UZ",
	"America/Caracas": "VE",
	"Asia/Ho_Chi_Minh": "VN",
	"Pacific/Efate": "VU",
	"Pacific/Apia": "WS",
	"Africa/Johannesburg": "ZA",
	"America/Antigua": "AG",
	"America/Anguilla": "AI",
	"Africa/Luanda": "AO",
	"Antarctica/McMurdo": "AQ",
	"Antarctica/DumontDUrville": "AQ",
	"Antarctica/Syowa": "AQ",
	"Antarctica/Vostok": "AQ",
	"America/Aruba": "AW",
	"Europe/Mariehamn": "AX",
	"Europe/Sarajevo": "BA",
	"Africa/Ouagadougou": "BF",
	"Asia/Bahrain": "BH",
	"Africa/Bujumbura": "BI",
	"Africa/Porto-Novo": "BJ",
	"America/St_Barthelemy": "BL",
	"Asia/Brunei": "BN",
	"America/Kralendijk": "BQ",
	"America/Nassau": "BS",
	"Africa/Gaborone": "BW",
	"America/Blanc-Sablon": "CA",
	"America/Atikokan": "CA",
	"America/Creston": "CA",
	"Indian/Cocos": "CC",
	"Africa/Kinshasa": "CD",
	"Africa/Lubumbashi": "CD",
	"Africa/Bangui": "CF",
	"Africa/Brazzaville": "CG",
	"Africa/Douala": "CM",
	"America/Curacao": "CW",
	"Indian/Christmas": "CX",
	"Europe/Busingen": "DE",
	"Africa/Djibouti": "DJ",
	"Europe/Copenhagen": "DK",
	"America/Dominica": "DM",
	"Africa/Asmara": "ER",
	"Africa/Addis_Ababa": "ET",
	"Pacific/Chuuk": "FM",
	"Pacific/Pohnpei": "FM",
	"Africa/Libreville": "GA",
	"America/Grenada": "GD",
	"Europe/Guernsey": "GG",
	"Africa/Accra": "GH",
	"Africa/Banjul": "GM",
	"Africa/Conakry": "GN",
	"America/Guadeloupe": "GP",
	"Africa/Malabo": "GQ",
	"Europe/Zagreb": "HR",
	"Europe/Isle_of_Man": "IM",
	"Atlantic/Reykjavik": "IS",
	"Europe/Jersey": "JE",
	"Asia/Phnom_Penh": "KH",
	"Indian/Comoro": "KM",
	"America/St_Kitts": "KN",
	"Asia/Kuwait": "KW",
	"America/Cayman": "KY",
	"Asia/Vientiane": "LA",
	"America/St_Lucia": "LC",
	"Europe/Vaduz": "LI",
	"Africa/Maseru": "LS",
	"Europe/Luxembourg": "LU",
	"Europe/Monaco": "MC",
	"Europe/Podgorica": "ME",
	"America/Marigot": "MF",
	"Indian/Antananarivo": "MG",
	"Pacific/Majuro": "MH",
	"Europe/Skopje": "MK",
	"Africa/Bamako": "ML",
	"Pacific/Saipan": "MP",
	"Africa/Nouakchott": "MR",
	"America/Montserrat": "MS",
	"Africa/Blantyre": "MW",
	"Asia/Kuala_Lumpur": "MY",
	"Africa/Niamey": "NE",
	"Europe/Amsterdam": "NL",
	"Europe/Oslo": "NO",
	"Asia/Muscat": "OM",
	"Indian/Reunion": "RE",
	"Africa/Kigali": "RW",
	"Indian/Mahe": "SC",
	"Europe/Stockholm": "SE",
	"Atlantic/St_Helena": "SH",
	"Europe/Ljubljana": "SI",
	"Arctic/Longyearbyen": "SJ",
	"Europe/Bratislava": "SK",
	"Africa/Freetown": "SL",
	"Europe/San_Marino": "SM",
	"Africa/Dakar": "SN",
	"Africa/Mogadishu": "SO",
	"America/Lower_Princes": "SX",
	"Africa/Mbabane": "SZ",
	"Indian/Kerguelen": "TF",
	"Africa/Lome": "TG",
	"America/Port_of_Spain": "TT",
	"Pacific/Funafuti": "TV",
	"Africa/Dar_es_Salaam": "TZ",
	"Africa/Kampala": "UG",
	"Pacific/Midway": "UM",
	"Pacific/Wake": "UM",
	"Europe/Vatican": "VA",
	"America/St_Vincent": "VC",
	"America/Tortola": "VG",
	"America/St_Thomas": "VI",
	"Pacific/Wallis": "WF",
	"Asia/Aden": "YE",
	"Indian/Mayotte": "YT",
	"Africa/Lusaka": "ZM",
	"Africa/Harare": "ZW",
} as { [key: string]: string };

export interface Trends {
	default: Default;
}

export interface Default {
	trendingSearchesDays: TrendingSearchesDay[];
	endDateForNextRequest: string;
	rssFeedPageUrl: string;
}

export interface TrendingSearchesDay {
	date: string;
	formattedDate: string;
	trendingSearches: TrendingSearch[];
}

export interface TrendingSearch {
	title: Title;
	formattedTraffic: string;
	relatedQueries: Title[];
	image: Image;
	articles: Article[];
	shareUrl: string;
}

export interface Article {
	title: string;
	timeAgo: string;
	source: string;
	image?: Image;
	url: string;
	snippet: string;
}

export interface Image {
	newsUrl: string;
	source: string;
	imageUrl: string;
}

export interface Title {
	query: string;
	exploreLink: string;
}

function Home() {
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
	const [trends, setTrends] = useState<Trends>();
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
		document.title = "Bing";
		// set icon
		const link = document.createElement("link");
		link.rel = "icon";
		link.href =
			"data:image/x-icon;base64,AAABAAEAEBAAAAEAGABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAAAAAABMLAAATCwAAAAAAAAAAAAAVpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8ysf97zf+24//F6f/F6f/F6f+K0/9QvP8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8krP+Z2P/////////w+f/F6f/F6f/i9P/////////T7v9Bt/8Vpv8Vpv8Vpv8Vpv/T7v/////w+f97zf8Vpv8Vpv8Vpv8Vpv9QvP/T7v/////w+f9Bt/8Vpv8Vpv97zf////////9QvP8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8krP/i9P/////i9P8Vpv8Vpv+24//////i9P8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv+K0/////////8Vpv8Vpv/F6f////////8krP8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv+n3v/////w+f8Vpv8Vpv/F6f////////+n3v8krP8Vpv8Vpv8Vpv8Vpv8Vpv9tx/////////+Z2P8Vpv8Vpv/F6f/////////////i9P+K0/9QvP9QvP9tx//F6f////////+n3v8Vpv8Vpv8Vpv/F6f/////T7v+Z2P/i9P////////////////////+24/9QvP8Vpv8Vpv8Vpv8Vpv/F6f/////F6f8Vpv8Vpv8krP9QvP9QvP9Bt/8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv/F6f/////F6f8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv9Bt/9QvP9Bt/8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8Vpv8AAHBsAABhdAAAbiAAAHJ0AABsaQAAdGkAACBDAABlbgAAUEEAAEVYAAAuQwAAOy4AAEU7AABBVAAAQ00AAC5W";
		document.head.appendChild(link);
		(async () => {
			const res = await fetch(`https://bing.biturl.top/?resolution=1920&format=json&index=0&mkt=en-US`);
			setDailyImage(await res.json());
		})();
		(async () => {
			const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
			var tzArr = userTimeZone.split("/");
			const userRegion = tzArr[0];
			const userCity = tzArr[tzArr.length - 1];
			const userCountry = codeMap[`${userRegion}/${userCity}`];
			const res = await fetch(`http://localhost:48351/trends?region=${userCountry}`);
			const validJson = (await res.text()).split("\n")[1];
			setTrends(JSON.parse(validJson));
		})();
	}, []);
	return (
		<div>
			<div>
				<style
					type="text/css"
					dangerouslySetInnerHTML={{
						__html: `a,body{color:#fff;text-decoration:none}a:hover{text-decoration:underline}.lit .sw_sform a,.lit label{color:#000}ul{list-style:none;padding:0;margin:0}label{padding-right:1em}#sw_pb,#content{border:1px #d0d9dd solid}#content{position:relative;_position: static;overflow:hidden}#sw_content{height:512px;position:relative;overflow:hidden;background:#9eacb3}.sw_logo{background:url(${homeSheet}) 0 -39px no-repeat;width:125px;height:45px;float:left;margin:-2px 30px 0 0;_margin: -39px 30px 0 0;_background-image: none;_height: 85px;_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/fd/s/a/k.png', sizingMethod='crop');text-indent:-9em}.lit .sw_logo{background-position:0 -85px;_margin-top: -85px;_height: 130px}.sw_sform{position:absolute;top:102px;left:30px;z-index:10;width:100%;margin:0}.search_controls{float:left}.beta{position:absolute;top:40px;left:0}.lit .beta{color:#006DD4}html,body{height:100%}body{background:#b2bdc4;margin-top:-1px;margin:0;padding:0;font-family:Arial,Sans-Serif;font-size:small}.sc_grad{background:url(${homeSheet}) 0 -132px;position:absolute;width:100%;height:35px;min-width:700px}table.layout{width:100%;height:calc(100vh - 64px);border-collapse:collapse}td.layout{vertical-align:middle;padding:1.8em 17px 0}#container{text-align:left;position:relative;_width: 966px;min-width:656px;max-width:964px;padding-top:17px}.content_wrap{border:solid 3px #aab9c1;background:#bcc9cf;zoom:1}.sw_b input{float:left;*float: none;border:0;margin:0 0 -.8em;color:#333;font-size:100%;padding:.2em .64em 0 .44em;width:24.0333em;height:1.4em;line-height:1.2em}.sw_bd{display:inline-block;_float: left;position:absolute;left:155px;top:0;z-index:1;white-space:nowrap}.sw_bd2 .sw_b{float:left}input.sw_q_nrw{width:14.9333em}.sw_b .sw_qbtn{background:#f9761d url(${homeSheet});cursor:pointer;height:24px;width:24px;padding:24px 0 0;margin:0 0 -12px;overflow:hidden}#sb_form_q2{width:15.5em}.sw_b{font-size:115.9%;*font-size: 113%;float:left;*float: none;border:1px #acbabd solid;background:#fff;padding:.2em .2em 1em;*padding: .13em .2em .93em;margin:0 0 0 1px}#sw_as{position:relative;clear:both;display:none;font-size:small}#sw_filt input{margin-right:2px;zoom:1}#sw_filt label,#sw_pb{zoom:1}#sw_t{filter:alpha(opacity=15);opacity:.15;background:#000;height:100%;_height: 15.84em;width:100%;position:absolute;z-index:-1}.sc_expLite #sw_t{filter:alpha(opacity=25);opacity:.25}.sb_form_align{top:2.5em;left:151px;position:absolute}.sc_scp{white-space:nowrap;font-size:1.07em;position:absolute;left:153px;top:-2.02em}.sc_scp a,.sc_scp span{white-space:nowrap}.sc_action span,.sc_action a{font-weight:bold}.sc_scp,.sc_scp li,.sc_scp ul{display:inline}.sc_scp li{padding:0 8px;zoom:1}.sc_active,.drk li.sc_active{color:#ffa615;font-weight:bold;border-left:solid 1px #a8b1b7;border-right:solid 1px #a8b1b7;padding:0 10px;margin:0 4px}.sc_exp{position:absolute;width:145px;top:35%;z-index:1}.lit .sc_exp a{color:#fff}.sc_exp h2{background:#f9761d;margin:0;position:absolute;top:-1.16em;left:0;font-size:small;font-weight:200}.sc_exp h2 div,#sw_content .sc_exp h2 a{position:relative;padding:.33em 15px}.sc_exp h2 span{background:url(/web/20100502011756im_/http://www.bing.com/fd/s/a/k.png) left 0 no-repeat;display:block;height:24px;width:100px;position:absolute;right:0;bottom:0}.sc_exp h2 span span{background-position:-24px 0;width:71px;left:0}.sc_exp #sch_scopes{padding:1.39em 0 .77em}#sw_content .sc_exp a{display:block;padding:.54em 0 .54em 30px}.sc_exp li{width:100%}#sb_foot{width:100%;float:left;background:#b2bdc4}#sw_footL{float:right}#sb_foot,.sw_tb{*display: inline-block;padding:4px 0}#sb_feedback{margin-right:0}#sw_pb div{border-right:1px #d8dfe3 solid;float:left;padding:0 15px;margin:9px 0;width:20%}#sw_pb h3{font-size:medium;font-weight:200;margin:0 0 6px}#sw_pb a,#sw_pb ul{color:#1a3038}#sw_pb div,#sw_pb a,#sw_pb h3{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#sw_pb .ps{_height: 100%;border:0;float:none;width:auto}#sw_pb h3,.ps a{display:block;width:100%}#sw_hdr{position:absolute;top:0;left:0;border-bottom:1px #bac3c8 solid;_padding: 0 17px;width:100%;min-width:700px;z-index:5}.sw_tb{font-size:93%;line-height:130%;min-height:14px;_margin: 0 -17px;padding:.35em 0 .35em 8px}.sw_tb div{*display: none;height:0}#sw_footL,#sw_footL a{color:#898994}#sb_foot li,.sw_tb h3.sc_hl1,.sw_tb li{display:inline;line-height:normal;zoom:1}#sb_foot a,.sw_tb a,.sw_tb span{margin:0 .25em;white-space:nowrap}#sb_foot a{margin:.4em}.sw_tb a span,.sw_tb a,.sw_tb span,#sw_hdr h3.sc_hl1{margin:0}.sw_tb .sc_hl1{float:left;text-align:left}.sw_tb a{_padding-left: 1px;zoom:1}#sw_hdr h3,.sw_tb h3.sc_hl1 span,.sw_tb ul.sw_right li span,.sw_tb ul.sc_hl1 li a{margin:0 .85em}#sw_hdr .sw_tb h3.sc_hl1{margin-right:.25em}.sw_tb ul li #hps{margin-left:0}#sw_hdr span.mktTgl{margin:0 .5em 0 0}.sw_right{margin-right:.5em}#sw_hdr .sw_tb div{display:inline}#sw_hdr h3{font-size:100%;font-weight:200;width:auto;display:inline}#sw_footR,.sw_right{text-align:right;white-space:nowrap;float:right}.sw_u{font-weight:bold}.mktTgl{margin:0 .5em -.2em 0}#bgDiv{background-repeat:no-repeat;position:absolute;top:0;left:0;width:956px;height:512px}#hp_vbackground{position:absolute;top:0;left:0;width:100%;height:100%}.sh_hst{position:absolute;z-index:4;visibility:hidden}.sh_hto{width:39px;height:39px;opacity:.4;filter:alpha(opacity=40);background:#000;padding:1px}.sh_hto div{height:37px;width:37px;border:1px solid #fff;float:left}a.sh_hs{position:absolute;display:block;cursor:pointer;z-index:15;line-height:1.4em;width:205px;_width: 206px;padding:3px 8px 6px;visibility:hidden}a.sh_hs:hover{text-decoration:none}#sw_content a.sh_hs p,#sw_content a:visited.sh_hs p{margin:0 0 .2em}.sh_hq{text-decoration:underline}.sh_hi{display:inline;*display: inline-block;font-size:medium;color:orange}.sh_ho{width:100%;_width: 220px;position:absolute;top:0;left:0;z-index:-1;opacity:.6;filter:alpha(opacity=60);padding:1px;background:#000}.sh_ho div{_width: 218px;border:1px solid #fff}#makeHP{display:none}#sh_rdiv{font-size:85%;position:absolute;right:.27em;bottom:.9em}#sh_rdiv a{margin:0 .27em;position:relative;float:left;display:block;text-decoration:none;cursor:default;outline:none}#sh_rdiv div{padding:.18em .27em;margin:1px;float:left}#sh_rdiv span{padding:.45em;background:#fff;position:absolute;bottom:1.82em;right:.18em;visibility:hidden;white-space:nowrap;color:#150417;border:1px solid #555}#sh_cp span{white-space:normal;display:block;background:0;border:0;padding:0;width:500px}#sh_cp p{padding:.45em;background:#fff;border:1px solid #555;float:right;margin:0}#sh_rdiv a:hover,#sh_rdiv a:hover span{visibility:visible}#sa_as #sa_bk{background:${homeSheet}) -18px -25px}a#sb_feedback{color:#F76120}#sh_igl div,#sh_igr div{visibility:hidden}`,
					}}
				/>
				<style
					type="text/css"
					dangerouslySetInnerHTML={{
						__html: "#sw_pb{background:#d0d9dd}#sw_pb h3{color:#737373}#sw_pb div{border:none}#sw_pb a,#sw_pb ul{color:#000}.ps ul{overflow:hidden;text-overflow:ellipsis;height:1.2em;width:100%}.ps li a,.ps li{display:inline;width:auto;font-weight:200;margin:0 5px}.ps li{float:left;*float: none;margin:0 5px 0 -5px;font-weight:700}",
					}}
				/>
				<title>Bing</title>
				<link href="#" rel="icon" />
				<meta content="Bing is a search engine that finds and organizes the answers you need so you can make faster, more informed decisions." name="description" />
				<meta content="NOODP" name="ROBOTS" />
				<div className="sc_grad" />
				<table className="layout">
					<tbody>
						<tr>
							<td className="layout" align="center">
								<div id="sw_hdr">
									<div className="sw_tb">
										<ul className="sc_hl1">
											<li>
												<a href="https://github.com/not-nullptr/wlm-09-discord/releases" target="_blank">
													Download Windows Live Messenger
												</a>
											</li>
										</ul>
										<ul className="sw_right">
											{/* <li>
												<span className="lStatus">
													<a href="#">Sign in</a>
												</span>{" "}
												|{" "}
											</li>
											<li>
												<span className="mktInd">
													<a href="#">
														United States
													</a>
												</span>{" "}
												|{" "}
											</li> */}
											<li className="sw_last">
												<span>
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
												</span>
											</li>
										</ul>
									</div>
									<div className="sw_tbb" />
								</div>
								<div id="container">
									<div className="content_wrap">
										<div id="content">
											<div id="sw_content" style={{ height: "512px" }}>
												<div className="sw_sform">
													<div className="sw_logo">Bing</div>
													<div className="sw_mbrand" />
													<div className="search_controls">
														<form action="/search" className="sw_box" id="sb_form">
															<div className="sw_bd">
																<div className="sw_b">
																	<input
																		className="sw_qbox"
																		id="sb_form_q"
																		name="q"
																		title="Enter your search term"
																		type="text"
																		autoComplete="off"
																		style={{
																			outline: "none",
																		}}
																		onChange={(e) => setSearch(e.target.value)}
																	/>
																	<input className="sw_qbtn" id="sb_form_go" tabIndex={0} title="Search" type="submit" />
																</div>
																<div id="sw_as" />
															</div>
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
															</div>
														</form>
													</div>
												</div>
												<div className="sc_exp">
													<div id="sw_t" />
													<h2>
														<span>
															<span />
														</span>
														<a href="#">EXPLORE</a>
													</h2>
													<ul id="sch_scopes">
														<li id="scpt0">
															<a href="#">
																<span />
																Images
															</a>
															<div id="scpc0" />
														</li>
														<li id="scpt1">
															<a href="#">
																<span />
																Videos
															</a>
															<div id="scpc1" />
														</li>
														<li id="scpt2">
															<a href="#">
																<span />
																Shopping
															</a>
															<div id="scpc2" />
														</li>
														<li id="scpt3">
															<a href="#">
																<span />
																News
															</a>
															<div id="scpc3" />
														</li>
														<li id="scpt4">
															<a href="#">
																<span />
																Maps
															</a>
															<div id="scpc4" />
														</li>
														<li id="scpt5">
															<a href="#">
																<span />
																Travel
															</a>
															<div id="scpc5" />
														</li>
														<li id="scpt6">
															<a href="#">
																<span />
																History
															</a>
															<div id="scpc6" />
														</li>
														<li id="scpt7">
															<a href="#">
																<span />
																Visual Search
															</a>
															<div id="scpc7" />
														</li>
													</ul>
												</div>
												<div
													id="bgDiv"
													style={{
														height: "512px",
														background: `url(${dailyImage.url})`,
													}}
												/>
												<div
													className="sh_hst"
													id="sc_hst1"
													style={{
														left: "232px",
														top: "235px",
													}}
												>
													<div className="sh_hto">
														<div />
													</div>
												</div>
												<a href="#" className="sh_hs" id="sc_hs1">
													<p />
													<span className="sh_hq" />
													&nbsp;
													<span className="sh_hi">»</span>
													<div className="sh_ho">
														<div />
													</div>
												</a>
												<div
													className="sh_hst"
													id="sc_hst2"
													style={{
														left: "368px",
														top: "355px",
													}}
												>
													<div className="sh_hto">
														<div />
													</div>
												</div>
												<a href="#" className="sh_hs" id="sc_hs2">
													<p />
													<span className="sh_hq" />
													&nbsp;
													<span className="sh_hi">»</span>
													<div className="sh_ho">
														<div />
													</div>
												</a>
												<div
													className="sh_hst"
													id="sc_hst3"
													style={{
														left: "543px",
														top: "248px",
													}}
												>
													<div className="sh_hto">
														<div />
													</div>
												</div>
												<a href="#" className="sh_hs" id="sc_hs3">
													<p />
													<span className="sh_hq" />
													&nbsp;
													<span className="sh_hi">»</span>
													<div className="sh_ho">
														<div />
													</div>
												</a>
												<div
													className="sh_hst"
													id="sc_hst4"
													style={{
														left: "739px",
														top: "328px",
													}}
												>
													<div className="sh_hto">
														<div />
													</div>
												</div>
												<a href="#" className="sh_hs" id="sc_hs4">
													<p />
													<span className="sh_hq" />
													&nbsp;
													<span className="sh_hi">»</span>
													<div className="sh_ho">
														<div />
													</div>
												</a>
												<div id="sh_rdiv">
													<a href="#" id="sh_igl">
														<div className="sc_lightdis">◄</div>
													</a>
													<a href="#" id="sh_igr">
														<div className="sc_lightdis">►</div>
													</a>
													<a className="sc_light" href="#" id="sh_cp">
														<div>©</div>
														<span>
															<p>{dailyImage.copyright}</p>
														</span>
													</a>
												</div>
											</div>
										</div>
										<div id="sw_pb">
											<div
												onMouseEnter={(e) => {
													e.currentTarget.querySelector("a")!.innerText = "Sike, Discord";
												}}
												onMouseLeave={(e) => {
													e.currentTarget.querySelector("a")!.innerText = "Nostalgia 09 Live Messenger GC";
												}}
											>
												<h3>Nostalgia '09</h3>
												<a href="https://discord.gg/nP9SxVQGnu" target="_blank">
													Join the groupchat
												</a>
											</div>
											<div>
												<h3>Chat Like It's 2009</h3>
												<a href="https://github.com/not-nullptr/wlm-09-discord" target="_blank">
													Download BeautyLive for Discord
												</a>
											</div>
											<div className="ps">
												<h3>Popular now</h3>
												<ul className="trends">
													{trends?.default.trendingSearchesDays[0].trendingSearches.slice(0, 3).map((t, i) => (
														<li key={t.title.query}>
															{i !== 0 && "·"}
															<a href={`/search?q=${t.title.query}`} target="_blank">
																{t.title.query}
															</a>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
									<div id="sb_foot">
										<ul id="sw_footL">
											<li>
												<a
													href="https://discord.gg/nP9SxVQGnu"
													onMouseEnter={(e) => {
														e.currentTarget.innerHTML = "© 2010 nullptr/The BeautyLive Team";
													}}
													onMouseLeave={(e) => {
														e.currentTarget.innerHTML = "© 2010 Microsoft";
													}}
												>
													© 2010 Microsoft
												</a>{" "}
												|{" "}
											</li>
											<li>
												<a href="https://discord.gg/nP9SxVQGnu">Privacy</a> |{" "}
											</li>
											<li>
												<a href="https://discord.gg/nP9SxVQGnu">Legal</a> |{" "}
											</li>
											<li>
												<a href="https://discord.gg/nP9SxVQGnu">Advertise</a> |{" "}
											</li>
											<li>
												<a href="https://discord.gg/nP9SxVQGnu" target="_blank">
													About our ads
												</a>{" "}
												|{" "}
											</li>
											<li>
												<a href="https://discord.gg/nP9SxVQGnu" id="sb_help" target="_blank">
													Help
												</a>{" "}
												|{" "}
											</li>
											<li>
												<a href="https://discord.gg/nP9SxVQGnu" target="_blank" id="sb_feedback">
													Tell us what you think
												</a>
											</li>
										</ul>
									</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Home;
