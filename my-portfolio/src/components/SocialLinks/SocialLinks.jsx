function SocialLinks() {
	return (
		<div className="flex items-center space-x-3 mt-8 max-[1084px]:self-center">
			{/* GitHub */}
			<a
				href="https://github.com/wal-z1"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub"
				className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-all duration-300 hover:bg-slate-700 hover:scale-110">
				<svg
					className="h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path d="M9 19c-4.3 1.4 -4.3-2.5 -6-3m12 5v-3.5c0-1 .1-1.4 -.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3 -3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6 -3.5-1.3 -3.5-1.3a4.2 4.2 0 0 0-.1 3.2a4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6.6 -.6 1.2 -.5 2V21" />
				</svg>
			</a>

			{/* LinkedIn */}
			<a
				href="https://www.linkedin.com/in/bouhenika-walid/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="LinkedIn"
				className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-all duration-300 hover:bg-slate-700 hover:scale-110">
				<svg
					className="h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
					<rect x="2" y="9" width="4" height="12" />
					<circle cx="4" cy="4" r="2" />
				</svg>
			</a>

			{/* Email */}
			<a
				href="mailto:ow_bouhenika@esi.dz"
				aria-label="Email"
				className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-all duration-300 hover:bg-slate-700 hover:scale-110">
				<svg
					className="h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round">
					<rect x="2" y="4" width="20" height="16" rx="2" />
					<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
				</svg>
			</a>

			{/* Divider */}
			<div className="w-px h-6 bg-slate-600"></div>

			{/* picoCTF */}
			<a
				href="https://play.picoctf.org/users/walid_z1"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="picoCTF"
				className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 hover:bg-slate-700 hover:scale-110">
				<img
					src="/picomonochrome.png"
					alt="picoCTF"
					className="h-6 w-6 object-contain"
				/>
			</a>

			{/* HackTheBox */}
			<a
				href="https://app.hackthebox.com/public/users/2941075"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="HackTheBox"
				className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-all duration-300 hover:bg-slate-700 hover:scale-110">
				<svg
					className="h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
					<path d="m3.3 7 8.7 5 8.7-5" />
					<path d="M12 22V12" />
				</svg>
			</a>
		</div>
	);
}

export default SocialLinks;
