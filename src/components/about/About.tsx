import { useState } from "react";
import ModalAbout from "./modalabout/ModalAbout";

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return (
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
            Sobre Mim
          </h2>
          
          <article className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-left">
            <p>
              Sou desenvolvedor <strong>fullstack</strong>, recentemente formado como Técnico em Desenvolvimento de Sistemas pela
              <abbr className="no-underline" title="Escola Técnica Estadual"> ETEC</abbr> Zona Leste e concluí o bootcamp <strong>Java Fullstack</strong> com
              <abbr className="no-underline" title="Spring Boot é um framework para aplicações Java"> Spring Boot</abbr> e <abbr className="no-underline" title="Biblioteca JavaScript para interfaces de usuário"> React</abbr> pela
              <abbr className="no-underline" title="Organização sem fins lucrativos que capacita desenvolvedores"> Generation Brasil</abbr>. 
              Atualmente, estou cursando <strong>Análise e Desenvolvimento de Sistemas</strong>, aprofundando ainda mais meus conhecimentos na área.
            </p>
            <button onClick={onOpen} className="text-blue-500 hover:underline">
              ver mais...
            </button>
          </article>
        </div>

        <ModalAbout isOpen={isOpen} onClose={onClose} />
      </section>
    );
  };
  
  export default About;
  