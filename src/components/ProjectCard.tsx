'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  image?: string;
}

export default function ProjectCard({ title, description, tags, href, image }: ProjectCardProps) {
  return (
    <div className={cn(
      'group relative overflow-hidden rounded-xl border border-ee-border/50 bg-ee-panel/60 backdrop-blur-sm p-6',
      'hover:border-ee-cyan/50 transition-all duration-300',
    )}>
      {image && (
        <div className="h-32 w-full rounded-lg bg-ee-dark overflow-hidden mb-4">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-ee-slate/80 text-sm leading-relaxed mb-4 line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono text-ee-cyan border border-ee-cyan/30 bg-ee-cyan/10">
            {tag}
          </span>
        ))}
      </div>
      {href && (
        <Link
          href={href}
          className="text-xs font-bold text-ee-cyan hover:text-white flex items-center gap-1 transition-colors"
        >
          View project →
        </Link>
      )}
    </div>
  );
}
