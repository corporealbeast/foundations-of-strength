const tags = ['Personalized', 'Evidence-Based', 'Long-Term']

export default function ApplicationCTA() {
  return (
    <section
      id="apply"
      className="border-t border-white/[0.07] py-28 lg:py-40 relative overflow-hidden"
    >
      {/* Subtle vertical center line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#1755E7]/15 to-transparent pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        {/* Label */}
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-[#1755E7] font-medium mb-10">
          Online Coaching Application
        </p>

        {/* Headline */}
        <h2 className="font-condensed text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold uppercase leading-[0.95] text-[#FFFFFF] tracking-tight mb-8">
          Start with an<br />honest assessment.
        </h2>

        {/* Copy */}
        <p className="text-[#A8A8C0] text-base lg:text-lg leading-relaxed font-light max-w-2xl mx-auto mb-12">
          Coaching is built around your goals, training history, available equipment, and the reality of your schedule. Apply below to see whether Foundations of Strength is the right fit.
        </p>

        {/* CTA */}
        <a
          href="mailto:christiantdavis97@gmail.com?subject=Online Coaching Application"
          className="inline-flex items-center gap-4 px-10 py-5 bg-[#1755E7] text-white text-[0.65rem] tracking-[0.25em] uppercase font-bold hover:bg-[#4070F4] group"
        >
          Apply for Online Coaching
          <span className="group-hover:translate-x-1 transition-transform duration-300 text-base">
            →
          </span>
        </a>

        <p className="mt-6 text-[0.55rem] tracking-[0.2em] uppercase text-[#5C5C78]">
          Applications reviewed within 48 hours
        </p>

        {/* Decorative tags */}
        <div className="mt-20 flex justify-center">
          <div className="grid grid-cols-3 gap-px max-w-sm w-full">
            {tags.map((tag) => (
              <div key={tag} className="border border-white/[0.07] px-4 py-3 text-center">
                <p className="text-[0.55rem] tracking-[0.15em] uppercase text-[#5C5C78]">{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
