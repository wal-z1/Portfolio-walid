import Nav from "../Nav/Nav.jsx";
import "./Header.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../lib/motionVariants";

function Header() {
	return (
		<motion.header
			id="head-thing"
			className="drop sticky top-0 z-40 w-full bg-[#0a0c0f8a] backdrop-blur-md"
			variants={fadeIn(0.02)}
			initial="hidden"
			animate="visible">
			<div
				id="title-text"
				className="focus-in-expand-normal ml-[5%] tracking-tight transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.75)]">
				walid.
			</div>
			<Nav />
		</motion.header>
	);
}

export default Header;
