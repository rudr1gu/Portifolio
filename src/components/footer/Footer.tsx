import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto text-center px-4">
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <li><a href="#" className="hover:text-purple-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-purple-500 transition">About</a></li>
            <li><a href="#" className="hover:text-purple-500 transition">Service</a></li>
            <li><a href="#" className="hover:text-purple-500 transition">Works</a></li>
            <li><a href="#" className="hover:text-purple-500 transition">Contact</a></li>
          </ul>
        </nav>
        <p className="text-xs uppercase font-semibold tracking-wide mb-6">© 2025 Rudr1gu. All rights reserved</p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/rudr1gu" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-800 transition">
            <FaGithub className="text-white text-lg" />
          </a>
          <a href="https://linkedin.com/in/rudr1gu" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-800 transition">
            <FaLinkedin className="text-white text-lg" />
          </a>
          <a href="https://instagram.com/rudr1gu" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-800 transition">
            <FaInstagram className="text-white text-lg" />
          </a>
          <a href="https://youtube.com/@rudr1gu" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-800 transition">
            <FaYoutube className="text-white text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;