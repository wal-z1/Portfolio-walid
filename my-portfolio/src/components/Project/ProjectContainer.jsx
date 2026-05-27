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
			className="md3-container"
			variants={staggerContainer(0.1, 0.04)}
			initial="hidden"
			whileInView="visible"
			viewport={viewportReplay}>
			<motion.h2
				variants={inOutFadeUp(10)}
				className="md-headline"
				style={{ textAlign: "center", marginBottom: 20 }}>
				Projects
			</motion.h2>
			<motion.div
				variants={inOutFadeUp(10)}
				className="md3-grid md3-grid--three">
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
