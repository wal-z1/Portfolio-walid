import Timeline_DATA from "./Timeline_DATA";
import Timelinecrad from "./timelinecard";

function Timeline_container() {
	return (
		<div className=" py-12">
			{Timeline_DATA.map((event, index) => (
				<div className="flex items-start ">
					<div className="flex flex-col items-center">
						{/* The Dot */}
						<div className="h-4 w-4 flex-shrink-0 rounded-full bg-purple-950 "></div>
					</div>
					{/* The pb-12 adds spacing between each timeline event */}
					<div className="w-full pb-12 border-l-2 ml-1 pl-10 border-purple-950 ">
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
