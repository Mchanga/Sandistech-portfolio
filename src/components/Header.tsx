import { useState } from "react";

function Header() {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
     
      <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-[#0b0f19]/90 backdrop-blur-md border-b border-gray-900 px-6 flex items-center justify-between z-50 text-white">
        <h1 className="text-xl font-extrabold tracking-tight">
          Sandis<span className="text-blue-500 ml-0.5">Tech</span>
        </h1>
       
        <button 
          onClick={toggleMenu}
          className="p-2 text-gray-400 hover:text-white focus:outline-none relative z-50"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span className={`w-full h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {isOpen && (
        <div 
          onClick={toggleMenu}
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
        />
      )}

      <header className={`
        fixed top-0 left-0 h-screen w-64 z-50 bg-[#0b0f19] border-r border-gray-900 text-white
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0
      `}>
   
        <style>{`
          .nav-link-line {
            position: absolute;
            left: 0;
            height: 4px;
            width: 0;
            border-radius: 9999px;
            background-color: #3b82f6;
            transition: all 0.3s ease;
          }
          .group:hover .nav-link-line {
            width: 16px;
          }
          .nav-text {
            transition: all 0.3s ease;
          }
          .group:hover .nav-text {
            transform: translateX(24px);
            color: #ffffff;
          }
        `}</style>

        <nav className="h-full flex flex-col px-6 py-8 justify-between pt-24 md:pt-8">
          <div>
       
            <div className="mb-12 hidden md:block">
              <h1 className="text-2xl font-extrabold tracking-tight">
                Sandis<span className="text-blue-500 ml-0.5">Tech</span>
              </h1>
            </div>

            <ul className="flex flex-col gap-6 text-gray-400 font-medium">
              {[
                { name: "Home", href: "#Hero" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center py-2 text-base tracking-wide"
                  >
                   
                    <span className="nav-link-line" />
                    
                    
                    <span className="nav-text">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex flex-col gap-3">
          
            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full block">
              <button className="bg-blue-600 text-white px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-[1.02] w-full tracking-wide">
                Hire Me
              </button>
            </a>

            
            <a href="/paschal-cv.pdf" download className="w-full block">
              <button className="border border-gray-800 bg-gray-900/30 hover:bg-gray-900/60 text-gray-200 hover:text-white px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-300 hover:border-gray-700 hover:scale-[1.02] w-full tracking-wide flex items-center justify-center gap-2">
                <span>Download CV</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </a>
          </div>

        </nav>
      </header>
    </>
  );
}

export default Header;