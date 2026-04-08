import { motion } from "framer-motion";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="min-h-screen px-6 py-20 bg-black text-white">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
      >
        Projects 🚀
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border border-gray-700 rounded-xl p-6 hover:border-green-400 transition"
          >
            <h3 className="text-2xl font-semibold mb-2 text-green-400">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm border border-gray-600 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                className="px-4 py-2 border border-gray-600 rounded hover:border-green-400 transition"
              >
                GitHub
              </a>

              <a
                href={project.live}
                className="px-4 py-2 bg-green-400 text-black rounded hover:bg-green-300 transition"
              >
                Live
              </a>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Projects;