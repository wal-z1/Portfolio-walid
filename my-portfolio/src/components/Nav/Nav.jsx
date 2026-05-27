import "./Nav.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";

const navItems = [
	{
		href: "#skills-experience",
		icon: "auto_awesome",
		label: "Highlights",
	},
	{
		href: "#projects",
		icon: "work",
		label: "Projects",
	},
	{
		href: "#contact",
		icon: "mail",
		label: "Contact",
	},
];

function Nav() {
	const [activeHash, setActiveHash] = useState(navItems[0].href);

	useEffect(() => {
		const updateHash = () => {
			const next = window.location.hash || navItems[0].href;
			setActiveHash(next);
		};
		updateHash();
		window.addEventListener("hashchange", updateHash);
		return () => window.removeEventListener("hashchange", updateHash);
	}, []);

	return (
		<motion.nav
			className="md3-bottom-nav"
			variants={staggerContainer(0.06, 0.02)}
			initial="hidden"
			animate="visible">
			<div className="md3-bottom-nav__list">
				{navItems.map((item) => {
					const isActive = activeHash === item.href;
					return (
						<motion.a
							key={item.href}
							href={item.href}
							variants={fadeUp(10)}
							className={`md3-bottom-nav__item ${isActive ? "is-active" : ""}`}
							aria-current={isActive ? "page" : undefined}
							onClick={() => setActiveHash(item.href)}>
							<span className="md3-bottom-nav__indicator" aria-hidden="true" />
							<span className="md3-bottom-nav__icon">{item.icon}</span>
							<span className="md3-bottom-nav__label">{item.label}</span>
						</motion.a>
					);
				})}
			</div>
		</motion.nav>
	);
}

export default Nav;
