import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock } from 'lucide-react'
import { CASE_STUDIES } from '../../data/siteData'

export default function CaseStudies() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #040f1f 0%, #020b18 100%)' }}>

      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="section-label mb-5 inline-flex">Case Studies</span>
          <h2 className="section-title text-white mb-5">
            Real Projects.
            <span className="text-gradient-blue"> Real Results.</span>
          </h2>
          <p className="text-steel-400 max-w-xl mx-auto">
            See how NK Traders delivered exceptional value for India's leading industrial companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="card-glass rounded-2xl overflow-hidden group"
            >
              {/* Image Header */}
              <div className="h-44 relative overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,11,24,0.92) 0%, rgba(2,11,24,0.3) 60%)' }} />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-electric-400 mb-2 self-start"
                    style={{ background: 'rgba(0,102,255,0.25)', border: '1px solid rgba(0,102,255,0.4)', backdropFilter: 'blur(8px)' }}>
                    {cs.category}
                  </span>
                  <h3 className="font-display font-bold text-white text-base leading-snug">{cs.title}</h3>
                </div>
              </div>

              {/* Meta */}
              <div className="px-5 py-3 flex flex-wrap gap-4 text-sm"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-1.5 text-steel-400">
                  <MapPin size={12} className="text-electric-400" /> {cs.location}
                </div>
                <div className="flex items-center gap-1.5 text-steel-400">
                  <Clock size={12} className="text-electric-400" /> {cs.duration}
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-white text-sm">
                  💰 {cs.value}
                </div>
              </div>

              {/* Before / After */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: 'rgba(220,38,38,0.3)', border: '1px solid rgba(220,38,38,0.5)' }}>✕</div>
                    <span className="text-xs font-semibold text-steel-400 uppercase tracking-wide">Challenge</span>
                  </div>
                  <p className="text-steel-400 text-sm leading-relaxed">{cs.before}</p>
                </div>
                <div className="h-px divider-glow" />
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: 'rgba(5,150,105,0.3)', border: '1px solid rgba(5,150,105,0.5)' }}>✓</div>
                    <span className="text-xs font-semibold text-electric-400 uppercase tracking-wide">Result</span>
                  </div>
                  <p className="text-steel-300 text-sm leading-relaxed">{cs.after}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {cs.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs text-steel-400"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link to="/case-studies" className="btn-secondary inline-flex">
            View All Case Studies <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
