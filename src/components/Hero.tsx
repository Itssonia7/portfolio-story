import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Sonia
        </h1>

        <p className="text-gray-400 text-lg md:text-xl">
          Building intelligent systems & real-world solutions
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;