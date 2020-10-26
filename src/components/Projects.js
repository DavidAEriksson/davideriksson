import React from "react";
import ProjectCardCounter from "./ProjectCardCounter";
import ProjectObjects from "../misc/projects.json";
const Projects = (props) => {
	return (
		<div className="project-wrapper" style={props.style}>
			<h1>Projects</h1>
			<p style={{ width: "50%", textAlign: "center" }}>
				Here is a list of projects that I've chosen to display here on my
				website. Some of these are larger, full-stack applications/services and
				some are smaller projects where I've taken a closer look at an
				interesting technology. Images are coming soon but in the meantime I've
				added some links to projects that have them.
			</p>
			<div className="project-card-container">
				<ProjectCardCounter projects={ProjectObjects} />
			</div>
		</div>
	);
};

export default Projects;
