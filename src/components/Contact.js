import React from "react";
import "../styles/contact.scss";
import landscape from "../SVG/landscape.svg";
const Contact = (props) => {
	return (
		<div className="contact-wrapper">
			<div className="contact-div">
				<h1>Contact</h1>
				<p>Here are all of my social links if you want to contact me!</p>

				<div className="img-wrapper-landscapes">
					<img src={landscape} className="landscape" alt="landscape" />
				</div>
			</div>
		</div>
	);
};

export default Contact;
