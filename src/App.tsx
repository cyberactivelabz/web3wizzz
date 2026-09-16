import { Suspense, lazy } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';

// Below-the-fold sections are split out so the first paint stays light.
const About = lazy(() => import('./sections/About').then((m) => ({ default: m.About })));
const Projects = lazy(() => import('./sections/Projects').then((m) => ({ default: m.Projects })));
const Skills = lazy(() => import('./sections/Skills').then((m) => ({ default: m.Skills })));
const Timeline = lazy(() => import('./sections/Timeline').then((m) => ({ default: m.Timeline })));
const Contact = lazy(() => import('./sections/Contact').then((m) => ({ default: m.Contact })));

const fallback = <div className="h-64" role="status" aria-label="Loading section" />;

export default function App() {
  return (
    <div className="sheet min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Suspense fallback={fallback}>
          <About />
          <Projects />
          <Skills />
          <Timeline />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
