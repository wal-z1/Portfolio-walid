import { motion } from "framer-motion";
import {
	fadeUp,
	hoverLift,
	staggerContainer,
	tapPress,
	viewportReplay,
} from "../../lib/motionVariants";

function SocialLinks({ align = "center" }) {
	const isLeft = align === "left";
	const containerAlignment = isLeft
		? "justify-start self-start max-[1084px]:self-start"
		: "justify-center max-[1084px]:self-center";

	return (
		<motion.div
			className={`mt-5 flex flex-wrap items-center gap-2 ${containerAlignment}`}
			variants={staggerContainer(0.05, 0.04)}
			initial="hidden"
			whileInView="visible"
			viewport={viewportReplay}>
			{/* GitHub */}
			<motion.a
				href="https://github.com/wal-z1"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub"
				variants={fadeUp(8)}
				whileHover={hoverLift}
				whileTap={tapPress}
				className="md3-icon-button"
				style={{ border: "1px solid var(--md-outline-variant)" }}>
				<svg
					className="md3-icon-button__icon"
					viewBox="0 0 24 24"
					aria-hidden="true">
					<path
						d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.333-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.014 2.896-.014 3.286 0 .32.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
						fill="currentColor"
					/>
				</svg>
			</motion.a>

			{/* LinkedIn */}
			<motion.a
				href="https://www.linkedin.com/in/bouhenika-walid/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="LinkedIn"
				variants={fadeUp(8)}
				whileHover={hoverLift}
				whileTap={tapPress}
				className="md3-icon-button"
				style={{ border: "1px solid var(--md-outline-variant)" }}>
				<svg
					className="md3-icon-button__icon"
					viewBox="0 0 24 24"
					aria-hidden="true">
					<path
						d="M0 1.146C0 .513.526 0 1.175 0h21.65C23.474 0 24 .513 24 1.146v21.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 24 0 23.487 0 22.854V1.146zM7.2 20.452V9h-3.6v11.452H7.2zM5.4 7.433c1.257 0 2.04-.834 2.04-1.875-.024-1.066-.783-1.875-2.016-1.875-1.234 0-2.04.809-2.04 1.875 0 1.041.783 1.875 1.992 1.875h.024zM20.452 20.452V14.1c0-3.401-1.817-4.984-4.24-4.984-1.957 0-2.82 1.08-3.31 1.84V9h-3.6c.048 1.186 0 11.452 0 11.452h3.6v-6.4c0-.342.024-.684.125-.93.273-.684.896-1.392 1.94-1.392 1.369 0 1.917 1.05 1.917 2.588v6.134h3.568z"
						fill="currentColor"
					/>
				</svg>
			</motion.a>

			{/* Email */}
			<motion.a
				href="mailto:ow_bouhenika@esi.dz"
				aria-label="Email"
				variants={fadeUp(8)}
				whileHover={hoverLift}
				whileTap={tapPress}
				className="md3-icon-button"
				style={{ border: "1px solid var(--md-outline-variant)" }}>
				<svg
					className="md3-icon-button__icon"
					viewBox="0 0 24 24"
					aria-hidden="true">
					<rect
						x="3"
						y="5"
						width="18"
						height="14"
						rx="2"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
					/>
					<path
						d="M3 7l9 6 9-6"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</motion.a>

			{/* picoCTF */}
			<motion.a
				href="https://play.picoctf.org/users/walid_z1"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="picoCTF"
				variants={fadeUp(8)}
				whileHover={hoverLift}
				whileTap={tapPress}
				className="md3-icon-button"
				style={{ border: "1px solid var(--md-outline-variant)" }}>
				<img
					src="/picomonochrome.png"
					alt="picoCTF"
					className="md3-icon-button__icon"
				/>
			</motion.a>

			{/* HackTheBox */}
			<motion.a
				href="https://app.hackthebox.com/public/users/2941075"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="HackTheBox"
				variants={fadeUp(8)}
				whileHover={hoverLift}
				whileTap={tapPress}
				className="md3-icon-button"
				style={{ border: "1px solid var(--md-outline-variant)" }}>
				<svg
					className="md3-icon-button__icon"
					viewBox="0 0 24 24"
					aria-hidden="true">
					<path
						d="M12 0 0 6v12l12 6 12-6V6L12 0zm0 2.67 9.6 4.8v9.06L12 21.33 2.4 16.53V7.47L12 2.67z"
						fill="currentColor"
					/>
					<path
						d="m2.4 7.47 9.6 4.8 9.6-4.8"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
					/>
					<path
						d="M12 21.33V12"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
					/>
				</svg>
			</motion.a>
		</motion.div>
	);
}

export default SocialLinks;
