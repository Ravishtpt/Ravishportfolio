export default function Footer() {
  return (
    <footer className="border-t border-ee-border/40 bg-ee-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-ee-cyan font-bold tracking-tight">EE</span>
            <span className="text-ee-slate">.io</span>
          </div>
          <p className="text-xs text-ee-slate/60">
            Built with Next.js, React Three Fiber, and Tailwind CSS.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Ravishtpt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ee-cyan hover:text-white transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ravish-m-k-9934a2322"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ee-cyan hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ravishmk1303@gmail.com"
              className="text-ee-cyan hover:text-white transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
        <p className="mt-8 text-[10px] text-ee-slate/50 text-center">
          {new Date().getFullYear()} Electrical Engineering Student Portfolio.
        </p>
      </div>
    </footer>
  );
}
