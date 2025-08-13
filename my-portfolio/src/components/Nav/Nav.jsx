import "./Nav.css";

function Nav() {
	return (
		<nav id="Nav-bar" className="drop-nav">
			<button>
				<img
					src="https://img.icons8.com/ios-glyphs/24/ffffff/user--v1.png"
					alt="About icon"
					className="btn-icon"
				/>
				<span>About</span>
			</button>
			<button>
				<img
					src="https://img.icons8.com/?size=100&id=11240&format=png&color=ffffff"
					alt="Skills icon"
					className="btn-icon"
				/>
				<span>Skills</span>
			</button>
			<button>
				<img
					src="https://img.icons8.com/?size=100&id=59758&format=png&color=ffffff"
					alt="Timeline icon"
					className="btn-icon"
				/>
				<span>Timeline</span>
			</button>
			<button>
				<img
					src="https://img.icons8.com/?size=100&id=9489&format=png&color=ffffff"
					alt="Projects icon"
					className="btn-icon"
				/>
				<span>Projects</span>
			</button>
		</nav>
	);
}

export default Nav;
