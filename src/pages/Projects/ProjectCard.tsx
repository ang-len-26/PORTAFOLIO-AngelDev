import { JSX } from "react";
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

type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  repoUrl: string;
  demoUrl?: string;
  image?: string;
  hoverImage?: string;
};

const ProjectCard = ({
  title,
  description,
  technologies,
  repoUrl,
  demoUrl,
  image,
  hoverImage,
}: ProjectProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Columna izquierda */}
      <div className="space-y-4">
        <h2 className="text-3xl text-gray-200 font-bold">{title}</h2>
        <p className="text-gray-200">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 text-sm text-gray-800 px-2 py-1 rounded-full flex items-center gap-1"
            >
              {techIcons[tech.toLowerCase()] ?? null}
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Columna derecha */}
      <div className="relative w-full h-[350px] overflow-hidden rounded-xl shadow-lg group">
        <div className="relative w-full h-full">
          {/* Imagen principal */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
          />

          {/* Imagen hover */}
          <img
            src={hoverImage}
            alt={`${title} (hover)`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100 group-hover:brightness-50"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl bg-black bg-opacity-50 p-3 rounded-full hover:scale-110 transition"
          >
            <FaExternalLinkAlt />
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl bg-black bg-opacity-50 p-3 rounded-full hover:scale-110 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
