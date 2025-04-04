"use client";

import { useEffect, useState } from "react";

export default function SpaceBackground() {
	// Animation keyframes for particles
	const [windowSize, setWindowSize] = useState({
		width: typeof window !== "undefined" ? window.innerWidth : 0,
		height: typeof window !== "undefined" ? window.innerHeight : 0,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		// Set initial size
		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Clean up
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="fixed inset-0 -z-10 h-full w-full bg-black overflow-hidden">
			{/* Replaced the bright white gradient with a more subtle one centered in the viewport */}
			<div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(circle_at_center,#333_0%,#222_30%,#111_70%,#000_100%)]"></div>

			{/* Moon - repositioned to be more balanced in the viewport */}
			<div
				className="absolute rounded-full w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 top-[15%] right-[15%] bg-gray-200 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.2)]"
				style={{
					boxShadow:
						"inset -10px -10px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.4)",
					background:
						"radial-gradient(circle at 30% 30%, #ffffff, #f0f0f0 30%, #d0d0d0 70%, #c0c0c0 100%)",
				}}></div>

			{/* Particles */}
			<div
				style={{
					width: "6.203296449458106px",
					height: "3.0748893287931125px",
					top: "99.62791349715746%",
					left: "57.06891241064129%",
					animation:
						"particleMove 4.336056890340645s infinite linear",
					opacity: "0.5912164984511088",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "2.4179489371432323px",
					height: "6.23046908026715px",
					top: "73.42649055773866%",
					left: "1.1399433734261777%",
					animation:
						"particleMove 3.046594112471472s infinite linear",
					opacity: "0.9330688536346929",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "3.6953823285226175px",
					height: "6.090021498202829px",
					top: "97.29225033447393%",
					left: "92.94136490640427%",
					animation:
						"particleMove 5.748709361683509s infinite linear",
					opacity: "0.3223246338365011",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "4.63831759446735px",
					height: "2.5515073464991236px",
					top: "35.68660917000934%",
					left: "1.906123921473002%",
					animation:
						"particleMove 3.765038384803319s infinite linear",
					opacity: "0.6125527333641276",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "2.2500312269297025px",
					height: "6.459120902062457px",
					top: "34.468933229499314%",
					left: "12.424738879402408%",
					animation:
						"particleMove 3.0045483443338266s infinite linear",
					opacity: "0.40042439575038724",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "2.178023197092264px",
					height: "2.485230961998263px",
					top: "91.21100866566766%",
					left: "65.3741280555331%",
					animation:
						"particleMove 2.2169449761294318s infinite linear",
					opacity: "0.4430758790933973",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "4.526161063289929px",
					height: "4.7901598785033075px",
					top: "98.23563047511854%",
					left: "15.530065557947626%",
					animation:
						"particleMove 5.987444081741928s infinite linear",
					opacity: "0.6181727003587956",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "4.393497935302759px",
					height: "2.0017738632571893px",
					top: "67.4670676781294%",
					left: "84.26178074840693%",
					animation:
						"particleMove 6.128812943599049s infinite linear",
					opacity: "0.15095509702972065",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "3.3315389722728312px",
					height: "4.451720310048141px",
					top: "45.76191066536597%",
					left: "90.52933377115492%",
					animation:
						"particleMove 6.565373350276366s infinite linear",
					opacity: "0.45081454379871966",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "2.310214509277682px",
					height: "5.04643923286592px",
					top: "64.54054345981793%",
					left: "11.191786937293546%",
					animation:
						"particleMove 3.946384818803301s infinite linear",
					opacity: "0.8310583437578545",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "3.3769375930864136px",
					height: "4.246757079183731px",
					top: "93.79284109080788%",
					left: "15.499706786250078%",
					animation:
						"particleMove 6.5121813954714955s infinite linear",
					opacity: "0.018452378024170324",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "3.8962565126431907px",
					height: "3.0150363071413757px",
					top: "6.625142791590344%",
					left: "30.799632418594626%",
					animation:
						"particleMove 5.643121059669189s infinite linear",
					opacity: "0.12515566699867064",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "5.951135465769707px",
					height: "3.268970171792648px",
					top: "19.580134403937976%",
					left: "57.97395588330867%",
					animation:
						"particleMove 4.892866847878105s infinite linear",
					opacity: "0.5245819716941236",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "5.9924841333062435px",
					height: "6.358944643871706px",
					top: "60.426706539681206%",
					left: "66.41170902275991%",
					animation:
						"particleMove 3.1750102336707124s infinite linear",
					opacity: "0.1325527093217267",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "4.053757582042886px",
					height: "6.460169478748335px",
					top: "15.185840968320274%",
					left: "18.215941456942986%",
					animation:
						"particleMove 3.848032080736602s infinite linear",
					opacity: "0.3138880880537245",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "5.570534419375694px",
					height: "4.801010855440271px",
					top: "25.06582110907205%",
					left: "52.053979504891146%",
					animation:
						"particleMove 3.160293216829907s infinite linear",
					opacity: "0.8824377506044156",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "5.142138408580265px",
					height: "2.252215447673211px",
					top: "73.86841853500121%",
					left: "95.87916454779082%",
					animation:
						"particleMove 6.876414355287073s infinite linear",
					opacity: "0.12272406542186043",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "3.676695763874294px",
					height: "2.313171359548247px",
					top: "2.035954636528259%",
					left: "11.492503077389472%",
					animation:
						"particleMove 3.3826967411332856s infinite linear",
					opacity: "0.6448205817543093",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "5.884298292046315px",
					height: "6.187124198251437px",
					top: "14.691903680303554%",
					left: "41.568739413743394%",
					animation:
						"particleMove 5.4157793994147125s infinite linear",
					opacity: "0.7916063136360982",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "6.255992019733792px",
					height: "4.54840228987603px",
					top: "57.29042036614098%",
					left: "62.95731896390151%",
					animation:
						"particleMove 2.8031052970546835s infinite linear",
					opacity: "0.8454525844901175",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "5.5953708211731525px",
					height: "2.173283462989706px",
					top: "15.473897351851228%",
					left: "56.87734777321734%",
					animation:
						"particleMove 5.689988280920438s infinite linear",
					opacity: "0.8500086017528905",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "5.808724075704654px",
					height: "5.471385043009808px",
					top: "66.10150167360362%",
					left: "15.634300583486226%",
					animation:
						"particleMove 6.318376994122416s infinite linear",
					opacity: "0.2384710051480421",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "3.0054301177986433px",
					height: "6.653678462368829px",
					top: "78.23021511912096%",
					left: "3.6862157022557795%",
					animation:
						"particleMove 3.129682047737186s infinite linear",
					opacity: "0.7633433285288056",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "5.1958266187272875px",
					height: "3.8830782189975217px",
					top: "86.00369840327704%",
					left: "63.91065269101692%",
					animation: "particleMove 4.96341175225415s infinite linear",
					opacity: "0.5646984152089272",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "6.7893750344279615px",
					height: "5.161429624252313px",
					top: "13.220530245263863%",
					left: "99.43606250660903%",
					animation:
						"particleMove 4.168719583131877s infinite linear",
					opacity: "0.29880307520522087",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "3.8014344556683968px",
					height: "2.859090228858186px",
					top: "86.30203805684728%",
					left: "73.31951021341467%",
					animation:
						"particleMove 4.053532634094221s infinite linear",
					opacity: "0.5074614675216611",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "4.097833463086686px",
					height: "2.882059204535659px",
					top: "61.8252377964382%",
					left: "60.04858216432749%",
					animation:
						"particleMove 3.761791924441898s infinite linear",
					opacity: "0.6752177995334412",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "5.788305649298611px",
					height: "5.517058401484747px",
					top: "44.47909613249197%",
					left: "16.706275150481954%",
					animation:
						"particleMove 3.4077532734775544s infinite linear",
					opacity: "0.14787283868261647",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "2.7010276945765828px",
					height: "4.322765851445605px",
					top: "97.55676358498535%",
					left: "93.60281711274772%",
					animation:
						"particleMove 2.8475769992589264s infinite linear",
					opacity: "0.7128977116567663",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "3.78620623091141px",
					height: "6.398956924689358px",
					top: "55.940165625819475%",
					left: "64.60745089787335%",
					animation:
						"particleMove 6.040050442640506s infinite linear",
					opacity: "0.9385212194143016",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "2.500625463269051px",
					height: "4.524207478546691px",
					top: "24.402244710026167%",
					left: "91.77821081658564%",
					animation:
						"particleMove 6.924996589861826s infinite linear",
					opacity: "0.8463825948849872",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "3.413032665992424px",
					height: "4.098600257949558px",
					top: "87.47248634604527%",
					left: "90.84531497483879%",
					animation:
						"particleMove 2.5285252175503743s infinite linear",
					opacity: "0.7265888795352404",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "6.5462294150889075px",
					height: "3.194554827930059px",
					top: "80.68654664744237%",
					left: "10.032378604467485%",
					animation:
						"particleMove 3.416174545029892s infinite linear",
					opacity: "0.11751500481042099",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "3.063925253532579px",
					height: "5.6321482472270805px",
					top: "99.57477382400477%",
					left: "67.71542924830216%",
					animation:
						"particleMove 4.5183313043159705s infinite linear",
					opacity: "0.5448382677626411",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "2.589065006081282px",
					height: "6.600757059790624px",
					top: "71.77791904685955%",
					left: "80.49126352444014%",
					animation:
						"particleMove 5.586822632748255s infinite linear",
					opacity: "0.7068760159274763",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "2.135061754214459px",
					height: "5.250548887175267px",
					top: "62.56533864312976%",
					left: "54.173774128158115%",
					animation:
						"particleMove 2.071575737526791s infinite linear",
					opacity: "0.8716382189424037",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "4.236715364387997px",
					height: "5.396505118000989px",
					top: "79.05621626443413%",
					left: "68.55654455828264%",
					animation:
						"particleMove 6.8093447551789215s infinite linear",
					opacity: "0.2543870325381645",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "3.020399041265192px",
					height: "3.069927373672895px",
					top: "19.20507195526295%",
					left: "78.91881232604057%",
					animation:
						"particleMove 5.048553707089729s infinite linear",
					opacity: "0.8501005842083584",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "5.69962750204489px",
					height: "4.224798251728633px",
					top: "90.74102811560876%",
					left: "66.8493890448736%",
					animation:
						"particleMove 4.548590155953441s infinite linear",
					opacity: "0.9567864973531273",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "6.746517831033421px",
					height: "5.677669790347258px",
					top: "66.8781148494195%",
					left: "6.857943858027404%",
					animation:
						"particleMove 6.356014965416232s infinite linear",
					opacity: "0.1636181955323257",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "3.9345734033540407px",
					height: "2.9791603516725713px",
					top: "12.240365821921163%",
					left: "70.44444797242866%",
					animation: "particleMove 4.13799820853522s infinite linear",
					opacity: "0.8771621257411386",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "4.743736509004692px",
					height: "5.059123718046371px",
					top: "19.26629699454161%",
					left: "2.58111559834191%",
					animation:
						"particleMove 3.8667891071314147s infinite linear",
					opacity: "0.01037864184752113",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "2.1474662746544295px",
					height: "4.002362244835904px",
					top: "23.79867275685705%",
					left: "22.34673962755913%",
					animation: "particleMove 6.1146998653645s infinite linear",
					opacity: "0.9094512477906886",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "6.539698255424406px",
					height: "4.278035553443841px",
					top: "34.91059269642756%",
					left: "29.513530732993765%",
					animation:
						"particleMove 5.564194228223963s infinite linear",
					opacity: "0.9294881895255673",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "5.462446878627263px",
					height: "3.3015598759368077px",
					top: "11.039935781160048%",
					left: "74.58386272474465%",
					animation:
						"particleMove 6.762796353232792s infinite linear",
					opacity: "0.7077559195948893",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "5.954350679448634px",
					height: "5.89948470749367px",
					top: "87.18876628648009%",
					left: "95.45661121613409%",
					animation:
						"particleMove 4.222069713020547s infinite linear",
					opacity: "0.17742856263222184",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "2.386596506923138px",
					height: "5.931500892887792px",
					top: "99.81677704604712%",
					left: "52.297457455399574%",
					animation:
						"particleMove 6.228834889093757s infinite linear",
					opacity: "0.402400640025141",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "6.312077395739214px",
					height: "5.729633701019971px",
					top: "57.780467804966015%",
					left: "42.38318510436425%",
					animation:
						"particleMove 3.8335292547561552s infinite linear",
					opacity: "0.493600166979135",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "2.247787346771924px",
					height: "6.672397742482861px",
					top: "54.99400419019926%",
					left: "9.933787333436882%",
					animation:
						"particleMove 3.0257057126955873s infinite linear",
					opacity: "0.8073694572190144",
				}}
				className="absolute bg-white rounded-full"></div>
			<div
				style={{
					width: "6.234547100246071px",
					height: "5.235709489779945px",
					top: "94.35831964557097%",
					left: "44.41114839080178%",
					animation:
						"particleMove 6.325458428563902s infinite linear",
					opacity: "0.7980189817890277",
				}}
				className="absolute bg-white rounded-full"></div>

			{/* Animation keyframes */}
			<style jsx>{`
				@keyframes particleMove {
					0% {
						transform: translate(0, 0);
					}
					25% {
						transform: translate(
							${windowSize.width * 0.01}px,
							${windowSize.height * 0.005}px
						);
					}
					50% {
						transform: translate(
							${windowSize.width * 0.005}px,
							${windowSize.height * 0.01}px
						);
					}
					75% {
						transform: translate(
							-${windowSize.width * 0.01}px,
							${windowSize.height * 0.005}px
						);
					}
					100% {
						transform: translate(0, 0);
					}
				}
			`}</style>
		</div>
	);
}
