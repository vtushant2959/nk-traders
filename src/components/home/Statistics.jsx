import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { STATS } from '../../data/siteData'

function AnimatedCount({ value, suffix, delay = 0, inView }) {
  const count = useMotionValue(0)
  const display = useTransform(count, v => {
    const n = Math.floor(v)
    return (n >= 1000 ? n.toLocaleString() : n) + suffix
  })

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, { duration: 2.5, delay, ease: 'easeOut' })
    return controls.stop
  }, [inView, value, delay, count])

  return <motion.span>{display}</motion.span>
}

export default function Statistics() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #040f1f 0%, #071428 50%, #040f1f 100%)' }}>

      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,102,255,0.06) 0%, transparent 70%)' }} />
      <div className="absolute top-0 left-0 right-0 h-px divider-glow" />
      <div className="absolute bottom-0 left-0 right-0 h-px divider-glow" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 inline-flex">By the Numbers</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Numbers That Define
            <span className="text-gradient-blue"> Our Scale</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="number-counter text-4xl font-display font-black text-gradient-blue mb-1">
                <AnimatedCount value={stat.value} suffix={stat.suffix} delay={i * 0.1} inView={inView} />
              </div>
              <div className="text-steel-400 text-xs font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
