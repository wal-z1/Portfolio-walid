import PropTypes from "prop-types";
import { motion } from "framer-motion";
function SkillCard({ title, description, imageUrl }) {
	return (
		<div
			className=" 
tilt-in-fwd-br
        flex items-center rounded-sm shadow-lg 
       
        bg-[rgba(46,28,70,0.1)] backdrop-blur-sm backdrop-saturate-100

        border-1 border-[#441570] 
        shadow-purple-700/20 

        transition-colors duration-300 
        hover:border-[hsl(271,70%,64%)]
      ">
			<div className="p-1 flex-shrink-0">
				<img
					className="w-16 h-16 object-contain"
					src={imageUrl}
					alt={`${title} icon`}
				/>
			</div>

			<div className="flex flex-col justify-center px-3 leading-normal">
				<h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>

				<p className="mt-1 text-sm font-normal text-gray-700 dark:text-gray-400">
					{description}
				</p>
			</div>
		</div>
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
//debugging worth
export default SkillCard;
