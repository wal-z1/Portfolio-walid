import React, { useState } from "react";
import SkillCard from "./Skillcard.jsx";
import ShowMoreButton from "./ShowMore&less.jsx";

// Constants
const SKILLS_DATA = [
	{
		title: "C",
		description: "Programming Languages",
		imageUrl:
			"https://img.icons8.com/?size=96&id=40670&format=png&color=ffffff",
	},
	{
		title: "Python",
		description: "Programming Languages",
		imageUrl:
			"https://img.icons8.com/?size=96&id=13441&format=png&color=ffffff",
	},
	{
		title: "JavaScript",
		description: "Web Technologies",
		imageUrl:
			"https://img.icons8.com/?size=96&id=108784&format=png&color=ffffff",
	},
	{
		title: "HTML",
		description: "Web Technologies",
		imageUrl:
			"https://img.icons8.com/?size=96&id=20909&format=png&color=ffffff",
	},
	{
		title: "CSS / Tailwind",
		description: "Web Technologies",
		imageUrl:
			"https://img.icons8.com/?size=96&id=21278&format=png&color=ffffff",
	},
	{
		title: "React",
		description: "Web Technologies",
		imageUrl:
			"https://img.icons8.com/?size=96&id=NfbyHexzVEDk&format=png&color=ffffff",
	},
	{
		title: "Linux (Kali / Ubuntu)",
		description: "Tools & Technologies",
		imageUrl:
			"https://img.icons8.com/?size=96&id=17842&format=png&color=ffffff",
	},
	{
		title: "Git / GitHub",
		description: "Tools & Technologies",
		imageUrl:
			"https://img.icons8.com/?size=96&id=20906&format=png&color=ffffff",
	},
	{
		title: "Adobe Premiere Pro",
		description: "Creative Tools",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/96px-Adobe_Premiere_Pro_CC_icon.svg.png",
	},
	{
		title: "Figma",
		description: "Creative Tools",
		imageUrl:
			"https://static.vecteezy.com/system/resources/previews/065/386/871/non_2x/figma-logo-icon-figma-app-editable-transparent-background-premium-social-media-design-for-digital-download-free-png.png",
	},
	{
		title: "Adobe After Effects",
		description: "Creative Tools",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/96px-Adobe_After_Effects_CC_icon.svg.png",
	},
	{
		title: "Photoshop",
		description: "Creative Tools",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/96px-Adobe_Photoshop_CC_icon.svg.png",
	},
	{
		title: "Microsoft Suite",
		description: "Office Tools (Word, Excel, PowerPoint)",
		imageUrl:
			"https://iconape.com/wp-content/png_logo_vector/microsoft-office-icon-2019.png",
	},
];

// Utility functions
const getRandomNumber = (min, max) => {
	return Math.floor(min + Math.random() * (max - min));
};

const shuffleArray = (array, amount) => {
	const result = [];
	const copy = [...array];

	for (let i = 0; i < amount; i++) {
		if (copy.length === 0) {
			console.error("Problem with shuffle amount being 0");
			break;
		}

		const randomIndex = getRandomNumber(0, copy.length);
		result.push(copy[randomIndex]);
		copy.splice(randomIndex, 1);
	}

	return result;
};

// Main component
const Skills = () => {
	const [shuffledSkills, setShuffledSkills] = useState(() =>
		shuffleArray(SKILLS_DATA, SKILLS_DATA.length)
	);
	const [visibleAmount, setVisibleAmount] = useState(6);

	return (
		<section>
			<h1 className="text-center font-bold text-slate-100 font-outfit leading-relaxed text-4xl md:text-5xl mb-12">
				Skills
			</h1>

			<div className="px-10 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#09090b]/20 border-t-2 border-purple-700/50 shadow-[0_-15px_30px_-10px_rgba(168,85,247,0.2)] bg-[url('/Images/noise.png')]">
				{shuffledSkills.slice(0, visibleAmount).map((skill) => (
					<SkillCard
						key={skill.title}
						title={skill.title}
						description={skill.description}
						imageUrl={skill.imageUrl}
					/>
				))}

				<div className="flex justify-center col-span-full">
					<ShowMoreButton
						text="Show More"
						callback={() => setVisibleAmount((prev) => prev + 3)}
					/>
				</div>
			</div>
		</section>
	);
};

export default Skills;
