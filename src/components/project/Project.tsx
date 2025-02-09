import { useEffect, useRef, useState } from "react";
import ProjectCard from "./projectcard/ProjectCard";
import projects from "./Projects";
import { motion } from "framer-motion";

const Project = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => setIsVisible(entries.isIntersecting),
            {threshold: 0.4}
        );

        if (ref.current){
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section ref={ref} id="project" className="py-20 px-4 bg-gray-200 dark:bg-gray-900">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">Projetos em Destaque</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible ? { opacity: 1, y: 0 }: {}}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            repo={project.repo}
                        />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;