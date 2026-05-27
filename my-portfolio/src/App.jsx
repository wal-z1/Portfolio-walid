import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Two_Grid from "./components/Two_Grid/Two_Grid.jsx";
import ProjectsContainer from "./components/Project/ProjectContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Analytics } from "@vercel/analytics/react";

function App() {
	return (
		<>
			<Header />
			<main className="md3-main">
				<Hero />
				<section id="skills-experience" className="md3-section">
					<Two_Grid />
				</section>
				<section id="projects" className="md3-section">
					<ProjectsContainer />
				</section>
			</main>
			<Nav />
			<footer id="contact" className="md3-section">
				<Footer />
				<Analytics />
			</footer>
		</>
	);
}
export default App;
