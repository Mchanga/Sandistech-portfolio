 import sanImage from "../assets/san.png";
function Projects() {
  return (
    <section
      id="projects"
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
        Projects
      </span>
    </div>

  </div>
</div>

      <h2 className="
          mt-6
          text-center
          text-5xl
          font-bold
          text-gray-900
        ">
          Featured Project
        </h2>



        <p className="
          mx-auto
          mt-5
          max-w-2xl
          text-center
          text-lg
          text-gray-600
        ">
          A collection of projects I have built using
          modern technologies.
        </p>



        {/* Project Card */}

        <div className="
          mx-auto
          mt-16
          max-w-5xl
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          bg-white
          shadow-xl
          transition
          hover:-translate-y-2
        ">


          {/* Image */}
          <div className="
            h-72
            bg-gray-900
            flex
            items-center
            justify-center
          ">

            <span className="
              text-5xl
              font-bold
              text-white
            ">
             

<img
  src={sanImage}
  alt="Sandistech News"
  className="h-full w-full object-cover"
/>
            </span>

          </div>



          {/* Content */}

          <div className="p-8">


            <h3 className="
              text-3xl
              font-bold
            ">
              Sandistech News
            </h3>


            <p className="
              mt-4
              leading-8
              text-gray-600
            ">
              A modern news platform where users can
              read, publish and manage news content.
              Built with a scalable architecture and
              responsive user interface.
            </p>



            {/* Tech Stack */}

            <div className="
              mt-6
              flex
              flex-wrap
              gap-3
            ">

              {
                [
                  "React",
                  "nodejs + Express",
                  "PostgreSQL",
                  "Tailwind CSS",
                  "Socket.io",
                  "REST API"
                ].map((tech)=>(
                  
                  <span
                    key={tech}
                    className="
                      rounded-full
                      bg-blue-50
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-blue-600
                    "
                  >
                    {tech}
                  </span>

                ))
              }

            </div>



            {/* Buttons */}

            <div className="
              mt-8
              flex
              gap-4
            ">


              <a
                href="https://sandistech-news.onrender.com/"
                target="_blank"
                className="
                  rounded-full
                  bg-blue-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-600
                "
              >
                Live Demo 
              </a>





            </div>


          </div>


        </div>


      

    </section>
  )
}

export default Projects