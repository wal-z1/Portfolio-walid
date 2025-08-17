import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Aboutme from "./components/About-me/aboutme.jsx";
import Skills from "./components/Skills/Skills.jsx";
import BackgroundEle from "./components/BackgroundEle.jsx";
import Timeline_container from "./components/Time-line/Timeline_container.jsx";
function App() {
	return (
		<>
			<BackgroundEle />
			<Header />
			<Hero />
			<Aboutme />
			<Skills />
			<Timeline_container />
		</>
	);
}

export default App;
