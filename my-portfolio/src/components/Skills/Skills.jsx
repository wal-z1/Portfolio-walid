import SkillCard from "./Skillcard.jsx";
{
	/*ill need to use a grid for better respo , and show a card based on device */
}
function Skills() {
	return (
		<>
			<h1 className="bg-gradient-to-b from-slate-800 via-violet-500 to-zinc-700 bg-clip-text text-transparent">
				test
			</h1>
			<div className=" px-10 py-13 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
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
		</>
	);
}

export default Skills;
