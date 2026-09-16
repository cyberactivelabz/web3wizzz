import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowUpRightIcon,
  ExternalLinkIcon,
  FileTextIcon,
  GithubIcon,
} from '../components/Icons';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { PROJECTS, PROJECT_FILTERS, type Project } from '../data/content';

function ProjectCard({ project }: { project: Project }) {
  const linkCls =
    'inline-flex items-center gap-1.5 text-[11px] font-medium text-muted transition-colors hover:text-ink';

  return (
    <article className="group flex h-full flex-col border border-line bg-white transition-colors duration-200 hover:border-ink">
      {/* Preview panel: flat grey field with the project name set large */}
      <div className="flex aspect-[4/3] items-end bg-panel p-6">
        <p className="display text-[clamp(1.5rem,3.4vw,2.25rem)] text-ink/15 transition-colors duration-300 group-hover:text-ink/30">
          {project.title}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="meta">{project.kicker}</p>
        <h3 className="mt-2 text-lg font-semibold tracking-display">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-3 py-1 text-[11px] font-medium">
              {tag}
            </li>
          ))}
        </ul>

        {(project.github || project.demo || project.report) && (
          <div className="mt-5 flex items-center gap-4 border-t border-line pt-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className={linkCls}>
                <GithubIcon className="h-3.5 w-3.5" />
                Code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className={linkCls}>
                <ExternalLinkIcon className="h-3.5 w-3.5" />
                Live
              </a>
            )}
            {project.report && (
              <a href={project.report} target="_blank" rel="noreferrer" className={linkCls}>
                <FileTextIcon className="h-3.5 w-3.5" />
                Report
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>(PROJECT_FILTERS[0]);
  const reduce = useReducedMotion();

  const visible =
    filter === 'All work' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="work" aria-labelledby="work-heading" className="gutter scroll-mt-20 py-16 sm:py-20">
      <SectionHeading title="Featured work" />

      {/* Filter pills + the circular "see everything" affordance */}
      <Reveal delay={0.06}>
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter work by type">
            {PROJECT_FILTERS.map((option) => {
              const active = option === filter;
              return (
                <button
                  key={option}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(option)}
                  className={`pill ${active ? 'pill-active' : 'pill-idle'}`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <a
            href="https://github.com/web3wizzz"
            target="_blank"
            rel="noreferrer"
            aria-label="See every repository on GitHub"
            className="circle-btn shrink-0"
          >
            <ArrowUpRightIcon className="h-5 w-5" />
          </a>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.id}
              layout={!reduce}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
