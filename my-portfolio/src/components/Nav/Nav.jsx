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
					src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FAFAFA' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M8 2v4'%3e%3c/path%3e%3cpath d='M16 2v4'%3e%3c/path%3e%3crect width='18' height='18' x='3' y='4' rx='2'%3e%3c/rect%3e%3cpath d='M3 10h18'%3e%3c/path%3e%3c/svg%3e"
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
