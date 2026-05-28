import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { hoverLift, tapPress } from "../../lib/motionVariants";

const categoryIconMap = {
	Achievement: "emoji_events",
	Education: "school",
	"Professional Experience": "work",
};

function Timelinecrad({
	category,
	title,
	linkedIn,
	link,
	url,
	icon,
	text,
	timetext,
}) {
	const iconName = icon || categoryIconMap[category] || "event";
	const hasLinkedIn = Boolean(linkedIn?.url);
	const hasLink = Boolean(link?.url);

	return (
		<motion.div
			whileHover={hoverLift}
			whileTap={tapPress}
			className="md3-list-item timeline-card">
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
				{hasLink ? (
					<a
						className="timeline-card__linkout"
						href={link.url}
						target="_blank"
						rel="noreferrer">
						{link.label || "Learn more"}
					</a>
				) : null}
				{hasLinkedIn ? (
					<div className="timeline-card__link">
						<a
							className="timeline-link"
							href={linkedIn.url}
							target="_blank"
							rel="noreferrer"
							aria-label="Open LinkedIn post">
							LinkedIn post
						</a>
						<div className="timeline-link-preview" role="presentation">
							<div className="timeline-link-thumb" aria-hidden="true">
								{linkedIn.image ? (
									<img
										src={linkedIn.image}
										alt=""
										className="timeline-link-thumb__img"
									/>
								) : (
									"in"
								)}
							</div>
							<div className="timeline-link-meta">
								<div className="timeline-link-title">
									{linkedIn.title || "LinkedIn post"}
								</div>
								<div className="timeline-link-excerpt">{linkedIn.excerpt}</div>
							</div>
						</div>
					</div>
				) : null}
			</div>
			<div className="md3-list-item__trailing">{timetext}</div>
		</motion.div>
	);
}

Timelinecrad.propTypes = {
	category: PropTypes.string,
	title: PropTypes.string,
	linkedIn: PropTypes.shape({
		url: PropTypes.string,
		title: PropTypes.string,
		excerpt: PropTypes.string,
		image: PropTypes.string,
	}),
	link: PropTypes.shape({
		url: PropTypes.string,
		label: PropTypes.string,
	}),
	url: PropTypes.string,
	icon: PropTypes.string,
	text: PropTypes.string,
	timetext: PropTypes.string,
};

export default Timelinecrad;
