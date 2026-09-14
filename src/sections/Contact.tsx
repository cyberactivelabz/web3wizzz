import { useState, type FormEvent } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, XIcon } from '../components/Icons';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { PROFILE } from '../data/content';

const inputCls =
  'w-full rounded-lg border border-ink-200 bg-paper-50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 transition-colors focus:border-mint-500 dark:border-ink-700 dark:bg-ink-800 dark:text-paper-50 dark:placeholder:text-paper-300/30';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'a visitor'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const socials = [
    { label: 'Email', href: `mailto:${PROFILE.email}`, icon: MailIcon, handle: PROFILE.email },
    { label: 'GitHub', href: PROFILE.github, icon: GithubIcon, handle: '@web3wizzz' },
    { label: 'X / Twitter', href: PROFILE.twitter, icon: XIcon, handle: '@web3wizzz' },
    { label: 'LinkedIn', href: PROFILE.linkedin, icon: LinkedinIcon, handle: 'in/web3wizzz' },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 md:px-8 md:py-32"
    >
      <SectionHeading
        index="05"
        eyebrow="contact"
        title="Get in Touch"
        description="Need an audit, a protocol build, or a web3 integration? My inbox is open."
      />

      <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:gap-16">
        <Reveal>
          <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block font-mono text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-paper-300/60"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Satoshi N."
                  className={inputCls}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block font-mono text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-paper-300/60"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@protocol.xyz"
                  className={inputCls}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block font-mono text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-paper-300/60"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Scope, timeline, contract addresses…"
                className={`${inputCls} resize-y`}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-mint-500 px-6 py-3 text-sm font-semibold text-ink-950 shadow-lg shadow-mint-500/25 transition-all hover:bg-mint-400"
            >
              Send Message
              <span aria-hidden="true">→</span>
            </button>
            <p className="font-mono text-[11px] text-ink-400 dark:text-paper-300/40">
              opens your mail client · no data is stored
            </p>
          </form>
        </Reveal>

        <div className="space-y-3">
          {socials.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <a
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-ink-200 bg-paper-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-mint-500/50 dark:border-ink-700 dark:bg-ink-900 dark:hover:border-mint-400/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mint-500/10 text-mint-600 transition-transform duration-300 group-hover:scale-110 dark:text-mint-400">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-ink-900 dark:text-paper-50">
                    {s.label}
                  </span>
                  <span className="block truncate font-mono text-xs text-ink-400 dark:text-paper-300/50">
                    {s.handle}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="ml-auto shrink-0 text-ink-300 transition-transform duration-300 group-hover:translate-x-1 dark:text-paper-300/30"
                >
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
