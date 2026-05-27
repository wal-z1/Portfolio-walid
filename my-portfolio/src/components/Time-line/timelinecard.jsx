import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { hoverLift, tapPress } from "../../lib/motionVariants";

const categoryIconMap = {
	Achievement: "emoji_events",
	Education: "school",
	"Professional Experience": "work",
};

function Timelinecrad({ category, title, url, icon, text, timetext }) {
	const iconName = icon || categoryIconMap[category] || "event";

	return (
		<motion.div
			whileHover={hoverLift}
			whileTap={tapPress}
			className="md3-list-item">
			<div className="md3-list-item__leading">
				{url ? (
					<img src={url} alt="icon" className="h-6 w-6 object-contain" />
				) : (
					<span aria-hidden="true">{iconName}</span>
				)}
			</div>
			<div>
				<div
					className="md-label"
					style={{ color: "var(--md-on-surface-variant)" }}>
					{category}
				</div>
				<div className="md3-list-item__headline">{title}</div>
				<div className="md3-list-item__supporting">{text}</div>
			</div>
			<div className="md3-list-item__trailing">{timetext}</div>
		</motion.div>
	);
}

Timelinecrad.propTypes = {
	category: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string,
	icon: PropTypes.string,
	text: PropTypes.string,
	timetext: PropTypes.string,
};

export default Timelinecrad;
