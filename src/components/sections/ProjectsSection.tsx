import { useRef, useState, useEffect, JSX } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../../data/projects";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiTypescript, SiMongodb, SiTailwindcss } from "react-icons/si";

const techIcons: Record<string, JSX.Element> = {
  react: <FaReact className="text-sky-500" />,
  nodejs: <FaNodeJs className="text-green-600" />,
  html: <FaHtml5 className="text-orange-500" />,
  css: <FaCss3Alt className="text-blue-500" />,
  javascript: <FaJs className="text-yellow-400" />,
  typescript: <SiTypescript className="text-blue-600" />,
  mongodb: <SiMongodb className="text-green-700" />,
  tailwind: <SiTailwindcss className="text-cyan-500" />,
  python: <FaPython className="text-yellow-500" />,
  git: <FaGitAlt className="text-orange-600" />,
  github: <FaGithub className="text-black" />,
};

const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "left"
  );

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setSlideDirection("left");
      setCurrent((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [current]);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  const project = projects[current];

  return (
    <section className="relative transition-all duration-700 ">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 from-44% via-lime-800 via-50% to-gray-950 to-56% z-0">
        {" "}
      </div>
      <div className="absolute inset-0 bg-[url('/img/honeycomb.svg')] bg-repeat bg-center opacity-50 z-10">
        {" "}
      </div>

      <div className="relative p-8 w-full max-w-xl mx-auto z-20">
        {/* Botones de navegación (solo visible en pantallas md en adelante) */}
        <button
          className="hidden md:flex absolute -left-20 top-1/2 -translate-y-1/2 z-10 border-2 border-gray-200 hover:border-gray-700 hover:bg-lime-700 active:bg-lime-500 transition shadow-md p-2 rounded-full"
          onClick={() => {
            setSlideDirection("right");
            setCurrent(
              (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
            );
          }}
        >
          <ChevronLeft className="text-gray-200 scale-120" />
        </button>
        <button
          className="hidden md:flex absolute -right-20 top-1/2 -translate-y-1/2 z-10 border-2 border-gray-200 hover:border-gray-700 hover:bg-lime-700 active:bg-lime-500 transition shadow-md p-2 rounded-full"
          onClick={() => {
            setSlideDirection("left");
            setCurrent((prevIndex) => (prevIndex + 1) % projects.length);
          }}
        >
          <ChevronRight className="text-gray-200 scale-120" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Columna izquierda */}
          <div className="space-y-4">
            <h2 className="text-3xl text-gray-200 font-bold">
              {project.title}
            </h2>
            <p className="text-gray-200">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 text-sm text-gray-800 px-2 py-1 rounded-full flex items-center gap-1"
                >
                  {techIcons[tech.toLowerCase()] ?? null}
                  {tech}
                </span>
              ))}
            </div>
            <Link
              to="/projects"
              className="inline-block bg-lime-600 text-white active:text-gray-700 text-sm font-medium px-4 py-1 rounded hover:bg-lime-500 active:bg-lime-300 transition"
            >
              VER MÁS
            </Link>
          </div>

          {/* Columna derecha */}
          <div
            className={`relative w-full h-[350px] overflow-hidden rounded-xl shadow-lg group ${
              slideDirection === "left"
                ? "animate-slideLeft"
                : "animate-slideRight"
            }`}
          >
            <img
              src={project.hoverImage}
              alt={project.title}
              className="w-full h-full object-cover transition-opacity duration-700 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl bg-black bg-opacity-50 p-3 rounded-full hover:scale-110 transition"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl bg-black bg-opacity-50 p-3 rounded-full hover:scale-110 transition"
              >
                <FaGithub />
              </a>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-6 h-2 rounded-full transition-colors duration-300 ${
                    index === current ? "bg-lime-500" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
