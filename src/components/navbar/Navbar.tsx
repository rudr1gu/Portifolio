import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.2); // Altera após 20% da tela rolada
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-evenly items-center py-4 px-8 transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-gray-900 shadow-md" // Cor sólida ao rolar
          : "bg-transparent backdrop-blur-lg"
      }`}
    >
      <h1 className="text-2xl font-bold text-white flex items-center">
        <i className="bx bx-code-alt text-3xl mr-2"></i> Rudr1gu
      </h1>
      <div className="flex space-x-6 text-lg">
        <a href="#" className="text-white hover:text-gray-300 transition-all">
          Inicio
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition-all">
          Sobre
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition-all">
          Projetos
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition-all">
          Contato
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
