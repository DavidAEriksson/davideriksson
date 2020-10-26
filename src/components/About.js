import React from "react";
import { IconContext } from "react-icons";
import {
	FaReact,
	FaJava,
	FaCss3Alt,
	FaHtml5,
	FaAndroid,
	FaNodeJs,
	FaDocker,
	FaSass,
} from "react-icons/fa";
import {
	DiMongodb,
	DiJavascript1,
	DiPython,
	DiPhotoshop,
	DiIllustrator,
	DiMysql,
} from "react-icons/di";
import { SiFirebase } from "react-icons/si";

import "../styles/about.scss";
import aboutPic from "../IMG/davidaeriksson.jpg";

const About = () => {
	return (
		<div className="about-wrapper">
			<h1>About</h1>

			<div className="about-main-container">
				<img className="about-pic" src={aboutPic} alt="david" />
				<p>
					My name is David Eriksson, I am currently studying for my masters
					degree
					<br /> in{" "}
					<a href="http://interaktion.nu/">
						Interaction Technology and Design at Umeå University
					</a>{" "}
					in Sweden and also
					<br /> very recently at Nanyang Technological University in Singapore.
					<br /> I've loved computers and technology all my life, but it was
					during my university
					<br /> studies that I found my passion for creating elegant solutions
					for
					<br /> web and mobile applications.
					<br />
					<br /> I'm currently working alot in React.js, Cloud Firestore and
					React-Native on <br />
					projects that will be displayed more thoroughly in the 'Projects'
					section <br />
					of this page. In the meantime I've left links to some of selected past{" "}
					<br />
					projects down in the 'Projects' section that you can look through. In
					the 'Contact' <br />
					section you can find all of my socials if you want to contact me, I'm
					always <br />
					up for work so if you're interested I've left my resume as a
					downloadable file there <br />
					as well.
				</p>
			</div>
			<div className="about-skills-container">
				<h2>Skills</h2>
				<div className="skill-icons">
					<IconContext.Provider value={{ color: "#d8dee9", size: "50px" }}>
						<div>
							<FaReact />
							<FaNodeJs />
							<DiJavascript1 />
							<FaCss3Alt />
							<FaHtml5 />
							<FaSass />
							<FaDocker />
							<SiFirebase />
							<DiMongodb />
							<DiMysql />
							<FaJava />
							<DiPython />
							<FaAndroid />
							<DiPhotoshop />
							<DiIllustrator />
						</div>
					</IconContext.Provider>
				</div>
			</div>
		</div>
	);
};

export default About;
