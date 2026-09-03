import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Declaration from './components/Declaration';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background text-on-surface overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Declaration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function LoadingScreen() {
  const name = 'ANUSA GHOSH';

  return (
    <div className="fixed inset-0 z-[90] bg-background flex items-center justify-center overflow-hidden">
      {/* Subtle warm gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/15 via-background to-secondary-container/15"></div>

      {/* Fading portrait backdrop */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
        <img src="/img.png" alt="" className="w-72 h-72 object-cover rounded-full animate-portrait" />
      </div>

      <div className="relative flex flex-col items-center gap-7 px-6 text-center">
        {/* Monogram + rotating progress ring */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 animate-pop">
          <svg className="absolute inset-0 h-full w-full animate-ring" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="46" stroke="#f0eded" strokeWidth="4" />
            <circle
              cx="50" cy="50" r="46"
              stroke="#9f3c16"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="290"
              strokeDashoffset="72"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-3 rounded-full bg-primary text-on-primary flex items-center justify-center font-display text-4xl sm:text-5xl font-bold tracking-tight">
            AG
          </div>
        </div>

        {/* Name with letter reveal */}
        <span className="font-display tracking-[0.18em] text-on-surface text-2xl sm:text-3xl animate-fade-up">
          {name.split('').map((char, i) => (
            <span
              key={i}
              className="animate-letter"
              style={{ animationDelay: `${0.3 + i * 0.06}s` }}
            >
              {char}
            </span>
          ))}
        </span>

        <span className="font-label text-[0.6875rem] leading-[0.95rem] uppercase tracking-widest text-secondary animate-fade-up" style={{ animationDelay: '0.8s' }}>
          Software Engineer &amp; Creative Technologist
        </span>

        {/* Loader bar */}
        <div className="w-52 h-[3px] bg-surface-container overflow-hidden rounded-full animate-fade-up" style={{ animationDelay: '0.9s' }}>
          <div className="h-full bg-primary rounded-full animate-loader"></div>
        </div>
      </div>
    </div>
  );
}
