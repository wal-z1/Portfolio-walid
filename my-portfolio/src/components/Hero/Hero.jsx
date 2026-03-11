import { useRef } from "react";
import QuoteBox from "../QuoteBox/QuoteBox.jsx";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./Hero.css";
import {
	motion,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import {
	fadeIn,
	fadeUp,
	hoverLift,
	springSoft,
	staggerContainer,
	tapPress,
	viewportReveal,
} from "../../lib/motionVariants";

function Hero() {
	const imageRef = useRef(null);
	const pointerX = useMotionValue(0);
	const pointerY = useMotionValue(0);

	const smoothX = useSpring(pointerX, springSoft);
	const smoothY = useSpring(pointerY, springSoft);
	const isTouchDevice =
		typeof window !== "undefined" &&
		window.matchMedia("(pointer: coarse)").matches;

	const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
	const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);

	const { scrollYProgress } = useScroll({
		target: imageRef,
		offset: ["start end", "end start"],
	});
	const floatY = useTransform(scrollYProgress, [0, 1], [12, -12]);

	const handlePointerMove = (event) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const x = (event.clientX - rect.left) / rect.width - 0.5;
		const y = (event.clientY - rect.top) / rect.height - 0.5;
		pointerX.set(Math.max(-0.5, Math.min(0.5, x)));
		pointerY.set(Math.max(-0.5, Math.min(0.5, y)));
	};

	const resetPointer = () => {
		pointerX.set(0);
		pointerY.set(0);
	};

	return (
		<motion.section
			className="hero px-3 pb-3 pt-2 sm:px-5 lg:px-8"
			variants={fadeIn(0.08)}
			initial="hidden"
			animate="visible">
			<motion.div
				className="hero-content mx-auto w-full max-w-7xl items-center gap-6 lg:gap-8"
				variants={staggerContainer(0.1, 0.02)}
				initial="hidden"
				whileInView="visible"
				viewport={viewportReveal}>
				<motion.div
					className="text-side relative z-10 rounded-2xl border border-[#5a3e8f]/55 bg-[#0a0c0f45] p-3 shadow-[0_14px_45px_rgba(0,0,0,0.28)] backdrop-blur-[3px] sm:p-4"
					variants={fadeUp(12)}>
					<span id="here">
						<h1 className="tracking-in-expand blink">
							<span>Hi I'm </span>
							<span className="inline-block">Walid Bouhenika</span>
						</h1>
					</span>

					<QuoteBox />

					<p className="mb-2 w-full text-base font-light leading-relaxed text-slate-200 lg:w-[600px] lg:text-lg">
						CS Student @ESI Algiers — coding random projects and doing CTFs for
						fun. I make random things, check out the repos.
					</p>
					<hr className="my-2 ml-0 w-11/12 bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)] max-[1084px]:self-center lg:w-[28rem]" />
					<motion.div
						className="button-container flex flex-wrap items-center gap-2 max-[1084px]:justify-center max-[1084px]:self-center"
						variants={staggerContainer(0.08, 0.02)}>
						<motion.a
							href="#projects"
							role="button"
							variants={fadeUp(10)}
							whileHover={hoverLift}
							whileTap={tapPress}
							className="cursor-pointer rounded-lg border border-[#6a4d9f] bg-[#46267a] px-4 py-2 font-outfit text-base font-medium text-[#FAFAFA] no-underline shadow-[0_8px_25px_rgba(70,38,122,0.42)] transition hover:brightness-110 active:brightness-90">
							View My Work
						</motion.a>

						<motion.a
							href="#contact"
							role="button"
							variants={fadeUp(10)}
							whileHover={hoverLift}
							whileTap={tapPress}
							className="cursor-pointer rounded-lg border border-[#5a3e8f]/70 bg-[#311a55]/70 px-4 py-2 font-outfit text-base font-medium text-[#FAFAFA] no-underline shadow-[0_6px_18px_rgba(0,0,0,0.2)] transition-colors hover:bg-[#58378f]">
							Contact Me
						</motion.a>
					</motion.div>

					<SocialLinks align="left" />
				</motion.div>

				<motion.div
					className="image-side"
					variants={fadeUp(18, 0.05)}
					style={{ y: isTouchDevice ? 0 : floatY }}>
					<motion.div
						ref={imageRef}
						className="image-wrapper"
						onMouseMove={isTouchDevice ? undefined : handlePointerMove}
						onMouseLeave={isTouchDevice ? undefined : resetPointer}
						style={{
							rotateX: isTouchDevice ? 0 : rotateX,
							rotateY: isTouchDevice ? 0 : rotateY,
							transformPerspective: 950,
						}}
						whileHover={{ scale: 1.025 }}
						transition={springSoft}>
						{/* Animated blob background */}
						<motion.div
							className="blob blob-1"
							animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
							transition={{
								duration: 6,
								repeat: Infinity,
								ease: "easeInOut",
							}}></motion.div>
						<motion.div
							className="blob blob-2"
							animate={{ y: [0, 5, 0], x: [0, -5, 0] }}
							transition={{
								duration: 5.5,
								repeat: Infinity,
								ease: "easeInOut",
							}}></motion.div>
						<motion.div
							className="blob blob-3"
							animate={{ y: [0, -4, 0], x: [0, 3, 0] }}
							transition={{
								duration: 7,
								repeat: Infinity,
								ease: "easeInOut",
							}}></motion.div>
						<motion.img
							className="profile-img"
							src="/Images/pfp.jpg"
							alt="Person Picture"
							animate={{ y: [0, -4, 0], scale: [1, 1.01, 1] }}
							whileHover={{ scale: 1.04, rotate: -0.3 }}
							transition={{
								duration: 4.8,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}

export default Hero;
