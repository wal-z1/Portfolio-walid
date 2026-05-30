import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { differenceInCalendarDays, formatRelative } from "date-fns";
import {
	inOutFadeUp,
	hoverLift,
	tapPress,
	viewportReplay,
} from "../../lib/motionVariants";

function getGitHubCommitApiUrl(repoUrl) {
	if (!repoUrl) {
		return null;
	}

	const match = repoUrl.match(/github\.com\/([^/]+)\/([^/#?]+)/i);
	if (!match) {
		return null;
	}

	return `https://api.github.com/repos/${match[1]}/${match[2]}/commits?per_page=1`;
}

function getProjectFreshness(updatedAt, isLoading = false) {
	if (isLoading) {
		return {
			label: "Loading",
			color: "#64748b",
			dateLabel: "Fetching latest commit...",
		};
	}

	if (!updatedAt) {
		return {
			label: "Updated",
			color: "#64748b",
			dateLabel: "Unknown",
		};
	}

	const ageInDays = differenceInCalendarDays(new Date(), updatedAt);

	if (ageInDays <= 120) {
		return {
			label: "Fresh",
			color: "#22c55e",
			dateLabel: formatRelative(updatedAt, new Date()),
		};
	}

	if (ageInDays <= 240) {
		return {
			label: "Growing",
			color: "#84cc16",
			dateLabel: formatRelative(updatedAt, new Date()),
		};
	}

	if (ageInDays <= 420) {
		return {
			label: "Established",
			color: "#f59e0b",
			dateLabel: formatRelative(updatedAt, new Date()),
		};
	}

	return {
		label: "Legacy",
		color: "#111827",
		dateLabel: formatRelative(updatedAt, new Date()),
	};
}

function ProjectCard({
	title,
	description,
	imageUrl,
	liveUrl,
	repoUrl,
	index = 0,
}) {
	const [latestCommitDate, setLatestCommitDate] = useState(null);
	const [commitLabel, setCommitLabel] = useState("Fetching latest commit...");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const commitApiUrl = getGitHubCommitApiUrl(repoUrl || liveUrl);
		if (!commitApiUrl) {
			setLatestCommitDate(new Date());
			setCommitLabel(formatRelative(new Date(), new Date()));
			setIsLoading(false);
			return undefined;
		}

		let isActive = true;

		async function fetchLatestCommitDate() {
			try {
				const response = await fetch(commitApiUrl);
				const commits = await response.json();
				const latestDate = commits?.[0]?.commit?.author?.date;
				if (!isActive) {
					return;
				}
				const parsedDate = latestDate ? new Date(latestDate) : new Date();
				setLatestCommitDate(parsedDate);
				setCommitLabel(formatRelative(parsedDate, new Date()));
			} catch (error) {
				if (!isActive) {
					return;
				}
				setLatestCommitDate(new Date());
				setCommitLabel("recently");
				console.error(error);
			} finally {
				if (isActive) {
					setIsLoading(false);
				}
			}
		}

		fetchLatestCommitDate();

		return () => {
			isActive = false;
		};
	}, [repoUrl, liveUrl]);

	const freshness = getProjectFreshness(latestCommitDate, isLoading);
	const sourceUrl = repoUrl || liveUrl;
	const isSourceLink = Boolean(sourceUrl && sourceUrl.includes("github.com"));
	const accentSoft = `${freshness.color}20`;
	const accentStrong = `${freshness.color}40`;
	const cardStyle = {
		"--project-accent": freshness.color,
		"--project-accent-soft": accentSoft,
		"--project-accent-strong": accentStrong,
	};

	return (
		<motion.article
			variants={inOutFadeUp(16, index * 0.02)}
			initial="hidden"
			whileInView="visible"
			viewport={viewportReplay}
			whileHover={hoverLift}
			whileTap={tapPress}
			className="md3-card md3-card--elevated project-card"
			style={cardStyle}>
			<div className="md3-card__media project-card__media">
				<img
					src={
						imageUrl ||
						"https://thumbs.dreamstime.com/b/green-pink-color-blur-background-ratio-green-pink-color-blur-background-ratio-123722548.jpg"
					}
					alt={`${title} project screenshot`}
					className="h-48 w-full object-cover object-top"
				/>
				<div className="project-card__ribbon" aria-hidden="true">
					<span
						className="project-card__ribbon-dot"
						style={{ backgroundColor: freshness.color }}
					/>
					<span className="project-card__ribbon-label">{freshness.label}</span>
					<span className="project-card__ribbon-date">
						{freshness.dateLabel}
					</span>
				</div>
			</div>

			<div className="flex flex-grow flex-col gap-8 p-4">
				<div className="project-card__meta">
					<span
						className="project-card__meta-dot"
						style={{ backgroundColor: freshness.color }}
					/>
					<div className="project-card__meta-copy">
						<span className="project-card__meta-label">Updated</span>
						<span className="project-card__meta-date">{commitLabel}</span>
					</div>
					<span className="project-card__meta-state">{freshness.label}</span>
				</div>

				<div>
					<h3 className="md-title" style={{ margin: 0 }}>
						{title}
					</h3>
					<p className="md-body" style={{ margin: "8px 0 0 0" }}>
						{description}
					</p>
				</div>

				<div className="md3-divider" />
				<div className="project-card__actions">
					{sourceUrl ? (
						<motion.a
							href={sourceUrl}
							target="_blank"
							rel="noopener noreferrer"
							whileTap={tapPress}
							className="md3-chip project-card__action">
							<span className="material-symbols-rounded" aria-hidden="true">
								{isSourceLink ? "terminal" : "code"}
							</span>
							{isSourceLink ? "Source" : "Open"}
						</motion.a>
					) : null}
					{liveUrl && liveUrl !== sourceUrl ? (
						<motion.a
							href={liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							whileTap={tapPress}
							className="md3-chip project-card__action">
							<span className="material-symbols-rounded" aria-hidden="true">
								open_in_new
							</span>
							Live
						</motion.a>
					) : null}
				</div>
			</div>
		</motion.article>
	);
}

export default ProjectCard;
