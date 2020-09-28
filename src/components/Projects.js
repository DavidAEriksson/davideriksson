import React, { useEffect } from "react";
import AOS from "aos";

import "../styles/projects.scss";
import "aos/dist/aos.css";

const Projects = (props) => {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	});
	return (
		<div className="project-wrapper" style={props.style}>
			<h1>Projects</h1>
			<p>Text text text text text text text text</p>
			<div className="project-card-container">
				<div data-aos="fade-right" className="project-card"></div>
				<div data-aos="fade-left" className="project-card"></div>
				<div data-aos="fade-right" className="project-card"></div>
				<div data-aos="fade-left" className="project-card"></div>
				<div data-aos="fade-right" className="project-card"></div>
				<div data-aos="fade-left" className="project-card"></div>
			</div>
		</div>
	);
};

export default Projects;
