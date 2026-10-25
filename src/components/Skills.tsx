import { FaReact, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiDjango, SiPostgresql, SiSocketdotio, SiJavascript } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Django", icon: SiDjango },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Docker", icon: FaDocker },
  { name: "Socket.IO", icon: SiSocketdotio },
];

function Skills() {
  return (
    <section id="skills" className="bg-[#0b0f19] px-6 py-24 text-white min-h-screen flex items-center md:pl-24">
      <div className="mx-auto max-w-5xl w-full">
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
                Skills
              </span>
            </div>
          </div>
        </div>

        <h2 className="mt-6 text-center text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          My Technical Skills
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-base md:text-lg leading-relaxed text-gray-400 tracking-wide">
          I build modern, scalable and high-performance web applications using today's most powerful technologies.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative rounded-2xl border border-gray-800 bg-gray-900/40 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-gray-900/80 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-600/0 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="flex justify-center relative z-10">
                  <Icon size={48} className="text-blue-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:text-blue-400 drop-shadow-[0_0_8px_rgba(37,99,235,0.3)]" />
                </div>
                <h3 className="mt-4 text-base font-bold text-gray-200 tracking-wide group-hover:text-white transition-colors duration-300 relative z-10">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;