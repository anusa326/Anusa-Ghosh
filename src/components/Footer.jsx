import { contact } from '../secure/contact.js';

const footerLinks = [
  { label: 'Atelier & Academic Background', href: '#atelier' },
  { label: 'Selected Works & Research', href: '#selected-works' },
  { label: 'Technical Competencies & Systems', href: '#competencies' },
  { label: 'Exhibitions & Academic Seminars', href: '#chronology' },
  { label: 'Inquiries & Curatorial Dispatch', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-24 pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-10 lg:px-20 py-12 flex flex-col gap-10 lg:gap-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="font-display text-[1.5rem] leading-[2rem] text-on-surface">Anusa Ghosh</span>
              <span className="font-label text-[0.6875rem] leading-[0.95rem] text-secondary uppercase px-2 py-0.5 bg-secondary-container/40 rounded">
                Curated Dossier
              </span>
            </div>
            <p className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant max-w-sm">
              Engineering algorithmic rigor with gallery-grade aesthetic discipline.
              Architectural software systems, distributed interfaces, and creative technology.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="material-symbols-outlined text-secondary text-sm">location_on</span>
              <span className="font-label text-[0.75rem] leading-[1rem] text-on-surface-variant tracking-wider uppercase">
                {contact.city}, India
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="font-label text-[0.6875rem] leading-[0.95rem] text-secondary uppercase tracking-widest">
              Navigation Catalogue
            </span>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-label text-[0.6875rem] leading-[0.95rem] text-secondary uppercase tracking-widest">
              Digital Coordinates
            </span>
            <div className="flex flex-col gap-2">
              <a href={contact.emailHref()} className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant hover:text-primary transition-colors">
                {contact.email()}
              </a>
              <a href={contact.telHref()} className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant hover:text-primary transition-colors">
                {contact.phoneDisplay()}
              </a>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com/anusa326" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary-fixed/30 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/anusaghosh07/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary-fixed/30 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-label text-[0.6875rem] leading-[0.95rem] text-outline">
            &copy; 2025 Anusa Ghosh. All intellectual properties and curated works protected.
          </p>
          <p className="font-label text-[0.6875rem] leading-[0.95rem] text-outline">
            Designed & engineered with artistic-scientific precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
