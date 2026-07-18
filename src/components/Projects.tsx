import { FaExternalLinkAlt } from "react-icons/fa";
import sanImage from "../assets/san.png";

function Projects() {
  return (
    <section id="projects" className="bg-[#0b0f19] text-white px-6 py-20 min-h-screen flex flex-col justify-center md:pl-24">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute -top-1.5 -right-1.5 z-20">
              <span className="relative flex h-3.5 w-3.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-blue-500 shadow-[0_0_10px_#2563EB]"></span>
              </span>
            </div>
            <div className="rounded-full border border-blue-500/30 bg-blue-950/20 px-8 py-2.5 shadow-[0_0_20px_rgba(37,99,235,0.1)] backdrop-blur-sm">
              <span className="text-sm md:text-base font-semibold uppercase tracking-widest bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </div>
          </div>
        </div>

        <h2 className="mt-6 text-center text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Featured Project
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-base md:text-lg text-gray-400 leading-relaxed">
          A collection of projects I have built using modern technologies.
        </p>

        <div className="mt-16 overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-md shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] group relative">
          <div className="h-72 w-full bg-gray-950 overflow-hidden relative">
            <img
              src={sanImage}
              alt="Sandistech News"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
          </div>

          <div className="p-8 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
              Sandistech News
            </h3>

            <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
              A modern news platform where users can read, publish and manage news content. Built with a scalable architecture and responsive user interface.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "nodejs + Express", "PostgreSQL", "Tailwind CSS", "Socket.io", "REST API"].map((tech) => (
                <span key={tech} className="rounded-md bg-blue-950/40 border border-blue-500/20 px-3 py-1.5 text-xs font-medium text-blue-400">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://sandistech-news.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02]"
              >
                Live 
                <FaExternalLinkAlt className="text-xs opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;