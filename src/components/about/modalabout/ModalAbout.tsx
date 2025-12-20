interface ModalAboutProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAbout = ({ isOpen, onClose }: ModalAboutProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-lg w-full max-w-2xl">  
        <section className="mb-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Atuação Profissional
          </h3>
          <p className="leading-relaxed text-sm md:text-base text-justify">
            Atualmente atuo na <strong>mesa de RTB do Assistente Virtual do Santander</strong>,
            prestando suporte técnico a aplicações críticas já em produção.
            Meu trabalho envolve análise de incidentes, acompanhamento de métricas,
            correção de falhas e apoio a projetos de evolução tecnológica.
          </p>
          <p className="leading-relaxed mt-3 text-sm md:text-base text-justify">
            Também participo ativamente de iniciativas de
            <strong> modernização de sistemas</strong>, removendo
            obsolescências de código e contribuindo para a estabilidade,
            performance e confiabilidade das aplicações.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Tecnologias & Metodologia
          </h3>
          <p className="leading-relaxed text-sm md:text-base text-justify">
            Trabalho principalmente com
            <strong> Java, Spring Boot, Angular, Node.js e Redis</strong>,
            utilizando <strong>Grafana</strong> e <strong>Dynatrace </strong>
            para observabilidade, análise de fluxos e monitoramento de sistemas.
          </p>
          <p className="leading-relaxed mt-3 text-sm md:text-base text-justify">
            Além do crescimento técnico, venho evoluindo fortemente em
            <strong> metodologias ágeis</strong>, com uso diário de
            <strong> Jira, Kanban e ambientes SaaS</strong>,
            o que tem impulsionado minhas <strong>soft skills</strong>,
            como comunicação, trabalho em equipe, organização e senso de responsabilidade.
          </p>
        </section>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition text-sm md:text-base"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAbout;