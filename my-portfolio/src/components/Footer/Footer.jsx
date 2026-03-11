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
			className="border-t border-[#5a3e8f]/35 bg-[#0d1117d9] py-8 text-slate-400 backdrop-blur-[2px]"
			variants={staggerContainer(0.08, 0.02)}
			initial="hidden"
			whileInView="visible"
			viewport={viewportReveal}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col justify-between gap-6 lg:flex-row">
					<motion.div className="lg:w-1/2" variants={fadeUp(10)}>
						<h3 className="mb-1 text-lg font-semibold text-slate-100">
							Walid Bouhenika
						</h3>
						<p className="text-sm text-slate-500">
							Building things. Breaking things. Learning.
						</p>
					</motion.div>

					<motion.div className="lg:w-1/3" variants={fadeUp(10, 0.05)}>
						<h3 className="mb-1 text-lg font-semibold text-slate-100">
							Get in Touch
						</h3>
						<SocialLinks />
					</motion.div>
				</div>

				<motion.div
					variants={fadeUp(10, 0.1)}
					className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-[#5a3e8f]/35 pt-4 sm:flex-row">
					<p className="text-xs text-slate-600">
						© {new Date().getFullYear()} · Updated{" "}
						{isLoading ? (
							<span className="inline-block w-16 h-3 bg-slate-800 rounded animate-pulse align-middle"></span>
						) : (
							commitDate
						)}
					</p>
					<p className="text-xs text-slate-600">
						React · Tailwind · Framer Motion
					</p>
				</motion.div>
			</div>
		</motion.footer>
	);
}

export default Footer;
