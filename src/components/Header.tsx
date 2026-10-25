import { useState } from "react";
<<<<<<< HEAD
import { ArrowDownToLine, BriefcaseBusiness, Code2, Home, Mail, Menu, UserRound, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { name: "Home", to: "/", icon: Home },
  { name: "About", to: "/about", icon: UserRound },
  { name: "Services", to: "/services", icon: Code2 },
  { name: "Work", to: "/work", icon: BriefcaseBusiness },
  { name: "Experience", to: "/experience", icon: "01" },
];

const navClassName = ({ isActive }: { isActive: boolean }) =>
  `nav-link relative px-3 py-3 text-[11px] font-medium tracking-wide transition ${
    isActive ? "text-[#c6a56b]" : "text-white/60 hover:text-[#f5f1e8]"
  }`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101010]/95 text-[#f5f1e8] backdrop-blur">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Sandistech, home" onClick={() => setIsOpen(false)}>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#c6a56b]/70 font-serif text-sm text-[#c6a56b] transition group-hover:bg-[#c6a56b] group-hover:text-[#101010]">
              PM
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-[0.02em] sm:text-base">Sandistech</span>
              <span className="hidden text-[9px] font-medium uppercase tracking-[0.2em] text-white/45 sm:block">Software developer</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {links.map(({ name, to }) => (
              <NavLink key={to} to={to} end={to === "/"} className={navClassName}>
                {name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden border border-[#c6a56b]/70 px-3.5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#c6a56b] transition hover:bg-[#c6a56b] hover:text-[#101010] lg:inline-flex"
            >
              Start a project
            </Link>
            <a
              href="/paschal-cv.pdf"
              download
              className="inline-flex shrink-0 items-center gap-2 border border-white/20 px-3.5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#f5f1e8] transition hover:border-[#c6a56b] hover:text-[#c6a56b] sm:px-4"
            >
              <ArrowDownToLine size={14} aria-hidden="true" />
              <span className="hidden sm:inline">Download CV</span>
              <span className="sm:hidden">CV</span>
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition hover:border-[#c6a56b] hover:text-[#c6a56b] md:hidden"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <nav id="mobile-navigation" className="fixed inset-x-0 top-[4.5rem] z-50 border-b border-white/10 bg-[#101010] px-5 py-5 shadow-2xl md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map(({ name, to, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `flex items-center gap-3 border-b border-white/10 py-4 text-sm transition ${isActive ? "text-[#c6a56b]" : "text-white/70 hover:text-[#f5f1e8]"}`}
              >
                {typeof Icon === "string" ? <span className="w-4 text-center font-mono text-xs">{Icon}</span> : <Icon size={16} aria-hidden="true" />}
                {name}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-5 inline-flex items-center justify-center gap-2 bg-[#c6a56b] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#101010]">
              <Mail size={14} aria-hidden="true" /> Start a project
            </Link>
          </div>
        </nav>
      )}
=======

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
>>>>>>> 1acf79cc7ac883e92194e6f1926ed1a9516193b7
    </>
  );
}

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> 1acf79cc7ac883e92194e6f1926ed1a9516193b7
