import "./Header.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../lib/motionVariants";

const navItems = [
	{
		href: "#skills-experience",
		label: "Highlights",
	},
	{
		href: "#projects",
		label: "Projects",
	},
	{
		href: "#contact",
		label: "Contact",
	},
];

function Header() {
	const [activeHash, setActiveHash] = useState(navItems[0].href);
	const [theme, setTheme] = useState(
		document.documentElement.dataset.theme || "light",
	);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const updateHash = () => {
			const next = window.location.hash || navItems[0].href;
			setActiveHash(next);
		};
		updateHash();
		window.addEventListener("hashchange", updateHash);
		return () => window.removeEventListener("hashchange", updateHash);
	}, []);

	useEffect(() => {
		const onScroll = () => {
			setIsScrolled(window.scrollY > 8);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem("md3-theme", theme);
	}, [theme]);

	useEffect(() => {
		const handleThemeChange = (event) => {
			if (event?.detail) {
				setTheme(event.detail);
			}
		};
		window.addEventListener("md3-theme-change", handleThemeChange);
		return () =>
			window.removeEventListener("md3-theme-change", handleThemeChange);
	}, []);

	const toggleTheme = () => {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		document.documentElement.dataset.theme = next;
		localStorage.setItem("md3-theme", next);
		window.dispatchEvent(new CustomEvent("md3-theme-change", { detail: next }));
	};

	return (
		<motion.header
			id="head-thing"
			className={`md3-top-app-bar ${isScrolled ? "md3-top-app-bar--scrolled" : ""}`}
			variants={fadeIn(0.02)}
			initial="hidden"
			animate="visible">
			<div className="md3-container md3-top-app-bar__content">
				<div id="title-text" className="md3-top-app-bar__title">
					walid<span className="md3-logo-dot">.</span>
				</div>
				<div className="md3-top-nav">
					<nav className="md3-top-nav__links" aria-label="Primary">
						{navItems.map((item) => {
							const isActive = activeHash === item.href;
							return (
								<a
									key={item.href}
									href={item.href}
									className={`md3-top-nav__link ${isActive ? "is-active" : ""}`}
									aria-current={isActive ? "page" : undefined}
									onClick={() => setActiveHash(item.href)}>
									{item.label}
								</a>
							);
						})}
					</nav>
					<button
						type="button"
						className="md3-icon-button md3-icon-button--tonal md3-theme-toggle"
						aria-label="Toggle dark mode"
						onClick={toggleTheme}>
						<span
							className="material-symbols-rounded md3-icon-button__icon"
							aria-hidden="true">
							{theme === "dark" ? "light_mode" : "dark_mode"}
						</span>
					</button>
				</div>
			</div>
		</motion.header>
	);
}

export default Header;
