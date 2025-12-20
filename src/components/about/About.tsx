import { useState } from "react";
import ModalAbout from "./modalabout/ModalAbout";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Sobre Mim
        </h2>

        <article className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-justify">
          <p>
            Sou <strong>engenheiro de software em início de carreira</strong>,
            atualmente atuando como <strong>Analista de Engenharia de Software Júnior
            na Inmetrics</strong>, alocado em um projeto do <strong>Santander</strong>,
            na mesa de <strong>RTB do Assistente Virtual (AVI)</strong>.
          </p>

          <p>
            No dia a dia, trabalho dando <strong>suporte técnico a sistemas em produção</strong>,
            atuando na análise de incidentes, manutenção evolutiva e
            <strong> remoção de obsolescências de código</strong>. Utilizo tecnologias
            como <strong>Java, Spring Boot, Angular, Node.js e Redis</strong>,
            além de ferramentas de observabilidade como
            <strong> Grafana</strong> e <strong>Dynatrace</strong>.
          </p>

          <button onClick={onOpen} className="text-blue-500 hover:underline">
            Ver mais...
          </button>
        </article>
      </div>

      <ModalAbout isOpen={isOpen} onClose={onClose} />
    </section>
  );
};

export default About;