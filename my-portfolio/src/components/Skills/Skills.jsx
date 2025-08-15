import SkillCard from "./Skillcard.jsx";
{
	/*ill need to use a grid for better respo , and show a card based on device */
}
function Skills() {
	return (
		<div className=" px-10 py-13 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
			<SkillCard
				title={"hi"}
				description={"hiii"}
				imageUrl={"https://placehold.co/300"}
			/>
			<SkillCard
				title={"hi"}
				description={"hiii"}
				imageUrl={"https://placehold.co/300"}
			/>
			<SkillCard
				title={"hi"}
				description={"hiii"}
				imageUrl={"https://placehold.co/300"}
			/>
			<SkillCard
				title={"hi"}
				description={"hiii"}
				imageUrl={"https://placehold.co/300"}
			/>
			<SkillCard
				title={"hi"}
				description={"hiii"}
				imageUrl={"https://placehold.co/300"}
			/>
			<SkillCard
				title={"hi"}
				description={"hiii"}
				imageUrl={"https://placehold.co/300"}
			/>
		</div>
	);
}

export default Skills;
