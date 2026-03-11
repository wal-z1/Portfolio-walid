import { motion } from "framer-motion";
import {
	inOutFadeUp,
	hoverLift,
	tapPress,
	viewportReplay,
} from "../../lib/motionVariants";

function ProjectCard({
	title,
	description,
	imageUrl,
	techIcons,
	liveUrl,
	index = 0,
}) {
	return (
		<motion.article
			variants={inOutFadeUp(16, index * 0.02)}
			initial="hidden"
			whileInView="visible"
			viewport={viewportReplay}
			whileHover={hoverLift}
			whileTap={tapPress}
			className="
				group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#5a3e8f]/50
		bg-[#161026db] shadow-[0_14px_38px_rgba(0,0,0,0.26)] backdrop-blur-[2px]
      ">
			<div className="overflow-hidden">
				<img
					src={
						imageUrl ||
						"https://thumbs.dreamstime.com/b/green-pink-color-blur-background-ratio-green-pink-color-blur-background-ratio-123722548.jpg"
					}
					alt={`${title} project screenshot`}
					className="
            h-48 w-full object-cover object-top
            align-middle max-w-full border-0
            transition-transform duration-500 group-hover:scale-[1.03]
          "
				/>
			</div>

			<div className="flex flex-grow flex-col p-4">
				<h3
					className="
            mb-1 text-lg font-bold text-white
            m-0 p-0 leading-snug
          ">
					{title}
				</h3>

				<p
					className="
            flex-grow text-sm leading-relaxed text-gray-400
            m-0 p-0
          ">
					{description}
				</p>

				<div className="mt-4 flex items-center justify-between border-t border-[#5a3e8f]/40 pt-3">
					<motion.a
						href={liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.04 }}
						whileTap={tapPress}
						className="
			  group/link flex items-center gap-2 text-sm font-semibold text-[#8a74b8]
			  transition-colors duration-300 hover:text-[#b09dd3]
              no-underline m-0 p-0
            ">
						Check Out
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="inline-block transition-transform duration-300 group-hover/link:translate-x-0.5"
						/>
					</motion.a>
				</div>
			</div>
		</motion.article>
	);
}

export default ProjectCard;
