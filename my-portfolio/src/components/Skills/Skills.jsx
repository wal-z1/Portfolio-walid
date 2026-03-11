import React from "react";
import SkillCard from "./Skillcard.jsx";
import { motion } from "framer-motion";
import SKILLS_DATA from "./SkillsData.jsx";
import {
	fadeUp,
	staggerContainer,
	viewportReplay,
} from "../../lib/motionVariants";

const Skills = () => {
	return (
		<motion.section
			className="py-2"
			variants={staggerContainer(0.06, 0.02)}
			initial="hidden"
			whileInView="visible"
			viewport={viewportReplay}>
			<motion.div
				variants={fadeUp(8)}
				className="flex flex-wrap justify-center gap-1.5 md:gap-2">
				{SKILLS_DATA.map((skill, index) => (
					<SkillCard
						key={skill.title}
						title={skill.title}
						description={skill.description}
						imageUrl={skill.imageUrl}
						index={index}
					/>
				))}
			</motion.div>
		</motion.section>
	);
};

export default Skills;
