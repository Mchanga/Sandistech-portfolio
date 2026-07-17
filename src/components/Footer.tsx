 import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

 function Footer() {
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
        Footer
      </span>
    </div>

  </div>
</div>

     <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl"></div>


      <div className="relative max-w-7xl mx-auto px-6 py-16">


        {/* Top section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">


          {/* Brand */}
          <div>

            <h2 className="text-3xl font-extrabold">
              Sandi
              <span className="text-blue-500">
                Tech
              </span>
            </h2>


            <p className="mt-5 leading-7 text-gray-400">
              Building scalable digital solutions
              with modern technologies. I create
              web applications, mobile apps and
              software experiences that solve
              real-world problems.
            </p>


     <div className="flex items-center gap-5 mt-6">


  {/* GitHub */}
  <a
    href="https://github.com/Mchanga"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group flex h-12 w-12 items-center justify-center
      text-gray-400
      transition duration-300
      hover:-translate-y-1
      hover:border-white
      hover:text-black
    "
  >
    <FaGithub size={22}/>
  </a>



  {/* LinkedIn */}
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex h-12 w-12 items-center justify-center
      text-gray-400
      transition duration-300
      hover:-translate-y-1
      hover:border-blue-500
      hover:text-blue-500
    "
  >
    <FaLinkedin size={22}/>
  </a>



  {/* Instagram */}
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex h-12 w-12 items-center justify-center
      text-gray-400
      transition duration-300
      hover:-translate-y-1
      hover:border-pink-500
      hover:text-pink-500
    "
  >
    <FaInstagram size={22}/>
  </a>



  {/* Twitter/X */}
  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex h-12 w-12 items-center justify-center
      text-gray-400
      transition duration-300
      hover:-translate-y-1
      hover:border-sky-500
      hover:text-sky-500
    "
  >
    <FaTwitter size={22}/>
  </a>



  {/* WhatsApp */}
  <a
    href="https://wa.me/255764069290"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex h-12 w-12 items-center justify-center
      text-gray-400
      transition duration-300
      hover:-translate-y-1
      hover:border-green-500
      hover:text-green-500
    "
  >
    <FaWhatsapp size={22}/>
  </a>



 

</div>
          </div>



          {/* Quick Links */}
          <div>

            <h3 className="mb-5 text-lg font-bold">
              Quick Links
            </h3>


            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#Hero" className="hover:text-blue-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#About" className="hover:text-blue-500 transition">
                  About
                </a>
              </li>


              <li>
                <a href="#Skills" className="hover:text-blue-500 transition">
                  Skills
                </a>
              </li>


              <li>
                <a href="#Projects" className="hover:text-blue-500 transition">
                  Projects
                </a>
              </li>

            </ul>

          </div>



          {/* Services */}
          <div>

            <h3 className="mb-5 text-lg font-bold">
              Services
            </h3>


            <ul className="space-y-3 text-gray-400">

              <li>
                Web Development
              </li>

              <li>
                Mobile Apps
              </li>

              <li>
                Fontend Developer
              </li>

              <li>
                Backend Systems
              </li>
              <li>
                Machine Learning Model
              </li>

            </ul>

          </div>




          <div>

            <h3 className="mb-5 text-lg font-bold">
              Contact
            </h3>


            <ul className="space-y-4 text-gray-400">

              <li>
                 Tanzania
              </li>

              <li>
                 paschalmasanja303@gmail.com
              </li>

              <li>
                 +255 764 069 290
              </li>


            </ul>


      

          </div>


        </div>



        
        <div className="mt-14 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">


         <p className="text-sm text-gray-500">
  © {new Date().getFullYear()} SandisTech. All rights reserved.
</p>

          <p className="mt-4 text-sm text-gray-500 md:mt-0">
            Designed & Developed by Paschal Masanja
          </p>


        </div>


      </div>

    </section>
  )
}

export default Footer