import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0b0f19] min-h-screen w-full flex flex-col md:flex-row relative overflow-x-hidden">
      
      <Header />

      <main className="flex-1 w-full md:pl-64 min-h-screen flex flex-col pt-16 md:pt-0 overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;