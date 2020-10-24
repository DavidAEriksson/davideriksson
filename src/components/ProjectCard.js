import React, { useEffect } from "react";
import IconCounter from "./IconCounter";
import ProjectLinkCounter from "./ProjectLinkCounter";
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
        <IconContext.Provider value={{ color: "#2e3440", size: "35px" }}>
          <div>
            <IconCounter icons={props.project.projectTools} />
          </div>
        </IconContext.Provider>
      </div>
      <h3>Links</h3>
      <div className="link-container">
        <ProjectLinkCounter links={props.project.projectLinks} />
      </div>
      <p className="project-description">{props.project.projectDescription}</p>
    </div>
  );
};

export default ProjectCard;
