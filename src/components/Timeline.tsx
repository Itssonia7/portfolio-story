import { motion } from "framer-motion";
import { achievements } from "../data/achievements";

function Timeline() {
  return (
    <section className="min-h-screen px-6 py-20 bg-black text-white">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
      >
        Journey 📈
      </motion.h2>

      <div className="max-w-3xl mx-auto relative border-l border-gray-700">

        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-10 ml-6"
          >
            {/* Dot */}
            <div className="absolute w-3 h-3 bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)] rounded-full -left-1.5 mt-2"></div>

            <h3 className="text-xl font-semibold text-green-400">
              {item.title}
            </h3>

            <span className="text-sm text-gray-400">
              {item.type}
            </span>

            <p className="text-gray-300 mt-2">
              {item.description}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Timeline;