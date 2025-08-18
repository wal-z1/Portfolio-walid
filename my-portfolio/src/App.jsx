import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Aboutme from "./components/About-me/aboutme.jsx";
import BackgroundEle from "./components/BackgroundEle.jsx";
import Two_Grid from "./components/Two_Grid/Two_Grid.jsx";
import ProjectsContainer from "./components/Project/ProjectContainer.jsx";
function App() {
	return (
		<>
			<BackgroundEle />
			<Header />
			<Hero />
			<Aboutme />
			<Two_Grid />
			<ProjectsContainer />
		</>
	);
}

export default App;
