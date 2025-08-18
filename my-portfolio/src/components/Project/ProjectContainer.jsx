import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "./ProjectsData";

function ProjectsContainer() {
	return (
		<section className="py-12">
			<h2 className="text-center font-bold text-slate-100 text-4xl md:text-5xl mb-12 mt-0">
				Projects
			</h2>
			<div
				className="
          max-w-7xl mx-auto px-4
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
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
