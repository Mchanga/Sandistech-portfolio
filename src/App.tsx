<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import {
  AboutPage,
  ContactPage,
  ExperiencePage,
  HomePage,
  NotFoundPage,
  ProjectPage,
  ServicesPage,
  WorkPage,
} from "./pages/PortfolioPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="work/:slug" element={<ProjectPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
=======
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
>>>>>>> 1acf79cc7ac883e92194e6f1926ed1a9516193b7
