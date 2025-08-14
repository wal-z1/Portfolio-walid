function BackgroundEle() {
	return (
		<div className="absolute inset-0 -z-10 pointer-events-none">
			{/* Tech & Code Symbols */}
			<div className="absolute top-24 left-16 text-3xl text-[#FAFAFA]/10 animate-pulse font-mono">{`</>`}</div>
			<div className="absolute top-48 right-20 text-4xl text-[#FAFAFA]/10 animate-pulse delay-1000 font-mono">{`{ }`}</div>
			<div className="absolute bottom-32 left-20 text-2xl text-[#FAFAFA]/10 animate-pulse delay-500 font-mono">
				0101
			</div>
			<div className="absolute top-72 left-1/3 text-xl text-[#FAFAFA]/10 animate-pulse delay-700 font-mono">
				=&gt;
			</div>
			<div className="absolute bottom-48 right-1/3 text-3xl text-[#FAFAFA]/10 animate-pulse delay-300 font-mono">
				#
			</div>

			{/* Geometric Shapes */}
			<div
				className="absolute top-60 right-32 w-36 h-36 border border-[#FAFAFA]/10 rotate-12 animate-spin"
				style={{ animationDuration: "60s" }}></div>
			<div className="absolute bottom-60 left-32 w-28 h-28 border border-[#FAFAFA]/10 rounded-full animate-pulse"></div>
			<div
				className="absolute top-80 left-1/4 w-32 h-32 border-2 border-dotted border-[#FAFAFA]/10 rounded-full animate-spin"
				style={{
					animationDuration: "80s",
					animationDirection: "reverse",
				}}></div>
			<div className="absolute bottom-24 right-1/4 w-48 h-24 border border-[#FAFAFA]/10 rounded-full rotate-45"></div>
		</div>
	);
}

export default BackgroundEle;
