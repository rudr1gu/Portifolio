import { Github, Linkedin, Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Home = () => {
    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-slate-900 text-white">
            <div className="absolute inset-0">
                <img
                    src="https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>
            <div className="relative z-10 text-center px-4">
                <div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">Rudr1gu <span className="text-3xl  md:text-5xl" ><i className='bx bx-code-alt'></i></span></h1>
                </div>
                <p className="text-xl md:text-2xl text-blue-200 mb-8">Desenvolvedor FullStack</p>
                <div className="flex justify-center gap-4">
                    <a href="https://github.com/rudr1gu" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-blue-800 transition">
                        <FaGithub className="text-white text-lg" />
                    </a>
                    <a href="https://linkedin.com/in/rudr1gu" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-blue-800 transition">
                        <FaLinkedin className="text-white text-lg" />
                    </a>
                    <a href="https://instagram.com/rudr1gu" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-blue-800 transition">
                        <FaInstagram className="text-white text-lg" />
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Home;




