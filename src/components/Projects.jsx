const projects = [
  {
    catalog: 'CATALOG NO. 01',
    badge: 'Civic Heritage Platform',
    badgeColor: 'bg-primary text-on-primary',
    guide: 'Ms. Niyasha Patra, Assistant Professor, Computational Sciences',
    title: 'MyTarakeswar: A Tourism and Guide Application',
    desc: 'Designed and developed a project based on Tarakeswar to showcase local information and improve digital accessibility through a user-friendly interface.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL'],
    type: 'Full Stack System',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU7P9dM6Gww2QIQwuZl09CASq0E_OCdhzluBvsgBC5bUFT-fGaUFQE59W3nEPdckHXsxsV5ccP1JGwHb3UJB-zywZSF3fMwwA70nfaPFyNBJJ_tzTKg6XA7Kh7S7bXi_AJT7I8UwrHstgog46QT8PuTOaNinpdE_UcYihGmQ59kt5HQ1OXkDR3YwTcOVVGxdWgZUQJQLAn1-qAkMaHQrbnFvo-ngL8BWV4z71XAqPUVIv50TqM7ldI',
  },
  {
    catalog: 'CATALOG NO. 02',
    badge: 'Analytical Engine',
    badgeColor: 'bg-secondary text-on-secondary',
    guide: 'Ms. Niyasha Patra, Assistant Professor, Computational Sciences',
    title: 'Skill Mapping and Gap Analysis System',
    desc: 'Created a system to assess, map, and analyse user skills, helping identify deficiencies and suggesting areas for improvement.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    type: 'Evaluation Framework',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQWqYH-ClGzERnkdM14aCQH9jT2GcC608YwzYAN_t-qA2hdqeTxmqHAX6yVOW0XzMDXJ9GE0JbMyxV-jd0rfX_QjbmuOmgzQFiyDC_iBPkuzgM3hemoQN3rhTlaNJv3QCuBeEWp_AR12IGnHtfNIJaF6iQcl8IWK3wjLb4APu4_ePktf1O2UH0sPKl9S4D6NHIG8QHasPB44tPpSlkB687qnmCQz_YOowbxI0LctN_0D3HHjijayPS',
  },
  {
    catalog: 'CATALOG NO. 03',
    badge: 'Healthtech Assurance',
    badgeColor: 'bg-tertiary text-on-tertiary',
    guide: 'Dr. Manan Kumar Gupta, Assistant Professor, Computational Sciences',
    title: 'Pharmacy Stock and Expiry Tracker',
    desc: 'Designed a system to manage medicine stock and monitor expiry dates, helping maintain accuracy and prevent expired product usage.',
    tags: ['React.js', 'Bootstrap', 'PHP', 'MySQL'],
    type: 'Inventory Automation',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnuiazUREDAS2JBeKzqt4gAFhWSJv2DrMM-HwtMiIASWpAr2oXjm-CUU1ssBAL9o5NjXvLPR41I4a5X8dPHLultJiDMMsaL3eQHXNhmqlQIMGuQZRamS1Omys97qGintZrDJ563zLQVvdzIFsdieGlySbFVNK3vvB47hQsOqMcNMC5w9kixt-UqmJDVk1puue-9MuiSOyvwwB2qjVfkntmxBOopjcP5pWeAy6ZkPQ9bU2-Mf6T7gpR',
  },
];

export default function Projects() {
  return (
    <section className="w-full px-4 sm:px-5 md:px-10 lg:px-20 py-14 lg:py-16" id="selected-works">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="font-label text-[0.75rem] leading-[1rem] text-primary uppercase tracking-widest">
                Exhibition Hall A
              </span>
            </div>
            <h2 className="font-display text-[2rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3.5rem] text-on-surface">Projects</h2>
          </div>
          <p className="font-sans text-[1rem] leading-[1.65rem] text-on-surface-variant max-w-lg">
            Three curated software installations engineered under academic faculty
            mentorship, combining civic responsibility with structural clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.catalog}
              className="flex flex-col bg-surface-container-low rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative w-full aspect-[16/10] bg-surface-container p-3 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-2.5 py-1 rounded font-label text-[0.75rem] leading-[1rem] text-on-surface font-semibold shadow-sm">
                  {project.catalog}
                </div>
                <div className={`absolute bottom-4 right-4 px-2.5 py-1 rounded font-label text-[0.6875rem] leading-[0.95rem] uppercase tracking-wider ${project.badgeColor}`}>
                  {project.badge}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between gap-6 bg-surface">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 text-secondary font-label text-[0.6875rem] leading-[0.95rem]">
                    <span className="material-symbols-outlined text-sm">person_pin</span>
                    <span>Guide: {project.guide}</span>
                  </div>
                  <h3 className="font-display text-[1.25rem] leading-[1.75rem] sm:text-[1.5rem] sm:leading-[2rem] text-on-surface group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-[0.875rem] leading-[1.45rem] text-on-surface-variant leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-label text-[0.75rem] leading-[1rem] rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-3 flex items-center justify-between">
                  <span className="font-label text-[0.75rem] leading-[1rem] text-outline uppercase tracking-wider">
                    {project.type}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-primary font-label text-[0.75rem] leading-[1rem] uppercase tracking-widest font-semibold hover:underline"
                  >
                    <span>Inquire Spec</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
