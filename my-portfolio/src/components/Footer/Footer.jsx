import { useEffect, useState } from "react";
import { formatRelative } from "date-fns";
import SocialLinks from "../SocialLinks/SocialLinks";
import { motion } from "framer-motion";
import {
	fadeUp,
	staggerContainer,
	viewportReveal,
} from "../../lib/motionVariants";

function Footer() {
	const [commitDate, setCommitDate] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	async function fetchCommits() {
		try {
			const res = await fetch(
				"https://api.github.com/repos/wal-z1/Portfolio-walid/commits",
			);
			const data = await res.json();
			const latestDate = data[0].commit.author.date;
			setCommitDate(formatRelative(new Date(latestDate), new Date()));
		} catch (err) {
			console.error(err);
			setCommitDate("recently");
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchCommits();
	}, []);

	return (
		<motion.footer
			className="md3-footer"
			variants={staggerContainer(0.08, 0.02)}
			initial="hidden"
			whileInView="visible"
			viewport={viewportReveal}>
			<div className="md3-container">
				<div className="flex flex-col justify-between gap-4 lg:flex-row">
					<motion.div className="lg:w-1/2" variants={fadeUp(10)}>
						<h3 className="md-title">Walid Bouhenika</h3>
						<p
							className="md-body"
							style={{ color: "var(--md-on-surface-variant)" }}>
							Building things. Breaking things. Learning.
						</p>
					</motion.div>

					<motion.div className="lg:w-1/3" variants={fadeUp(10, 0.05)}>
						<h3 className="md-title">Get in Touch</h3>
						<SocialLinks />
					</motion.div>
				</div>

				<motion.div
					variants={fadeUp(10, 0.1)}
					className="mt-4 flex flex-col items-center justify-between gap-1 pt-3 sm:flex-row">
					<p
						className="md-label"
						style={{ color: "var(--md-on-surface-variant)" }}>
						© {new Date().getFullYear()} · Updated{" "}
						{isLoading ? (
							<span
								className="inline-block h-3 w-16 rounded"
								style={{ background: "var(--md-outline-variant)" }}></span>
						) : (
							commitDate
						)}
					</p>
					<p
						className="md-label"
						style={{ color: "var(--md-on-surface-variant)" }}>
						React · Tailwind · Framer Motion
					</p>
				</motion.div>
			</div>
		</motion.footer>
	);
}

export default Footer;
