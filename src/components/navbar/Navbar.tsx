import { useState, useEffect, useContext } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const { toggleTheme } = themeContext;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-around items-center py-4 px-8 transition-all duration-300 z-50 ${isScrolled ? "bg-gray-900 shadow-md" : "bg-transparent backdrop-blur-lg"
        }`}
    >
      <h1 className="text-2xl font-bold text-white flex items-center cursor-pointer" onClick={() => scrollToSection("home")}>
        <i className="bx bx-code-alt text-3xl mr-2"></i> Rudr1gu
      </h1>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-3xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <div
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent flex flex-col md:flex-row items-center gap-6 p-6 md:p-0 md:gap-6 text-lg transition-all duration-300 ${menuOpen ? "block" : "hidden md:flex"
          }`}
      >
        <button onClick={() => scrollToSection("home")} className="text-white flex items-center gap-2 hover:text-gray-300 transition-all hover:-translate-y-1">
          <FaHome /> Início
        </button>
        <button onClick={() => scrollToSection("about")} className="text-white flex items-center gap-2 hover:text-gray-300 transition-all hover:-translate-y-1">
          <FaUser /> Sobre
        </button>
        <button onClick={() => scrollToSection("skill")} className="text-white flex items-center gap-2 hover:text-gray-300 transition-all hover:-translate-y-1">
          <FaTools /> Skills
        </button>
        <button onClick={() => scrollToSection("project")} className="text-white flex items-center gap-2 hover:text-gray-300 transition-all hover:-translate-y-1">
          <FaProjectDiagram /> Projetos
        </button>
        <button onClick={() => scrollToSection("contact")} className="text-white flex items-center gap-2 hover:text-gray-300 transition-all hover:-translate-y-1">
          <FaEnvelope /> Contato
        </button>
        <button
        onClick={toggleTheme}
        className="relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:bg-gray-700 dark:hover:bg-gray-600 text-white  shadow-md"
      >
        <span className="absolute transform transition-all duration-300 scale-100 dark:scale-0">
          <FiSun size={22} />
        </span>
        <span className="absolute transform transition-all duration-300 scale-0 dark:scale-100">
          <FiMoon size={22} />
        </span>
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
