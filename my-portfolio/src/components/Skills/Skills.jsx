import React from "react";
import SkillCard from "./Skillcard.jsx";
import { motion } from "framer-motion";
import SKILLS_DATA from "./SkillsData.jsx";

const Skills = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: -40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8 }}
			className="py-8" /* Removed px-1 */
		>
			<div className="flex flex-wrap justify-center gap-4"> 
				{SKILLS_DATA.map((skill) => (
					<SkillCard
						key={skill.title}
						title={skill.title}
						description={skill.description}
						imageUrl={skill.imageUrl}
					/>
				))}
			</div>
		</motion.section>
	);
};

export default Skills;