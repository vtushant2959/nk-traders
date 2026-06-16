import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Globe, TrendingUp, Users, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const highlights = [
  { icon: Award, label: '18+ Years', sub: 'Industry Experience' },
  { icon: Users, label: '500+ Clients', sub: 'Pan India Network' },
  { icon: Globe, label: '15+ Countries', sub: 'Export Partners' },
  { icon: TrendingUp, label: '₹500 Cr+', sub: 'Annual Trading Volume' },
]

const features = [
  'GST Registered & MSME Certified Business',
  'ISO 9001:2015 Quality Management System',
  'Certified weighbridge for transparent measurement',
  'CPCB authorized e-waste recycler',
  'Pan India logistics & pickup network',
  'LME-linked transparent pricing',
  '24-hour payment guarantee',
  'Dedicated relationship manager for every client',
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)' }} />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square max-w-lg"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              {/* Real scrap facility photo */}
              <img
                src="https://plus.unsplash.com/premium_photo-1673431020386-b6a5f9858b47?fm=jpg&q=85&w=800&fit=crop"
                alt="NK Traders industrial scrap facility"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(2,11,24,0.55) 0%, rgba(2,11,24,0.35) 100%)' }} />

              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center glass rounded-2xl px-8 py-5"
                  style={{ border: '1px solid rgba(0,102,255,0.3)' }}>
                  <div className="text-5xl font-display font-black text-gradient-blue mb-1">18+</div>
                  <div className="text-white font-semibold">Years of</div>
                  <div className="text-steel-400 text-sm">Excellence</div>
                </div>
              </div>

              {/* Floating badges */}
              {highlights.map(({ icon: Icon, label, sub }, i) => {
                const positions = ['top-5 left-5', 'top-5 right-5', 'bottom-5 left-5', 'bottom-5 right-5']
                return (
                  <motion.div
                    key={label}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3 + i, repeat: Infinity }}
                    className={`absolute ${positions[i]} glass rounded-xl px-3 py-2.5 flex items-center gap-2.5`}
                    style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(0,102,255,0.25)' }}>
                      <Icon size={13} className="text-electric-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-xs leading-none">{label}</div>
                      <div className="text-steel-400 text-xs mt-0.5">{sub}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="section-label mb-5 inline-flex">About NK Traders</span>
            <h2 className="section-title text-white mb-6">
              India's Most Trusted
              <br />
              <span className="text-gradient-blue">Scrap & Metal</span>
              <br />
              Trading Company
            </h2>
            <p className="text-steel-400 leading-relaxed mb-4">
              Founded in 2005, NK Traders has grown from a regional scrap dealer to one of India's largest and most respected industrial scrap trading companies. With operations spanning 25+ cities and exports to 15+ countries, we are the preferred scrap disposal partner for India's leading manufacturers, warehouses, and industrial parks.
            </p>
            <p className="text-steel-400 leading-relaxed mb-8">
              Our pan India network, certified facilities, and commitment to transparent pricing have made us the go-to partner for businesses seeking reliable, professional, and high-value scrap disposal solutions. We handle everything from a single factory clearance to multi-facility industrial dismantling projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {features.map((feat) => (
                <div key={feat} className="flex items-start gap-2.5">
                  <CheckCircle size={15} className="text-electric-400 shrink-0 mt-0.5" />
                  <span className="text-steel-300 text-sm">{feat}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary inline-flex">
              Our Full Story <Award size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
