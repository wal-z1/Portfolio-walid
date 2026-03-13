import React from "react";
import SkillCard from "./Skillcard.jsx";
import SKILLS_DATA from "./SkillsData.jsx";

const Skills = () => {
	return (
		<section className="py-1">
			<div className="flex flex-wrap justify-center gap-1 md:gap-1.5">
				{SKILLS_DATA.map((skill, index) => (
					<SkillCard
						key={skill.title}
						title={skill.title}
						description={skill.description}
						imageUrl={skill.imageUrl}
						index={index}
					/>
				))}
			</div>
		</section>
	);
};

export default Skills;
