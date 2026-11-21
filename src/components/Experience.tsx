import Image from 'next/image';

type EducationEntry = {
  role: string;
  company: string;
  date: string;
  location: string;
  description: string;
  logo?: string;
};

const EXPERIENCE: EducationEntry[] = [
  {
    role: 'Diploma in Electrical & Electronics Engineering',
    company: 'Thiagarajar Polytechnic College, Salem',
    date: '2024–2027',
    location: 'Final Year • 94.95%',
    description: 'Currently in final year (up to 4th Semester) with 94.95% aggregate. Specializing in circuit design and analysis.',
    logo: '/tpc-logo.png',
  },
  {
    role: 'Secondary School Education (10th)',
    company: 'Bala Bharathi Matriculation Higher Secondary School, Salem',
    date: '2023–2024',
    location: '80.4%',
    description: 'Completed secondary education with 80.4%.',
  },
  {
    role: 'Electrical Motor Rewinding Internship',
    company: 'RRKS Electrical and Electronics, Salem',
    date: '15 Days',
    location: 'Internship',
    description:
      'Hands-on internship in electrical motor rewinding at RRKS Electrical and Electronics, Salem.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-ee-panel/30">
      <div className="text-center mb-16">
        <span className="eyebrow">Education & Experience</span>
        <h2 className="section-title">Background</h2>
        <p className="text-ee-slate/80 max-w-2xl mx-auto leading-relaxed">
          Academic qualifications, internship, and co-curricular activities.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-ee-border" />
        {EXPERIENCE.map((exp) => (
          <div key={exp.role} className="relative pl-12 mb-12">
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-ee-cyan border-2 border-ee-dark" />
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-xs font-mono text-ee-cyan font-bold uppercase tracking-wider">
                {exp.date}
              </span>
              <span className="text-xs font-mono text-ee-slate/60 ml-4">{exp.location}</span>
            </div>
            <div className="flex items-start gap-4">
              {exp.logo && (
                <div className="shrink-0 w-14 h-14 rounded-lg bg-white p-1 border border-ee-border/50">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-ee-cyan text-sm font-semibold mb-2">{exp.company}</p>
              </div>
            </div>
            <p className="text-ee-slate/80 text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-16 space-y-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-ee-cyan" />
          Certifications
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            'Microsoft PowerPoint',
            'Programming Language C',
            'Microsoft Word',
            'Microsoft Excel',
          ].map((cert) => (
            <span
              key={cert}
              className="px-3 py-1.5 rounded-md text-xs font-mono bg-ee-dark border border-ee-border/40 text-ee-slate/90"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-12 space-y-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-ee-cyan" />
          Achievements & Co-Curricular
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-ee-cyan font-mono text-sm mt-0.5">▸</span>
            <span className="text-ee-slate/90 text-sm">
              Consolation Prize — Essay Competition, Thiagarajar Polytechnic College (2026)
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-ee-cyan font-mono text-sm mt-0.5">▸</span>
            <span className="text-ee-slate/90 text-sm">
              Paper Presentation — SAKTHI 2K26 National Level Technical Symposium
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-ee-cyan font-mono text-sm mt-0.5">▸</span>
            <span className="text-ee-slate/90 text-sm">
              Paper Presentation — TECH BLITZ 2K26 Technical Symposium
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-12">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-ee-cyan" />
          Languages
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            { name: 'Tamil', level: 'Fluent' },
            { name: 'English', level: 'Intermediate' },
          ].map((lang) => (
            <span
              key={lang.name}
              className="px-3 py-1.5 rounded-md text-xs font-mono bg-ee-dark border border-ee-border/40 text-ee-slate/90"
            >
              {lang.name} ({lang.level})
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
