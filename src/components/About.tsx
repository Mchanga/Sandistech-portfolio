import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="bg-[#0b0f19] text-white min-h-screen px-6 py-20 flex flex-col justify-center items-center md:pl-24"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        {/* About Me Badge */}
        <div className="flex justify-center mb-12">
          <div className="relative group">
            <div className="absolute -top-1.5 -right-1.5 z-20">
              <span className="relative flex h-3.5 w-3.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-blue-500 shadow-[0_0_10px_#2563EB]"></span>
              </span>
            </div>

            <div className="rounded-full border border-blue-500/30 bg-blue-950/20 px-8 py-2.5 shadow-[0_0_20px_rgba(37,99,235,0.1)] backdrop-blur-sm">
              <span className="text-sm md:text-base font-semibold uppercase tracking-widest bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </div>
          </div>
        </div>

        {/* Content Grid layout matching the layout structure of the image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full">
          
          {/* Left Column: Biography Text & Buttons */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Devoted Software Engineer and Web Developer.
            </h2>
            <p className="text-base text-gray-400 leading-relaxed mb-6">
              I'm a full-time Software Developer and Web Developer with a strong focus on building scalable, responsive, and impactful digital experiences. I specialize in front-end and full-stack development using modern technologies and frameworks. My work is guided by a passion for clean design, efficient code, and user-centered functionality.
            </p>
            <p className="text-base text-gray-400 leading-relaxed mb-8">
              I hold a Bachelor's Degree in Computer Science, but it's been the real-world projects and continuous learning that have truly shaped my journey. I'm passionate about solving problems and always pushing to build software that makes a real impact.
            </p>
            
            {/* Action Buttons */}
            
          </div>

          {/* Right Column: Feature Cards */}
          <div className="flex flex-col gap-4 w-full">
            {/* Web Development Card */}
            <div className="flex gap-4 p-5 bg-blue-950/10 border border-blue-500/10 rounded-xl backdrop-blur-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400">
                {/* Custom icon placeholder or SVG */}
                <span className="text-sm font-bold">&lt;/&gt;</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Web Development</h3>
                <p className="text-sm text-gray-400">
                  Creating responsive, dynamic websites and web applications, with the use of modern frameworks and technologies.
                </p>
              </div>
            </div>

            {/* Software Engineering Card */}
            <div className="flex gap-4 p-5 bg-blue-950/10 border border-blue-500/10 rounded-xl backdrop-blur-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <span className="text-xl">👤</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Software Engineering</h3>
                <p className="text-sm text-gray-400">
                  Designing and implementing software solutions, with a focus on scalability, performance, and maintainability.
                </p>
              </div>
            </div>

            {/* Project Management Card */}
            <div className="flex gap-4 p-5 bg-blue-950/10 border border-blue-500/10 rounded-xl backdrop-blur-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <span className="text-lg">💼</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Project Management</h3>
                <p className="text-sm text-gray-400">
                  Leading and being led through projects from inception to completion, with the use of Agile methodologies and tools.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;