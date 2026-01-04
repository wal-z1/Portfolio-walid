import QuoteBox from "../QuoteBox/QuoteBox.jsx";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./Hero.css";
import { motion } from "framer-motion";
function Hero() {
	return (
		<section className="hero">
			<div className="hero-content">
				<div className="text-side">
					<span id="here">
						<h1 className="tracking-in-expand blink">
							<span>Hi I'm </span>
							<span>Walid Bouhenika</span>
						</h1>
					</span>

					<QuoteBox />

					<span className="inline-block w-full lg:w-[650px] font-light text-lg text-white text-shadow-[3px_1px_10px_rgba(255,255,255,0.8)]">
						Computer Science student @ESI Algiers, into coding, CTFs, tech, and
						whatever else catches my interest.
					</span>
					<hr className="w-11/12 lg:w-[30rem] m-3 ml-0 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] max-[1084px]:self-center" />
					<div className="button-container flex items-center gap-4 max-[1084px]:self-center">
						<a
							href="#projects"
							role="button"
							className="font-outfit rounded-lg border-2 border-[rgb(33,15,49)] bg-[#501c81] px-6 py-3 text-lg font-medium text-[#FAFAFA] text-shadow-[1px_1px_3px_rgba(0,0,0,0.5)] transition hover:brightness-120 active:brightness-90 cursor-pointer no-underline">
							View My Work
						</a>

						<a
							href="#contact"
							role="button"
							className="font-outfit rounded-lg border-2 border-[#441570] bg-transparent px-6 py-3 text-lg font-medium text-[#FAFAFA] text-shadow-[1px_1px_3px_rgba(0,0,0,0.5)] transition-colors hover:bg-[#501c81] cursor-pointer no-underline">
							Contact Me
						</a>
					</div>

					<SocialLinks />
				</div>

				<div className="image-side">
					<motion.img
						initial={{ opacity: 0, scale: 0.5 }} /*pop up fade animation */
						animate={{ opacity: 1, scale: 1 }} /* nothing state */
						whileHover={{
							/* jump up and roate and glow*/ scale: 1.1,
							y: -10,
							rotate: 1,
							boxShadow: "0px 10px 30px rgba(168, 85, 247, 0.6)",
						}}
						whileTap={{ scale: 0.95, rotate: -1 }} /*when clicked get's small */
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 15,
						}} /*bounce animation */
						className="inline-block rounded-[30px] border-2 border-[#331181] shadow-[3px_3px_15px_rgba(73,25,185,0.53)] w-[300px] h-[300px]  object-contain"
						src="/Images/pfp.jpg"
						alt="Person Picture"
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
