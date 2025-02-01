interface SkillCardProps {
    icon: React.ReactNode;
    title: string;
    skills: string[];
  }

const SkillCard = ({ icon, title, skills }: SkillCardProps) => {
    return (
      <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="text-gray-600">{skill}</li>
          ))}
        </ul>
      </div>
    );
  }

export default SkillCard;