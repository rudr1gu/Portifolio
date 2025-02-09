import { motion } from "framer-motion";
import SkillCard from "./skillcard/SkillCard";
import skillsData from "./skillsData";

const Skill = () => {
  return (
    <section className="py-20 px-4 bg-gray-200 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Habilidades Técnicas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <SkillCard icon={skill.icon} title={skill.title} skills={skill.skills} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
