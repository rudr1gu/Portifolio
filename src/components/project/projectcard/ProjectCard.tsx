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
        <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((Icon, index) => (
                    <span key={index} className="text-blue-500 text-xl">
                        <Icon />
                    </span>
                ))}
            </div>
            <a 
                href={repo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
            >
                <FaGithub /> Ver no GitHub
            </a>
        </div>
    );
};

export default ProjectCard;
