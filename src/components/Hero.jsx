import { contact } from '../secure/contact.js';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-5 md:px-10 lg:px-20 pt-24 pb-8 lg:pt-36 lg:pb-24" id="atelier">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5 lg:gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary-container/40 text-secondary rounded-full font-label text-[0.75rem] leading-[1rem] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Atelier Dossier &bull; Vol. I
              </span>
              <span className="font-label text-[0.6875rem] leading-[0.95rem] text-outline uppercase tracking-widest">
                Kolkata &bull; West Bengal
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-display text-[2rem] leading-[2.6rem] sm:text-[2.75rem] sm:leading-[3.25rem] lg:text-[4.5rem] lg:leading-[5rem] text-on-surface tracking-tight">
                Crafting Code with an{' '}
                <span className="italic font-normal text-primary">Artist's Intent.</span>
              </h1>
              <p className="font-display text-[1.5rem] leading-[2rem] text-on-surface-variant font-light mt-1">
                ANUSA GHOSH &mdash; Software Engineer, Web Artisan &amp; BCA (Hons) Scholar
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 p-4 bg-surface-container-low rounded-xl">
              <div className="flex flex-col">
                <span className="font-label text-[0.6875rem] leading-[0.95rem] uppercase tracking-wider text-secondary">
                  Institution &amp; Merit
                </span>
                <span className="font-sans text-[1rem] leading-[1.65rem] font-semibold text-on-surface">
                  Brainware University &bull; CGPA 8.01
                </span>
              </div>
              <div className="w-px h-8 bg-surface-variant hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="font-label text-[0.6875rem] leading-[0.95rem] uppercase tracking-wider text-secondary">
                  Specialization
                </span>
                <span className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface">
                  Frontend Architecture &bull; Algorithmic Logic
                </span>
              </div>
            </div>

            <p className="font-sans text-[1rem] leading-[1.7rem] sm:text-[1.125rem] sm:leading-[1.85rem] text-on-surface-variant max-w-2xl">
              A BCA student passionate about web development. I enjoy building responsive,
              user-friendly websites using HTML, CSS, JavaScript, and frameworks like React
              and Tailwind CSS. Currently exploring backend tools like Node.js, Firebase,
              and MySQL. Always eager to learn and grow through real-world projects and collaborations.
            </p>

            <div className="flex flex-wrap items-center gap-2 font-label text-[0.75rem] leading-[1rem] text-on-surface-variant">
              <span className="inline-flex items-center gap-1 px-3 py-2 bg-surface-container rounded">
                <span className="material-symbols-outlined text-sm text-primary">pin_drop</span> Kolkata, WB
              </span>
              <a
                href={contact.emailHref()}
                className="inline-flex items-center gap-1 px-3 py-2 bg-surface-container hover:bg-surface-container-high rounded transition-colors text-on-surface max-w-full"
              >
                <span className="material-symbols-outlined text-sm text-primary shrink-0">mail</span>
                <span className="truncate" data-secure="email">{contact.email()}</span>
              </a>
              <a
                href={contact.telHref()}
                className="inline-flex items-center gap-1 px-3 py-2 bg-surface-container hover:bg-surface-container-high rounded transition-colors text-on-surface"
              >
                <span className="material-symbols-outlined text-sm text-primary">call</span> {contact.phoneDisplay()}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#selected-works"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label text-[0.75rem] leading-[1rem] uppercase tracking-widest px-6 sm:px-8 py-4 rounded transition-all shadow-md hover:-translate-y-0.5 text-center"
              >
                <span>View Exhibited Works</span>
                <span className="material-symbols-outlined text-base">arrow_downward</span>
              </a>
              <a
                href="/Anusa-Ghosh-CV.docx"
                download="Anusa Ghosh CV.docx"
                className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container hover:bg-secondary font-label text-[0.75rem] leading-[1rem] uppercase tracking-widest px-6 sm:px-8 py-4 rounded transition-all shadow-md hover:-translate-y-0.5 text-center"
              >
                <span className="material-symbols-outlined text-base">download</span>
                <span>Download CV</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md p-4 bg-surface-container-low rounded-2xl shadow-xl">
              <div className="relative bg-surface p-3 rounded-xl overflow-hidden shadow-sm flex flex-col">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-surface-container-high">
                  <img
                    src="/img.png"
                    alt="Anusa Ghosh"
                    className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.02]"
                  />
                </div>
                <div className="pt-4 pb-2 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display text-[1.25rem] leading-[1.75rem] sm:text-[1.5rem] sm:leading-[2rem] text-on-surface italic">Anusa Ghosh</h3>
                    <p className="font-label text-[0.75rem] leading-[1rem] text-secondary uppercase tracking-widest">
                      Figurative &amp; Computational Discipline
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="font-label text-[0.6875rem] leading-[0.95rem] text-outline block">Medium</span>
                    <span className="font-label text-[0.75rem] leading-[1rem] text-on-surface font-semibold">
                      Web Craft &bull; Algorithmic
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
