import { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';

// Code-split below-the-fold sections — smaller initial bundle, faster LCP.
// Sections use named exports, so map them for React.lazy.
const About = lazy(() =>
  import('./sections/About').then((m) => ({ default: m.About })),
);
const Skills = lazy(() =>
  import('./sections/Skills').then((m) => ({ default: m.Skills })),
);
const Projects = lazy(() =>
  import('./sections/Projects').then((m) => ({ default: m.Projects })),
);
const Timeline = lazy(() =>
  import('./sections/Timeline').then((m) => ({ default: m.Timeline })),
);
const Contact = lazy(() =>
  import('./sections/Contact').then((m) => ({ default: m.Contact })),
);

const fallback = (
  <div
    className="flex h-64 items-center justify-center"
    role="status"
    aria-label="Loading section"
  >
    <span className="h-6 w-6 animate-spin rounded-full border-2 border-mint-500/30 border-t-mint-500" />
  </div>
);

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-mint-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Suspense fallback={fallback}>
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
