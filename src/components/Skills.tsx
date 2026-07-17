import {
  FaReact,

  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiSocketdotio,
  SiJavascript,
} from "react-icons/si";

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
    <section
      id="skills"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Badge */}
         <div className="flex justify-center mb-8">
  <div className="relative">

    {/* Blinking dot - top right corner */}
    <div className="absolute -top-3 -right-3">
      <span className="relative flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex h-4 w-4 rounded-full bg-blue-600"></span>
      </span>
    </div>

    {/* About Me Box */}
    <div className="rounded-full border-2 border-blue-600 bg-blue-50 px-8 py-3 shadow-lg">
      <span className="text-lg font-bold uppercase tracking-wider text-blue-600">
        Skills
      </span>
    </div>

  </div>
</div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-5xl font-bold text-gray-900">
          My Technical Skills
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-600">
          I build modern, scalable and high-performance web applications
          using today's most powerful technologies.
        </p>

        {/* Skills Grid */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="
                  group
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  p-8
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500
                  hover:shadow-2xl
                "
              >

                {/* Icon */}
                <div className="flex justify-center">
                  <Icon
                    size={60}
                    className="
                      text-blue-600
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                  />
                </div>

                {/* Skill Name */}
                <h3 className="mt-6 text-xl font-bold text-gray-900">
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