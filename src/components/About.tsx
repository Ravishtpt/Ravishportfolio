import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="eyebrow">About Me</span>
          <p className="text-ee-slate/80 leading-relaxed mb-8 max-w-lg">
            Creative and proactive. I specialize in designing circuits and
            analysis. Ambitious and eager to grow and develop new skills and
            abilities in my career. Currently in my final year of Diploma in
            Electrical and Electronics Engineering.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-ee-cyan font-mono text-sm mt-0.5">▸</span>
              <span className="text-ee-slate">Diploma in Electrical &amp; Electronics Engineering</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-ee-cyan font-mono text-sm mt-0.5">▸</span>
              <span className="text-ee-slate">Thiagarajar Polytechnic College, Salem — Final Year</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-ee-cyan font-mono text-sm mt-0.5">▸</span>
              <span className="text-ee-slate">94.08% (up to 4th Semester)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-ee-cyan font-mono text-sm mt-0.5">▸</span>
              <span className="text-ee-slate">Electrical &amp; Electronics Fundamentals</span>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-ee-border/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-ee-cyan/10 rounded-full blur-[100px] -mt-12 -mr-12" />
          <div className="relative z-10 flex flex-col gap-6">
            <div className="relative w-full h-[360px] sm:h-[440px] rounded-xl overflow-hidden border border-ee-border/50 bg-ee-dark">
              <Image
                src="/ravish.jpg"
                alt="Ravish M K"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 440px"
                className="object-cover object-[50%_22%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ee-dark via-ee-dark/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-white">Ravish M K</h3>
                <p className="text-ee-cyan text-sm font-mono">Diploma Student • Electrical &amp; Electronics</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-ee-slate/90">
              <p>
                Based in Salem, Tamil Nadu. Currently completing my Diploma in
                Electrical and Electronics Engineering at Thiagarajar
                Polytechnic College. Available for internships and entry-level
                roles.
              </p>
              <p>
                I'm creative and proactive, with a focus on designing circuits
                and analysis. I enjoy building IoT and hardware projects that
                solve real problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
