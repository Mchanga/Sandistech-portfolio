import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <section id="footer" className="bg-[#0b0f19] text-white relative overflow-hidden border-t border-gray-900 md:pl-24">
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-6 py-12 z-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Sandi<span className="text-blue-500 ml-1">Tech</span>
            </h2>
            <p className="mt-3 leading-relaxed text-xs text-gray-400">
              Building scalable digital solutions with modern technologies. I create software experiences that solve real-world problems.
            </p>

            <div className="flex items-center gap-2 mt-5">
              {[
                { icon: FaGithub, href: "https://github.com/Mchanga", hoverClass: "hover:border-white hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" },
                { icon: FaLinkedin, href: "https://linkedin.com", hoverClass: "hover:border-blue-500 hover:text-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]" },
                { icon: FaInstagram, href: "https://instagram.com", hoverClass: "hover:border-pink-500 hover:text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]" },
                { icon: FaTwitter, href: "https://twitter.com", hoverClass: "hover:border-sky-500 hover:text-sky-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]" },
                { icon: FaWhatsapp, href: "https://wa.me/255764069290", hoverClass: "hover:border-green-500 hover:text-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-9 w-9 items-center justify-center rounded-xl border border-gray-800 bg-gray-900/50 text-gray-400 transition-all duration-300 hover:-translate-y-1 ${social.hoverClass}`}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-200">Quick Links</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              {[{ name: "Home", href: "#Hero" }, { name: "About", href: "#about" }, { name: "Skills", href: "#skills" }, { name: "Projects", href: "#projects" }].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors duration-200">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-200">Services</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Frontend Developer</li>
              <li>Backend Systems</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-200">Contact</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>Tanzania</li>
              <li className="break-all">paschalmasanja303@gmail.com</li>
              <li>+255 764 069 290</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-900 pt-6 gap-3 md:flex-row">
          <p className="text-[11px] text-gray-500">&copy; {new Date().getFullYear()} SandisTech. All rights reserved.</p>
          <p className="text-[11px] text-gray-500">Designed & Developed by Paschal Masanja</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;