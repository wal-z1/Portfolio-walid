import React, { useState } from "react";
import SkillCard from "./Skillcard.jsx";
import ShowButton from "./ShowButton.jsx";
import { motion, AnimatePresence } from "framer-motion";
import SKILLS_DATA from "./SkillsData.jsx";

const Skills = () => {
	const [visibleAmount, setVisibleAmount] = useState(6);

	return (
		<motion.section
			initial={{ opacity: 0, y: -40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8 }}>
			<div className="px-2 md:px-4">
				<motion.div
					layout
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
					<AnimatePresence>
						{SKILLS_DATA.slice(0, visibleAmount).map((skill) => (
							<SkillCard
								key={skill.title}
								title={skill.title}
								description={skill.description}
								imageUrl={skill.imageUrl}
							/>
						))}
					</AnimatePresence>
				</motion.div>
			</div>

			<div className="flex justify-center mt-12">
				{visibleAmount >= SKILLS_DATA.length ? (
					<ShowButton boolean={false} callback={() => setVisibleAmount(6)} />
				) : (
					<ShowButton
						boolean={true}
						callback={() => setVisibleAmount((prev) => prev + 3)}
					/>
				)}
			</div>
		</motion.section>
	);
};

export default Skills;