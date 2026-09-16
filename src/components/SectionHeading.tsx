import type { ReactNode } from 'react';
import { ArrowDownRightIcon } from './Icons';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  title: string;
  description?: string;
  /** Renders the circular arrow next to the title, as on the reference sheet. */
  withMarker?: boolean;
  align?: 'left' | 'center';
  children?: ReactNode;
}

export function SectionHeading({
  title,
  description,
  withMarker = false,
  align = 'left',
  children,
}: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : undefined}>
      <div
        className={`flex flex-wrap items-end gap-x-5 gap-y-3 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <h2 className="display text-[clamp(2.25rem,6vw,4.25rem)] text-muted">
          {title}
        </h2>
        {withMarker && (
          <span
            aria-hidden="true"
            className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
          >
            <ArrowDownRightIcon className="h-4 w-4" />
          </span>
        )}
      </div>

      {description && (
        <p
          className={`mt-4 max-w-[46ch] text-sm leading-relaxed text-muted ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}

      {children}
    </Reveal>
  );
}
