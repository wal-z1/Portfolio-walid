import { motion } from "framer-motion";

function BackgroundEle() {
	return (
		<motion.div
			className="pointer-events-none absolute inset-0 -z-10"
			animate={{ opacity: [0.92, 1, 0.92] }}
			transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
			<motion.div
				className="absolute top-24 left-16 text-3xl font-mono text-[#FAFAFA]/10 animate-pulse"
				animate={{ y: [0, -4, 0] }}
				transition={{
					duration: 4.8,
					repeat: Infinity,
					ease: "easeInOut",
				}}>{`</>`}</motion.div>
			<motion.div
				className="absolute right-20 top-48 text-4xl font-mono text-[#FAFAFA]/10 animate-pulse delay-1000"
				animate={{ y: [0, 5, 0] }}
				transition={{
					duration: 5.2,
					repeat: Infinity,
					ease: "easeInOut",
				}}>{`{ }`}</motion.div>
			<div className="absolute left-1/3 top-72 text-xl text-[#FAFAFA]/10 animate-pulse delay-700 font-mono">
				=&gt;
			</div>
			<div className="absolute bottom-48 right-1/3 text-3xl text-[#FAFAFA]/10 animate-pulse delay-300 font-mono">
				#
			</div>
			<div className="absolute top-1/3 left-[45%] text-5xl text-[#FAFAFA]/5 animate-pulse delay-1500 font-mono">
				[ ]
			</div>
			<div className="absolute bottom-1/4 right-12 text-2xl text-[#FAFAFA]/10 animate-pulse delay-200 font-mono">
				//
			</div>
			<div className="absolute top-[60%] left-24 text-4xl text-[#FAFAFA]/10 animate-blink font-mono">
				_
			</div>
			<div
				className="absolute top-60 right-32 w-36 h-36 border border-[#FAFAFA]/10 rotate-12 animate-spin"
				style={{ animationDuration: "60s" }}></div>
			<div
				className="absolute top-80 left-1/4 w-32 h-32 border-2 border-dotted border-[#FAFAFA]/10 rounded-full animate-spin"
				style={{
					animationDuration: "80s",
					animationDirection: "reverse",
				}}></div>
			<div className="absolute bottom-24 right-1/4 w-48 h-24 border border-[#FAFAFA]/10 rounded-full rotate-45"></div>
			<div className="absolute bottom-[10%] left-[10%] w-32 h-px bg-[#FAFAFA]/10 -rotate-45"></div>
			<div className="absolute top-20 right-1/4 h-48 w-48">
				<div className="absolute inset-0 border border-[#FAFAFA]/5 rounded-full animate-pulse"></div>
				<div className="absolute inset-4 border border-[#FAFAFA]/10 rounded-full animate-pulse delay-500"></div>
			</div>
			<div
				className="absolute bottom-100 right-12 w-20 h-20 border border-dashed border-[#FAFAFA]/10 animate-spin"
				style={{ animationDuration: "30s" }}></div>
			<div className="absolute bottom-[20%] left-[20%] w-24 h-16 border border-[#FAFAFA]/5 rounded-lg">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-[#FAFAFA]/10 font-mono animate-pulse">
					*
				</div>
			</div>

			{/* using viewport height (vh)  */}

			<div className="absolute top-[150vh] right-[20%] text-4xl text-[#FAFAFA]/10 animate-pulse delay-300 font-mono">
				&&
			</div>

			<div className="absolute top-[120vh] left-[15%] w-40 h-40 border border-[#FAFAFA]/5 rotate-45"></div>

			<div
				className="absolute top-[180vh] right-[10%] w-32 h-32 border-2 border-dashed border-[#FAFAFA]/10 rounded-full animate-spin"
				style={{ animationDuration: "90s" }}></div>

			<div className="absolute top-[200vh] left-[5%] w-48 h-px bg-[#FAFAFA]/10"></div>

			<div className="absolute top-[220vh] left-[40%] text-3xl text-[#FAFAFA]/5 animate-pulse delay-800 font-mono">
				{"<>"}
			</div>
		</motion.div>
	);
}

export default BackgroundEle;
