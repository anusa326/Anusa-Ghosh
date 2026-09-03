import { useRef } from 'react';
import { contact } from '../secure/contact.js';

export default function Contact() {
  const honeypotRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (honeypotRef.current && honeypotRef.current.value) {
      return;
    }
    alert('Thank you. Your dispatch has been transmitted to Anusa Ghosh.');
    e.target.reset();
  };

  return (
    <section className="w-full px-4 sm:px-5 md:px-10 lg:px-20 py-16 lg:py-20 pb-24 lg:pb-20" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label text-[0.75rem] leading-[1rem] text-primary uppercase tracking-widest block mb-1">
              Contact &bull; Curatorial Dispatch
            </span>
            <h2 className="font-display text-[2rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3.5rem] text-on-surface">
              Initiate Collaboration
            </h2>
          </div>
          <p className="font-sans text-[1rem] leading-[1.65rem] text-on-surface-variant max-w-md">
            Available for software engineering roles, frontend development residencies,
            and creative computational commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 bg-surface-container-low rounded-xl shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-label text-[0.6875rem] leading-[0.95rem] text-secondary uppercase tracking-widest">
                  Electronic Dispatch
                </span>
                <span className="material-symbols-outlined text-primary shrink-0">mail</span>
              </div>
              <a
                href={contact.emailHref()}
                className="font-display text-[1.15rem] leading-[1.6rem] sm:text-[1.5rem] sm:leading-[2rem] text-on-surface hover:text-primary transition-colors font-medium break-all"
              >
                {contact.email()}
              </a>
              <div className="pt-2">
                <button
                  className="font-label text-[0.75rem] leading-[1rem] uppercase tracking-wider text-primary hover:underline font-semibold"
                  onClick={(e) => {
                    navigator.clipboard.writeText(contact.email());
                    e.target.textContent = 'Copied to Clipboard!';
                    setTimeout(() => (e.target.textContent = 'Copy Address'), 2000);
                  }}
                >
                  Copy Address
                </button>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-surface-container-low rounded-xl shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-label text-[0.6875rem] leading-[0.95rem] text-secondary uppercase tracking-widest">
                  Telephone Terminal
                </span>
                <span className="material-symbols-outlined text-primary shrink-0">call</span>
              </div>
              <a
                href={contact.telHref()}
                className="font-display text-[1.15rem] leading-[1.6rem] sm:text-[1.5rem] sm:leading-[2rem] text-on-surface hover:text-primary transition-colors font-medium"
              >
                {contact.phoneDisplay()}
              </a>
              <span className="font-label text-[0.6875rem] leading-[0.95rem] text-on-surface-variant">
                Available Monday through Saturday &bull; IST
              </span>
            </div>

            <div className="p-5 sm:p-6 bg-surface-container-low rounded-xl shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-label text-[0.6875rem] leading-[0.95rem] text-secondary uppercase tracking-widest">
                  Primary Geographic Station
                </span>
                <span className="material-symbols-outlined text-secondary shrink-0">location_on</span>
              </div>
              <span className="font-display text-[1.15rem] leading-[1.6rem] sm:text-[1.5rem] sm:leading-[2rem] text-on-surface">Kolkata, West Bengal</span>
              <span className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant">
                {contact.region}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 p-5 sm:p-8 bg-surface-container rounded-2xl shadow-md">
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                  ref={honeypotRef}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-[1.5rem] leading-[2rem] text-on-surface">Transmit an Inquiry</h3>
                <p className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant">
                  Fill in the dossier details below to inaugurate dialogue.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-label text-[0.75rem] leading-[1rem] uppercase tracking-wider text-on-surface">
                    Your Name / Title
                  </label>
                  <input
                    className="px-4 py-3 bg-surface rounded text-on-surface font-sans placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    placeholder="e.g. Dr. Aris Thorne"
                    required
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label text-[0.75rem] leading-[1rem] uppercase tracking-wider text-on-surface">
                    Your Email
                  </label>
                  <input
                    className="px-4 py-3 bg-surface rounded text-on-surface font-sans placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    placeholder="e.g. aris@studio.org"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label text-[0.75rem] leading-[1rem] uppercase tracking-wider text-on-surface">
                  Engagement Scope
                </label>
                <select className="px-4 py-3 bg-surface rounded text-on-surface font-sans focus:outline-none focus:ring-2 focus:ring-primary shadow-sm">
                  <option>Full-Time Technical Engineering</option>
                  <option>Frontend & UI Architecture Apprenticeship</option>
                  <option>Academic Research Collaboration</option>
                  <option>Creative Web Commission</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label text-[0.75rem] leading-[1rem] uppercase tracking-wider text-on-surface">
                  Communication Dispatch
                </label>
                <textarea
                  className="px-4 py-3 bg-surface rounded text-on-surface font-sans placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-sm resize-none"
                  placeholder="Briefly detail the project parameters or open role..."
                  required
                  rows="4"
                ></textarea>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label text-[0.75rem] leading-[1rem] uppercase tracking-widest py-4 px-6 rounded shadow-md hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                type="submit"
              >
                <span>Send Dispatch to Atelier</span>
                <span className="material-symbols-outlined text-base">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
