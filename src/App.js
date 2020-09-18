import React, { useState, useRef } from "react";
import Typed from "react-typed";
import ParticleComponent from "../src/components/Particles.js";
import mountains from "../src/SVG/mountains.svg";
import "../src/styles/app.scss";

import About from "./components/About";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const App = () => {
	const scrollRef = useRef(null);
	const executeScroll = () => scrollToRef(scrollRef);

	const [aboutState, setAboutState] = useState("0");
	const handleClick = () => {
		setAboutState("100vh");
		console.log("aboutState: ", aboutState);
	};
	return (
		<div className="page-wrapper">
			<div className="app-wrapper">
				<ParticleComponent />

				<div className="typed-container">
					<Typed
						strings={["David Eriksson"]}
						typeSpeed={130}
						className="typed-heading"
					/>

					<Typed
						strings={[
							"User experience design",
							"Front-end development",
							"Back-end development",
							"Database management",
						]}
						typeSpeed={130}
						backSpeed={65}
						smartBackspace={true}
						loop={true}
						className="typed-subheading"
					/>
				</div>

				<div className="img-wrapper">
					<i
						className="gg-arrow-long-down-c"
						onClick={(handleClick, executeScroll)}
					></i>
					<img src={mountains} className="mountains" alt="mountains" />
				</div>
			</div>
			{/* Send prop style on button click here */}
			<About ref={scrollRef} style={{ height: aboutState }} />
		</div>
	);
};

export default App;
