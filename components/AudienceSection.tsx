const audienceA = {
  label: 'A. Return to Strength',
  headline: 'For Men Who Used\nTo Be Stronger.',
  body: "You used to train. You were athletic. Life got in the way — work, family, injury, time. Now you feel weaker than you should and you know it is time to rebuild what you had. The system starts where you are, not where you used to be.",
  tags: ['Men 35–50+', 'Former Athletes', 'Rebuilding After a Gap', 'Nagging Injuries'],
}

const audienceB = {
  label: 'B. Pursue Strength',
  headline: 'For Lifters Who Want\nA Real Foundation.',
  body: 'You lift, but you do not have a system. You want to get genuinely strong, compete, or learn powerlifting and strongman-style training from someone who has done it at the highest level — with a real plan behind it.',
  tags: ['Beginner–Intermediate', 'Aspiring Competitors', 'Learning Technique', 'Powerlifting / Strongman'],
}

function AudienceCard({
  card,
  dark,
}: {
  card: typeof audienceA
  dark?: boolean
}) {
  return (
    <div
      className={`${dark ? 'bg-[#111111]' : 'bg-[#0B0B0B]'} p-10 lg:p-14 flex flex-col justify-between min-h-[440px] hover:brightness-110 transition-all duration-300 relative overflow-hidden`}
    >
      {/* Left edge accent */}
      <div className="absolute top-0 left-0 w-[2px] h-16 bg-[#B0E0E6]/40" aria-hidden />

      <div>
        <p className="text-[0.58rem] tracking-[0.22em] uppercase text-[#B0E0E6] font-medium mb-6">
          {card.label}
        </p>
        <h3 className="font-condensed text-3xl lg:text-4xl font-bold uppercase text-[#EDE8DF] leading-tight mb-6 whitespace-pre-line">
          {card.headline}
        </h3>
        <p className="text-[#6B6B6B] text-base leading-relaxed font-light max-w-md">
          {card.body}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3">
        {card.tags.map((tag) => (
          <div key={tag} className="border border-white/[0.07] px-4 py-2.5">
            <p className="text-[0.6rem] tracking-[0.15em] uppercase text-[#404040]">{tag}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AudienceSection() {
  return (
    <section
      id="coaching"
      className="border-t border-white/[0.07] py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#B0E0E6] font-medium">
            Who This Is For
          </span>
          <span className="flex-1 h-px bg-white/[0.07]" aria-hidden />
        </div>

        {/* Headline */}
        <h2 className="font-condensed text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-[1.05] text-[#EDE8DF] tracking-tight mb-14 max-w-3xl">
          Built for people who want<br />more from their body.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.07]">
          <AudienceCard card={audienceA} />
          <AudienceCard card={audienceB} dark />
        </div>
      </div>
    </section>
  )
}
