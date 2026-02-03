import { motion } from "framer-motion";

function ProjectCard({ title, description, imageUrl, techIcons, liveUrl }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ amount: 0.3 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			whileHover={{ y: -8, transition: { duration: 0.3 } }}
			className="
        rounded-lg bg-[#12161e] border border-[#2d3a4d] 
        overflow-hidden flex flex-col h-full
      ">
			<div className="overflow-hidden">
				<img
					src={
						imageUrl ||
						"https://thumbs.dreamstime.com/b/green-pink-color-blur-background-ratio-green-pink-color-blur-background-ratio-123722548.jpg"
					}
					alt={`${title} project screenshot`}
					className="
            w-full h-48 object-cover object-top 
            align-middle max-w-full border-0
          "
				/>
			</div>

			<div className="p-3 flex flex-col flex-grow">
				<h3
					className="
            text-lg font-bold text-white mb-1 
            m-0 p-0 leading-snug
          ">
					{title}
				</h3>

				<p
					className="
            text-gray-400 text-sm leading-relaxed flex-grow 
            m-0 p-0
          ">
					{description}
				</p>

				<div className="flex justify-between items-center mt-3">
					<a
						href={liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="
              text-blue-400 font-semibold text-sm flex items-center gap-2
              hover:text-blue-300 transition-colors duration-300
              no-underline m-0 p-0
            ">
						Check Out
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="inline-block"
						/>
					</a>
				</div>
			</div>
		</motion.div>
	);
}

export default ProjectCard;
