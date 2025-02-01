import ProjectCard from "./projectcard/ProjectCard";

const Project = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Projetos em Destaque</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ProjectCard
                        title="Sistema de Microserviços"
                        description="Arquitetura de microserviços com Spring Cloud, implementando service discovery, circuit breaker e API gateway."
                        tags={['Java', 'Spring Cloud', 'Docker']}
                    />
                    <ProjectCard
                        title="API de E-commerce"
                        description="Backend completo para plataforma de e-commerce com processamento assíncrono e cache distribuído."
                        tags={['Spring Boot', 'Redis', 'Kafka']}
                    />
                </div>
            </div>
        </section>
    )
}

export default Project;