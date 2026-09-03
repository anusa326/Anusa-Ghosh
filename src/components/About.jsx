const curriculumData = [
  {
    title: 'HTML, CSS, JavaScript fundamentals',
    desc: 'Core web development technologies',
  },
  {
    title: 'React.js for frontend development',
    desc: 'Component-based UI architecture',
  },
  {
    title: 'Node.js for backend development',
    desc: 'Server-side runtime & APIs',
  },
  {
    title: 'Database Management Systems (DBMS)',
    desc: 'MySQL, CRUD operations, basic database design',
  },
];

const education = [
  {
    status: 'In Progress',
    statusColor: 'bg-primary-fixed text-on-primary-fixed',
    years: '2024 — 2027',
    title: 'Bachelor of Computer Applications (Hons.)',
    school: 'Brainware University \u2022 Barasat, Kolkata',
    tags: ['Data Structures', 'DBMS Architecture', 'Object Oriented Paradigms'],
    metric: { label: 'Cumulative Grade', value: '8.01', unit: 'CGPA', sub: 'First Class Distinction', color: 'text-primary' },
  },
  {
    status: 'Completed',
    statusColor: 'bg-secondary-container text-on-secondary-container',
    years: '2020 — 2022',
    title: 'Higher Secondary Examination (Class 10+2)',
    school: 'Champagachi High School (H.S.) \u2022 WBCHSE Board',
    tags: ['Mathematics', 'Sciences', 'Computer Literacy'],
    metric: { label: 'Aggregate Score', value: '83.6', unit: '%', sub: 'Distinction Honors', color: 'text-on-surface' },
  },
  {
    status: 'Completed',
    statusColor: 'bg-secondary-container text-on-secondary-container',
    years: '2018 — 2020',
    title: 'Secondary Madhyamik Examination (Class 10th)',
    school: 'Champagachi High School (H.S.) \u2022 WBBSE Board',
    tags: [],
    metric: { label: 'Final Assessment', value: '66.1', unit: '%', sub: 'First Division', color: 'text-on-surface' },
  },
];

export default function About() {
  return (
    <section className="w-full px-4 sm:px-5 md:px-10 lg:px-20 py-12 lg:py-16 bg-surface-container-low" id="provenance">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label text-[0.75rem] leading-[1rem] text-primary uppercase tracking-widest block mb-1">
              Curatorial Record
            </span>
            <h2 className="font-display text-[2rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3.5rem] text-on-surface">
              Curricular Provenance
            </h2>
          </div>
          <p className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant max-w-md">
            A documented chronicle of foundational academic training in algorithmic
            science, mathematical logic, and computational systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 flex flex-col gap-4">
            {education.map((item, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 bg-surface rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2 py-0.5 rounded font-label text-[0.75rem] leading-[1rem] uppercase tracking-wider font-semibold ${item.statusColor}`}>
                      {item.status}
                    </span>
                    <span className="font-label text-[0.6875rem] leading-[0.95rem] text-secondary">
                      {item.years}
                    </span>
                  </div>
                  <h3 className="font-display text-[1.25rem] leading-[1.75rem] sm:text-[1.5rem] sm:leading-[2rem] text-on-surface">{item.title}</h3>
                  <p className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant">{item.school}</p>
                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-surface-container-high rounded text-on-surface-variant font-label text-[0.6875rem] leading-[0.95rem]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="sm:text-right flex flex-col sm:items-end shrink-0">
                  <span className="font-label text-[0.75rem] leading-[1rem] uppercase tracking-wider text-secondary">
                    {item.metric.label}
                  </span>
                  <span className={`font-display text-[1.75rem] leading-[2.25rem] sm:text-[2rem] sm:leading-[2.5rem] ${item.metric.color} font-bold`}>
                    {item.metric.value}{' '}
                    <span className="text-sm font-normal text-on-surface-variant font-sans">{item.metric.unit}</span>
                  </span>
                  <span className="font-label text-[0.6875rem] leading-[0.95rem] text-outline">{item.metric.sub}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-6 bg-surface rounded-xl shadow-sm h-full flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="material-symbols-outlined text-primary text-xl shrink-0">account_tree</span>
                    <h4 className="font-display text-[1.25rem] leading-[1.75rem] sm:text-[1.5rem] sm:leading-[2rem] text-on-surface">Foundational Vectors</h4>
                  </div>
                </div>
                <p className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant">
                  Core computational curricula rigorously mastered across semesters:
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  {curriculumData.map((item) => (
                    <div key={item.title} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                      <div>
                        <span className="font-sans text-[0.875rem] leading-[1.45rem] font-semibold text-on-surface block">
                          {item.title}
                        </span>
                        <span className="font-label text-[0.6875rem] leading-[0.95rem] text-on-surface-variant">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-3 bg-surface-container-high rounded-lg flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl">school</span>
                <div className="flex flex-col">
                  <span className="font-label text-[0.75rem] leading-[1rem] uppercase tracking-wider text-on-surface font-medium">
                    BCA Candidate &bull; Class of 2027
                  </span>
                  <span className="font-label text-[0.6875rem] leading-[0.95rem] text-on-surface-variant">
                    Department of Computational Sciences
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
