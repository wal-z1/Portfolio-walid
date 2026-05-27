function SkillCard({ title, description, imageUrl, index = 0 }) {
	return (
		<div
			className="md3-skill-card"
			style={{ willChange: "transform, opacity" }}>
			<img
				className="md3-skill-card__icon"
				src={imageUrl}
				alt={`${title} icon`}
			/>
			<h5 className="md3-skill-card__title">{title}</h5>
			<p className="md3-skill-card__desc">{description}</p>
		</div>
	);
}

export default SkillCard;
