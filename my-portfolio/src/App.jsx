import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Aboutme from "./components/About-me/aboutme.jsx";
import BackgroundEle from "./components/BackgroundEle.jsx";
import Two_Grid from "./components/Two_Grid/Two_Grid.jsx";
import ProjectsContainer from "./components/Project/ProjectContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Analytics } from "@vercel/analytics/react";

function App() {
	return (
		<>
			<BackgroundEle />
			<Header />
			<Hero />
			<section id="about">
				<Aboutme />
			</section>
			<section id="skills-experience">
				<Two_Grid />
			</section>
			<section id="projects">
				<ProjectsContainer />
			</section>
			<footer id="contact">
				<Footer />
				<Analytics />
			</footer>
		</>
	);
}

export default App;
