import { motion } from "framer-motion";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section className="min-h-screen px-6 py-20 bg-black text-white">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
      >
        Skills ⚡
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="px-5 py-2 bg-[#0f172a]/50 backdrop-blur border border-gray-700 rounded-full hover:border-green-400 hover:shadow-[0_0_10px_rgba(34,197,94,0.4)] transition"
          >
            {skill}
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Skills;