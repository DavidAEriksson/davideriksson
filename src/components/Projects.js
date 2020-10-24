import React from "react";
import ProjectCardCounter from "./ProjectCardCounter";
import ProjectObjects from "../misc/projects.json";
const Projects = (props) => {
	return (
		<div className="project-wrapper" style={props.style}>
			<h1>Projects</h1>
			<p>Text text text text text text text text</p>
			<div className="project-card-container">
				<ProjectCardCounter projects={ProjectObjects} />
			</div>
		</div>
	);
};

export default Projects;
