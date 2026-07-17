function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        
        <div>
          <h1 className="text-2xl font-bold">
            Sandis<span className="text-blue-600">Tech</span>
          </h1>
        </div>


        
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <li>
            <a 
              href="#Hero"
              className="hover:text-blue-600 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a 
              href="#about"
              className="hover:text-blue-600 transition"
            >
              About
            </a>
          </li>

          <li>
            <a 
              href="#skills"
              className="hover:text-blue-600 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a 
              href="#projects"
              className="hover:text-blue-600 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a 
              href="#contact"
              className="hover:text-blue-600 transition"
            >
              Contact
            </a>
          </li>

        </ul>


      
        <button className="
          hidden md:block
          bg-blue-600
          text-white
          px-5
          py-2.5
          rounded-full
          hover:bg-blue-700
          transition
        ">
          Hire Me
        </button>


      </nav>

    </header>
  )
}

export default Header