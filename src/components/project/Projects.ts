import { FaNodeJs, FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiMysql, SiAngular, SiSwagger, SiJunit5, SiVercel, SiPwa } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const projects = [
    {
        title: "Conectados",
        description: "Uma rede colaborativa que fortalece os vínculos entre alunos por meio de um sistema gamificado, premiando os mais participativos.",
        tags: [SiAngular, FaNodeJs, SiMysql, VscAzure, SiVercel, SiPwa],
        repo: "https://github.com/rudr1gu/projetoAngular"
    },
    {
        title: "Calculadora de Materiais Drywall",
        description: "Ferramenta simples para cálculo automático de materiais drywall com base na área em m² informada pelo usuário.",
        tags: [FaHtml5, FaCss3Alt, FaJs],
        repo: "https://github.com/rudr1gu/CalculadoraMateriaisDrywall"
    },
    {
        title: "Blog Pessoal",
        description: "Projeto para aprendizado sobre Spring Boot, segurança com Spring Security, Swagger para documentação, JPA e testes com JUnit.",
        tags: [FaJava, SiSpringboot, FaReact, SiTailwindcss, SiSwagger, SiJunit5],
        repo: "https://github.com/rudr1gu/BlogPessoal_Generation"
    },
    {
        title: "AikiFome Delivery",
        description: "Projeto integrador do bootcamp Java, onde trabalhei em equipe com 7 pessoas, aplicando Scrum para levantamento de requisitos e prazos curtos.",
        tags: [FaJava, SiSpringboot, FaReact, SiTailwindcss, SiSwagger, SiJunit5],
        repo: "https://github.com/1portodosporum/FrontendProjetoDelivery"
    },
    {
        title: "Quiz Educativo",
        description: "Projeto desenvolvido para uma feira tecnológica, utilizando JavaScript puro para criar um quiz interativo para visitantes.",
        tags: [FaJs, FaHtml5, FaCss3Alt],
        repo: "https://github.com/rudr1gu/Quiz"
    },
    {
        title: "Api Bing Maps",
        description: "API para consulta de endereços e geolocalização, utilizando a API do Bing Maps para buscar informações de endereços. Utilizando PWA para tornar a aplicação acessível.",
        tags: [SiPwa, FaHtml5, FaCss3Alt, FaJs],
        repo: "https://github.com/rudr1gu/BingMaps"
    }
];

export default projects;