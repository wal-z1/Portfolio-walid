import QuoteBox from "../QuoteBox/QuoteBox.jsx";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./Hero.css";
import { motion } from "framer-motion";
import {
	fadeIn,
	fadeUp,
	staggerContainer,
	viewportReveal,
} from "../../lib/motionVariants";

function Hero() {
	return (
		<motion.section
			className="md3-section md3-hero"
			variants={fadeIn(0.08)}
			initial="hidden"
			animate="visible">
			<motion.div
				className="md3-container md3-hero__content"
				variants={staggerContainer(0.1, 0.02)}
				initial="hidden"
				whileInView="visible"
				viewport={viewportReveal}>
				<motion.div
					className="md3-card md3-card--filled md3-hero__text"
					variants={fadeUp(12)}>
					<span id="here">
						<h1 className="md-display md3-hero__headline">
							<span>Hi I'm </span>
							<span className="inline-block">Walid Bouhenika</span>
						</h1>
					</span>

					<QuoteBox />

					<p className="md-body md3-hero__body">
						CS Student @ESI Algiers — coding random projects and doing CTFs for
						fun. I make random things, check out the repos.
					</p>
					<motion.div
						className="md3-hero__actions"
						variants={staggerContainer(0.08, 0.02)}>
						<motion.a
							href="#projects"
							role="button"
							variants={fadeUp(10)}
							className="md3-button md3-button--filled">
							View My Work
						</motion.a>

						<motion.a
							href="#contact"
							role="button"
							variants={fadeUp(10)}
							className="md3-button md3-button--tonal">
							Contact Me
						</motion.a>
					</motion.div>

					<SocialLinks align="left" />
				</motion.div>

				<motion.div className="md3-hero__image" variants={fadeUp(18, 0.05)}>
					<div className="md3-hero__image-frame">
						<img
							className="md3-hero__image-photo"
							src="/Images/pfp.jfif"
							alt="Person Picture"
						/>
					</div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}

export default Hero;
