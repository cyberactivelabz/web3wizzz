import { Reveal } from './Reveal';

interface SectionHeadingProps {
  index: string;
  title: string;
  eyebrow?: string;
  description?: string;
}

export function SectionHeading({ index, title, eyebrow = 'section', description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-3 font-mono text-sm text-mint-600 dark:text-mint-400">
        <span aria-hidden="true">{index}</span>
        <span aria-hidden="true" className="h-px w-10 translate-y-[-3px] bg-mint-600/50 dark:bg-mint-400/40" />
        <span className="uppercase tracking-[0.2em]">{eyebrow}</span>
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 dark:text-paper-50 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-700/80 dark:text-paper-100/70">
          {description}
        </p>
      )}
    </Reveal>
  );
}
