import SkillCard from "./skillcard/SkillCard";

const Skill = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Habilidades Técnicas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            icon={<i className="bx bx-code-alt text-4xl text-blue-600"></i>}
            title="Frontend"
            skills={[
              { name: "TypeScript", icon: "bxl-typescript" },
              { name: "ReactJS", icon: "bxl-react" },
              { name: "Angular", icon: "bxl-angular" },
              { name: "Tailwind", icon: "bxl-tailwind-css" },
              { name: "Bootstrap", icon: "bxl-bootstrap" },
            ]}
          />
          <SkillCard
            icon={<i className="bx bx-server text-4xl text-green-600"></i>}
            title="Backend"
            skills={[
              { name: "Java", icon: "bxl-java" },
              { name: "Spring Boot", icon: "bxs-leaf" },
              { name: "Node.js", icon: "bxl-nodejs" },
              { name: "AdonisJS", icon: "bxs-cube-alt" },
              { name: "PHP", icon: "bxl-php" },
              { name: "Laravel", icon: "bxs-cube-alt" },
            ]}
          />
          <SkillCard
            icon={<i className="bx bx-data text-4xl text-purple-600"></i>}
            title="Banco de Dados"
            skills={[
              { name: "MySQL", icon: "bxs-data" },
              { name: "SQLite", icon: "bxs-file" },
              { name: "PostgreSQL", icon: "bxl-postgresql" },
              { name: "Firebase", icon: "bxl-firebase" },
              { name: "MongoDB", icon: "bxl-mongodb" },
            ]}
          />
          <SkillCard
            icon={<i className="bx bx-cloud text-4xl text-indigo-600"></i>}
            title="DevOps & Deploy"
            skills={[
              { name: "Azure", icon: "bxl-microsoft" },
              { name: "Vercel", icon: "bxs-up-arrow" },
              { name: "Render", icon: "bxs-cloud" },
              { name: "Netlify", icon: "bxl-netlify" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skill;
