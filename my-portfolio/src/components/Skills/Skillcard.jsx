function SkillCard({ title, description, imageUrl, index = 0 }) {
	return (
		<div
			className={
				"m-0.5 flex aspect-square w-20 flex-shrink-0 flex-col items-center justify-center rounded-lg border border-[#5a3e8f]/40 " +
				"bg-[rgba(70,38,122,0.18)] p-1 text-center shadow-[0_6px_14px_rgba(15,23,42,0.18)] transform transition-transform duration-150 ease-out md:w-24 " +
				"hover:border-[#7a62ac] hover:-translate-y-1 hover:scale-105"
			}
			style={{ willChange: "transform, opacity" }}>
			<div className="mb-1">
				<img
					className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
					src={imageUrl}
					alt={`${title} icon`}
				/>
			</div>

			<div className="flex flex-col justify-center leading-normal">
				<h5 className="m-0 text-xs font-bold tracking-tight text-white sm:text-sm">
					{title}
				</h5>
				<p className="mt-0.5 px-1 text-xs font-normal text-gray-400">
					{description}
				</p>
			</div>
		</div>
	);
}

export default SkillCard;
