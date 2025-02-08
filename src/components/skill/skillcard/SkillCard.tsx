interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: { name: string; icon: string }[];
}

const SkillCard = ({ icon, title, skills }: SkillCardProps) => {
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
        {title}
      </h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center justify-start  gap-2 text-gray-600 text-sm"
          >
            <i className={`bx ${skill.icon} text-xl text-blue-500`}></i>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
