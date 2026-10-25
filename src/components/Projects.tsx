import { FaExternalLinkAlt } from "react-icons/fa";
import sanImage from "../assets/san.png";

function Projects() {
  return (
    <section id="projects" className="bg-[#0b0f19] text-white px-6 py-16 min-h-screen flex flex-col justify-center w-full">
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex justify-center mb-4">
          <div className="rounded-full border border-blue-500/30 bg-blue-950/20 px-6 py-2 shadow-lg">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </div>
        </div>

        <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Featured Project
        </h2>

        <div className="mt-12 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur-md shadow-2xl group">
          <div className="h-48 sm:h-72 w-full bg-gray-950 overflow-hidden relative">
            <img src={sanImage} alt="Sandistech News" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103" />
          </div>

          <div className="p-5 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
              Sandistech News
            </h3>
            <p className="mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
              A modern news platform where users can read, publish and manage news content. Built with a scalable architecture and responsive user interface.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {["React", "Node.js", "PostgreSQL", "Tailwind"].map((tech) => (
                <span key={tech} className="rounded bg-blue-950/40 border border-blue-500/10 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-blue-400">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <a href="https://sandistech-news.onrender.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-blue-500 transition-all">
                Live  <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;