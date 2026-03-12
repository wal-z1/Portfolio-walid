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
			variants={staggerContainer(0.08, 0.03)}
			initial="hidden"
			whileInView="visible"
			viewport={viewportReveal}>
			{Timeline_DATA.map((event, index) => (
				<motion.div
					key={event.title}
					className="flex"
					variants={inOutFadeUp(10, index * 0.02, false)}
					style={{ willChange: "transform, opacity" }}>
					<div className="flex flex-col items-center mr-4">
						<div
							className="
                h-2.5 w-2.5 flex-shrink-0 rounded-full
				bg-[#8f74be]
				shadow-[0_0_8px_rgba(143,116,190,0.65)]
              "></div>
						<div className="w-px flex-grow bg-[#5a3e8f]/55"></div>
					</div>

					<div
						className={`
                            w-full pb-4
                            }
                        `}>
						<Timelinecrad
							title={event.title}
							category={event.category}
							text={event.text}
							url={event.url}
							timetext={event.timetext}
						/>
					</div>
				</motion.div>
			))}
		</motion.div>
	);
}

export default Timeline_container;
