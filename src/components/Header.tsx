function Header() {
  return (
    <header className="fixed top-0 left-0 h-screen w-64 z-50 bg-[#0b0f19] border-r border-gray-900 text-white block">
      {/* CSS ya ndani kwa ajili ya kulainisha mveleko wa menu hover */}
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

      <nav className="h-full flex flex-col px-6 py-8 justify-between">
        <div>
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-2xl font-extrabold tracking-tight">
              Sandis<span className="text-blue-500 ml-0.5">Tech</span>
            </h1>
          </div>

          {/* Navigation Links */}
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
                  className="group relative flex items-center py-2 text-base tracking-wide"
                >
                  {/* Mstari wa bluu wa neon */}
                  <span className="nav-link-line" />
                  
                  {/* Maandishi yanayosogea mbele */}
                  <span className="nav-text">
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sehemu ya Vitufe Viwili (Premium Double Buttons) */}
        <div className="mt-auto flex flex-col gap-3">
          {/* Kitufe cha Hire Me */}
          <a href="#contact" className="w-full block">
            <button className="bg-blue-600 text-white px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-[1.02] w-full tracking-wide">
              Hire Me
            </button>
          </a>

          {/* Kitufe cha Download CV - Mtindo wa Kioo (Outline Glass Style) */}
          <a href="/Masanja_CV.pdf" download className="w-full block">
            <button className="border border-gray-800 bg-gray-900/30 hover:bg-gray-900/60 text-gray-200 hover:text-white px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-300 hover:border-gray-700 hover:scale-[1.02] w-full tracking-wide flex items-center justify-center gap-2">
              <span>Download CV</span>
              {/* Icon ndogo ya mshale wa kushusha chini */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </a>
        </div>

      </nav>
    </header>
  );
}

export default Header;