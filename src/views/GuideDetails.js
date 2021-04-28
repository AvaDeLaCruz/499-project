import React from "react";
import MajorsAndMinors from "../components/sections/MajorsAndMinors";
import { useRouteMatch } from "react-router-dom";
import ClubsAndExtracurriculars from "../components/sections/ClubsAndExtracurriculars";

const Home = () => {
	const { url } = useRouteMatch();

	if (url == "/guides/majors-and-minors") return <MajorsAndMinors />;
	if (url == "/guides/clubs-and-extracurriculars")
		return <ClubsAndExtracurriculars />;
};

export default Home;
