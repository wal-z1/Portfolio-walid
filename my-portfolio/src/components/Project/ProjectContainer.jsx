import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "./ProjectsData";
import { motion } from "framer-motion";
import {
	inOutFadeUp,
	staggerContainer,
	viewportReplay,
} from "../../lib/motionVariants";

function ProjectsContainer() {
	return (
		<motion.section
			className="py-6 sm:py-8"
			variants={staggerContainer(0.1, 0.04)}
			initial="hidden"
			whileInView="visible"
			viewport={viewportReplay}>
			<motion.h2
				variants={inOutFadeUp(10)}
				className="mb-5 mt-0 text-center text-3xl font-bold text-slate-100 md:text-4xl">
				Projects
			</motion.h2>
			<motion.div
				variants={inOutFadeUp(10)}
				className="
          mx-auto grid max-w-7xl grid-cols-1 gap-4 px-3
          md:grid-cols-2 md:px-4 lg:grid-cols-3
        ">
				{PROJECTS_DATA.map((project, index) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						description={project.description}
						imageUrl={project.imageUrl}
						techIcons={project.techIcons}
						liveUrl={project.liveUrl}
						index={index}
					/>
				))}
			</motion.div>
		</motion.section>
	);
}

export default ProjectsContainer;
