import PropTypes from "prop-types";
import { motion } from "framer-motion";

function SkillCard({ title, description, imageUrl }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: 50 }}
			whileInView={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -50 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			whileTap={{ scale: 0.97 }}
			className="
                flex flex-col items-center text-center justify-center
                px-3 py-4
                rounded-lg shadow-lg bg-[rgba(46,28,70,0.1)]
                backdrop-blur-sm backdrop-saturate-100 border border-[#441570]
                shadow-purple-700/20 transition-colors duration-300
                hover:border-[hsl(271,70%,64%)]
            ">
			<div className="mb-2">
				<img
					className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
					src={imageUrl}
					alt={`${title} icon`}
				/>
			</div>

			<div className="flex flex-col justify-center leading-normal">
				<h5 className="text-base sm:text-lg font-bold tracking-tight text-white">
					{title}
				</h5>
				<p className="mt-1 text-xs sm:text-sm font-normal text-gray-400">
					{description}
				</p>
			</div>
		</motion.div>
	);
}

SkillCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	imageUrl: PropTypes.string,
};

SkillCard.defaultProps = {
	title: "Untitled",
	description: "no Description",
	imageUrl: "ImageURL",
};

export default SkillCard;