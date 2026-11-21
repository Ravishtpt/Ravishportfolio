import ProjectCard from './ProjectCard';
import { cn } from '@/lib/utils';

const PROJECTS = [
  {
    title: 'IoT-Based Smart Attendance System',
    description:
      'Group project — Designed and developed an IoT-based smart attendance system utilizing RFID and cloud integration to record attendance in real time, ensure accuracy, reduce manual effort, and provide automated analytics for efficient workforce management.',
    tags: ['IoT', 'RFID', 'Cloud Integration', 'Group Project'],
    href: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container bg-ee-panel/30">
      <div className="text-center mb-16">
        <span className="eyebrow">Selected Work</span>
        <h2 className="section-title">Circuits I've built</h2>
        <p className="text-ee-slate/80 max-w-2xl mx-auto leading-relaxed">
          A selection of academic and personal projects spanning PCB design,
          embedded firmware, analog circuits, and digital signal processing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
