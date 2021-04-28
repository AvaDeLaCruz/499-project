import React from "react";
import MajorsAndMinors from "../components/sections/MajorsAndMinors";
import { useRouteMatch } from "react-router-dom";
import ClubsAndExtracurriculars from "../components/sections/ClubsAndExtracurriculars";
import HowToPickTheRightCollege from "../components/sections/HowToPickTheRightCollege";
import HousingAndTransportation from "../components/sections/HousingAndTransportation";
import CareersAfterCollege from "../components/sections/CareersAfterCollege";

const Home = () => {
	const { url } = useRouteMatch();

	if (url == "/guides/majors-and-minors") return <MajorsAndMinors />;
	if (url == "/guides/clubs-and-extracurriculars")
		return <ClubsAndExtracurriculars />;
	if (url == "/guides/how-to-pick-the-right-college")
		return <HowToPickTheRightCollege />;
	if (url == "/guides/housing-and-transportation")
		return <HousingAndTransportation />;
	if (url == "/guides/careers-after-college")
		return <CareersAfterCollege />;
};

export default Home;
