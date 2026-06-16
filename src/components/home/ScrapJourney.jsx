import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stages = [
  {
    phase: '01',
    title: 'Collection & Pickup',
    desc: 'Our logistics team arrives at your facility with professional equipment. We handle safe collection of all scrap material — from factory floor to loading dock.',
    icon: '🚛',
    color: '#0066ff',
    tag: 'Pan India Coverage',
  },
  {
    phase: '02',
    title: 'Sorting & Classification',
    desc: 'Material is sorted by type, grade, and purity using advanced equipment. Our metallurgists classify each category for maximum value recovery.',
    icon: '🔍',
    color: '#0052cc',
    tag: 'Grade-wise Sorting',
  },
  {
    phase: '03',
    title: 'Certified Weighing',
    desc: 'Every lot is weighed on our government-certified weighbridge. Digital weight slips are shared with you in real-time for full transparency.',
    icon: '⚖️',
    color: '#0088ff',
    tag: 'Zero Deductions',
  },
  {
    phase: '04',
    title: 'Processing & Shredding',
    desc: 'State-of-the-art shredding, baling, and processing transforms raw scrap into premium secondary raw material ready for mills and foundries.',
    icon: '⚡',
    color: '#00aaff',
    tag: 'Advanced Processing',
  },
  {
    phase: '05',
    title: 'Global Trading',
    desc: 'Processed metal enters our global network — supplied to steelmakers, foundries, and international buyers across 15+ countries for maximum price realization.',
    icon: '🌏',
    color: '#00c6ff',
    tag: '15+ Countries',
  },
  {
    phase: '06',
    title: 'Instant Payment',
    desc: 'Payment via NEFT/RTGS within 24 hours of weight verification. GST invoice and all compliance documents delivered digitally the same day.',
    icon: '💰',
    color: '#059669',
    tag: '24hr Guarantee',
  },
]

export default function ScrapJourney() {
  const sectionRef = useRef()
  const cardRefs = useRef([])
  const lineRef = useRef()
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean)
    if (!cards.length) return

    const ctx = gsap.context(() => {
      // Animate the progress bar
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              end: 'bottom 70%',
              scrub: 1.5,
            },
          }
        )
      }

      // Animate each card
      cards.forEach((card, i) => {
        const isLeft = i % 2 === 0
        gsap.fromTo(
          card,
          { opacity: 0, x: isLeft ? -50 : 50, y: 20 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={(el) => { sectionRef.current = el; inViewRef(el) }}
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020b18 0%, #040f1f 50%, #020b18 100%)' }}
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.05) 0%, transparent 70%)' }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-label mb-5 inline-flex">The Scrap Journey</span>
          <h2 className="section-title text-white mb-5">
            From Scrap to
            <span className="text-gradient-blue"> Premium Metal</span>
          </h2>
          <p className="text-steel-400 max-w-2xl mx-auto text-lg">
            Watch how industrial scrap is transformed through our world-class processing pipeline into valuable secondary raw material — traded globally.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div className="absolute left-1/2 -translate-x-px top-8 bottom-8 w-0.5 hidden lg:block"
            style={{ background: 'rgba(0,102,255,0.1)' }}>
            <div
              ref={lineRef}
              className="w-full h-full origin-top"
              style={{ background: 'linear-gradient(180deg, #0066ff 0%, #00c6ff 100%)' }}
            />
          </div>

          <div className="space-y-12 lg:space-y-20">
            {stages.map((stage, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={stage.phase}
                  ref={el => cardRefs.current[i] = el}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${!isLeft ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content card */}
                  <div className="flex-1 w-full">
                    <div
                      className="rounded-2xl p-7 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: `1px solid rgba(255,255,255,0.07)`,
                      }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = stage.color + '40'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                    >
                      {/* Top accent */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                        style={{ background: `linear-gradient(90deg, transparent, ${stage.color}, transparent)`, opacity: 0.6 }} />

                      <div className="flex items-start gap-5">
                        <div className="text-4xl shrink-0 mt-1">{stage.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: stage.color }}>
                              Phase {stage.phase}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                              style={{ background: stage.color + '18', color: stage.color, border: `1px solid ${stage.color}30` }}>
                              {stage.tag}
                            </span>
                          </div>
                          <h3 className="font-display font-bold text-white text-xl mb-3">{stage.title}</h3>
                          <p className="text-steel-400 leading-relaxed text-sm">{stage.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="relative z-10 shrink-0 hidden lg:flex flex-col items-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center font-display font-black text-white text-sm relative"
                      style={{
                        background: `linear-gradient(135deg, ${stage.color}, ${stage.color}99)`,
                        boxShadow: `0 0 30px ${stage.color}40`,
                      }}
                    >
                      {stage.phase}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                        style={{ background: stage.color }}
                      />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-steel-400 mb-6 text-lg">Ready to start your scrap journey?</p>
          <a
            href="https://wa.me/919876543210?text=I want to start the scrap collection process"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary inline-flex text-lg !px-10 !py-5"
          >
            Start Your Scrap Journey →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
