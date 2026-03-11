import { motion } from "framer-motion";
import {
	inOutFadeUp,
	hoverLift,
	tapPress,
	viewportReplay,
} from "../../lib/motionVariants";

function SkillCard({ title, description, imageUrl, index = 0 }) {
	return (
		<motion.div
			variants={inOutFadeUp(12, index * 0.02)}
			initial="hidden"
			whileInView="visible"
			viewport={viewportReplay}
			whileHover={hoverLift}
			whileTap={tapPress}
			className="
				m-1 flex aspect-square w-28 flex-shrink-0 flex-col items-center justify-center rounded-xl border border-[#5a3e8f]/50
				bg-[rgba(70,38,122,0.22)] p-2 text-center
                shadow-[0_8px_20px_rgba(15,23,42,0.25)] transition-all duration-300 md:w-32
				hover:border-[#7a62ac]
            ">
			<div className="mb-1">
				<img
					className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
					src={imageUrl}
					alt={`${title} icon`}
				/>
			</div>

			<div className="flex flex-col justify-center leading-normal">
				<h5 className="m-0 text-sm font-bold tracking-tight text-white sm:text-base">
					{title}
				</h5>
				<p className="mt-0.5 px-1 text-xs font-normal text-gray-400">
					{description}
				</p>
			</div>
		</motion.div>
	);
}

export default SkillCard;
