import { motion } from "framer-motion";

function Aboutme() {
	return (
		<div className="flex justify-center items-center py-2 px-2">
			<motion.div
				id="text-s"
				className="w-full max-w-xl flex flex-col items-start rounded-lg p-3 bg-[rgba(59,11,65,0.15)] border border-[#441570] transition-all duration-300 hover:border-[#a855f7] hover:shadow-lg hover:shadow-purple-700/10"
				whileTap={{ scale: 0.98 }}>
				<h2 className="self-center font-semibold text-slate-100 text-lg mb-1.5">
					About Me
				</h2>
				<p className="text-sm leading-relaxed text-slate-300 text-justify mb-2">
					CS Student coding random projects and doing CTFs for fun. I make
					random things — check out the repos.
				</p>
				<div className="flex flex-wrap gap-2 text-xs">
					<a
						href="https://www.linkedin.com/in/bouhenika-walid/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-purple-400 hover:text-purple-300 transition-colors no-underline">
						→ LinkedIn
					</a>
					<a
						href="https://play.picoctf.org/users/walid_z1"
						target="_blank"
						rel="noopener noreferrer"
						className="text-purple-400 hover:text-purple-300 transition-colors no-underline">
						→ picoCTF
					</a>
				</div>
			</motion.div>
		</div>
	);
}

export default Aboutme;
