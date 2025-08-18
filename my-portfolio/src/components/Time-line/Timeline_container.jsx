import Timeline_DATA from "./Timeline_DATA";
import Timelinecrad from "./timelinecard";

function Timeline_container() {
	return (
		<div className="py-12">
			<h1 className="text-center font-bold text-slate-100 font-outfit leading-relaxed text-4xl md:text-5xl mb-12">
				Timeline
			</h1>
			{Timeline_DATA.map((event) => (
				<div key={event.title} className="flex items-start">
					<div className="flex flex-col items-center">
						<div
							className="
                h-4 w-4 flex-shrink-0 rounded-full m-1 
                bg-purple-500
                shadow-[0_0_10px_rgba(168,85,247,0.7)]
              "></div>
					</div>
					<div
						className="
              w-full pb-4 border-l-2 ml-1 pl-10 border-purple-950 
              shadow-[-2px_0px_15px_-5px_rgba(168,85,247,0.15)]
            ">
						<Timelinecrad
							title={event.title}
							category={event.category}
							text={event.text}
							url={event.url}
							timetext={event.timetext}
						/>
					</div>
				</div>
			))}
		</div>
	);
}

export default Timeline_container;
