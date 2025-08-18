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
                aspect-square w-32 md:w-36 flex-shrink-0
                flex flex-col items-center text-center justify-center
                p-2 m-2
                rounded-lg shadow-lg bg-[rgba(46,28,70,0.1)]
                backdrop-blur-sm backdrop-saturate-100 border border-[#441570]
                shadow-purple-900/20 transition-colors duration-300
                hover:border-[hsl(271,70%,64%)]
            ">
			<div className="mb-1">
				<img
					className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
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
