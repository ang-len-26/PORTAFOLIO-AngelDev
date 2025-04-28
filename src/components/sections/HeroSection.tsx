import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const HeroSection = () => {
  return (
    //lalalala
    <section className="relative  ">
      <div className=" absolute inset-0 bg-radial from-lime-400 from-2% via-lime-900 via-10% to-gray-950 to-60% z-0">
        {" "}
      </div>
      <div className="absolute inset-0 bg-[url('/img/honeycomb.svg')] bg-repeat bg-center opacity-50 z-10">
        {" "}
      </div>
      <div className=" relative min-h-screen flex flex-col justify-center items-center text-center p-6 z-20 text-white ">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4 ">
          Angel Lengua
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-lime-600 mb-6">
          Desarrollador fullstack
        </h2>
        <p className="text-gray-200 max-w-xl mb-4">
          Soy fan de convertir ideas en proyectos reales. Me encanta armar
          interfaces que se vean bien y funcionen aún mejor, cuidando tanto el
          diseño como la lógica que hay detrás. Siempre estoy probando cosas
          nuevas, aprendiendo tecnologías y buscando formas de mejorar lo que ya
          sé.
        </p>
        <p className="text-gray-200 max-w-xl mb-4">
          Desde el frontend con React hasta APIs en Node y bases de datos en
          Mongo o MySQL, disfruto cada parte del proceso. Me gusta escribir
          código limpio, entender lo que hago y compartir lo que aprendo. Este
          portafolio es un reflejo de eso. ¡Bienvenido!
        </p>
        <div className="flex gap-4 flex-wrap justify-center mb-6">
          <Link
            to="/projects"
            className=" bg-lime-600 text-white active:text-gray-700  font-bold px-6 py-2 rounded-lg hover:bg-lime-500 active:bg-lime-300 transition"
          >
            Ver Proyectos
          </Link>
          <a
            href={"#Stack"}
            className=" px-6 py-2 rounded-lg border border-lime-600 hover:border-lime-500 active:border-gray-200 text-lime-600 font-bold hover:text-lime-500 active:text-gray-200 transition"
          >
            Ver Stack
          </a>
          <a
            href="/CV-Angel-Lengua.pdf"
            download
            className="px-6 py-2 rounded-lg border border-red-600 hover:border-red-500 active:border-gray-200 text-red-600 font-bold hover:text-red-500 active:text-gray-200 transition"
          >
            Descargar CV
          </a>
        </div>

        <div className="flex gap-6 text-2xl text-gray-400">
          <a
            href="https://github.com/ang-len-26"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/angel-rene-lengua-espinoza-9a40a5199"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/51997728380?text=Hola%20Angel%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:renelengu26@gmail.com"
            className="hover:text-red-600 transition"
          >
            <SiGmail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
