import { useState, type FormEvent } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, XIcon } from '../components/Icons';
import { Reveal } from '../components/Reveal';
import { DISCOVERY_CALL_HREF, PROFILE } from '../data/content';

const fieldCls =
  'w-full border-b border-white/25 bg-transparent py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none';

const labelCls = 'text-[11px] font-medium tracking-[0.18em] text-white/50';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || 'a visitor'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const socials = [
    {
      label: 'Email',
      href: "mailto:eliasworkspace247@gmail.com?cc=web3wizzz@outlook.com&subject=Web3%20Project%20Inquiry&body=Hi%20there%2C%20I'd%20like%20to%20discuss%20a%20project...",
      Icon: MailIcon,
    },
    { label: 'GitHub', href: PROFILE.github, Icon: GithubIcon },
    { label: 'X', href: PROFILE.twitter, Icon: XIcon },
    { label: 'LinkedIn', href: PROFILE.linkedin, Icon: LinkedinIcon },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 bg-[#0d0d0d] text-white"
    >
      <div className="gutter py-16 sm:py-20">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.18em] text-white/50">
            {PROFILE.location}
          </p>
          <h2 id="contact-heading" className="display mt-4 text-[clamp(3rem,12vw,8.5rem)]">
            Have a project in mind?
          </h2>
          <p className="mt-5 max-w-[46ch] text-sm leading-relaxed text-white/60">
            Whether you need a smart contract audit, a DeFi protocol, or the tooling around it, tell
            me what you&rsquo;re working on and I&rsquo;ll get back to you.
          </p>
          <a
            href={DISCOVERY_CALL_HREF}
            className="magnetic-cta group mt-7 inline-flex items-center gap-3 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:border-white hover:bg-white hover:text-[#0d0d0d]"
          >
            Book a discovery call
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              ↗
            </span>
          </a>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-16">
          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={`${labelCls} mb-1 block`}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={fieldCls}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={`${labelCls} mb-1 block`}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@protocol.xyz"
                    className={fieldCls}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className={`${labelCls} mb-1 block`}>
                    Project details
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, scope, and timeline..."
                  className={`${fieldCls} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0d0d0d] transition-colors hover:bg-white/85"
              >
                Send enquiry
              </button>

              <p className="text-[11px] text-white/40">
                Opens your mail client. Nothing is stored on this site.
              </p>
            </form>
          </Reveal>

          <Reveal delay={0.14}>
            <ul className="space-y-0 border-t border-white/15">
              {socials.map(({ label, href, Icon }) => (
                <li key={label} className="border-b border-white/15">
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="group flex items-center gap-4 py-5 transition-colors hover:text-white/70"
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="text-sm font-semibold">{label}</span>
                    <span
                      aria-hidden="true"
                      className="ml-auto text-white/40 transition-transform duration-200 group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
