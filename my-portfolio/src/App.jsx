// src/App.jsx
/* import "./App.css"; // <--- DELETED THIS LINE*/

import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Aboutme from "./components/About-me/aboutme.jsx";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Aboutme />
		</>
	);
}

export default App;
