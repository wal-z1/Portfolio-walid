import Skills from "../Skills/Skills";
import Timeline_container from "../Time-line/Timeline_container";

function Two_grid() {
	return (
		<div
			className="
      max-w-7xl mx-auto px-4 md:px-8 py-12 
      grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12
    ">
			{/* Skills Section */}
			<div>
				<h1 className="text-center font-bold text-slate-100 font-outfit text-4xl md:text-5xl mb-2">
					Skills
				</h1>
				<Skills />
			</div>

			{/* Timeline Section */}
			<div>
				<h1 className="text-center font-bold text-slate-100 font-outfit text-4xl md:text-5xl mb-12">
					Timeline
				</h1>
				<Timeline_container />
			</div>
		</div>
	);
}

export default Two_grid;
