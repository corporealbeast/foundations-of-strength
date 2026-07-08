'use client'

import { useState, useRef, useEffect } from 'react'

// Illustrative example data — not a performance guarantee
const COACHED = [100, 103, 106, 109, 113, 116, 119, 123, 126, 130, 133, 137]
const RANDOM  = [100, 101, 100, 102, 101, 103, 102, 104, 103, 105, 104, 106]

const READOUTS = [
  {
    label: 'Programming',
    indicator: 'Load / Week',
    body: 'Training stress progresses instead of jumping randomly. Each week has a purpose and a direction.',
  },
  {
    label: 'Technique',
    indicator: 'Video / Week',
    body: 'Video review turns missed reps into better positions. Feedback compounds over weeks.',
  },
  {
    label: 'Accountability',
    indicator: 'Check-In / Week',
    body: 'Weekly check-ins keep the plan aligned with real life — not the ideal version of it.',
  },
]

export default function PerformanceDashboard() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const svgRef     = useRef<SVGSVGElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Trigger the line-draw animation when the section enters the viewport
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setRevealed(true); obs.disconnect() }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // SVG coordinate space
  const VW = 800, VH = 280
  const PAD = { t: 20, r: 24, b: 48, l: 58 }
  const CW  = VW - PAD.l - PAD.r
  const CH  = VH - PAD.t - PAD.b
  const MIN_Y = 97, MAX_Y = 141
  const BASE_Y = PAD.t + CH

  const toX = (i: number) => PAD.l + (i / 11) * CW
  const toY = (v: number) => PAD.t + (1 - (v - MIN_Y) / (MAX_Y - MIN_Y)) * CH

  const coachedPts: [number, number][] = COACHED.map((v, i) => [toX(i), toY(v)])
  const randomPts:  [number, number][] = RANDOM.map((v, i)  => [toX(i), toY(v)])

  // Smooth cubic bezier path using midpoint control points
  function smoothPath(pts: [number, number][]): string {
    let d = `M ${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`
    for (let i = 1; i < pts.length; i++) {
      const cpx = ((pts[i - 1][0] + pts[i][0]) / 2).toFixed(1)
      d += ` C ${cpx},${pts[i - 1][1].toFixed(1)} ${cpx},${pts[i][1].toFixed(1)} ${pts[i][0].toFixed(1)},${pts[i][1].toFixed(1)}`
    }
    return d
  }

  function areaPath(pts: [number, number][]): string {
    return `${smoothPath(pts)} L ${pts[pts.length - 1][0].toFixed(1)},${BASE_Y} L ${pts[0][0].toFixed(1)},${BASE_Y} Z`
  }

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    const mx = ((e.clientX - rect.left) / rect.width) * VW
    let nearest = 0, minDist = Infinity
    for (let i = 0; i < 12; i++) {
      const d = Math.abs(toX(i) - mx)
      if (d < minDist) { minDist = d; nearest = i }
    }
    setHoverIdx(nearest)
  }

  const gridYs = [100, 110, 120, 130, 140]
  const hi = hoverIdx

  return (
    <section
      ref={sectionRef}
      className="border-t border-white/[0.07] py-28 lg:py-36 bg-[#04040C]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Label row */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#1755E7] font-medium">
            Measured Progress
          </span>
          <span className="flex-1 h-px bg-white/[0.07]" aria-hidden />
          <span className="text-[0.55rem] tracking-widest uppercase text-[#5C5C78] hidden sm:block">
            12-Week View
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-condensed text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-[1.05] text-[#FFFFFF] tracking-tight mb-4 max-w-2xl">
          Coaching turns effort<br />into a feedback loop.
        </h2>
        <p className="text-[#A8A8C0] text-base mb-16 max-w-md font-light leading-relaxed">
          Random training gives you random data. Structured coaching gives you a repeatable
          cycle: train, review, adjust, and progress.
        </p>

        {/* Dashboard card */}
        <div className="border border-white/[0.07] bg-[#000000] mb-3">

          {/* Card header bar */}
          <div className="flex items-center justify-between flex-wrap gap-3 px-5 py-3 border-b border-white/[0.05]">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1755E7] opacity-60" />
              <span className="text-[0.52rem] tracking-[0.2em] uppercase text-[#1755E7] font-medium">
                Illustrative Example — Results Vary
              </span>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-px bg-[#1755E7]" />
                <span className="text-[0.48rem] tracking-[0.14em] uppercase text-[#A8A8C0]">
                  Structured Coaching
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-0 border-t border-dashed border-[#2A2A40]" />
                <span className="text-[0.48rem] tracking-[0.14em] uppercase text-[#5C5C78]">
                  Random Training
                </span>
              </div>
            </div>
          </div>

          {/* SVG chart */}
          <div className="relative">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${VW} ${VH}`}
              className="w-full block"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHoverIdx(null)}
            >
              <defs>
                {/* Left-to-right reveal clip */}
                <clipPath id="fos-reveal-clip">
                  <rect
                    x={PAD.l} y={0}
                    width={revealed ? CW + 4 : 0}
                    height={VH}
                    style={{ transition: 'width 1.7s cubic-bezier(0.22, 1, 0.36, 1)' }}
                  />
                </clipPath>
                {/* Coached area gradient */}
                <linearGradient id="fos-area-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#1755E7" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#1755E7" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Horizontal grid lines + Y labels */}
              {gridYs.map(v => (
                <g key={v}>
                  <line
                    x1={PAD.l} y1={toY(v)} x2={VW - PAD.r} y2={toY(v)}
                    stroke="rgba(255,255,255,0.04)" strokeWidth="1"
                  />
                  <text
                    x={PAD.l - 8} y={toY(v) + 4}
                    fontSize="9" fill="#3A3A55" textAnchor="end"
                    fontFamily="'SF Mono','Consolas','Courier New',monospace"
                  >{v}</text>
                </g>
              ))}

              {/* Y-axis rotated label */}
              <text
                x={13} y={PAD.t + CH / 2}
                fontSize="8" fill="#30304A" textAnchor="middle"
                fontFamily="'SF Mono','Consolas','Courier New',monospace"
                letterSpacing="0.08em"
                transform={`rotate(-90,13,${PAD.t + CH / 2})`}
              >STRENGTH INDEX</text>

              {/* Bottom axis line */}
              <line
                x1={PAD.l} y1={BASE_Y} x2={VW - PAD.r} y2={BASE_Y}
                stroke="rgba(255,255,255,0.05)" strokeWidth="1"
              />

              {/* X-axis week labels */}
              {COACHED.map((_, i) => (
                <text
                  key={i}
                  x={toX(i)} y={VH - 14}
                  fontSize="9" textAnchor="middle"
                  fill={hi === i ? '#A8A8C0' : '#2A2A40'}
                  fontFamily="'SF Mono','Consolas','Courier New',monospace"
                  style={{ transition: 'fill 0.12s' }}
                >W{i + 1}</text>
              ))}

              {/* Hover vertical rule */}
              {hi !== null && (
                <line
                  x1={toX(hi)} y1={PAD.t - 4} x2={toX(hi)} y2={BASE_Y}
                  stroke="rgba(23,85,231,0.25)" strokeWidth="1" strokeDasharray="3 3"
                />
              )}

              {/* Area fill under coached line */}
              <path
                d={areaPath(coachedPts)}
                fill="url(#fos-area-grad)"
                clipPath="url(#fos-reveal-clip)"
              />

              {/* Random training line — dashed, very muted */}
              <path
                d={smoothPath(randomPts)}
                fill="none" stroke="#2A2A40" strokeWidth="1.5" strokeDasharray="5 4"
                clipPath="url(#fos-reveal-clip)"
              />

              {/* Coached line — primary */}
              <path
                d={smoothPath(coachedPts)}
                fill="none" stroke="#1755E7" strokeWidth="2"
                clipPath="url(#fos-reveal-clip)"
              />

              {/* Hover endpoint dots */}
              {hi !== null && (
                <>
                  <circle
                    cx={toX(hi)} cy={toY(COACHED[hi])}
                    r="4.5" fill="#000000" stroke="#1755E7" strokeWidth="2"
                  />
                  <circle
                    cx={toX(hi)} cy={toY(RANDOM[hi])}
                    r="3" fill="#000000" stroke="#2A2A40" strokeWidth="1.5"
                  />
                </>
              )}
            </svg>

            {/* Hover tooltip */}
            {hi !== null && (
              <div
                className="absolute top-4 bg-[#04040C] border border-white/[0.1] p-3 min-w-[148px] pointer-events-none z-10"
                style={{
                  left: `${(toX(hi) / VW) * 100}%`,
                  transform: hi > 7
                    ? 'translateX(calc(-100% - 12px))'
                    : 'translateX(12px)',
                }}
              >
                <p className="text-[0.48rem] tracking-[0.2em] uppercase text-[#5C5C78] mb-2.5 pb-2 border-b border-white/[0.06]">
                  Week {hi + 1}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-px bg-[#1755E7]" />
                      <span className="text-[0.48rem] tracking-wider uppercase text-[#A8A8C0]">
                        Coached
                      </span>
                    </div>
                    <span
                      className="text-sm font-bold text-[#1755E7]"
                      style={{ fontFamily: "'SF Mono','Consolas',monospace" }}
                    >
                      {COACHED[hi]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-0 border-t border-dashed border-[#2A2A40]" />
                      <span className="text-[0.48rem] tracking-wider uppercase text-[#5C5C78]">
                        Random
                      </span>
                    </div>
                    <span
                      className="text-xs text-[#5C5C78]"
                      style={{ fontFamily: "'SF Mono','Consolas',monospace" }}
                    >
                      {RANDOM[hi]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                    <span className="text-[0.48rem] tracking-[0.15em] uppercase text-[#5C5C78]">
                      Gap
                    </span>
                    <span
                      className="text-xs font-bold text-[#1755E7]/40"
                      style={{ fontFamily: "'SF Mono','Consolas',monospace" }}
                    >
                      +{COACHED[hi] - RANDOM[hi]}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Card footer */}
          <div className="flex items-center justify-between px-5 py-2.5 border-t border-white/[0.05]">
            <span className="text-[0.46rem] tracking-[0.12em] uppercase text-[#2D2D40]">
              Illustrative trend only — not a performance guarantee
            </span>
            <span className="text-[0.46rem] tracking-[0.12em] uppercase text-[#2D2D40]">
              12-Week Block
            </span>
          </div>
        </div>

        {/* Full disclaimer */}
        <p className="text-[#2A2A40] text-[0.58rem] leading-relaxed mb-16 max-w-2xl">
          This is not a guarantee. Progress depends on training age, consistency, recovery,
          nutrition, equipment, injury history, and starting point.
        </p>

        {/* Three readout cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.07]">
          {READOUTS.map(({ label, indicator, body }) => (
            <div
              key={label}
              className="bg-[#000000] p-8 hover:bg-[#070712] transition-colors duration-300"
            >
              <p className="text-[0.48rem] tracking-[0.2em] uppercase text-[#5C5C78] mb-3">
                {indicator}
              </p>
              <p className="text-[0.55rem] tracking-[0.22em] uppercase text-[#1755E7] font-medium mb-4">
                {label}
              </p>
              <p className="text-sm text-[#A8A8C0] leading-relaxed font-light">{body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
