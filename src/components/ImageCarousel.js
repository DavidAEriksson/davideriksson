import React from "react";
import { Carousel } from "react-responsive-carousel";
import ImageCounter from "./ImageCounter";

const ImageCarousel = (props) => {
	return (
		<Carousel style={{ width: "50%" }}>
			<div>
				<ImageCounter images={props.images} />
			</div>
		</Carousel>
	);
};

export default ImageCarousel;
