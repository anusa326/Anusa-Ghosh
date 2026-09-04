const skillCategories = [
  {
    icon: 'code_blocks',
    title: 'Languages',
    subtitle: 'Core Syntax',
    type: 'list',
    items: [
      { name: 'C', detail: 'Programming' },
      { name: 'Java', detail: 'OOP' },
      { name: 'Python', detail: 'Basics' },
    ],
  },
  {
    icon: 'palette',
    title: 'Web Development',
    subtitle: 'Frontend & Backend',
    type: 'pills',
    items: [
      { name: 'HTML', highlight: false },
      { name: 'CSS', highlight: false },
      { name: 'JavaScript', highlight: false },
      { name: 'React.js (basics)', highlight: true },
      { name: 'Node.js', highlight: false },
    ],
  },
  {
    icon: 'cloud_sync',
    title: 'Cloud & Infra',
    subtitle: 'AWS',
    type: 'grid',
    desc: 'AWS (EC2, S3, IAM, VPC, CloudWatch):',
    items: ['Amazon EC2', 'Amazon S3', 'AWS IAM', 'VPC & CloudWatch'],
  },
  {
    icon: 'database',
    title: 'Database & Tools',
    subtitle: 'Data',
    type: 'list',
    items: [
      { name: 'MySQL', detail: 'DBMS', detailColor: 'text-primary' },
      { name: 'Basic Database Design', detail: 'Schema' },
      { name: 'CRUD Operations', detail: 'Backend' },
    ],
  },
  {
    icon: 'terminal',
    title: 'Developer Toolkit',
    subtitle: 'Workflow',
    type: 'grid-icons',
    items: [
      { icon: 'integration_instructions', name: 'VS Code' },
      { icon: 'language', name: 'Chrome' },
      { icon: 'bug_report', name: 'DBMS' },
    ],
  },
  {
    icon: 'brush',
    title: 'Soft Skills',
    subtitle: 'Communication',
    subtitleColor: 'text-tertiary',
    type: 'special',
    desc: 'Trilingual communication in Bengali, Hindi, and English.',
    tags: ['Bengali / Hindi / English', 'Team Work', 'Report Writing'],
  },
];

export default function Skills() {
  return (
    <section className="w-full px-4 sm:px-5 md:px-10 lg:px-20 py-12 lg:py-16 bg-surface-container-low" id="competencies">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label text-[0.75rem] leading-[1rem] text-primary uppercase tracking-widest block mb-1">
              Artisan Lexicon
            </span>
            <h2 className="font-display text-[2rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3.5rem] text-on-surface">Technical Skills</h2>
          </div>
          <p className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant max-w-md">
            A balanced chromatic spectrum: spanning low-level language semantics, modern
            reactive component frontends, cloud topologies, and classical artistic discernment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className={`p-6 rounded-xl shadow-sm flex flex-col gap-4 ${
                cat.type === 'special' ? 'bg-surface-container-highest' : 'bg-surface'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`material-symbols-outlined text-xl ${cat.type === 'special' ? 'text-tertiary' : 'text-primary'}`}>
                    {cat.icon}
                  </span>
                  <h3 className="font-display text-[1.25rem] leading-[1.75rem] sm:text-[1.5rem] sm:leading-[2rem] text-on-surface">{cat.title}</h3>
                </div>
                <span className={`font-label text-[0.6875rem] leading-[0.95rem] uppercase ${cat.subtitleColor || 'text-secondary'}`}>
                  {cat.subtitle}
                </span>
              </div>

              {cat.type === 'list' && (
                <div className="flex flex-col gap-3">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between p-2 bg-surface-container-low rounded">
                      <span className="font-sans text-[0.875rem] leading-[1.45rem] font-medium text-on-surface">{item.name}</span>
                      <span className={`font-label text-[0.6875rem] leading-[0.95rem] ${item.detailColor || 'text-secondary'}`}>
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {cat.type === 'pills' && (
                <div className="flex flex-wrap gap-1">
                  {cat.items.map((item) => (
                    <span
                      key={item.name}
                      className={`px-3 py-2 rounded font-sans text-[0.875rem] leading-[1.45rem] font-medium ${
                        item.highlight
                          ? 'bg-primary-fixed text-on-primary-fixed font-semibold'
                          : 'bg-surface-container text-on-surface'
                      }`}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              )}

              {cat.type === 'grid' && (
                <>
                  <p className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant">{cat.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {cat.items.map((item) => (
                      <div key={item} className="p-2 bg-surface-container-low rounded flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span className="font-label text-[0.75rem] leading-[1rem] font-semibold text-on-surface">{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {cat.type === 'grid-icons' && (
                <div className="grid grid-cols-3 gap-2 text-center">
                  {cat.items.map((item) => (
                    <div key={item.name} className="p-3 bg-surface-container-low rounded flex flex-col items-center gap-1">
                      <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                      <span className="font-label text-[0.75rem] leading-[1rem] text-on-surface font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              )}

              {cat.type === 'special' && (
                <>
                  <p className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-surface rounded text-on-surface font-label text-[0.6875rem] leading-[0.95rem] font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
