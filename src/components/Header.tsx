import { useState } from "react";
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
              ST
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-[0.02em] sm:text-base">Sandistech</span>
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
    </>
  );
}

export default Header;
