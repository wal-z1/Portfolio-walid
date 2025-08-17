import PropTypes from "prop-types";
import { motion } from "framer-motion";

function SkillCard({ title, description, imageUrl }) {
	return (
		<motion.div
			initial={{
				opacity: 0,
				transform: "rotateX(-30deg) rotateY(30deg)",
				x: 100,
				y: 50,
			}}
			animate={{
				opacity: 1,
				transform: "rotateX(0deg) rotateY(0deg)",
				x: 0,
				y: 0,
			}}
			exit={{ opacity: 0, scale: 0.95, y: -10 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="flex items-center rounded-sm shadow-lg bg-[rgba(46,28,70,0.1)] backdrop-blur-sm backdrop-saturate-100 border-1 border-[#441570] shadow-purple-700/20 transition-colors duration-300 hover:border-[hsl(271,70%,64%)]">
			<div className="p-1 flex-shrink-0">
				<img
					className="w-16 h-16 object-contain"
					src={imageUrl}
					alt={`${title} icon`}
				/>
			</div>
			<div className="flex flex-col justify-center px-3 leading-normal">
				<h5 className="mb-1 mt-3 text-xl font-bold tracking-tight text-white">
					{title}
				</h5>
				<p className="mt-1 text-sm font-normal text-gray-400">{description}</p>
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
