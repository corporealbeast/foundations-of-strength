const problems = [
  {
    number: '01',
    title: 'Random Training',
    description:
      'Jumping between programs, following influencers, switching routines every few weeks. Effort without direction produces fatigue, not progress.',
  },
  {
    number: '02',
    title: 'Stalled Progress',
    description:
      'Same weights, same size, same result month after month. Without a structured progression model, the body has no reason to adapt.',
  },
  {
    number: '03',
    title: 'Beat-Up Joints',
    description:
      'Chronic shoulder, knee, or lower back issues from chasing intensity without building the foundation to handle it.',
  },
]

export default function ProblemSection() {
  return (
    <section className="border-t border-white/[0.07] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#B0E0E6] font-medium">
            The Problem
          </span>
          <span className="flex-1 h-px bg-white/[0.07]" aria-hidden />
        </div>

        {/* Headline */}
        <div className="max-w-4xl mb-14">
          <h2 className="font-condensed text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold uppercase leading-[1.05] text-[#EDE8DF] tracking-tight">
            Most people do not need<br />another workout.<br />
            <span className="text-[#6B6B6B]">They need a system.</span>
          </h2>
        </div>

        {/* Body copy */}
        <div className="max-w-2xl mb-20">
          <p className="text-[#6B6B6B] leading-relaxed text-base lg:text-lg font-light">
            Random programs, poor technique, inconsistent progression, and chasing fatigue instead of building capacity are why most people stay stuck. The goal is not to survive workouts. The goal is to become stronger, more capable, and harder to break over time.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.07]">
          {problems.map(({ number, title, description }) => (
            <div
              key={number}
              className="bg-[#0B0B0B] p-8 lg:p-10 hover:bg-[#111111] transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-[0.55rem] tracking-[0.25em] uppercase text-[#B0E0E6] font-medium">
                  {number}
                </span>
                <span className="flex-1 mx-4 h-px bg-white/[0.06]" aria-hidden />
              </div>
              <h3 className="font-condensed text-xl lg:text-2xl font-bold uppercase tracking-wide text-[#EDE8DF] mb-4">
                {title}
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed font-light">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
