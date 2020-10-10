import React from "react";
import "../styles/cards.scss";
const ProjectLinkCounter = (props) => {
	return props.links.map((link, i) => (
		<p key={i} className="project-link">
			<a href={link}>{link}</a>
		</p>
	));
};

export default ProjectLinkCounter;
