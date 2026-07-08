const readouts = [
  { label: 'Coach', value: 'Christian Davis' },
  { label: 'Title', value: "Cal's Strongest Man" },
  { label: 'Method', value: 'Foundations of Strength' },
  { label: 'Delivery', value: 'Online / Nationwide' },
]

const stats = [
  { label: 'Coaching Approach', value: 'Assessment-First' },
  { label: 'Training Modality', value: 'Strength-Based' },
  { label: 'Program Delivery', value: 'Online / Nationwide' },
  { label: 'Experience Level', value: 'Beginner to Advanced' },
]

export default function Hero() {
  return (
    <section
      id="method"
      className="relative min-h-screen flex flex-col pt-[60px]"
    >
      <div className="relative z-10 flex-1 max-w-7xl mx-auto px-6 lg:px-10 w-full flex flex-col justify-center py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-14 lg:gap-20 items-center">

          {/* Left: Copy */}
          <div className="flex flex-col gap-8">
            {/* Label */}
            <div className="flex items-center gap-4">
              <span className="block w-8 h-px bg-[#B8936A]" aria-hidden />
              <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#6B6B6B] font-medium">
                Online Strength Coaching&nbsp;&nbsp;/&nbsp;&nbsp;Nationwide
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-condensed text-[3.2rem] sm:text-[4.5rem] lg:text-[5rem] xl:text-[6rem] leading-[0.9] font-bold uppercase tracking-tight text-[#EDE8DF]">
              Build Strength<br />
              <span className="text-[#B8936A]">That Lasts.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base lg:text-lg text-[#6B6B6B] max-w-lg leading-relaxed font-light">
              Personalized online strength coaching for men who want to build muscle, move better, and understand how to train — without random workouts or wrecking their body.
            </p>

            {/* Authority */}
            <div className="border-l-2 border-[#B8936A]/40 pl-5">
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#404040] mb-1.5">Coached By</p>
              <p className="text-[#EDE8DF] font-semibold">Christian Davis</p>
              <p className="text-sm text-[#6B6B6B] font-light mt-0.5">
                California's Strongest Man&nbsp;&nbsp;·&nbsp;&nbsp;Professional Strongman
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#apply"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#B8936A] text-[#0B0B0B] text-[0.65rem] tracking-[0.2em] uppercase font-bold hover:bg-[#D4B08A]"
              >
                Apply for Coaching
                <span className="text-sm">→</span>
              </a>
              <a
                href="#method"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-[#EDE8DF] text-[0.65rem] tracking-[0.2em] uppercase font-medium hover:border-white/40 hover:bg-white/[0.03]"
              >
                Explore the Method
              </a>
            </div>
          </div>

          {/* Right: Visual block */}
          <div className="relative">
            {/* Placeholder card */}
            <div className="relative aspect-[4/5] bg-[#111111] border border-white/[0.07] overflow-hidden">
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center select-none">
                  <div className="w-14 h-14 border border-white/[0.08] mx-auto mb-4 flex items-center justify-center">
                    <span className="text-[#2A2A2A] text-xl">▶</span>
                  </div>
                  <p className="text-[0.55rem] tracking-[0.25em] uppercase text-[#2A2A2A]">Training Footage</p>
                  <p className="text-[0.5rem] text-[#1E1E1E] mt-1 tracking-widest uppercase">Place your image or video here</p>
                </div>
              </div>

              {/* Bottom gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/70 via-transparent to-transparent pointer-events-none"
                aria-hidden
              />

              {/* Readout cards */}
              <div className="absolute bottom-0 left-0 right-0 p-4 grid grid-cols-2 gap-2">
                {readouts.map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-[#0B0B0B]/85 backdrop-blur-sm border border-white/[0.08] px-3 py-2.5"
                  >
                    <p className="text-[0.5rem] tracking-[0.2em] uppercase text-[#6B6B6B] mb-1">{label}</p>
                    <p className="text-[0.65rem] font-semibold text-[#EDE8DF] leading-tight">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Corner accent marks */}
            <div className="absolute -top-px -right-px w-6 h-6 border-t border-r border-[#B8936A]/50" aria-hidden />
            <div className="absolute -bottom-px -left-px w-6 h-6 border-b border-l border-[#B8936A]/50" aria-hidden />
          </div>
        </div>

        {/* Bottom stats row */}
        <div className="mt-20 pt-8 border-t border-white/[0.07] hidden lg:grid grid-cols-4 gap-8">
          {stats.map(({ label, value }) => (
            <div key={label}>
              <p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#404040] mb-1.5">{label}</p>
              <p className="text-sm font-medium text-[#EDE8DF]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
