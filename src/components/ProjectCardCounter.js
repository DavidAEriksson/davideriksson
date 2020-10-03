import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectCardCounter = (props) => {
	return props.projects.projects.map((project, i) => (
		<ProjectCard key={i} project={project} />
	));
};

export default ProjectCardCounter;
