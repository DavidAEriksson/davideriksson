import React, { useEffect } from "react";
import AOS from "aos";
import "../styles/cards.scss";
import "aos/dist/aos.css";

const ProjectCard = (props) => {
  console.log("props in card: ", props);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div data-aos="fade-up" className="card-container">
      <h2 className="project-title">{props.project.projectName}</h2>
    </div>
  );
};

export default ProjectCard;
