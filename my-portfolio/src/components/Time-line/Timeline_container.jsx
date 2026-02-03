import Timeline_DATA from "./Timeline_DATA";
import Timelinecrad from "./timelinecard";

function Timeline_container() {
	return (
		<div>
			{Timeline_DATA.map((event, index) => (
				<div key={event.title} className="flex">
					<div className="flex flex-col items-center mr-4">
						<div
							className="
                h-2.5 w-2.5 flex-shrink-0 rounded-full
                bg-slate-400
                shadow-[0_0_8px_rgba(148,163,184,0.6)]
              "></div>
						<div className="w-px flex-grow bg-slate-700/50"></div>
					</div>

					<div
						className={`
                            w-full pb-4
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
