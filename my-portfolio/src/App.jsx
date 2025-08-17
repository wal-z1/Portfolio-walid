import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Aboutme from "./components/About-me/aboutme.jsx";
import Skills from "./components/Skills/Skills.jsx";
import BackgroundEle from "./components/BackgroundEle.jsx";
import Timelinecrad from "./components/Time-line/timelinecard.jsx";
function App() {
	return (
		<>
			<BackgroundEle />
			<Header />
			<Hero />
			<Aboutme />
			<Skills />
			<Timelinecrad />
		</>
	);
}

export default App;
