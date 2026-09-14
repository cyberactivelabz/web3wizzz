import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLinkIcon, FileTextIcon, GithubIcon } from '../components/Icons';
import { SectionHeading } from '../components/SectionHeading';
import { PROJECTS, type Project } from '../data/content';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();

  const linkCls =
    'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 font-mono text-xs font-medium text-ink-500 transition-colors hover:bg-mint-500/10 hover:text-mint-600 dark:text-paper-300/70 dark:hover:text-mint-400';

  return (
    <motion.article
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.21, 0.65, 0.36, 1] }}
      className={`group flex h-full flex-col rounded-xl border p-6 transition-all duration-300 ${
        project.placeholder
          ? 'border-dashed border-ink-300 dark:border-ink-600'
          : 'border-ink-200 bg-paper-50 hover:-translate-y-1.5 hover:border-mint-500/50 hover:shadow-xl hover:shadow-mint-500/5 dark:border-ink-700 dark:bg-ink-900 dark:hover:border-mint-400/40'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className={`text-lg font-bold tracking-tight ${
            project.placeholder
              ? 'text-ink-400 dark:text-paper-300/40'
              : 'text-ink-900 dark:text-paper-50'
          }`}
        >
          {project.title}
        </h3>
        {project.featured && (
          <span className="shrink-0 rounded-full bg-mint-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-mint-600 dark:text-mint-400">
            featured
          </span>
        )}
      </div>

      <p
        className={`mt-3 flex-1 text-sm leading-relaxed ${
          project.placeholder
            ? 'text-ink-400/80 dark:text-paper-300/35'
            : 'text-ink-500 dark:text-paper-300/65'
        }`}
      >
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className={`rounded px-2 py-0.5 font-mono text-[11px] ${
              project.placeholder
                ? 'bg-ink-200/60 text-ink-400 dark:bg-ink-700 dark:text-paper-300/40'
                : 'bg-mint-500/10 text-mint-600 dark:text-mint-400'
            }`}
          >
            {tag}
          </li>
        ))}
      </ul>

      {!project.placeholder && (
        <div className="mt-5 flex items-center gap-1 border-t border-ink-200 pt-4 dark:border-ink-700">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={linkCls}
              aria-label={`${project.title} GitHub repository`}
            >
              <GithubIcon className="h-3.5 w-3.5" /> code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} className={linkCls} aria-label={`${project.title} live demo`}>
              <ExternalLinkIcon className="h-3.5 w-3.5" /> demo
            </a>
          )}
          {project.audit && (
            <a
              href={project.audit}
              target="_blank"
              rel="noreferrer"
              className={linkCls}
              aria-label={`${project.title} audit report`}
            >
              <FileTextIcon className="h-3.5 w-3.5" /> audit
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 md:px-8 md:py-32"
    >
      <SectionHeading
        index="03"
        eyebrow="projects"
        title="Selected Work"
        description="Audits, protocol builds, and tooling. Dashed cards are placeholders — drop your real projects into src/data/content.ts."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
