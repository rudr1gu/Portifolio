import { Coffee } from "lucide-react";

const Footer = () => {
    return(
        <footer className="py-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <p>© 2025 Rudr1gu</p>
          <Coffee className="text-blue-400" />
        </div>
      </footer>
    )
}

export default Footer;