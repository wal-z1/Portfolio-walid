import "./Nav.css";

function Nav() {
	return (
		<nav id="Nav-bar" className="drop-nav">
			<a href="#skills-experience">
				<img
					src="https://img.icons8.com/?size=100&id=11240&format=png&color=ffffff"
					alt="Skills icon"
					className="btn-icon"
				/>
				<span>Highlights</span>
			</a>
			<a href="#projects">
				<img
					src="https://img.icons8.com/?size=100&id=9489&format=png&color=ffffff"
					alt="Projects icon"
					className="btn-icon"
				/>
				<span>Projects</span>
			</a>
			<a href="#contact">
				<img
					src="https://img.icons8.com/?size=100&id=eBEo6FOQZ3v4&format=png&color=ffffff"
					alt="Contact icon"
					className="btn-icon"
				/>
				<span>Contact</span>
			</a>
		</nav>
	);
}

export default Nav;
