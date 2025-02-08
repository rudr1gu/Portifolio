import { Mail } from "lucide-react";

const Contact = () => {
    return (
        <section className="py-20 px-4 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Vamos Conversar?</h2>
          <p className="text-xl mb-8">
            Estou sempre interessado em novos projetos e oportunidades de colaboração.
          </p>
          <a 
            href="mailto:rodrigo.santos.ii@hotmail.com" 
            className="inline-flex items-center gap-2 bg-white text-sky-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            <Mail size={20} />
            Enviar Email
          </a>
        </div>
      </section>
    )
}

export default Contact;