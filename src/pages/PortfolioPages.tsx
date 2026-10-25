import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import PageMeta from "../components/PageMeta";
import ProjectVisual, { ProjectCard } from "../components/ProjectVisual";
import { capabilities, profile, projects } from "../data/portfolio";
import profileImage from "../assets/profileImage.jpg";

const sectionLinkClass =
  "inline-flex items-center gap-2 border-b border-[#c6a56b]/60 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#c6a56b] transition hover:gap-3 hover:border-[#f5f1e8] hover:text-[#f5f1e8]";

function PageIntro({ index, label, title, description }: { index: string; label: string; title: string; description: string }) {
  return (
    <header className="border-b border-white/15 pb-8 sm:pb-12" data-reveal>
      <p className="section-kicker"><span>{index}</span> / {label}</p>
      <div className="mt-5 grid gap-5 sm:grid-cols-[1.1fr_0.9fr] sm:items-end sm:gap-10">
        <h1 className="editorial-heading text-5xl text-[#f5f1e8] sm:text-7xl">{title}</h1>
        <p className="max-w-lg text-sm leading-7 text-white/55 sm:justify-self-end sm:text-base">{description}</p>
      </div>
    </header>
  );
}

export function HomePage() {
  return (
    <>
      <PageMeta title="Paschal Masanja — Software Developer in Tanzania" description="Paschal Masanja is a software developer in Tanzania building thoughtful web experiences and full-stack digital products." />
      <Hero />

      <section className="bg-[#f5f1e8] text-[#191815]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:grid-cols-[0.5fr_1.5fr] sm:px-8 sm:py-20 lg:px-12">
          <p className="section-kicker" data-reveal>01 / A considered approach</p>
          <div data-reveal>
            <h2 className="editorial-heading max-w-4xl text-3xl leading-tight sm:text-5xl">
              Good digital work should feel clear, work reliably, and make a real difference.
            </h2>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-t border-[#d8d2c5] pt-5">
              <p className="max-w-xl text-sm leading-7 text-[#6a675f]">I bring interface design and practical software engineering together to help shape useful web products — from Tanzania, with a global point of view.</p>
              <Link to="/about" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6e542b] transition hover:gap-3">More about me <ArrowUpRight size={14} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101010] text-[#f5f1e8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-white/15 pb-5 sm:mb-10">
            <div data-reveal>
              <p className="section-kicker"><span>02</span> / Selected work</p>
              <h2 className="editorial-heading mt-3 text-4xl text-[#f5f1e8] sm:text-5xl">Made to matter.</h2>
            </div>
            <Link to="/work" className={`${sectionLinkClass} hidden sm:inline-flex`}>All projects <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-2">
            {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} featured={index === 0} />)}
          </div>
          <Link to="/work" className={`${sectionLinkClass} mt-8 sm:hidden`}>All projects <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="bg-[#f5f1e8] text-[#191815]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-6 border-b border-[#d8d2c5] pb-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <div data-reveal>
              <p className="section-kicker"><span>03</span> / What I bring</p>
              <h2 className="editorial-heading mt-3 text-4xl sm:text-5xl">Thoughtful from start to ship.</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6e542b] transition hover:gap-3">Explore services <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </div>
          <div className="mt-7 grid gap-0 sm:grid-cols-3 sm:divide-x sm:divide-[#d8d2c5]">
            {capabilities.map((capability) => (
              <article key={capability.number} data-reveal className="border-b border-[#d8d2c5] py-5 sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:pr-0">
                <span className="font-mono text-[10px] text-[#a48655]">{capability.number}</span>
                <h3 className="mt-3 font-serif text-xl">{capability.title}</h3>
                <p className="mt-2 text-xs leading-6 text-[#6a675f]">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#101010] text-[#f5f1e8]">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-14 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-16 lg:px-12">
          <div data-reveal>
            <p className="section-kicker"><span>04</span> / Next step</p>
            <h2 className="editorial-heading mt-3 text-4xl text-[#f5f1e8] sm:text-5xl">Have something in mind?</h2>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-[#c6a56b] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#101010] transition hover:brightness-95">Start a project <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}

export function WorkPage() {
  return (
    <section className="min-h-[75vh] bg-[#101010] text-[#f5f1e8]">
      <PageMeta title="Selected Work — Paschal Masanja" description="Explore selected web development and creative projects by Paschal Masanja, a software developer in Tanzania." />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <PageIntro index="01" label="Project archive" title="Work, with purpose." description="A small, considered selection of digital experiences and products. Open a project to explore its context, focus, and the work behind it." />
        <div className="mt-10 grid gap-9 md:grid-cols-2 md:gap-x-10 md:gap-y-14">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
        <p className="mt-7 border-t border-white/10 pt-5 text-[10px] text-white/40">Three projects currently featured. More work and detailed project notes will be added as they are ready.</p>
      </div>
    </section>
  );
}

export function ProjectPage() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((project) => project.slug === slug);
  const project = projects[projectIndex];

  if (!project) return <NotFoundPage />;

  const previous = projects[(projectIndex + projects.length - 1) % projects.length];
  const next = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="bg-[#101010] text-[#f5f1e8]">
      <PageMeta title={`${project.name} — Case Study | Paschal Masanja`} description={`${project.description} A selected project by Paschal Masanja.`} />
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-12">
        <Link to="/work" className="mb-9 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50 transition hover:text-[#c6a56b]"><ArrowLeft size={14} aria-hidden="true" /> Back to work</Link>
        <header data-reveal className="grid gap-7 border-b border-white/15 pb-8 sm:grid-cols-[1.1fr_0.9fr] sm:items-end sm:pb-12">
          <div>
            <p className="section-kicker"><span>Case study</span> / {project.category}</p>
            <h1 className="editorial-heading mt-4 text-5xl text-[#f5f1e8] sm:text-7xl">{project.name}</h1>
          </div>
          <div className="sm:justify-self-end">
            <p className="max-w-lg text-sm leading-7 text-white/60">{project.description}</p>
            {project.status && <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#c6a56b]">{project.status}</p>}
          </div>
        </header>

        <div data-reveal className="group relative mt-8 overflow-hidden bg-[#24231f]">
          <div className="aspect-[1.5/1] sm:aspect-[1.9/1]">
            <ProjectVisual project={project} />
          </div>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-[0.65fr_1.35fr] sm:gap-16">
          <aside data-reveal>
            <p className="section-kicker">Project details</p>
            <p className="mt-4 text-sm text-white/70">{project.category}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => <span key={technology} className="border border-white/15 px-2.5 py-1.5 text-[9px] uppercase tracking-[0.07em] text-white/55">{technology}</span>)}
            </div>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className={`${sectionLinkClass} mt-6`}>Visit live project <ArrowUpRight size={14} aria-hidden="true" /></a>
          </aside>
          <div className="grid gap-8 sm:grid-cols-2">
            <section data-reveal>
              <p className="section-kicker">01 / Context</p>
              <p className="mt-3 text-sm leading-7 text-white/65">{project.context}</p>
            </section>
            <section data-reveal>
              <p className="section-kicker">02 / Focus</p>
              <p className="mt-3 text-sm leading-7 text-white/65">{project.focus}</p>
            </section>
            <section data-reveal className="sm:col-span-2">
              <p className="section-kicker">03 / Project notes</p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">{project.approach}</p>
              <p className="mt-4 max-w-2xl text-xs leading-6 text-white/40">This case study reflects the verified project information currently available. No client, timeline, performance metrics, or outcomes have been inferred.</p>
            </section>
          </div>
        </div>

        <nav className="mt-12 grid grid-cols-2 border-y border-white/15" aria-label="Project case studies">
          <Link to={`/work/${previous.slug}`} className="group border-r border-white/15 py-5 pr-4 transition hover:text-[#c6a56b]">
            <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-white/40"><ArrowLeft size={12} aria-hidden="true" /> Previous</span>
            <span className="mt-2 block font-serif text-lg">{previous.name}</span>
          </Link>
          <Link to={`/work/${next.slug}`} className="group py-5 pl-4 text-right transition hover:text-[#c6a56b]">
            <span className="flex items-center justify-end gap-2 text-[9px] uppercase tracking-[0.14em] text-white/40">Next <ArrowRight size={12} aria-hidden="true" /></span>
            <span className="mt-2 block font-serif text-lg">{next.name}</span>
          </Link>
        </nav>
        <div className="mt-9 text-center"><Link to="/contact" className={sectionLinkClass}>Discuss a project <ArrowUpRight size={14} aria-hidden="true" /></Link></div>
      </div>
    </article>
  );
}

export function AboutPage() {
  return (
    <>
      <PageMeta title="About — Paschal Masanja" description="Meet Paschal Masanja, a software developer from Tanzania, and learn about his approach to building thoughtful digital products." />
      <section className="bg-[#f5f1e8] text-[#191815]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <p className="section-kicker" data-reveal>02 / About</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-16">
            <div data-reveal>
              <h1 className="editorial-heading text-5xl sm:text-7xl">Rooted here.<br /><span className="text-[#9c7b45]">Built for anywhere.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#34322c]">I&apos;m Paschal Masanja, a software developer from Tanzania who cares about what technology makes possible for people.</p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6a675f] sm:text-base sm:leading-8">I work across the stack, bringing clear interfaces and dependable engineering together to make digital products feel useful, considered, and easy to navigate. I approach each build with curiosity and close attention to how the interface feels, how the system holds up, and whether the result is genuinely useful.</p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6a675f] sm:text-base sm:leading-8">Based in Tanzania, I want work shaped here to meet a global bar for quality and craft. I value honest communication, thoughtful details, and steady learning — and I always start with the real problem a product needs to solve.</p>
              <div className="mt-8 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8b7042]"><MapPin size={14} aria-hidden="true" /> Tanzania, East Africa</div>
            </div>
            <figure data-reveal className="relative mx-auto w-full max-w-md">
              <div className="aspect-[0.9/1] overflow-hidden bg-[#26231f]">
                <img src={profileImage} alt="Portrait of Paschal Masanja" className="h-full w-full object-cover" width="1920" height="1080" loading="lazy" />
              </div>
              <figcaption className="mt-3 flex justify-between text-[9px] uppercase tracking-[0.14em] text-[#817b6f]"><span>Paschal Masanja</span><span>Software developer</span></figcaption>
            </figure>
          </div>
        </div>
        <div className="border-t border-[#d8d2c5]">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-9 sm:grid-cols-[0.5fr_1.5fr] sm:px-8 lg:px-12">
            <p className="section-kicker" data-reveal>Education</p>
            <p data-reveal className="font-serif text-2xl">{profile.education}</p>
          </div>
        </div>
      </section>
      <section className="bg-[#101010] text-[#f5f1e8]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-12">
          <div data-reveal><p className="section-kicker">Continue exploring</p><h2 className="editorial-heading mt-3 text-4xl text-[#f5f1e8]">See what I&apos;m building.</h2></div>
          <Link to="/work" className={sectionLinkClass}>Explore selected work <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}

export function ServicesPage() {
  return (
    <section className="min-h-[75vh] bg-[#f5f1e8] text-[#191815]">
      <PageMeta title="Services — Paschal Masanja" description="Explore web development and full-stack software services offered by Paschal Masanja." />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <header className="border-b border-[#d8d2c5] pb-8 sm:pb-12" data-reveal>
          <p className="section-kicker"><span>03</span> / Services</p>
          <div className="mt-5 grid gap-5 sm:grid-cols-[1.1fr_0.9fr] sm:items-end sm:gap-10">
            <h1 className="editorial-heading text-5xl sm:text-7xl">How I can help.</h1>
            <p className="max-w-lg text-sm leading-7 text-[#6a675f] sm:justify-self-end sm:text-base">I work across interfaces and application systems to build responsive, useful digital experiences. Here&apos;s where I can contribute.</p>
          </div>
        </header>
        <div className="divide-y divide-[#d8d2c5]">
          {capabilities.map((service) => (
            <article key={service.number} data-reveal className="grid gap-5 py-8 sm:grid-cols-[0.2fr_0.8fr_1fr] sm:items-start sm:gap-8 sm:py-10">
              <span className="font-mono text-[11px] tracking-[0.1em] text-[#a48655]">{service.number}</span>
              <div>
                <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">{service.title}</h2>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">{service.skills.map((skill) => <span key={skill} className="text-[9px] font-medium uppercase tracking-[0.08em] text-[#7e786c]">{skill}</span>)}</div>
              </div>
              <div className="sm:justify-self-end">
                <p className="max-w-lg text-sm leading-7 text-[#6a675f]">{service.description}</p>
                <p className="mt-3 text-[10px] text-[#8b7042]">Related work: {service.example}</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#6e542b] transition hover:gap-3">Discuss this service <ArrowUpRight size={13} aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 border-t border-[#d8d2c5] pt-5 text-[10px] leading-5 text-[#898376]">Capabilities reflect the tools and experience represented in my current portfolio. Project scope is discussed individually; no fixed prices or guaranteed outcomes are implied.</p>
      </div>
    </section>
  );
}

export function ExperiencePage() {
  const milestones = [
    { kind: "Education", title: profile.education, description: "Computer Science education, with further details and dates not currently listed." },
    ...projects.map((project) => ({ kind: "Selected project", title: project.name, description: project.description })),
  ];

  return (
    <section className="min-h-[75vh] bg-[#101010] text-[#f5f1e8]">
      <PageMeta title="Experience & Journey — Paschal Masanja" description="Education and selected project work from the professional journey of Paschal Masanja." />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <PageIntro index="04" label="Experience & journey" title="A practice in progress." description="A concise record of the education and selected project work represented in my portfolio. No dates or roles are inferred where they have not been provided." />
        <div className="mt-10">
          {milestones.map((item, index) => (
            <article key={`${item.kind}-${item.title}`} data-reveal className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[0.25fr_0.75fr_1fr] sm:gap-8 sm:py-9">
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#c6a56b]">{String(index + 1).padStart(2, "0")}</span>
              <div><p className="text-[9px] uppercase tracking-[0.16em] text-white/40">{item.kind}</p><h2 className="mt-2 font-serif text-xl sm:text-2xl">{item.title}</h2></div>
              <p className="max-w-lg text-sm leading-7 text-white/55">{item.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-[10px] leading-5 text-white/40">Work dates, employment history, certifications, and awards are not included because verified details were not available.</p>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <>
      <PageMeta title="Contact — Paschal Masanja" description="Start a project or contact Paschal Masanja, software developer in Tanzania, by email, WhatsApp, or the contact form." />
      <Contact />
    </>
  );
}

export function NotFoundPage() {
  return (
    <section className="flex min-h-[75vh] items-center bg-[#101010] text-[#f5f1e8]">
      <PageMeta title="Page Not Found — Paschal Masanja" description="The page you are looking for could not be found. Explore the work of Paschal Masanja." noIndex />
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <p className="section-kicker">A little off the map</p>
        <h1 className="editorial-heading mt-5 text-[clamp(6rem,20vw,15rem)] leading-[0.8] text-[#c6a56b]">404<span className="text-[#f5f1e8]">.</span></h1>
        <div className="mt-8 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
          <div><h2 className="font-serif text-2xl">This page isn&apos;t here.</h2><p className="mt-2 text-sm text-white/50">The link may have moved, or the address may be incorrect.</p></div>
          <div className="flex gap-5"><Link to="/" className={sectionLinkClass}>Home <ArrowUpRight size={14} aria-hidden="true" /></Link><Link to="/work" className={sectionLinkClass}>View work <ArrowUpRight size={14} aria-hidden="true" /></Link></div>
        </div>
      </div>
    </section>
  );
}
