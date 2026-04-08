import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-6 text-center">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 glow">
          Sonia
        </h1>

        <p className="text-gray-400 text-xl md:text-2xl max-w-xl mx-auto">
          Building intelligent systems, AI-powered apps & real-world solutions
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a className="px-6 py-3 bg-green-400 text-black rounded-lg hover:bg-green-300 transition">
            View Projects
          </a>

          <a className="px-6 py-3 border border-gray-600 rounded-lg hover:border-green-400 transition">
            Contact
          </a>
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;