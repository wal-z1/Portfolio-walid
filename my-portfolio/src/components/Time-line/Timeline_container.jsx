import Timeline_DATA from "./Timeline_DATA";
import Timelinecrad from "./timelinecard";
import { motion } from "framer-motion";
import {
	inOutFadeUp,
	staggerContainer,
	viewportReveal,
} from "../../lib/motionVariants";

function Timeline_container() {
	return (
		<motion.div
			className="md3-list"
			variants={staggerContainer(0.08, 0.03)}
			initial="hidden"
			whileInView="visible"
			viewport={viewportReveal}>
			{Timeline_DATA.map((event, index) => (
				<motion.div
					key={event.title}
					className=""
					variants={inOutFadeUp(10, index * 0.02, false)}
					style={{ willChange: "transform, opacity" }}>
					<Timelinecrad
						title={event.title}
						category={event.category}
						text={event.text}
						linkedIn={event.linkedIn}
						link={event.link}
						url={event.url}
						icon={event.icon}
						timetext={event.timetext}
					/>
				</motion.div>
			))}
		</motion.div>
	);
}

export default Timeline_container;
