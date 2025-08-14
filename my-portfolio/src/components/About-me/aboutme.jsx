function Aboutme() {
	return (
		<div className="flex justify-center items-center  py-8 px-4 sm:px-8 md:px-16">
			<div
				id="text-s"
				className="
					
					w-full max-w-4xl flex flex-col items-start rounded-xl
					p-6 md:p-8
					
					bg-[rgba(59,11,65,0.1)] backdrop-blur-sm backdrop-saturate-100

					border-2 border-[#441570]
					transition-all duration-300 
					hover:border-[#a855f7] 
					hover:shadow-2xl hover:shadow-purple-700/20
				">
				<h1
					className="
					 self-center
					 font-bold text-slate-100 mb-4
				">
					About Me
				</h1>

				<p
					className="
					text-left text-lg leading-relaxed text-slate-300 md:text-xl
				">
					I am a Computer Science Engineering student at the Higher National
					School of Computer Science in Algeria. I enjoy working with
					technology, finding innovative methods to solve problems, and making
					sure what I created really works. Personally, I like to do things
					correctly, enjoy keeping things clean, and appreciate whatever I am
					doing.
				</p>
			</div>
		</div>
	);
}

export default Aboutme;
