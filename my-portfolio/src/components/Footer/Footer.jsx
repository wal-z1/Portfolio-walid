import { useEffect, useState } from "react";
import { formatRelative } from "date-fns";
import SocialLinks from "../SocialLinks/SocialLinks";

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
		<footer className="bg-[#0d1117] text-slate-400 py-6">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row justify-between gap-6">
					<div className="lg:w-1/2">
						<h3 className="text-xl font-bold text-slate-100 mb-2">
							Walid Bouhenika
						</h3>
						<p className="text-sm leading-relaxed text-slate-400">
							CS student passionate about building things, solving problems, and
							exploring new technologies. Check out my projects above!
						</p>
					</div>

					<div className="lg:w-1/3">
						<h3 className="text-xl font-bold text-slate-100 mb-2">
							Get in Touch
						</h3>
						<p className="text-sm mb-3 text-slate-400">
							Feel free to reach out via email or connect on social media.
						</p>
						<SocialLinks />
					</div>
				</div>

				<div className="border-t border-slate-800 mt-6 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
					<p className="text-xs text-slate-500">
						© Walid Bouhenika · Last updated{" "}
						{isLoading ? (
							<span className="inline-block w-20 h-3 bg-slate-700 rounded animate-pulse align-middle"></span>
						) : (
							commitDate
						)}
					</p>
					<p className="text-xs text-slate-500">
						Built with React, Framer Motion & Tailwind CSS
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
