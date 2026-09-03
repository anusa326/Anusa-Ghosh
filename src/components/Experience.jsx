const timeline = [
  {
    dotColor: 'bg-primary',
    ringColor: 'ring-primary-fixed',
    label: 'Scheduled Cohort',
    date: 'Jan 2026 — Apr 2026',
    title: 'AWS re/Start Graduate',
    org: 'Don Bosco Tech Society',
    desc: 'Selected for comprehensive enterprise cloud development curriculum, covering AWS core cloud infrastructure (EC2, S3, IAM, VPC, CloudWatch), Linux fundamentals, networking, script automation, and operational readiness.',
  },
  {
    dotColor: 'bg-secondary',
    ringColor: 'ring-secondary-fixed',
    label: 'Internship',
    date: 'Aug 2025 — Sep 2025',
    title: 'Web Development Intern',
    org: 'CodSoft',
    desc: 'Hands-on development of production-grade responsive websites, landing interfaces, and interactive web tools employing vanilla JavaScript and modern CSS architectures.',
  },
  {
    dotColor: 'bg-tertiary',
    ringColor: 'ring-tertiary-fixed',
    label: 'Co-Curricular',
    date: '2017 — 2019',
    title: 'Bangiya Sangeet Parishad State Painting Exhibition',
    org: '',
    desc: 'Secured 1st Position in Painting Competition organized by Bangiya Sangeet Parishad in both 2017\u201318 and 2018\u201319 sessions.',
  },
];

const seminars = [
  {
    badge: 'International Conference',
    badgeColor: 'bg-surface-container text-primary',
    date: 'May 23\u201324, 2025',
    title: 'ICSCI 2025',
    desc: 'International Conference on Sustainable Computing for Industry, hosted by Department of Computational Sciences and Department of Electronics and Communication Engineering, Brainware University.',
  },
  {
    badge: 'Hands-on Workshop',
    badgeColor: 'bg-surface-container text-secondary',
    date: 'May 17\u201318, 2025',
    title: 'Neurons and Tokens: ML, Deep Learning, LLMs & Generative AI',
    desc: 'A Practical Workshop on Machine Learning, Deep Learning, LLMs and Generative AI held at Brainware University, Barasat.',
  },
  {
    badge: 'Seminar',
    badgeColor: 'bg-surface-container text-on-surface-variant',
    date: 'March 7, 2025',
    title: 'TechFusion: Industrial Automation and IoT',
    desc: 'A Seminar on Industrial Automation and IoT held at Brainware University, Kolkata.',
  },
];

const certificates = [
  {
    badge: 'Certificate of Achievement',
    badgeColor: 'bg-surface-container text-primary',
    date: 'April 30, 2026',
    title: 'TCS iON Career Edge \u2013 IT for Non-IT',
    desc: 'Certificate of Achievement for successfully completing the TCS iON Career Edge course for Non-IT professionals, covering foundational IT concepts, digital technologies, and workplace readiness skills.',
  },
  {
    badge: 'Participation',
    badgeColor: 'bg-surface-container text-secondary',
    date: 'May 17, 2024',
    title: 'Circuit Craft 2K24',
    desc: 'Participated in Circuit Craft 2K24, a hands-on electronics and circuit design competition held on 17 May 2024.',
  },
  {
    badge: 'Certificate of Completion',
    badgeColor: 'bg-surface-container text-tertiary',
    date: 'April 30, 2026',
    title: 'Wadhwani Foundation \u2013 Basic Certification',
    desc: 'Certificate of Completion (Basic) issued by Wadhwani Foundation, recognizing successful completion of foundational professional development coursework.',
  },
];

export default function Experience() {
  return (
    <section className="w-full px-4 sm:px-5 md:px-10 lg:px-20 py-14 lg:py-16" id="chronology">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <span className="font-label text-[0.75rem] leading-[1rem] text-primary uppercase tracking-widest">
                Experience & Internships
              </span>
              <h2 className="font-display text-[2rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3.5rem] text-on-surface">
                Internships
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${item.dotColor} ring-4 ${item.ringColor} shrink-0`}></div>
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-surface-container-highest mt-1"></div>
                    )}
                  </div>
                  <div className="p-5 sm:p-6 bg-surface-container-low rounded-xl flex flex-col gap-1 w-full shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-label text-[0.75rem] leading-[1rem] uppercase tracking-wider text-secondary font-semibold">
                        {item.label}
                      </span>
                      <span className="font-label text-[0.6875rem] leading-[0.95rem] text-outline">{item.date}</span>
                    </div>
                    <h3 className="font-display text-[1.25rem] leading-[1.75rem] sm:text-[1.5rem] sm:leading-[2rem] text-on-surface">{item.title}</h3>
                    {item.org && (
                      <p className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant font-medium">
                        {item.org}
                      </p>
                    )}
                    <p className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant pt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <span className="font-label text-[0.75rem] leading-[1rem] text-primary uppercase tracking-widest">
                Colloquia & Symposia
              </span>
              <h2 className="font-display text-[2rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3.5rem] text-on-surface">Academic Seminars</h2>
            </div>

            <div className="flex flex-col gap-4">
              {seminars.map((item, i) => (
                <div key={i} className="p-4 bg-surface rounded-xl shadow-sm flex flex-col gap-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`px-2 py-0.5 rounded font-label text-[0.75rem] leading-[1rem] uppercase tracking-wider font-semibold ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="font-label text-[0.6875rem] leading-[0.95rem] text-outline">{item.date}</span>
                  </div>
                  <h4 className="font-display text-[1.15rem] leading-[1.6rem] sm:text-[1.5rem] sm:leading-[2rem] text-on-surface">{item.title}</h4>
                  <p className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16" id="certificates">
          <div className="flex flex-col gap-1 mb-8">
            <span className="font-label text-[0.75rem] leading-[1rem] text-primary uppercase tracking-widest">
              Credentials & Recognition
            </span>
            <h2 className="font-display text-[2rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3.5rem] text-on-surface">Certificates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((item, i) => (
              <div key={i} className="p-5 bg-surface-container-low rounded-xl shadow-sm flex flex-col gap-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`px-2 py-0.5 rounded font-label text-[0.75rem] leading-[1rem] uppercase tracking-wider font-semibold ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <span className="font-label text-[0.6875rem] leading-[0.95rem] text-outline">{item.date}</span>
                </div>
                <h4 className="font-display text-[1.15rem] leading-[1.6rem] text-on-surface">{item.title}</h4>
                <p className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant pt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
