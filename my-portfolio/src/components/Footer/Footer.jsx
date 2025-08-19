import SocialLinks from "../SocialLinks/SocialLinks";

function Footer() {
	// The last update date
	const lastUpdate = "8/18/2025";

	return (
		<footer className="bg-[#100E17] text-gray-400 py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row justify-between gap-8">
					<div className="lg:w-1/2">
						<h3 className="text-xl font-bold text-white mb-2">
							Walid Bouhenika
						</h3>
						<p className="text-sm leading-relaxed">
							A portfolio of my work in computer science and software
							development.
						</p>
					</div>

					<div className="lg:w-1/3">
						<h3 className="text-xl font-bold text-white mb-2">Get in Touch</h3>
						<p className="text-sm mb-3">
							Feel free to reach out via email or connect with me on social
							media.
						</p>
						<SocialLinks />
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
					<p className="text-xs text-gray-500">Walid Bouneika © {lastUpdate}</p>
					<p className="text-xs text-gray-500">
						Built with React, Framer-motion, and Tailwind CSS.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
