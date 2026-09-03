import { useState, useEffect, useCallback } from 'react';
import { contact } from '../secure/contact.js';

const navLinks = [
  { label: 'About', href: '#atelier', icon: 'palette' },
  { label: 'Projects', href: '#selected-works', icon: 'deployed_code' },
  { label: 'Technical Skills', href: '#competencies', icon: 'code_blocks' },
  { label: 'Internships', href: '#chronology', icon: 'school' },
  { label: 'Contact', href: '#contact', icon: 'mail' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('atelier');

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      {/* ---- Desktop / Mobile Top Header (Always Solid, Matches code.html) ---- */}
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 sm:h-20 max-w-7xl mx-auto px-4 sm:px-5 md:px-10 lg:px-20 flex items-center justify-between">
          {/* Left: Logo + Name + Tagline */}
          <div className="flex items-center gap-3 min-w-0">
            <a href="#atelier" className="flex items-center gap-3 min-w-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none" className="h-7 w-7 sm:h-8 sm:w-8 shrink-0">
                <circle cx="25" cy="25" r="16" stroke="#C85A32" strokeWidth="2" fill="#FBF9F5"/>
                <path d="M25 15 L25 35 M15 25 L35 25" stroke="#C85A32" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="25" cy="25" r="4" fill="#1A1A1A"/>
              </svg>
              <span className="font-display text-[1.5rem] leading-[2rem] tracking-tight text-on-surface hover:text-primary transition-colors truncate">
                Anusa Ghosh
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`uppercase tracking-widest transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-primary font-medium'
                      : 'font-label text-[0.75rem] leading-[1rem] text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface shrink-0"
            aria-label="Open navigation"
            onClick={() => setDrawerOpen(true)}
          >
            <span className="material-symbols-outlined text-xl">menu</span>
          </button>
        </div>
      </header>

      {/* ---- Side Drawer Backdrop ---- */}
      <div
        className={`fixed inset-0 z-[60] bg-inverse-surface/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      ></div>

      {/* ---- Side Drawer ---- */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[min(85vw,360px)] bg-surface shadow-2xl transition-transform duration-300 ease-out lg:hidden flex flex-col ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-surface-container-high shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-display text-sm font-bold">
              AG
            </div>
            <div className="flex flex-col">
              <span className="font-display text-[1.125rem] leading-[1.5rem] text-on-surface">Anusa Ghosh</span>
              <span className="font-label text-[0.625rem] leading-[0.85rem] text-outline uppercase tracking-wider">
                Curated Dossier
              </span>
            </div>
          </div>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant"
            aria-label="Close navigation"
            onClick={closeDrawer}
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
              <a
                key={link.href}
                href={link.href}
                onClick={closeDrawer}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-primary/8 text-primary font-semibold'
                    : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                }`}
              >
                <span className={`material-symbols-outlined text-xl ${isActive ? 'text-primary' : ''}`}>
                  {link.icon}
                </span>
                <span className="font-sans text-[0.9375rem] leading-[1.3rem]">{link.label}</span>
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                )}
              </a>
              );
            })}
          </div>
        </nav>

        {/* Drawer Footer */}
        <div className="px-6 py-4 border-t border-surface-container-high shrink-0">
          <a
            href={contact.emailHref()}
            className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary-container text-on-primary rounded-xl font-label text-[0.75rem] leading-[1rem] uppercase tracking-widest transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-base">send</span>
            <span>Dispatch Inquiry</span>
          </a>
        </div>
      </div>

      {/* ---- Mobile Sticky Bottom Bar ---- */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-surface/95 backdrop-blur-xl border-t border-surface-container-high safe-area-bottom">
        <nav className="max-w-lg mx-auto flex items-stretch h-16">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors relative ${
                  isActive ? 'text-primary' : 'text-on-surface-variant'
                }`}
              >
                {isActive && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2.5px] rounded-full bg-primary"></span>
                )}
                <span className="material-symbols-outlined text-[22px]">{link.icon}</span>
                <span className="font-label text-[0.5rem] sm:text-[0.5625rem] leading-[0.7rem] sm:leading-[0.75rem] uppercase tracking-wider font-medium truncate max-w-full">
                  {link.label.split(' & ')[0].split(' / ')[0].split(' ')[0]}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}
