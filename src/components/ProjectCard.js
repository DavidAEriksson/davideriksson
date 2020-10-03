import React, { useEffect } from "react";
import IconCounter from "./IconCounter";
import AOS from "aos";
import "../styles/cards.scss";
import "aos/dist/aos.css";
import { IconContext } from "react-icons";

const ProjectCard = (props) => {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	});

	return (
		<div data-aos="fade-up" className="card-container">
			<h2>{props.project.projectName}</h2>
			<div className="tool-icon-container">
				<IconContext.Provider value={{ color: "#2e3440", size: "50px" }}>
					<div>
						<IconCounter icons={props.project.projectTools} />
					</div>
				</IconContext.Provider>
			</div>
			<p className="project-description">{props.project.projectDescription}</p>
		</div>
	);
};

export default ProjectCard;
