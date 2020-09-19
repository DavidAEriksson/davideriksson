import React, { useState, useRef } from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

import mountains from "../src/SVG/mountains.svg";
import "../src/styles/app.scss";

import ParticleComponent from "../src/components/Particles.js";
import About from "./components/About";

const App = () => {
	const [aboutState, setAboutState] = useState("0");
	const handleClick = () => {
		setAboutState("100vh");
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
					<Link
						className="link"
						to="about"
						onClick={handleClick}
						smooth={true}
						duration={1000}
					>
						<i class="gg-arrow-long-down-c"></i>
					</Link>
					<img src={mountains} className="mountains" alt="mountains" />
				</div>
			</div>
			{/* Send prop style on button click here */}
			<div id="about">
				<About style={{ height: aboutState }} />
			</div>
		</div>
	);
};

export default App;
