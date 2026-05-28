import { useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Two_Grid from "./components/Two_Grid/Two_Grid.jsx";
import ProjectsContainer from "./components/Project/ProjectContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Analytics } from "@vercel/analytics/react";

function App() {
	useEffect(() => {
		const targets = Array.from(document.querySelectorAll(".md3-reveal"));
		if (!targets.length) {
			return undefined;
		}
		if (!("IntersectionObserver" in window)) {
			targets.forEach((item) => item.classList.add("is-visible"));
			return undefined;
		}
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.01, rootMargin: "0px" },
		);
		targets.forEach((item) => observer.observe(item));
		return () => observer.disconnect();
	}, []);

	return (
		<>
			<Header />
			<main className="md3-main">
				<Hero />
				<section id="skills-experience" className="md3-section md3-reveal">
					<Two_Grid />
				</section>
				<section id="projects" className="md3-section md3-reveal">
					<ProjectsContainer />
				</section>
			</main>
			<Nav />
			<footer id="contact" className="md3-section md3-reveal">
				<Footer />
				<Analytics />
			</footer>
		</>
	);
}
export default App;
