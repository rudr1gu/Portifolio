const About = () => {
    return (
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre Mim</h2>
  
          <article className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Sou desenvolvedor <strong>fullstack</strong>, recentemente formado como Técnico em Desenvolvimento de Sistemas pela{" "}
              <abbr className="no-underline" title="Escola Técnica Estadual">ETEC</abbr> Zona Leste e concluí o bootcamp <strong>Java Fullstack</strong> com{" "}
              <abbr className="no-underline" title="Spring Boot é um framework para aplicações Java">Spring Boot</abbr> e <abbr className="no-underline" title="Biblioteca JavaScript para interfaces de usuário">React</abbr> pela{" "}
              <abbr className="no-underline" title="Organização sem fins lucrativos que capacita desenvolvedores">Generation Brasil</abbr>. 
              Atualmente, estou cursando <strong>Análise e Desenvolvimento de Sistemas</strong>, aprofundando ainda mais meus conhecimentos na área.
            </p>
  
            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Minha Jornada</h3>
              <p>
                Minha trajetória na tecnologia começou com a curiosidade de entender como ela pode transformar vidas.
                Desde então, venho desenvolvendo soluções para resolver problemas reais, seja através da otimização de processos ou da troca de conhecimento entre estudantes.
              </p>
              <p>
                Meu foco vai além do código: busco aprimorar minha capacidade de trabalho em equipe, liderança e inovação em projetos.
              </p>
            </section>
  
            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Principais Projetos</h3>
              <p>
                Desenvolvi a <strong>Rede Conectados</strong>, uma plataforma colaborativa e gamificada criada como <abbr className="no-underline" title="Trabalho de Conclusão de Curso">TCC</abbr>. Inspirada na{" "}
                <abbr className="no-underline" title="Teoria educacional sobre retenção de aprendizado">Pirâmide de Aprendizagem de William Glasser</abbr>, 
                incentiva a troca de conhecimento entre estudantes, recompensando aqueles que mais contribuem.
              </p>
              <p>
                Durante esse projeto, trabalhei com <abbr className="no-underline" title="Framework frontend baseado em TypeScript">Angular</abbr>, <abbr className="no-underline" title="Runtime para JavaScript no backend">Node.js</abbr>,{" "}
                <abbr className="no-underline" title="Sistema de gerenciamento de banco de dados relacional">MySQL</abbr> e <abbr className="no-underline" title="Padrão de design para comunicação entre sistemas">APIs REST</abbr>.
                Além disso, desenvolvi habilidades em <strong>gestão de projetos</strong> e <strong>inovação</strong>.
              </p>
            </section>
  
            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Minha Motivação</h3>
              <p>
                O que me motiva é o desafio de construir sistemas que fazem a diferença, seja desenvolvendo aplicações web escaláveis, melhorando a experiência do usuário ou garantindo que cada linha de código tenha um propósito.
              </p>
              <p>
                Acredito que a verdadeira tecnologia é aquela que transforma e impacta a sociedade. Estou sempre em busca de projetos que me permitam <strong>aprender, crescer e contribuir</strong> de forma significativa.
              </p>
            </section>
          </article>
        </div>
      </section>
    );
  };
  
  export default About;
  