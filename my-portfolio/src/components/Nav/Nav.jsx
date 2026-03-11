import "./Nav.css";
import { motion } from "framer-motion";
import {
	fadeUp,
	staggerContainer,
	tapPress,
	viewportReveal,
} from "../../lib/motionVariants";

const navItems = [
	{
		href: "#skills-experience",
		icon: "https://img.icons8.com/?size=100&id=11240&format=png&color=ffffff",
		alt: "Skills icon",
		label: "Highlights",
	},
	{
		href: "#projects",
		icon: "https://img.icons8.com/?size=100&id=9489&format=png&color=ffffff",
		alt: "Projects icon",
		label: "Projects",
	},
	{
		href: "#contact",
		icon: "https://img.icons8.com/?size=100&id=eBEo6FOQZ3v4&format=png&color=ffffff",
		alt: "Contact icon",
		label: "Contact",
	},
];

function Nav() {
	return (
		<motion.nav
			id="Nav-bar"
			className="drop-nav mr-3 rounded-full border border-white/20 bg-[#12141c80] px-2 py-1 shadow-[0_10px_30px_rgba(0,0,0,0.32),0_0_0_1px_rgba(255,255,255,0.12)] backdrop-blur-md"
			variants={staggerContainer(0.08, 0.08)}
			initial="hidden"
			whileInView="visible"
			viewport={viewportReveal}>
			{navItems.map((item) => (
				<motion.a
					key={item.href}
					href={item.href}
					variants={fadeUp(12)}
					whileHover={{ scale: 1.03, y: -1 }}
					whileTap={tapPress}
					className="group relative flex items-center gap-2 rounded-full px-3 py-2 text-[0.9375rem] font-medium text-[#e0e0e0] transition-all duration-300 hover:bg-[#46267a]/35 hover:text-white hover:shadow-[0_0_0_1px_rgba(70,38,122,0.45)]">
					<img src={item.icon} alt={item.alt} className="btn-icon" />
					<span className="relative max-md:hidden after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform after:duration-300 group-hover:after:scale-x-100">
						{item.label}
					</span>
				</motion.a>
			))}
		</motion.nav>
	);
}

export default Nav;
