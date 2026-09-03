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
              <a href="#" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary-fixed/30 transition-colors">
                <span className="material-symbols-outlined text-sm">code</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary-fixed/30 transition-colors">
                <span className="material-symbols-outlined text-sm">mail</span>
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
