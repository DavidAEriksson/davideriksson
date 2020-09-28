import React from "react";

import "../styles/projects.scss";

const Projects = (props) => {
  return (
    <div className="project-wrapper" style={props.style}>
      <h1>Projects</h1>
      <p>Text text text text text text text text</p>
      <div className="project-card-container">
        <div className="project-card"></div>
        <div className="project-card"></div>
        <div className="project-card"></div>
        <div className="project-card"></div>
        <div className="project-card"></div>
      </div>
    </div>
  );
};

export default Projects;
