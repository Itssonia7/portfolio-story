import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-black text-white font-sans">

      {/* Chapter 1 */}
      <section className="h-screen flex items-center justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-center"
        >
          Hi, I’m <span className="text-green-400">Sonia</span> 👋
        </motion.h1>
      </section>

      {/* Chapter 2 */}
      <section className="h-screen flex items-center justify-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl text-center"
        >
          It started with curiosity... 💭
        </motion.h2>
      </section>

      {/* Chapter 3 */}
      <section className="h-screen flex items-center justify-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl text-center"
        >
          Then I started building things... 💻
        </motion.h2>
      </section>

    </div>
  );
}

export default App;