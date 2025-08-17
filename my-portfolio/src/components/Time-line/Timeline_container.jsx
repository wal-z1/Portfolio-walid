import Timeline_DATA from "./Timeline_DATA";
import Timelinecrad from "./timelinecard";
import { motion } from "framer-motion";

function Timeline_container() {
	return (
		<div>
			{Timeline_DATA.map((event) => (
				<Timelinecrad
					title={event.title}
					key={event.title}
					category={event.category}
					text={event.text}
					url={event.url}
					timetext={event.timetext}
				/>
			))}
		</div>
	);
}
export default Timeline_container;
