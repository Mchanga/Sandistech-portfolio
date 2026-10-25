import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

const links = [
  { name: "Home", to: "/" },
  { name: "Work", to: "/work" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Experience", to: "/experience" },
  { name: "Contact", to: "/contact" },
];

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#101010] text-[#f5f1e8]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-9 sm:grid-cols-[1fr_auto] sm:items-end sm:px-8 lg:px-12">
        <div>
          <Link to="/" className="font-serif text-lg tracking-tight">
            Paschal <span className="italic text-[#c6a56b]">Masanja</span>
          </Link>
          <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">Software developer Â· Tanzania, East Africa</p>
          <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer navigation">
            {links.map(({ name, to }) => (
              <Link key={to} to={to} className="text-[10px] text-white/50 transition hover:text-[#c6a56b]">{name}</Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/55 transition hover:border-[#c6a56b] hover:text-[#c6a56b]">
            <FaGithub size={15} aria-hidden="true" />
          </a>
          <a href={`https://wa.me/${profile.phoneLink}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/55 transition hover:border-[#c6a56b] hover:text-[#c6a56b]">
            <FaWhatsapp size={15} aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.email}`} className="ml-2 inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-white/50 transition hover:text-[#c6a56b]">
            Email me <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <p className="w-full pt-2 text-[9px] uppercase tracking-[0.12em] text-white/35 sm:text-right">&copy; {new Date().getFullYear()} sandistech</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
