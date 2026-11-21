'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Zap, CircuitBoard, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'bg-ee-dark/80 backdrop-blur-md border-b border-ee-border/40',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#hero"
            className={cn(
              'flex items-center gap-2',
              'text-white font-bold tracking-tight',
            )}
          >
            <CircuitBoard className="h-5 w-5 text-ee-cyan" />
            <span className="circuit-text">Ravish<span className="text-ee-cyan">.eee</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className={cn(
                'px-4 py-2 rounded-lg border border-ee-border/60',
                'text-sm font-medium text-ee-cyan transition-colors',
                'hover:bg-ee-cyan/10 hover:border-ee-cyan/50',
              )}
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-ee-slate hover:text-white"
              aria-label="Open menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-ee-dark border-b border-ee-border/40">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-4 py-3 rounded-lg text-base font-medium',
                  'text-ee-slate hover:bg-ee-panel/50 hover:text-white transition-colors',
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
