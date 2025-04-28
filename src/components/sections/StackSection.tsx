import { techStack } from "../../data/techStack";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

type Category = keyof typeof techStack;

const StackSection = () => {
  const navigate = useNavigate();

  const scrollRefs = {
    frontend: useRef<HTMLDivElement>(null),
    backend: useRef<HTMLDivElement>(null),
    database: useRef<HTMLDivElement>(null),
    tools: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    Object.values(scrollRefs).forEach((ref) => {
      const el = ref.current;
      if (!el) return;

      const speed = 0.5;

      const tick = () => {
        el.scrollTop <= 0
          ? (el.scrollTop = el.scrollHeight - el.clientHeight)
          : (el.scrollTop -= speed);
      };

      intervals.push(setInterval(tick, 30));
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <section id="Stack" className="p-8 relative overflow-hidden h-[600px]">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 from-50% via-lime-800 via-90% to-gray-900 to-96% z-0">
        {" "}
      </div>
      <div className="absolute inset-0 bg-[url('/img/honeycomb.svg')] bg-repeat bg-center opacity-50 z-10">
        {" "}
      </div>
      <div className=" max-w-[700px] mx-auto mt-8 grid h-[400px] gap-[60px] justify-center items-center grid-cols-2 sm:grid-cols-4 z-20">
        {(Object.keys(techStack) as Category[]).map((category) => (
          <div
            key={category}
            className="relative flex flex-col items-center gap-4 z-30"
          >
            {/* Título de la categoría */}
            <p className="text-xl text-gray-200 font-bold uppercase">
              {category}
            </p>
            {/* Contenedor de iconos */}
            <div
              key={category}
              ref={scrollRefs[category]}
              className=" relative w-[120px] h-[240px] sm:w-[150px] sm:h-[300px] border-2 border-lime-600 shadow-xl/30 shadow-lime-600/50 rounded-xl overflow-hidden flex flex-col items-center gap-8 z-40"
            >
              {[...techStack[category], ...techStack[category]].map(
                ({ name, icon: Icon, color }, idx) => (
                  <div
                    key={idx}
                    className="cursor-pointer transition-transform hover:scale-110"
                    title={name}
                    onClick={handleClick}
                  >
                    <Icon
                      size={65}
                      style={{
                        color,
                        filter: `drop-shadow(0 0 5px ${color})`,
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StackSection;
