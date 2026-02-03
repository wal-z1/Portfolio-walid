import { motion } from "framer-motion";

function SkillCard({ title, description, imageUrl }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: 50 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			whileTap={{ scale: 0.97 }}
			className="
                aspect-square w-28 md:w-32 flex-shrink-0
                flex flex-col items-center text-center justify-center
                p-1.5 m-1
                rounded-lg shadow-lg bg-[rgba(30,40,60,0.2)]
                border border-[#3d4a63]
                shadow-slate-900/20 transition-colors duration-300
                hover:border-[hsl(220,40%,55%)]
            ">
			<div className="mb-1">
				<img
					className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
					src={imageUrl}
					alt={`${title} icon`}
				/>
			</div>

			<div className="flex flex-col justify-center leading-normal">
				<h5 className="text-sm sm:text-base font-bold tracking-tight text-white m-0">
					{title}
				</h5>
				<p className="mt-0.5 text-xs font-normal text-gray-400">
					{description}
				</p>
			</div>
		</motion.div>
	);
}

export default SkillCard;
