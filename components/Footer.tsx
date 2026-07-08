const navLinks = [
  { label: 'Method', href: '#method' },
  { label: 'Coaching', href: '#coaching' },
  { label: 'Apply', href: '#apply' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-condensed text-xs tracking-[0.2em] uppercase text-[#EDE8DF] font-semibold mb-3">
              Foundations of Strength
            </p>
            <p className="text-xs text-[#404040] leading-relaxed font-light">
              Online Strength Coaching by Christian Davis<br />
              California's Strongest Man&nbsp;&nbsp;·&nbsp;&nbsp;Professional Strongman
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3 sm:items-center">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[0.6rem] tracking-[0.2em] uppercase text-[#404040] hover:text-[#6B6B6B]"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="sm:text-right">
            <p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#404040] mb-3">Contact</p>
            <a
              href="mailto:christiantdavis97@gmail.com"
              className="text-xs text-[#6B6B6B] hover:text-[#B8936A] font-light"
            >
              christiantdavis97@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[0.5rem] tracking-[0.2em] uppercase text-[#2A2A2A]">
            © 2026 Foundations of Strength. All rights reserved.
          </p>
          <p className="text-[0.5rem] tracking-[0.2em] uppercase text-[#2A2A2A]">
            Strength System&nbsp;&nbsp;/&nbsp;&nbsp;V1.0
          </p>
        </div>
      </div>
    </footer>
  )
}
