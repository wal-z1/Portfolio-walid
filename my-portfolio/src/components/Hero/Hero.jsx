import QuoteBox from "../QuoteBox/QuoteBox.jsx";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./Hero.css";
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
						Computer Science student at ESI Algiers who enjoys coding, solving
						problems, and learning whatever tech catches my interest.
					</span>
					<hr className="w-11/12 lg:w-[30rem] m-3 ml-0 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] max-[1084px]:self-center" />
					<div className="button-container flex items-center gap-4 max-[1084px]:self-center">
						<button className="font-outfit rounded-lg border-2 border-[rgb(33,15,49)] bg-[#501c81] px-6 py-3 text-lg font-medium text-[#FAFAFA] text-shadow-[1px_1px_3px_rgba(0,0,0,0.5)] transition hover:brightness-120 active:brightness-90 cursor-pointer">
							View My Work
						</button>
						<button className="font-outfit rounded-lg border-2 border-[#441570] bg-transparent px-6 py-3 text-lg font-medium text-[#FAFAFA] text-shadow-[1px_1px_3px_rgba(0,0,0,0.5)] transition-colors hover:bg-[#501c81] cursor-pointer">
							Contact Me
						</button>
					</div>

					<SocialLinks />
				</div>
				<div className="image-side scale-in-start">
					<img id="imgp" src="https://placehold.co/300" alt="Person Picture" />{" "}
				</div>
			</div>
		</section>
	);
}

export default Hero;
