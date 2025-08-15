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
			<div
				className=" px-10 py-13 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8
  bg-[#09090b]/20   border-t-2   border-purple-700/50  shadow-[0_-15px_30px_-10px_rgba(168,85,247,0.2)] 
  bg-blend-overlay
  bg-[url('')]">
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
