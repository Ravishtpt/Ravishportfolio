import { cn } from '@/lib/utils';

const SKILL_CATEGORIES = [
  {
    title: 'Electrical & Electronics',
    items: [
      'Electrical & Electronics Fundamentals',
      'AutoCAD',
      'Circuit Design',
      'Circuit Analysis',
    ],
  },
  {
    title: 'Software & Tools',
    items: [
      'MS Office Suite (Word, Excel, PowerPoint)',
      'Programming Language C',
      'Computer Fundamentals & Hardware Basics',
      'Microsoft Word',
      'Microsoft Excel',
      'Microsoft PowerPoint',
    ],
  },
  {
    title: 'Internship',
    items: ['Electrical Motor Rewinding (15 Days)'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-16">
        <span className="eyebrow">Toolbox</span>
        <h2 className="section-title">Skills &amp; tools</h2>
        <p className="text-ee-slate/80 max-w-2xl mx-auto leading-relaxed">
          Technologies and instruments I use regularly across design,
          simulation, and bench validation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            className={cn(
              'glass-panel p-6 rounded-2xl border border-ee-border/50 hover:border-ee-cyan/50 transition-colors',
            )}
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ee-cyan" />
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className={cn(
                    'px-3 py-1.5 rounded-md text-xs font-mono',
                    'bg-ee-dark border border-ee-border/40 text-ee-slate/90',
                  )}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
