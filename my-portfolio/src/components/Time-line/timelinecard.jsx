import { motion } from "framer-motion";
import PropTypes from "prop-types";

function Timelinecrad({ category, title, url, text, timetext }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: 10 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ amount: 0.3 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			whileTap={{ scale: 0.97 }}
			className="
                flex rounded-xl w-full
                bg-[rgba(30,40,60,0.2)]
                border border-[#3d4a63]
                transition-colors duration-300 hover:border-[hsl(220,40%,55%)]
            ">
			<img
				src={
					url ||
					"https://img.icons8.com/?size=100&id=4LZxtKlARvqr&format=png&color=FAFAFA"
				}
				className="w-14 h-14 object-contain self-center p-2 flex-shrink-0"
				alt="icon"
			/>
			<div className="flex flex-col flex-grow">
				<div className="pt-1.5 px-1.5">
					<span className="font-outfit text-gray-400 text-sm">{category}</span>
					<h5 className="mb-0.5 text-slate-100 text-lg font-semibold">
						{title}
					</h5>
					<p className="text-slate-300 leading-snug font-light text-sm">
						{text}
					</p>
				</div>
				<div className="mx-2 border-t border-[#3d4a63] pb-1.5 pt-1 mt-1.5">
					<span className="text-sm text-[#90a5b8] font-medium">{timetext}</span>
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
