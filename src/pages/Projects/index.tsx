import { useState, useMemo } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const categories = ["Todos", "Frontend", "Backend", "Fullstack", "Database"];
const techs = Array.from(new Set(projects.flatMap((p) => p.technologies)));

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedTech, setSelectedTech] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        selectedCategory === "Todos" || project.category === selectedCategory;
      const techMatch =
        !selectedTech || project.technologies.includes(selectedTech);
      return categoryMatch && techMatch;
    });
  }, [selectedCategory, selectedTech]);

  return (
    <section className="relative p-6 min-h-screen">
      <div className=" absolute inset-0 bg-gradient-to-b from-gray-900 from-20% via-gray-950 via-80% to-gray-950 to-98% z-0">
        {" "}
      </div>
      <div className="absolute inset-0 bg-[url('/img/honeycomb.svg')] bg-repeat bg-center opacity-50 z-10">
        {" "}
      </div>
      <div className=" relative flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 z-20">
        <h2 className="text-2xl font-bold">Proyectos Destacados</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full border ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-neutral-700 text-black dark:text-white z-60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <select
          value={selectedTech}
          onChange={(e) => setSelectedTech(e.target.value)}
          className="px-3 py-2 rounded border dark:bg-neutral-800 dark:text-white z-50"
        >
          <option value="">Filtrar por tecnología</option>
          {techs.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6 p-6 z-40">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.title}
            style={{ animationDelay: `${idx * 100}ms` }}
            className="animate-slideIn z-50"
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg group">
              <ProjectCard key={project.title} {...project} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
