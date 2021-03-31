import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import GuidesTiles from "../components/sections/GuidesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import GuideExpanded from "../components/sections/GuideExpanded";

const Home = () => {
	return (
		<>
			<GuideExpanded />
			{/* <Hero className="illustration-section-01" /> */}
			{/* <GuidesTiles topDivider /> */}
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

export default Home;
