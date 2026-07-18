import Hero from "./components/Hero"
import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
const App = () => {
  return (
<div className="bg-[#0b0f19] min-h-screen">
      <Header />

<main className="w-full md:pl-64">
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Contact />
   <Footer/>
</main>
     
    </div>
  )
}

export default App