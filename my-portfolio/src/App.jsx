// src/App.jsx
/* import "./App.css"; // <--- DELETED THIS LINE*/

import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Aboutme from "./components/About-me/aboutme.jsx";
import SkillCard from "./components/Skills/Skillcard.jsx";
import BackgroundEle from "./components/BackgroundEle.jsx";

function App() {
	return (
		<>
			<BackgroundEle />
			<Header />
			<Hero />
			<Aboutme />
		</>
	);
}

export default App;
