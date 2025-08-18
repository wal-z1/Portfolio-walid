import { motion } from "framer-motion";
import PropTypes from "prop-types";

function Timelinecrad({ category, title, url, text, timetext }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: 50 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			whileTap={{ scale: 0.97 }}
			className="
                flex my-2 rounded-xl w-[22rem] md:w-[30rem]
                bg-[rgba(46,28,70,0.1)] backdrop-blur-sm backdrop-saturate-100
                border border-[#441570]
                transition-colors duration-300 hover:border-[hsl(271,70%,64%)]
            ">
			<img
				src={
					url ||
					"https://img.icons8.com/?size=100&id=4LZxtKlARvqr&format=png&color=FAFAFA"
				}
				className="w-16 h-16 object-contain self-center p-3"
				alt="icon"
			/>
			<div className="flex flex-col flex-grow">
				<div className="pt-2 px-2">
					<span className="font-outfit text-gray-400 text-sm">{category}</span>
					<h5 className="mb-1 text-slate-100 text-xl font-semibold">
						{title}
					</h5>
					<p className="text-slate-300 leading-snug font-light text-sm">
						{text}
					</p>
				</div>
				<div className="mx-3 border-t border-[#441570] pb-2 pt-1.5 mt-2">
					<span className="text-sm text-[#b190b9] font-medium">{timetext}</span>
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