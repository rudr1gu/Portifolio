import { Code2, Database, Server } from "lucide-react";
import SkillCard from "./skillcard/SkillCard";

const Skill = () => {

    return (
        <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard 
              icon={<Code2 className="w-8 h-8 text-blue-600" />}
              title="Backend Development"
              skills={['Java', 'Spring Boot', 'JPA/Hibernate', 'JUnit']}
            />
            <SkillCard 
              icon={<Database className="w-8 h-8 text-blue-600" />}
              title="Banco de Dados"
              skills={['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']}
            />
            <SkillCard 
              icon={<Server className="w-8 h-8 text-blue-600" />}
              title="DevOps"
              skills={['Docker', 'Kubernetes', 'AWS', 'CI/CD']}
            />
          </div>
        </div>
      </section>
    );
}
export default Skill;