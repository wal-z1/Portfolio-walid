import React, { useState } from "react";
import SkillCard from "./Skillcard.jsx";
import ShowButton from "./ShowButton.jsx";
import { motion, AnimatePresence } from "framer-motion";
import SKILLS_DATA from "./SkillsData.jsx";
const Skills = () => {
	const [visibleAmount, setVisibleAmount] = useState(6);

	return (
		<motion.section
			initial={{ opacity: 0, y: -50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8 }}>
			<h1 className="text-center font-bold text-slate-100 font-outfit leading-relaxed text-4xl md:text-5xl mb-12">
				Skills
			</h1>

			<motion.div
				layout
				transition={{ duration: 0.5, ease: "easeInOut" }}
				className="px-10 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#09090b]/20 border-t-2 border-purple-700/50 shadow-[0_-15px_30px_-10px_rgba(168,85,247,0.2)] bg-[url('/Images/noise.png')]">
				<AnimatePresence>
					{SKILLS_DATA.slice(0, visibleAmount).map((skill) => (
						<SkillCard
							key={skill.title}
							title={skill.title}
							description={skill.description}
							imageUrl={skill.imageUrl}
						/>
					))}

					<div className="flex justify-center col-span-full">
						{visibleAmount >= SKILLS_DATA.length ? (
							<ShowButton
								boolean={false}
								callback={() => setVisibleAmount(6)}
							/>
						) : (
							<ShowButton
								boolean={true}
								callback={() => setVisibleAmount((prev) => prev + 3)}
							/>
						)}
					</div>
				</AnimatePresence>
			</motion.div>
		</motion.section>
	);
};

export default Skills;
