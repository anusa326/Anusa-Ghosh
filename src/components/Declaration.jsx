export default function Declaration() {
  return (
    <section className="w-full px-4 sm:px-5 md:px-10 lg:px-20 py-12 lg:py-16 bg-surface-container-low" id="declaration">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 p-6 sm:p-8 bg-surface rounded-2xl shadow-md flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="font-label text-[0.6875rem] leading-[0.95rem] uppercase tracking-widest text-secondary">
                Registry Dossier
              </span>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-base">fingerprint</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 font-sans text-[0.875rem] leading-[1.45rem]">
              <div className="flex justify-between items-center py-1 border-b border-surface-container-high">
                <span className="text-on-surface-variant font-label text-[0.75rem] leading-[1rem] uppercase">Gender</span>
                <span className="font-medium text-on-surface">Female</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-surface-container-high">
                <span className="text-on-surface-variant font-label text-[0.75rem] leading-[1rem] uppercase">Nationality</span>
                <span className="font-medium text-on-surface">Indian</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-surface-container-high">
                <span className="text-on-surface-variant font-label text-[0.75rem] leading-[1rem] uppercase">Languages Known</span>
                <span className="font-medium text-on-surface">Bengali, Hindi, English</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-surface-container-high">
                <span className="text-on-surface-variant font-label text-[0.75rem] leading-[1rem] uppercase">Base of Operations</span>
                <span className="font-medium text-on-surface">Kolkata, West Bengal</span>
              </div>
            </div>
            <div className="pt-2 flex items-center gap-4 p-3 bg-surface-container rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-display text-[1.5rem] leading-[2rem] font-bold shrink-0 shadow-inner">
                AG
              </div>
              <div className="flex flex-col">
                <span className="font-label text-[0.75rem] leading-[1rem] uppercase tracking-wider text-on-surface font-semibold">
                  Official Seal of Provenance
                </span>
                <span className="font-label text-[0.6875rem] leading-[0.95rem] text-outline">
                  Candidate &bull; Brainware University Dept of CS
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-label text-[0.75rem] leading-[1rem] text-secondary uppercase tracking-widest">
                Formal Attestation
              </span>
              <h3 className="font-display text-[1.5rem] leading-[2rem] sm:text-[2rem] sm:leading-[2.5rem] text-on-surface">
                Curatorial Declaration
              </h3>
            </div>
            <blockquote className="p-5 sm:p-6 bg-surface rounded-xl shadow-sm text-[1rem] leading-[1.7rem] sm:text-[1.125rem] sm:leading-[1.85rem] text-on-surface italic">
              "I hereby declare that the information furnished above is true, complete and correct
              to the best of my knowledge and belief. In the event of any information being found
              false or incorrect at any stage, my candidature / appointment is liable to be
              cancelled / terminated without notice."
            </blockquote>
            <div className="flex items-center justify-between pt-2">
              <div className="flex flex-col">
                <span className="font-display text-[1.5rem] leading-[2rem] text-primary italic font-semibold">
                  Anusa Ghosh
                </span>
                <span className="font-label text-[0.6875rem] leading-[0.95rem] text-on-surface-variant uppercase tracking-wider">
                  Candidate &bull; Signature on Record
                </span>
              </div>
              <div className="text-right">
                <span className="font-label text-[0.75rem] leading-[1rem] text-on-surface font-bold">Kolkata, WB</span>
                <span className="font-label text-[0.6875rem] leading-[0.95rem] text-secondary block">
                  Recorded &bull; Year 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
