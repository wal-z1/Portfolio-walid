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

					<p className="w-full lg:w-[600px] font-light text-lg text-slate-200 leading-relaxed mb-3">
						CS Student @ESI Algiers — coding random projects and doing CTFs for
						fun. I make random things, check out the repos.
					</p>
					<hr className="w-11/12 lg:w-[28rem] my-2 ml-0 bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)] max-[1084px]:self-center" />
					<div className="button-container flex items-center gap-3 max-[1084px]:self-center">
						<a
							href="#projects"
							role="button"
							className="font-outfit rounded-lg border-2 border-[#1e2940] bg-[#2d3a52] px-5 py-2.5 text-lg font-medium text-[#FAFAFA] transition hover:brightness-110 active:brightness-90 cursor-pointer no-underline">
							View My Work
						</a>

						<a
							href="#contact"
							role="button"
							className="font-outfit rounded-lg border-2 border-[#3d4a63] bg-transparent px-5 py-2.5 text-lg font-medium text-[#FAFAFA] transition-colors hover:bg-[#2d3a52] cursor-pointer no-underline">
							Contact Me
						</a>
					</div>

					<SocialLinks />
				</div>

				<div className="image-side">
					<div className="image-wrapper">
						{/* Animated blob background */}
						<div className="blob blob-1"></div>
						<div className="blob blob-2"></div>
						<div className="blob blob-3"></div>
						<img
							className="profile-img"
							src="/Images/pfp.jpg"
							alt="Person Picture"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
