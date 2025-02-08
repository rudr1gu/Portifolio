import { FaNodeJs, FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiMysql, SiAngular, SiExpress, SiHandlebarsdotjs, SiSwagger, SiJunit5, SiVercel } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const projects = [
    {
        title: "Conectados",
        description: "Uma rede colaborativa que fortalece os vínculos entre alunos por meio de um sistema gamificado, premiando os mais participativos.",
        tags: [SiAngular, FaNodeJs, SiMysql, VscAzure, SiVercel],
        repo: "https://github.com/seu-usuario/conectados"
    },
    {
        title: "Calculadora de Materiais Drywall",
        description: "Ferramenta simples para cálculo automático de materiais drywall com base na área em m² informada pelo usuário.",
        tags: [FaHtml5, FaCss3Alt, FaJs],
        repo: "https://github.com/seu-usuario/calculadora-drywall"
    },
    {
        title: "Blog Pessoal",
        description: "Projeto para aprendizado sobre Spring Boot, segurança com Spring Security, Swagger para documentação, JPA e testes com JUnit.",
        tags: [FaJava, SiSpringboot, FaReact, SiTailwindcss, SiSwagger, SiJunit5],
        repo: "https://github.com/seu-usuario/blog-pessoal"
    },
    {
        title: "AikiFome PI",
        description: "Projeto integrador do bootcamp Java, onde trabalhei em equipe com 7 pessoas, aplicando Scrum para levantamento de requisitos e prazos curtos.",
        tags: [FaJava, SiSpringboot, FaReact, SiTailwindcss, SiSwagger, SiJunit5],
        repo: "https://github.com/seu-usuario/aikifome"
    },
    {
        title: "Quiz Educativo",
        description: "Projeto desenvolvido para uma feira tecnológica, utilizando JavaScript puro para criar um quiz interativo para visitantes.",
        tags: [FaJs, FaHtml5, FaCss3Alt],
        repo: "https://github.com/seu-usuario/quiz-educativo"
    },
    {
        title: "Cartão de Visita Virtual",
        description: "Aplicação criada para um evento da ETEC, onde visitantes geravam um cartão virtual personalizado a partir de um formulário.",
        tags: [SiHandlebarsdotjs, SiExpress, FaJs, FaHtml5, FaCss3Alt, SiMysql],
        repo: "https://github.com/seu-usuario/cartao-visita"
    }
];

export default projects;