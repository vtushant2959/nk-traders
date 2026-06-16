import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import { CATEGORIES, COMPANY } from '../../data/siteData'

export default function ScrapCategories() {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const metals = [
    { emoji: '🔶', gradient: 'linear-gradient(135deg, #b87333, #e8984e)' },
    { emoji: '🔘', gradient: 'linear-gradient(135deg, #848789, #c0c6c8)' },
    { emoji: '🟡', gradient: 'linear-gradient(135deg, #CFB53B, #f0d060)' },
    { emoji: '⚫', gradient: 'linear-gradient(135deg, #4a5568, #6b7280)' },
    { emoji: '🔩', gradient: 'linear-gradient(135deg, #374151, #4b5563)' },
    { emoji: '⚙️', gradient: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' },
    { emoji: '📦', gradient: 'linear-gradient(135deg, #6d28d9, #8b5cf6)' },
    { emoji: '🏭', gradient: 'linear-gradient(135deg, #065f46, #059669)' },
    { emoji: '⚡', gradient: 'linear-gradient(135deg, #991b1b, #dc2626)' },
    { emoji: '🔧', gradient: 'linear-gradient(135deg, #92400e, #d97706)' },
  ]

  return (
    <section ref={ref} className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #040f1f 0%, #020b18 100%)' }}>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-5 inline-flex">Scrap Categories</span>
          <h2 className="section-title text-white mb-5">
            All Metal &
            <span className="text-gradient-blue"> Scrap Types</span>
          </h2>
          <p className="text-steel-400 max-w-xl mx-auto">
            We buy every category of industrial and commercial scrap. Select your material type to get an instant price estimate.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {CATEGORIES.map((cat, i) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setActive(i)}
              className={`relative rounded-2xl text-left transition-all duration-300 overflow-hidden group ${
                active === i ? 'scale-105' : 'hover:scale-102'
              }`}
              style={{
                border: `1px solid ${active === i ? cat.color + '60' : 'rgba(255,255,255,0.08)'}`,
                boxShadow: active === i ? `0 0 30px ${cat.color}25` : 'none',
              }}
            >
              {/* Image */}
              <div className="h-28 relative overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,11,24,0.9) 0%, rgba(2,11,24,0.2) 60%)' }} />
                <div className="absolute bottom-2 left-3 text-2xl">{metals[i].emoji}</div>
                {active === i && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: cat.color }}
                  >✓</motion.div>
                )}
              </div>
              {/* Text */}
              <div className="p-3" style={{ background: active === i ? `${cat.color}12` : 'rgba(255,255,255,0.02)' }}>
                <div className="font-display font-semibold text-white text-xs mb-0.5">{cat.name}</div>
                <div className="text-steel-400 text-xs leading-snug">{cat.desc}</div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Category Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden relative"
            style={{ border: `1px solid ${CATEGORIES[active].color}30` }}
          >
            <div className="flex flex-col md:flex-row">
              {/* Image panel */}
              <div className="md:w-72 h-48 md:h-auto relative shrink-0 overflow-hidden">
                <img
                  src={CATEGORIES[active].image}
                  alt={CATEGORIES[active].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(2,11,24,0) 60%, rgba(2,11,24,0.8) 100%)' }} />
              </div>
              {/* Content */}
              <div className="flex-1 p-8 md:p-10 relative"
                style={{ background: `linear-gradient(135deg, ${CATEGORIES[active].color}10, rgba(2,11,24,0.95))` }}>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 h-full">
                  <div>
                    <div className="text-5xl mb-4">{metals[active].emoji}</div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">{CATEGORIES[active].name}</h3>
                    <p className="text-steel-400 mb-4">{CATEGORIES[active].desc}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-steel-400">Current Rate:</span>
                      <span className="font-bold text-lg" style={{ color: CATEGORIES[active].color }}>
                        {CATEGORIES[active].value}
                      </span>
                      <span className="text-xs text-steel-400">(Market linked, subject to grade)</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 shrink-0">
                    <a
                      href={`https://wa.me/${COMPANY.whatsapp}?text=I want to sell ${CATEGORIES[active].name}. Please provide current rates.`}
                      target="_blank" rel="noopener noreferrer"
                      className="btn-primary whitespace-nowrap"
                    >
                      Get Price for {CATEGORIES[active].name} <ArrowRight size={16} />
                    </a>
                    <a href={`tel:${COMPANY.phone}`} className="btn-secondary text-center justify-center">
                      Call for Bulk Rates
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
