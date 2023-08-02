import React from "react";
import Banner from "../components/Banner";
import Social from "../components/Social";
import "./Home.css";

function Home() {
	return (
		<div className="containerHome">
			<Banner />
			<Social />
		</div>
	);
}

export default Home
