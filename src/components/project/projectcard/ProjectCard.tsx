import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: IconType[];
    repo: string;
}

const ProjectCard = ({ title, description, tags, repo }: ProjectCardProps) => {
    return (
        <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-full h-full">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-4 text-center">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">{description}</p>
            <div className="flex justify-center flex-wrap gap-3 mb-4">
                {tags.map((Icon, index) => (
                    <span key={index} className="text-blue-500 dark:text-blue-400 text-2xl">
                        <Icon />
                    </span>
                ))}
            </div>
            <div className="flex justify-center">
                <a 
                    href={repo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                    <FaGithub /> Ver no GitHub
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;