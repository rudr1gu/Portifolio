import React from 'react';

interface Skill {
  icon: string;
  name: string;
}

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => {
  return (
    <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-full h-full">
      <div className="flex justify-center mb-4 text-gray-700 dark:text-gray-200 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-center text-gray-700 dark:text-white mb-4">
        {title}
      </h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center justify-start gap-2 text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300 hover:text-blue-500"
          >
            <i className={`bx ${skill.icon} text-xl`}></i>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;