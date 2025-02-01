
interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
}

const ProjectCard = ({ title, description, tags }: ProjectCardProps) =>{
    return (
        <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;