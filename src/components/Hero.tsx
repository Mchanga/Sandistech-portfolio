import { ArrowDownRight, ArrowUpRight, Code2, Layers3 } from "lucide-react";
import profileImage from "../assets/profileImage.jpg";
import { Link } from "react-router-dom";

const Hero = () => (
  <section id="hero" className="hero-shell relative isolate overflow-hidden bg-[#101010] text-[#f5f1e8]">
    <div className="mx-auto max-w-7xl px-5 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:px-12 lg:pt-16">
      <div className="mb-8 flex items-center justify-between border-y border-white/10 py-3 text-[9px] font-medium uppercase tracking-[0.19em] text-white/45 sm:mb-12 sm:text-[10px]">
        <span>Software developer · Tanzania</span>
        <span className="hidden sm:inline">Tanzania, East Africa <span className="ml-2 text-[#c6a56b]">●</span></span>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="relative z-10 py-2 lg:py-10">
    
          <h1 className="hero-title max-w-4xl text-[clamp(3.4rem,10vw,7.7rem)] font-medium leading-[0.9] tracking-[-0.065em] text-[#f5f1e8]">
            I build
            <br />
            digital work
            <br />
            <span className="font-serif font-normal italic tracking-[-0.055em] text-[#c6a56b]">with purpose.</span>
          </h1>

          <div className="mt-7 flex max-w-xl gap-4 sm:mt-9">
            <span className="mt-1 h-12 w-px shrink-0 bg-[#c6a56b]" />
            <p className="text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              I&apos;m Paschal, a software developer shaping ideas into clear, useful digital experiences — built in Tanzania with a global point of view.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
            <Link to="/work" className="inline-flex items-center gap-3 bg-[#c6a56b] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#101010] transition hover:bg-[#c6a56b]">
              View my work <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-3 border border-white/25 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#f5f1e8] transition hover:border-[#c6a56b] hover:text-[#c6a56b]">
              Let&apos;s work together <ArrowDownRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.14em] text-white/45 sm:mt-16">
            <span className="inline-flex items-center gap-2"><Code2 size={13} className="text-[#c6a56b]" aria-hidden="true" /> Web development</span>
            <span className="inline-flex items-center gap-2"><Layers3 size={13} className="text-[#c6a56b]" aria-hidden="true" /> Full-stack products</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[31rem] lg:max-w-none">
          <div className="absolute -left-3 top-8 z-10 hidden h-20 w-20 border-l border-t border-[#c6a56b]/70 sm:block" />
          <div className="absolute -bottom-3 -right-3 z-10 hidden h-20 w-20 border-b border-r border-[#c6a56b]/70 sm:block" />
          
          <div className="hero-portrait relative aspect-[0.92/1] overflow-hidden bg-[#28251f]">
            <img
              src={profileImage}
              alt="Paschal Masanja, software developer based in Tanzania"
              className="h-full w-full object-cover object-center transition duration-700 ease-out hover:scale-[1.025]"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-[#101010]/20" />
            <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5">
              <span className="border border-white/20 bg-[#101010]/40 px-3 py-2 font-mono text-[8px] tracking-[0.16em] text-white/75 backdrop-blur-md">CREATIVE DEVELOPMENT</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#101010]/35 font-serif text-sm italic text-[#c6a56b] backdrop-blur-md" aria-hidden="true">P.</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] bg-[#101010]/40">Paschal Masanja</p>
                <p className="mt-1 text-xs bg-[#101010]/40">Software developer · Tanzania</p>
              </div>
              <span className="border border-white/30 px-2.5 py-1.5 font-mono text-[9px] tracking-[0.16em] text-white/75">TZ / 01</span>
            </div>
          </div>
          <div className="absolute -bottom-9 right-0 font-serif text-[5.5rem] leading-none text-[#c6a56b]/10 sm:-right-8 sm:text-[8rem]" aria-hidden="true">P.</div>
          <p className="mt-4 text-right text-[9px] uppercase tracking-[0.17em] text-white/35">Thoughtful by design. Useful by nature.</p>
        </div>
      </div>
    </div>

    <Link to="/about" aria-label="Read about Paschal" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-white/35 transition hover:text-[#c6a56b] lg:block">
      <ArrowDownRight size={17} aria-hidden="true" />
    </Link>
  </section>
);

export default Hero;
