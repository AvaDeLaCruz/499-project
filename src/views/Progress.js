import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import GuidesTiles from "../components/sections/GuidesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import ProgressBar from "../components/sections/ProgressSection";

const Progress = () => {
	return (
		<>
			<ProgressBar />
			{/* <FeaturesSplit
				invertMobile
				topDivider
				imageFill
				className="illustration-section-02"
			/> */}
			{/* <Testimonial topDivider /> */}
			{/* <Cta split /> */}
		</>
	);
};

export default Progress;
