import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-8 relative">
      <div className="mmin-w-5xl px-4 flex  justify-between gap-4">
        {/* Info */}
        <div className="text-center sm:text-left">
          <p className="font-semibold">
            © {new Date().getFullYear()} Angel Lengua
          </p>
          <p className="text-sm text-gray-400">
            Gracias por ver mi Portafolio de Desarrollador
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/tu_numero"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:tu_correo@gmail.com"
            className="hover:text-gray-400 transition"
          >
            <MdEmail />
          </a>
        </div>
      </div>

      {/* Botón volver arriba */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-white text-gray-900 px-3 py-1 rounded-full text-sm shadow hover:bg-gray-200 transition"
      >
        Volver arriba
      </button>
    </footer>
  );
};

export default Footer;
