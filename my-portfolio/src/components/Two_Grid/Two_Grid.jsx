import Skills from "../Skills/Skills";
import Timeline_container from "../Time-line/Timeline_container";

function Two_grid() {
	return (
		<div
			className="
      max-w-7xl mx-auto px-2 md:px-4 py-6 
      grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6
    ">
			{/* Skills Section */}
			<div>
				<h1 className="text-center font-bold text-slate-100 font-outfit text-3xl md:text-4xl mb-2">
					Skills
				</h1>
				<Skills />
			</div>

			{/* Timeline Section */}
			<div>
				<h1 className="text-center font-bold text-slate-100 font-outfit text-3xl md:text-4xl mb-6">
					Timeline
				</h1>
				<Timeline_container />
			</div>
		</div>
	);
}

export default Two_grid;
