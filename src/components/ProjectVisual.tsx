import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "../data/portfolio";
import { Link } from "react-router-dom";

function ProjectVisual({ project, className = "" }: { project: PortfolioProject; className?: string }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.name} project preview`}
        className={`h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.025] ${className}`}
        loading="lazy"
        decoding="async"
        width="1200"
        height="800"
      />
    );
  }

  const ProjectIcon = project.icon;
  return (
    <div className={`project-art project-art--${project.visual} relative flex h-full min-h-[15rem] items-center justify-center overflow-hidden transition duration-700 ease-out group-hover:scale-[1.015] sm:min-h-[19rem] ${className}`} aria-hidden="true">
      {project.visual === "studio" ? (
        <div className="relative z-10 w-[72%] border border-[#c6a56b]/60 p-5 text-[#f5f1e8] sm:p-8">
          <div className="flex items-center justify-between border-b border-white/20 pb-3 text-[8px] uppercase tracking-[0.2em] text-white/55">
            <span>Dar es Salaam</span><span>Creative studio</span>
          </div>
          <div className="mt-7 flex items-end justify-between gap-3">
            <span className="font-serif text-4xl tracking-[-0.06em] sm:text-6xl">Yazoh</span>
            {ProjectIcon && <ProjectIcon className="mb-1 text-2xl text-[#c6a56b] sm:text-3xl" />}
          </div>
          <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#c6a56b] sm:text-[9px]">GRAPHX · DESIGN · MOTION</p>
        </div>
      ) : (
        <div className="relative z-10 flex w-[72%] items-center justify-between border-y border-[#c6a56b]/55 py-5 text-[#f5f1e8] sm:py-8">
          <div>
            <p className="text-[8px] uppercase tracking-[0.23em] text-[#c6a56b]">Tanzania · East Africa</p>
            <p className="mt-3 max-w-[12rem] font-serif text-3xl leading-[0.95] tracking-[-0.04em] sm:text-5xl">Find your<br /><i>own wild.</i></p>
            <p className="mt-4 text-[8px] uppercase tracking-[0.18em] text-white/50">Safari Explorer</p>
          </div>
          {ProjectIcon && <ProjectIcon className="text-4xl text-[#c6a56b]/80 sm:text-6xl" />}
        </div>
      )}
    </div>
  );
}

export function ProjectCard({ project, index = 0, featured = false }: { project: PortfolioProject; index?: number; featured?: boolean }) {
  return (
    <article data-reveal className={`project-card group flex flex-col border-b border-white/15 pb-7 ${featured ? "xl:col-span-2 xl:grid xl:grid-cols-[1.35fr_0.8fr] xl:items-center xl:gap-7" : ""}`}>
      <Link to={`/work/${project.slug}`} aria-label={`Read the ${project.name} case study`} className="project-card-media relative block overflow-hidden bg-[#22221e] focus-visible:outline-offset-4">
        <div className="aspect-[1.55/1]">
          <ProjectVisual project={project} />
        </div>
        <span className="absolute left-4 top-4 z-10 border border-white/20 bg-[#101010]/80 px-3 py-1.5 font-mono text-[9px] tracking-[0.12em] text-white/80 backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")} / {String(3).padStart(2, "0")}
        </span>
        {project.status && (
          <span className="absolute right-4 top-4 z-10 border border-[#c6a56b]/50 bg-[#101010]/85 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.13em] text-[#c6a56b] backdrop-blur-sm">
            {project.status}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[9px] font-semibold uppercase tracking-[0.19em] text-[#c6a56b]">{project.category}</p>
        <h3 className="mt-2 font-serif text-2xl tracking-[-0.03em] sm:text-3xl">
          <Link to={`/work/${project.slug}`} className="transition hover:text-[#c6a56b]">{project.name}</Link>
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-7 text-white/55">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="text-[9px] font-medium uppercase tracking-[0.08em] text-white/40">{technology}</span>
          ))}
        </div>
        <Link to={`/work/${project.slug}`} className="mt-5 inline-flex w-fit items-center gap-2 border-b border-[#c6a56b]/60 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#c6a56b] transition hover:gap-3 hover:border-[#f5f1e8] hover:text-[#f5f1e8]">
          View case study <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default ProjectVisual;
