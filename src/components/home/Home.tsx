import { Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-slate-900 text-white">
            <div className="absolute inset-0">
                <img
                    src="https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-2"
                />
            </div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">Rudr1gu</h1>
                <p className="text-xl md:text-2xl text-blue-200 mb-8">Desenvolvedor Java Senior</p>
                <div className="flex justify-center gap-6">
                    <a href="#" className="text-blue-200 hover:text-white transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors">
                        <Mail size={24} />
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Home;




