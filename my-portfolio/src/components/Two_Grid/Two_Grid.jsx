import Skills from "../Skills/Skills";
import Timeline_container from "../Time-line/Timeline_container";
import { motion } from "framer-motion";
import {
	fadeUp,
	staggerContainer,
	viewportReveal,
} from "../../lib/motionVariants";

function Two_grid() {
	return (
		<motion.div className="md3-container md3-grid md3-grid--two">
			{/* Skills Section */}
			<motion.div
				className="md3-card md3-card--filled"
				variants={staggerContainer(0.08, 0.02)}
				initial="hidden"
				whileInView="visible"
				viewport={viewportReveal}>
				<motion.h1
					variants={fadeUp(10)}
					className="md-headline md3-section-title">
					Skills
				</motion.h1>
				<Skills />
			</motion.div>

			{/* Timeline Section */}
			<motion.div
				className="md3-card md3-card--tonal"
				variants={staggerContainer(0.08, 0.08)}
				initial="hidden"
				whileInView="visible"
				viewport={viewportReveal}>
				<motion.h1
					variants={fadeUp(10)}
					className="md-headline md3-section-title">
					Timeline
				</motion.h1>
				<Timeline_container />
			</motion.div>
		</motion.div>
	);
}

export default Two_grid;
