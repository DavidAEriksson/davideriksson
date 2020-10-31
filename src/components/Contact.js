import React, { useState, useEffect } from "react";
import {
  FaGithubSquare,
  FaMailBulk,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaFilePdf,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import resume from "../misc/CV.pdf";
import "../styles/contact.scss";
import landscape from "../SVG/landscape.svg";
const Contact = () => {
  const [gitHubColor, setGitHubColor] = React.useState("");
  const [mailColor, setMailColor] = React.useState("");
  const [linkedInColor, setLinkedInColor] = React.useState("");
  const [facebookColor, setFacebookColor] = React.useState("");
  const [instagramColor, setInstagramColor] = React.useState("");
  const [pdfColor, setPdfColor] = React.useState("");

  const [displayGitHubContainer, setDisplayGitHubContainer] = React.useState(
    "none"
  );
  const [displayMailContainer, setDisplayMailContainer] = React.useState(
    "none"
  );
  const [
    displayLinkedInContainer,
    setDisplayLinkedInContainer,
  ] = React.useState("none");
  const [
    displayFacebookContainer,
    setDisplayFacebookContainer,
  ] = React.useState("none");
  const [
    displayInstagramContainer,
    setDisplayInstagramContainer,
  ] = React.useState("none");
  const [displayPdfContainer, setDisplayPdfContainer] = React.useState("none");

  const displayContainer = (container) => {
    switch (container) {
      case 0:
        setGitHubColor("#8FBCBB");
        setDisplayGitHubContainer("flex");
        break;
      case 1:
        setMailColor("#8FBCBB");
        setDisplayMailContainer("flex");
        break;
      case 2:
        setLinkedInColor("#8FBCBB");
        setDisplayLinkedInContainer("flex");
        break;
      case 3:
        setFacebookColor("#8FBCBB");
        setDisplayFacebookContainer("flex");
        break;
      case 4:
        setInstagramColor("#8FBCBB");
        setDisplayInstagramContainer("flex");
        break;
      case 5:
        setPdfColor("#8FBCBB");
        setDisplayPdfContainer("flex");
        break;
      default:
        break;
    }
  };
  const displayContainerOff = (container) => {
    switch (container) {
      case 0:
        setGitHubColor("#D8DEE9");
        setDisplayGitHubContainer("none");
        break;
      case 1:
        setMailColor("#D8DEE9");
        setDisplayMailContainer("none");
        break;
      case 2:
        setLinkedInColor("#D8DEE9");
        setDisplayLinkedInContainer("none");
        break;
      case 3:
        setFacebookColor("#D8DEE9");
        setDisplayFacebookContainer("none");
        break;
      case 4:
        setInstagramColor("#D8DEE9");
        setDisplayInstagramContainer("none");
        break;
      case 5:
        setPdfColor("#D8DEE9");
        setDisplayPdfContainer("none");
        break;
      default:
        break;
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-div">
        <h1>Contact</h1>
        <p>Here are all of my social links if you want to contact me!</p>

        <div className="contact-links">
          <IconContext.Provider
            value={{ color: "#d8dee9", size: "50px", margin: "2%" }}
          >
            <div>
              <a href="https://github.com/DavidAEriksson">
                <FaGithubSquare
                  style={{ color: gitHubColor, transition: "0.2s" }}
                  onMouseEnter={() => displayContainer(0)}
                  onMouseLeave={() => displayContainerOff(0)}
                />
              </a>

              <a
                style={{ textDecoration: "none", color: "#D8DEE9" }}
                href="href=mailto:davideriksson96@outlook.com"
              >
                <FaMailBulk
                  style={{ color: mailColor, transition: "0.2s" }}
                  onMouseEnter={() => displayContainer(1)}
                  onMouseLeave={() => displayContainerOff(1)}
                />
              </a>

              <a href="https://www.linkedin.com/in/david-eriksson-5a2a96103/">
                <FaLinkedin
                  style={{ color: linkedInColor, transition: "0.2s" }}
                  onMouseEnter={() => displayContainer(2)}
                  onMouseLeave={() => displayContainerOff(2)}
                />
              </a>

              <a href="https://www.facebook.com/david.eriksson.14/">
                <FaFacebookSquare
                  style={{ color: facebookColor, transition: "0.2s" }}
                  onMouseEnter={() => displayContainer(3)}
                  onMouseLeave={() => displayContainerOff(3)}
                />
              </a>

              <a href="https://www.instagram.com/davidderiksson/">
                <FaInstagram
                  style={{ color: instagramColor, transition: "0.2s" }}
                  onMouseEnter={() => displayContainer(4)}
                  onMouseLeave={() => displayContainerOff(4)}
                />
              </a>

              <a href={resume} download style={{ color: "#d8dee9" }}>
                <FaFilePdf
                  style={{ color: pdfColor, transition: "0.2s" }}
                  onMouseEnter={() => displayContainer(5)}
                  onMouseLeave={() => displayContainerOff(5)}
                />
              </a>
            </div>
          </IconContext.Provider>
        </div>

        <div
          style={{ display: displayGitHubContainer }}
          className="mail-container"
        >
          <p>github.com/DavidAEriksson</p>
        </div>
        <div
          style={{ display: displayMailContainer }}
          className="mail-container"
        >
          <p>davideriksson96@outlook.com</p>
        </div>
        <div
          style={{ display: displayLinkedInContainer }}
          className="mail-container"
        >
          <p>https://www.linkedin.com/in/david-eriksson-5a2a96103/</p>
        </div>
        <div
          style={{ display: displayFacebookContainer }}
          className="mail-container"
        >
          <p>https://www.facebook.com/david.eriksson.14/</p>
        </div>
        <div
          style={{ display: displayInstagramContainer }}
          className="mail-container"
        >
          <p>@davidderiksson</p>
        </div>
        <div
          style={{ display: displayPdfContainer }}
          className="mail-container"
        >
          <p>Click to download my resume!</p>
        </div>
        <div className="img-wrapper-landscapes">
          <img src={landscape} className="landscape" alt="landscape" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
