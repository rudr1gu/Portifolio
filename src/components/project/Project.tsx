import ProjectCard from "./projectcard/ProjectCard";
import projects from "./Projects";

const Project = () => {
    return (
        <section className="py-20 px-4 bg-gray-200 dark:bg-gray-900">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">Projetos em Destaque</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            repo={project.repo}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;