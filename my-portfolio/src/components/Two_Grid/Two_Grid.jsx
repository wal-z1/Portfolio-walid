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
		<motion.div
			className="
      mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-6 px-3 py-6 md:px-4 lg:grid-cols-2
    ">
			{/* Skills Section */}
			<motion.div
				className="rounded-2xl border border-[#5a3e8f]/45 bg-[#0d111740] p-3 shadow-[0_12px_36px_rgba(0,0,0,0.2)] backdrop-blur-[2px] sm:p-4"
				variants={staggerContainer(0.08, 0.02)}
				initial="hidden"
				whileInView="visible"
				viewport={viewportReveal}>
				<motion.h1
					variants={fadeUp(10)}
					className="mb-2 text-center font-outfit text-3xl font-bold text-slate-100 md:text-4xl">
					Skills
				</motion.h1>
				<Skills />
			</motion.div>

			{/* Timeline Section */}
			<motion.div
				className="rounded-2xl border border-[#5a3e8f]/45 bg-[#0d111740] p-3 shadow-[0_12px_36px_rgba(0,0,0,0.2)] backdrop-blur-[2px] sm:p-4"
				variants={staggerContainer(0.08, 0.08)}
				initial="hidden"
				whileInView="visible"
				viewport={viewportReveal}>
				<motion.h1
					variants={fadeUp(10)}
					className="mb-4 text-center font-outfit text-3xl font-bold text-slate-100 md:text-4xl">
					Timeline
				</motion.h1>
				<Timeline_container />
			</motion.div>
		</motion.div>
	);
}

export default Two_grid;
