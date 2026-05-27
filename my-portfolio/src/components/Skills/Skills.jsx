import React from "react";
import SKILLS_DATA from "./SkillsData.jsx";

const Skills = () => {
	const iconFallbacks = {
		React: "code",
		FastAPI: "bolt",
		"Framer-Motion": "animation",
		JavaScript: "terminal",
		TypeScript: "data_object",
		"CSS / Tailwind": "palette",
		HTML: "code",
		C: "memory",
		Python: "terminal",
		"Git / GitHub": "merge",
		Linux: "terminal",
		Figma: "palette",
		"Adobe Premiere Pro": "movie",
		"Adobe After Effects": "movie",
		Photoshop: "brush",
	};

	const groupedSkills = SKILLS_DATA.reduce((acc, skill) => {
		const group = skill.description || "Other";
		if (!acc[group]) {
			acc[group] = [];
		}
		acc[group].push(skill);
		return acc;
	}, {});

	return (
		<section>
			{Object.entries(groupedSkills).map(([group, skills]) => (
				<div className="md3-skill-group" key={group}>
					<div className="md3-label-lg">{group}</div>
					<div className="md3-skill-chips">
						{skills.map((skill) => {
							const isLocalJpg =
								skill.imageUrl &&
								skill.imageUrl.startsWith("/") &&
								skill.imageUrl.endsWith(".jpg");
							const fallbackIcon = iconFallbacks[skill.title] || "chip";

							return (
								<div className="md3-chip md3-chip--assist" key={skill.title}>
									{isLocalJpg ? (
										<img
											className="md3-chip__icon"
											src={skill.imageUrl}
											alt={`${skill.title} icon`}
										/>
									) : (
										<span
											className="material-symbols-rounded md3-chip__icon"
											aria-hidden="true">
											{fallbackIcon}
										</span>
									)}
									<span className="md3-chip__label">{skill.title}</span>
								</div>
							);
						})}
					</div>
				</div>
			))}
		</section>
	);
};

export default Skills;
