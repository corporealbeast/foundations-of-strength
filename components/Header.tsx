'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Method', href: '#method' },
  { label: 'Coaching', href: '#coaching' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="font-condensed text-xs tracking-[0.2em] uppercase text-[#EDE8DF] hover:text-[#B8936A] font-semibold"
        >
          Foundations of Strength
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[0.65rem] tracking-[0.2em] uppercase text-[#6B6B6B] hover:text-[#EDE8DF]"
            >
              {label}
            </a>
          ))}
          <a
            href="#apply"
            className="text-[0.65rem] tracking-[0.2em] uppercase px-5 py-2.5 border border-[#B8936A] text-[#B8936A] hover:bg-[#B8936A] hover:text-[#0B0B0B] font-semibold"
          >
            Apply
          </a>
        </nav>

        {/* Mobile: apply + menu toggle */}
        <div className="flex md:hidden items-center gap-4">
          <a
            href="#apply"
            className="text-[0.6rem] tracking-[0.2em] uppercase px-4 py-2 border border-[#B8936A] text-[#B8936A] hover:bg-[#B8936A] hover:text-[#0B0B0B] font-semibold"
          >
            Apply
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-[#6B6B6B] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block w-5 h-px bg-[#6B6B6B] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-[#6B6B6B] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B0B0B] border-t border-white/[0.06] px-6 py-6 flex flex-col gap-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[0.65rem] tracking-[0.2em] uppercase text-[#6B6B6B] hover:text-[#EDE8DF]"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
