import { FC } from "react";
import { Briefcase, GraduationCap } from "lucide-react"; // Iconos de trabajo y educación
import { motion } from "framer-motion";

const AboutMe: FC = () => {
  return (
    <section className="min-h-screen p-8 flex flex-col items-center justify-center bg-gray-100 text-gray-700">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full flex flex-col gap-6"
      >
        <h1 className="text-4xl font-bold text-center text-gray-950">
          Sobre Mí
        </h1>

        <p className="text-lg text-justify">
          ¡Hola! Soy{" "}
          <span className="font-semibold text-lime-600">Angel Lengua</span>, un
          desarrollador fullstack apasionado por la tecnología y la creación de
          soluciones digitales. Aunque mi formación inicial es en Ingeniería
          Electrónica, mi curiosidad por el mundo del software me llevó a
          especializarme en el desarrollo web.
        </p>

        <p className="text-lg text-justify">
          He trabajado en proyectos reales en sectores como telecomunicaciones,
          automatización industrial y gestión de infraestructura eléctrica.
          Estas experiencias me enseñaron a abordar problemas complejos,
          trabajar en equipo y mantener un enfoque práctico en cada solución que
          propongo.
        </p>

        <p className="text-lg text-justify">
          Actualmente, mi stack de desarrollo incluye{" "}
          <span className="font-semibold text-lime-600">
            TypeScript, React, Node.js, Express y MongoDB
          </span>
          . Disfruto creando aplicaciones modernas, escalables y responsivas,
          siempre buscando las mejores prácticas y manteniéndome actualizado con
          las nuevas tecnologías.
        </p>

        <p className="text-lg text-justify">
          Más allá de la programación, me interesa combinar mis conocimientos de
          ingeniería y software para ofrecer soluciones que no solo funcionen,
          sino que también aporten valor real a las personas y empresas.
        </p>

        {/* Timeline de experiencia laboral */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-950 flex items-center gap-2">
            <Briefcase className="text-lime-600" /> Experiencia Laboral
          </h2>
          <ul className="space-y-6">
            {[
              {
                company: "Municipalidad de Lima",
                date: "2023-2024",
                desc: "Asistente de Ingeniería en instalaciones electromecánicas y automatización de procesos.",
              },
              {
                company: "Sai & Technology S.A.C.",
                date: "2023",
                desc: "Programador de Automatización y desarrollo de sistemas de control para estaciones de saneamiento.",
              },
              {
                company: "Falcon Tower S.A.C.",
                date: "2021-2022",
                desc: "Asistente de Ingeniería en estaciones de telecomunicaciones y seguridad en altura.",
              },
              {
                company: "Porfisa Contratistas Generales S.A.C.",
                date: "2020-2021",
                desc: "Coordinador logístico en obra, control de materiales y logística de proyectos.",
              },
              {
                company: "Corporación Lon S.A.C.",
                date: "2019",
                desc: "Técnico de mantenimiento industrial, reparación de maquinaria y periféricos.",
              },
              {
                company: "Maquindustria Perú S.A.C.",
                date: "2018",
                desc: "Asistente de Ingeniería en montaje de tableros eléctricos y control de calidad.",
              },
            ].map((job, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <p className="font-semibold text-lime-600">
                  {job.company} ({job.date})
                </p>
                <p>{job.desc}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Certificaciones y Cursos */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-950 flex items-center gap-2">
            <GraduationCap className="text-lime-600" /> Certificaciones y Cursos
          </h2>
          <ul className="space-y-4 list-disc list-inside">
            {[
              "Hola Mundo Academy: Ultimate React, TypeScript, Node.js, SQL, Docker",
              "IBM: Back-End Development Professional Certificate",
              "Rockwell Automation University: Control y Visualización Industrial",
              "MyAutomationClass: Instrumentación Industrial y Control PID",
              "Universidad Nacional de Ingeniería: Automatización Industrial",
            ].map((course, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                {course}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
