
interface ModalAboutProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalAbout = ({ onClose, isOpen }: ModalAboutProps) => {
    return (
        <>
            {isOpen && (
                <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50">
                    <div className="dark:bg-gray-900 p-8 rounded-lg shadow-lg w-1/2">
                        <section>
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Minha Jornada</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Minha trajetória na tecnologia começou com a curiosidade de entender como ela pode transformar vidas.
                                Desde então, venho desenvolvendo soluções para resolver problemas reais, seja através da otimização de processos ou da troca de conhecimento entre estudantes.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Meu foco vai além do código: busco aprimorar minha capacidade de trabalho em equipe, liderança e inovação em projetos.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Principais Projetos</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Desenvolvi a <strong>Rede Conectados</strong>, uma plataforma colaborativa e gamificada criada como <abbr className="no-underline" title="Trabalho de Conclusão de Curso">TCC</abbr>. Inspirada na
                                <abbr className="no-underline" title="Teoria educacional sobre retenção de aprendizado"> Pirâmide de Aprendizagem de William Glasser</abbr>, incentiva a troca de conhecimento entre estudantes, recompensando aqueles que mais contribuem.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Durante esse projeto, trabalhei com <abbr className="no-underline" title="Framework frontend baseado em TypeScript"> Angular</abbr>, <abbr className="no-underline" title="Runtime para JavaScript no backend"> Node.js</abbr>,
                                <abbr className="no-underline" title="Sistema de gerenciamento de banco de dados relacional"> MySQL</abbr> e <abbr className="no-underline" title="Padrão de design para comunicação entre sistemas"> APIs REST</abbr>.
                                Além disso, desenvolvi habilidades em <strong>gestão de projetos</strong> e <strong>inovação</strong>.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Minha Motivação</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                O que me motiva é o desafio de construir sistemas que fazem a diferença, seja desenvolvendo aplicações web escaláveis, melhorando a experiência do usuário ou garantindo que cada linha de código tenha um propósito.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Acredito que a verdadeira tecnologia é aquela que transforma e impacta a sociedade. Estou sempre em busca de projetos que me permitam <strong>aprender, crescer e contribuir</strong> de forma significativa.
                            </p>
                        </section>
                        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md">Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ModalAbout;