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
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Minha Jornada</h3>
            <p className="leading-relaxed">
              Minha trajetória na tecnologia começou com a curiosidade de entender como ela pode transformar vidas.
              Desde então, venho desenvolvendo soluções para resolver problemas reais, seja através da otimização de processos ou da troca de conhecimento entre estudantes.
            </p>
            <p className="leading-relaxed mt-3">
              Meu foco vai além do código: busco aprimorar minha capacidade de trabalho em equipe, liderança e inovação em projetos.
            </p>
          </section>
  
          <section className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Principais Projetos</h3>
            <p className="leading-relaxed">
              Desenvolvi a <strong>Rede Conectados</strong>, uma plataforma colaborativa e gamificada criada como <abbr title="Trabalho de Conclusão de Curso">TCC</abbr>.
              Inspirada na <abbr title="Teoria educacional sobre retenção de aprendizado">Pirâmide de Aprendizagem de William Glasser</abbr>, incentiva a troca de conhecimento entre estudantes, recompensando aqueles que mais contribuem.
            </p>
            <p className="leading-relaxed mt-3">
              Durante esse projeto, trabalhei com <abbr title="Framework frontend baseado em TypeScript">Angular</abbr>, <abbr title="Runtime para JavaScript no backend">Node.js</abbr>,
              <abbr title="Sistema de gerenciamento de banco de dados relacional">MySQL</abbr> e <abbr title="Padrão de design para comunicação entre sistemas">APIs REST</abbr>.
              Além disso, desenvolvi habilidades em <strong>gestão de projetos</strong> e <strong>inovação</strong>.
            </p>
          </section>
  
          <section className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Minha Motivação</h3>
            <p className="leading-relaxed">
              O que me motiva é o desafio de construir sistemas que fazem a diferença, seja desenvolvendo aplicações web escaláveis, melhorando a experiência do usuário ou garantindo que cada linha de código tenha um propósito.
            </p>
            <p className="leading-relaxed mt-3">
              Acredito que a verdadeira tecnologia é aquela que transforma e impacta a sociedade. Estou sempre em busca de projetos que me permitam <strong>aprender, crescer e contribuir</strong> de forma significativa.
            </p>
          </section>
  
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalAbout;
  