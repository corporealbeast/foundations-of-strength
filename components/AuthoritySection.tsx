const credentials = [
  "2026 California's Strongest Man",
  'Professional Strongman Competitor',
  'Online Strength Coach',
  'Coaching Nationwide',
]

const mediaBlocks = [
  { label: 'Coaching Review', span: 'col-span-1', aspect: 'aspect-[4/3]' },
  { label: 'Training System', span: 'col-span-1', aspect: 'aspect-[4/3]' },
]

export default function AuthoritySection() {
  return (
    <section className="border-t border-white/[0.07] py-28 lg:py-36 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#B0E0E6] font-medium">
            The Coach
          </span>
          <span className="flex-1 h-px bg-white/[0.07]" aria-hidden />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
          <div>
            <h2 className="font-condensed text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-[1.05] text-[#EDE8DF] tracking-tight mb-10">
              Built under<br />real weight.
            </h2>

            <div className="space-y-6 max-w-lg">
              <p className="text-[#6B6B6B] text-base leading-relaxed font-light">
                Christian Davis is 2026 California's Strongest Man and a professional strongman competitor. His coaching is built from years spent understanding what actually creates real strength — and what breaks people down unnecessarily.
              </p>
              <p className="text-[#6B6B6B] text-base leading-relaxed font-light">
                The same principles that build elite-level strength can be scaled intelligently for real people who want to feel capable, powerful, and confident in their body again.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-10 space-y-3">
              {credentials.map((c) => (
                <div key={c} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#B0E0E6]" aria-hidden />
                  <span className="text-sm text-[#8A8A8A] font-light">{c}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="#apply"
                className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase text-[#B0E0E6] hover:text-[#C8EAED] font-medium group"
              >
                Apply for Coaching
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>

          {/* Right: Media */}
          <div className="grid grid-cols-2 gap-3">
            {/* Main competition photo */}
            <div className="col-span-2 aspect-[2/3] bg-[#111111] border border-white/[0.07] overflow-hidden relative">
              {/* Replace christian-stone.jpg with your atlas stone photo */}
              <img
                src="/images/christian-stone.jpg"
                alt="Christian Davis — Atlas Stone Competition"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* Remaining placeholders */}
            {mediaBlocks.map(({ label, span, aspect }) => (
              <div
                key={label}
                className={`${span} ${aspect} bg-[#111111] border border-white/[0.07] flex flex-col items-center justify-center gap-3 hover:border-white/[0.12] transition-colors duration-300 group`}
              >
                <div className="w-10 h-10 border border-white/[0.08] flex items-center justify-center group-hover:border-white/[0.15] transition-colors duration-300">
                  <span className="text-[#2A2A2A] text-sm">▶</span>
                </div>
                <p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#2A2A2A]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
