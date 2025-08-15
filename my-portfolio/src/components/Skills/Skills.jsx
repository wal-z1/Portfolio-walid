import SkillCard from "./Skillcard.jsx";
{
	/*ill need to use a grid for better respo , and show a card based on device */
}
function Skills() {
	return (
		<>
			<div>
				<h1
					className="text-center font-bold text-slate-100 mb-4 font-outfit leading-relaxed
">
						Skills
				</h1>
				<div
					className=" px-10 py-13 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8
  bg-[#09090b]/20   border-t-2   border-purple-700/50  shadow-[0_-15px_30px_-10px_rgba(168,85,247,0.2)] bg-[url('/Images/noise.svg')]">
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
			</div>
		</>
	);
}

export default Skills;
