import React from "react";
import ProjectCardCounter from "./ProjectCardCounter";
import Contact from "./Contact";
import "../styles/projects.scss";
import ProjectObjects from "../misc/projects.json";
import { Link } from "react-scroll";
const Projects = (props) => {
  return (
    <div className="project-wrapper" style={props.style}>
      <h1>Projects</h1>
      <p>Text text text text text text text text</p>
      <div className="project-card-container">
        <ProjectCardCounter projects={ProjectObjects} />
      </div>

      <Link
        className="project-link-arrow"
        to="contact"
        smooth={true}
        duration={1000}
      >
        <i className="gg-arrow-long-down-c"></i>
      </Link>

      <Contact />
    </div>
  );
};

export default Projects;
