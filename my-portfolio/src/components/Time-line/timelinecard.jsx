import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { hoverLift, tapPress } from "../../lib/motionVariants";

function Timelinecrad({ category, title, url, text, timetext }) {
	return (
		<motion.div
			whileHover={hoverLift}
			whileTap={tapPress}
			className="
				flex w-full rounded-xl border border-[#5a3e8f]/50
				bg-[rgba(70,38,122,0.2)]
				shadow-[0_8px_24px_rgba(15,23,42,0.22)] transition-all duration-300
				hover:border-[#7a62ac]
            ">
			<img
				src={
					url ||
					"https://img.icons8.com/?size=100&id=4LZxtKlARvqr&format=png&color=FAFAFA"
				}
				className="w-14 h-14 object-contain self-center p-2 flex-shrink-0"
				alt="icon"
			/>
			<div className="flex flex-grow flex-col">
				<div className="px-1.5 pt-1.5">
					<span className="font-outfit text-gray-400 text-sm">{category}</span>
					<h5 className="mb-0.5 text-slate-100 text-lg font-semibold">
						{title}
					</h5>
					<p className="text-slate-300 leading-snug font-light text-sm">
						{text}
					</p>
				</div>
				<div className="mx-2 mt-1.5 border-t border-[#5a3e8f]/50 pb-1.5 pt-1">
					<span className="text-sm text-[#b09dd3] font-medium">{timetext}</span>
				</div>
			</div>
		</motion.div>
	);
}

Timelinecrad.propTypes = {
	category: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string,
	text: PropTypes.string,
	timetext: PropTypes.string,
};

export default Timelinecrad;
