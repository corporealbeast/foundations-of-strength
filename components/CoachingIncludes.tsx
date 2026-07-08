const includes = [
  {
    label: 'Programming',
    title: 'Personalized Training Program',
    body: 'Built around your goals, schedule, equipment, and starting point. No templates pulled off the shelf.',
  },
  {
    label: 'Communication',
    title: 'Weekly Check-Ins',
    body: 'Regular touchpoints to review progress, adjust load, and address anything that came up in training that week.',
  },
  {
    label: 'Technique',
    title: 'Video Form Review',
    body: 'Submit training footage for coaching cues and corrections. Technique improves consistently with real feedback.',
  },
  {
    label: 'Nutrition',
    title: 'Nutrition Targets & Simple Habits',
    body: 'Practical targets based on your goals — not complex macros or unsustainable protocols you will quit in two weeks.',
  },
  {
    label: 'Adaptability',
    title: 'Adjustments Around Life',
    body: 'Schedule changes, equipment limitations, recovery needs, and injuries are factored in and adapted to — not ignored.',
  },
  {
    label: 'Tracking',
    title: 'Strength Tracked Over Time',
    body: 'Progress is measured and recorded. You know exactly where you started and how far you have come.',
  },
]

export default function CoachingIncludes() {
  return (
    <section className="border-t border-white/[0.07] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#1755E7] font-medium">
            What's Included
          </span>
          <span className="flex-1 h-px bg-white/[0.07]" aria-hidden />
          <span className="text-[0.55rem] tracking-widest uppercase text-[#5C5C78] hidden sm:block">
            Assessment&nbsp;&nbsp;/&nbsp;&nbsp;Programming&nbsp;&nbsp;/&nbsp;&nbsp;Accountability
          </span>
        </div>

        {/* Headline + intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-20 items-end">
          <h2 className="font-condensed text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-[1.05] text-[#FFFFFF] tracking-tight">
            Programming is personal.<br />Progress is measured.
          </h2>
          <p className="text-[#A8A8C0] text-base leading-relaxed font-light max-w-md">
            Every aspect of your coaching is designed around your specific situation — not a one-size-fits-all plan built for a fictional average person.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07]">
          {includes.map(({ label, title, body }) => (
            <div
              key={label}
              className="bg-[#000000] p-8 hover:bg-[#070712] transition-colors duration-300"
            >
              <p className="text-[0.55rem] tracking-[0.22em] uppercase text-[#1755E7] font-medium mb-4">
                {label}
              </p>
              <h3 className="font-condensed text-lg lg:text-xl font-bold uppercase text-[#FFFFFF] tracking-wide mb-3 leading-tight">
                {title}
              </h3>
              <p className="text-sm text-[#A8A8C0] leading-relaxed font-light">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
