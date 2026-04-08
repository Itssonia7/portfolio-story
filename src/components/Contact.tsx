import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-black text-white">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
      >
        Let’s Connect 🤝
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >

        <p className="text-lg text-gray-300">
          Sonia Nanwani
        </p>

        <p className="text-gray-400">
          soniananvani7@gmail.com
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">

          <a
            href="https://www.linkedin.com/in/sonia-nanwani-8a8724329/"
            className="px-4 py-2 border border-gray-600 rounded hover:border-green-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Itssonia7"
            className="px-4 py-2 border border-gray-600 rounded hover:border-green-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://leetcode.com/u/itssonia7/"
            className="px-4 py-2 border border-gray-600 rounded hover:border-green-400 transition"
          >
            LeetCode
          </a>

          <a
            href="https://www.codechef.com/users/its_sonia"
            className="px-4 py-2 border border-gray-600 rounded hover:border-green-400 transition"
          >
            CodeChef
          </a>

        </div>

      </motion.div>

    </section>
  );
}

export default Contact;