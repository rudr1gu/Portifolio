import ProjectCard from "./projectcard/ProjectCard";
import projects from "./Projects";


const Project = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Projetos em Destaque</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
