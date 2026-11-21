'use client';

import { cn } from '@/lib/utils';

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-2xl mx-auto text-center">
        <span className="eyebrow">Get in touch</span>
        <h2 className="section-title">Let's build something together.</h2>
        <p className="text-ee-slate/80 mt-6 mb-12 leading-relaxed">
          I'm available for internships and entry-level roles starting Summer
          2026. Feel free to reach out about hardware collaborations, project
          opportunities, or just to talk circuits.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-2xl border border-ee-border/50 text-left">
            <h3 className="text-lg font-bold text-white mb-6">Say hello</h3>
            <form
              action="https://formspree.io/f/xoednlev"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-mono text-ee-cyan uppercase tracking-wider mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-ee-dark border border-ee-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-ee-cyan transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-ee-cyan uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="What are you working on?"
                  className="w-full bg-ee-dark border border-ee-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-ee-cyan transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-ee-cyan text-ee-dark font-semibold rounded-lg hover:bg-white transition-colors"
              >
                Send message
              </button>
            </form>
          </div>

          <div className="space-y-5">
            <a
              href="mailto:ravishmk1303@gmail.com"
              className={cn(
                'flex items-center gap-4 px-4 py-3 rounded-lg border border-ee-border/50 bg-ee-dark/50',
                'hover:bg-ee-cyan/10 hover:border-ee-cyan/50 hover:text-white transition-all',
                'text-left w-full',
              )}
            >
              <div className="w-10 h-10 rounded-lg bg-ee-panel border border-ee-border flex items-center justify-center shrink-0">
                <span className="text-ee-cyan font-mono">✉</span>
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-ee-cyan">Email</p>
                <p className="text-xs text-ee-slate/60 underline">Click here to email</p>
              </div>
            </a>
            <a
              href="https://github.com/Ravishtpt"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-4 px-4 py-3 rounded-lg border border-ee-border/50 bg-ee-dark/50',
                'hover:bg-ee-cyan/10 hover:border-ee-cyan/50 hover:text-white transition-all',
                'text-left w-full',
              )}
            >
              <div className="w-10 h-10 rounded-lg bg-ee-panel border border-ee-border flex items-center justify-center shrink-0">
                <span className="text-ee-cyan font-mono">⌘</span>
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-ee-cyan">GitHub</p>
                <p className="text-xs text-ee-slate/60 underline">Click here for GitHub</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/ravish-m-k-9934a2322"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-4 px-4 py-3 rounded-lg border border-ee-border/50 bg-ee-dark/50',
                'hover:bg-ee-cyan/10 hover:border-ee-cyan/50 hover:text-white transition-all',
                'text-left w-full',
              )}
            >
              <div className="w-10 h-10 rounded-lg bg-ee-panel border border-ee-border flex items-center justify-center shrink-0">
                <span className="text-ee-cyan font-mono">🔗</span>
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-ee-cyan">LinkedIn</p>
                <p className="text-xs text-ee-slate/60 underline">Click here for LinkedIn</p>
              </div>
            </a>
            <div className="flex items-center gap-4 px-4 py-3 rounded-lg border border-ee-border/50 bg-ee-dark/50 text-left w-full">
              <div className="w-10 h-10 rounded-lg bg-ee-panel border border-ee-border flex items-center justify-center shrink-0">
                <span className="text-ee-cyan font-mono">📍</span>
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-white">Location</p>
                <p className="text-xs text-ee-slate/60">TamilNadu, IN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
