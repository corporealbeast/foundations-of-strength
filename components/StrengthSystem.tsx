const stages = [
  {
    number: '01',
    name: 'Assess',
    phase: 'Phase / Init',
    status: 'Required',
    description:
      'Start with the real person, not a generic template. Training history, injuries, schedule, equipment, goals, and current ability — all of it informs how training is built.',
    metrics: [
      { label: 'Input', value: 'History + Goals' },
      { label: 'Output', value: 'Training Baseline' },
    ],
  },
  {
    number: '02',
    name: 'Build Capacity',
    phase: 'Phase / 01',
    status: 'Foundational',
    description:
      'Build the base that lets strength training work. Movement quality, bracing, tendon tolerance, work capacity, and recovery habits come before loading.',
    metrics: [
      { label: 'Focus', value: 'Movement + Recovery' },
      { label: 'Duration', value: '4–8 Weeks' },
    ],
  },
  {
    number: '03',
    name: 'Develop Strength',
    phase: 'Phase / 02',
    status: 'Primary',
    description:
      'Progressively train the lifts and muscles that create measurable strength: squat, hinge, press, pull, carry, and targeted accessories.',
    metrics: [
      { label: 'Modality', value: 'Compound + Accessory' },
      { label: 'Method', value: 'Progressive Overload' },
    ],
  },
  {
    number: '04',
    name: 'Refine Technique',
    phase: 'Phase / 03',
    status: 'Ongoing',
    description:
      'Video feedback and coaching cues turn effort into better movement, stronger positions, and safer training over time.',
    metrics: [
      { label: 'Tool', value: 'Video Review' },
      { label: 'Cadence', value: 'Weekly Cues' },
    ],
  },
  {
    number: '05',
    name: 'Sustain Progress',
    phase: 'Phase / Long-Term',
    status: 'Adaptive',
    description:
      'Adapt training so the client keeps progressing for months and years — not burning out after a few hard weeks.',
    metrics: [
      { label: 'Horizon', value: 'Months to Years' },
      { label: 'Adjustment', value: 'Continuous' },
    ],
  },
]

export default function StrengthSystem() {
  return (
    <section className="border-t border-white/[0.07] py-28 lg:py-36 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label row */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#B8936A] font-medium">
            Strength System
          </span>
          <span className="flex-1 h-px bg-white/[0.07]" aria-hidden />
          <span className="text-[0.55rem] tracking-widest uppercase text-[#404040] hidden sm:block">
            Method / Overview
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-condensed text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-[1.05] text-[#EDE8DF] tracking-tight mb-4 max-w-2xl">
          Five stages.<br />One stronger body.
        </h2>
        <p className="text-[#6B6B6B] text-base mb-20 max-w-md font-light">
          A sequential system built around your starting point — not a generic template.
        </p>

        {/* Stage list */}
        <div className="flex flex-col gap-px">
          {stages.map(({ number, name, phase, status, description, metrics }) => (
            <div
              key={number}
              className="bg-[#0B0B0B] border border-white/[0.07] hover:border-[#B8936A]/20 hover:bg-[#0F0F0F] transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_200px]">
                {/* Stage ID */}
                <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/[0.05] flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[0.55rem] tracking-[0.25em] uppercase text-[#B8936A] font-medium">
                        {number}
                      </span>
                      <span className="flex-1 h-px bg-white/[0.05]" aria-hidden />
                    </div>
                    <h3 className="font-condensed text-xl font-bold uppercase text-[#EDE8DF] tracking-wide">
                      {name}
                    </h3>
                  </div>
                  <span className="text-[0.5rem] tracking-[0.2em] uppercase text-[#404040]">
                    {phase}
                  </span>
                </div>

                {/* Description */}
                <div className="p-6 lg:p-8 flex items-center border-b lg:border-b-0 lg:border-r border-white/[0.05]">
                  <p className="text-[#6B6B6B] text-sm leading-relaxed font-light max-w-lg">
                    {description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="p-6 lg:p-8 flex flex-col justify-between gap-4">
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                    {metrics.map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-[0.5rem] tracking-[0.2em] uppercase text-[#404040] mb-1">
                          {label}
                        </p>
                        <p className="text-[0.65rem] font-medium text-[#8A8A8A] uppercase tracking-wide">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8936A]/50" aria-hidden />
                    <span className="text-[0.5rem] tracking-[0.2em] uppercase text-[#404040]">
                      {status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
