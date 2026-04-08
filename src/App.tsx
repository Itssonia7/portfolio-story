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
          className="text-3xl md:text-5xl text-center">
          It started with curiosity... 💭
        </motion.h2>
      </section>

      {/* Chapter 3 */}
      <section className="h-screen flex items-center justify-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl text-center">
          Then I started building real-world projects... 💻
        </motion.h2>
      </section>

      {/* Chapter 4 — PROJECTS */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
        
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Projects 🚀
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">

          {/* Project 1 */}
          <div className="border border-gray-700 rounded-xl p-6 hover:border-green-400 transition">
            <h3 className="text-2xl font-semibold mb-2 text-green-400">
              SomaSense AI
            </h3>
            <p className="text-gray-300 mb-4">
              AI system that interprets emotional input into physiological insights using Gemini API.
            </p>
            <p className="text-sm text-gray-400">
              React • Gemini API • Vercel
            </p>
          </div>

          {/* Project 2 */}
          <div className="border border-gray-700 rounded-xl p-6 hover:border-green-400 transition">
            <h3 className="text-2xl font-semibold mb-2 text-green-400">
              Eco-Sort AI
            </h3>
            <p className="text-gray-300 mb-4">
              Real-time waste classification app using AI vision for smarter recycling decisions.
            </p>
            <p className="text-sm text-gray-400">
              Flutter • Firebase • Gemini Vision
            </p>
          </div>

          {/* Project 3 */}
          <div className="border border-gray-700 rounded-xl p-6 hover:border-green-400 transition">
            <h3 className="text-2xl font-semibold mb-2 text-green-400">
              letslockin
            </h3>
            <p className="text-gray-300 mb-4">
              Productivity dashboard with focus timers, task tracking, and performance mindset tools.
            </p>
            <p className="text-sm text-gray-400">
              React • Tailwind • LocalStorage
            </p>
          </div>

          {/* Project 4 */}
          <div className="border border-gray-700 rounded-xl p-6 hover:border-green-400 transition">
            <h3 className="text-2xl font-semibold mb-2 text-green-400">
              EV Battery Swap System
            </h3>
            <p className="text-gray-300 mb-4">
              Full-stack booking system for EV battery swaps with user & admin dashboards.
            </p>
            <p className="text-sm text-gray-400">
              Flask • SQLite • Bootstrap
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;