import React from "react";
import NavBar from "./navbar.jsx";
import Footer from "./footer.jsx";
import {CardHolder} from "./cardHolder.jsx";
import {Hero} from "./hero.jsx"

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="home">
		<NavBar />
		<main>
		<Hero />
		</main>
		<CardHolder />
		<Footer />
		</div>
	);
};

export default Home;
