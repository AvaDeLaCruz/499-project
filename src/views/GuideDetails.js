import React from "react";
import MajorsAndMinors from "../components/sections/MajorsAndMinors";
import { useRouteMatch } from "react-router-dom";
import ClubsAndExtracurriculars from "../components/sections/ClubsAndExtracurriculars";
import HowToPickTheRightCollege from "../components/sections/HowToPickTheRightCollege";

const Home = () => {
	const { url } = useRouteMatch();

	if (url == "/guides/majors-and-minors") return <MajorsAndMinors />;
	if (url == "/guides/clubs-and-extracurriculars")
		return <ClubsAndExtracurriculars />;
	if (url == "/guides/how-to-pick-the-right-college")
		return <HowToPickTheRightCollege />;
};

export default Home;
