function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto min-h-screen px-6 py-20"
    >
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
        About Me
      </span>
    </div>

  </div>
</div>

      <p className="mt-8 text-lg text-gray-600 leading-8 text-center max-w-3xl mx-auto">
        I am a passionate Full Stack Developer specializing in building
        modern, scalable, and user-focused web applications. I enjoy
        turning ideas into digital solutions using React, Django,
        PostgreSQL, and modern web technologies.
      </p>
    </section>
  )
}

export default About