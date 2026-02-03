import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "./ProjectsData";

function ProjectsContainer() {
	return (
		<section className="py-6">
			<h2 className="text-center font-bold text-slate-100 text-3xl md:text-4xl mb-6 mt-0">
				Projects
			</h2>
			<div
				className="
          max-w-7xl mx-auto px-2
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
        ">
				{PROJECTS_DATA.map((project) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						description={project.description}
						imageUrl={project.imageUrl}
						techIcons={project.techIcons}
						liveUrl={project.liveUrl}
					/>
				))}
			</div>
		</section>
	);
}

export default ProjectsContainer;
