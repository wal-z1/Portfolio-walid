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
			className="md3-card md3-card--elevated">
			<div className="md3-card__media">
				<img
					src={
						imageUrl ||
						"https://thumbs.dreamstime.com/b/green-pink-color-blur-background-ratio-green-pink-color-blur-background-ratio-123722548.jpg"
					}
					alt={`${title} project screenshot`}
					className="h-48 w-full object-cover object-top"
				/>
			</div>

			<div className="flex flex-grow flex-col gap-8 p-4">
				<div>
					<h3 className="md-title" style={{ margin: 0 }}>
						{title}
					</h3>
					<p className="md-body" style={{ margin: "8px 0 0 0" }}>
						{description}
					</p>
				</div>

				<div className="md3-divider" />
				<motion.a
					href={liveUrl}
					target="_blank"
					rel="noopener noreferrer"
					whileTap={tapPress}
					className="md3-chip">
					<span className="material-symbols-rounded" aria-hidden="true">
						open_in_new
					</span>
					Check Out
				</motion.a>
			</div>
		</motion.article>
	);
}

export default ProjectCard;
