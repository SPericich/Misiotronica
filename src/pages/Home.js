import React from "react";
import Banner from "../components/Banner";
import Social from "../components/Social";
import Leyenda from "../components/Leyenda";
import "./Home.css";

function Home() {
	return (
		<div className="containerHome">
			<Banner />
			<div className="containerHomeComplement">
				<Leyenda />
				<Social />
			</div>
		</div>
	);
}

export default Home;
