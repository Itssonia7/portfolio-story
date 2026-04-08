import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Projects />
      <Skills />
      <Timeline />
    </div>
  );
}

export default App;