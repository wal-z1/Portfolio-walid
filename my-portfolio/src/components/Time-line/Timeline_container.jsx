import Timeline_DATA from "./Timeline_DATA";
import Timelinecrad from "./timelinecard";

function Timeline_container() {
	return (
		<div>
			{Timeline_DATA.map((event, index) => (
				<div key={event.title} className="flex">
					<div className="flex flex-col items-center mr-6">
						<div
							className="
                h-3 w-3 flex-shrink-0 rounded-full
                bg-purple-500
                shadow-[0_0_8px_rgba(168,85,247,0.7)]
              "></div>
						<div className="w-px flex-grow bg-purple-950/50"></div>
					</div>

					<div
						className={`
                            w-full pb-8
                            }
                        `}>
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
