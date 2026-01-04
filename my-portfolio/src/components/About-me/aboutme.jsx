import { motion } from "framer-motion";

function Aboutme() {
	return (
		<div className="flex justify-center items-center py-6 px-4 sm:px-6">
			<motion.div
				id="text-s"
				className="w-full max-w-2xl flex flex-col items-start rounded-xl p-4 md:p-6 bg-[rgba(59,11,65,0.1)] backdrop-blur-sm backdrop-saturate-100 border-2 border-[#441570] transition-all duration-300 hover:border-[#a855f7] hover:shadow-2xl hover:shadow-purple-700/20"
				whileTap={{ scale: 0.97 }}>
				<h1 className="self-center font-bold text-slate-100 mb-3">
					Hello There
				</h1>
				<p className="text-base leading-relaxed text-slate-300 md:text-lg text-justify">
					Computer Science Engineering student at ESI Algiers with a passion for
					challenging problems that require critical thinking and
					experimentation, particularly in algorithms, coding, creativity, and
					new tech. Motivated by understanding how software behaves beneath the
					surface and learning through building things properly rather than
					doing many things at once.
				</p>
			</motion.div>
		</div>
	);
}

export default Aboutme;
