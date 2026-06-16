import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const reasons = [
  {
    icon: '💰',
    title: 'Best Market Rates',
    desc: 'LME-linked pricing with zero hidden deductions. We consistently pay 5-12% above local market rates for bulk lots.',
    stat: '5-12%',
    statLabel: 'Above Market',
  },
  {
    icon: '⚡',
    title: '24-Hour Payment',
    desc: 'Payment via NEFT/RTGS within 24 hours of material verification. No delays. No excuses. Our 99% on-time record speaks for itself.',
    stat: '99%',
    statLabel: 'On-Time Rate',
  },
  {
    icon: '🌍',
    title: 'Pan India Presence',
    desc: 'Our logistics network spans 25+ cities across India. We handle pickup, loading, transport, and all documentation end-to-end.',
    stat: '25+',
    statLabel: 'Cities Covered',
  },
  {
    icon: '📋',
    title: 'Complete Documentation',
    desc: 'GST invoices, weighbridge certificates, material receipts, e-waste CPCB certificates — all delivered digitally within the hour.',
    stat: '100%',
    statLabel: 'Compliant',
  },
  {
    icon: '🔬',
    title: 'Technical Expertise',
    desc: 'Our metallurgists grade your scrap accurately. No undervaluation due to wrong classification. Maximum recovery guaranteed.',
    stat: '18+',
    statLabel: 'Years Expertise',
  },
  {
    icon: '🤝',
    title: 'Dedicated Account Manager',
    desc: 'Every client gets a dedicated relationship manager available 7 days a week. One point of contact for all your scrap needs.',
    stat: '7/7',
    statLabel: 'Support Days',
  },
  {
    icon: '✅',
    title: 'GST & MSME Certified',
    desc: 'Fully registered, tax-compliant business. Our GST invoices give you eligible input tax credit on all scrap transactions.',
    stat: 'GST',
    statLabel: 'Registered',
  },
  {
    icon: '🌱',
    title: 'ESG Compliance',
    desc: 'Zero-landfill commitment. Full environmental documentation for your ESG & sustainability reporting requirements.',
    stat: 'Zero',
    statLabel: 'Landfill',
  },
]

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section ref={ref} className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020b18 0%, #071428 50%, #020b18 100%)' }}>

      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)' }} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-5 inline-flex">Why NK Traders</span>
          <h2 className="section-title text-white mb-5">
            Why India's Best Companies
            <br />
            <span className="text-gradient-blue">Choose NK Traders</span>
          </h2>
          <p className="text-steel-400 max-w-2xl mx-auto">
            Over 500 industrial clients trust us for one reason — we consistently deliver what we promise. Better prices, faster payments, and complete professional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card-glass rounded-2xl p-6 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-6xl opacity-5 group-hover:opacity-10 transition-opacity duration-300 leading-none">{r.icon}</div>

              <div className="text-3xl mb-4">{r.icon}</div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-2xl font-display font-black text-gradient-blue">{r.stat}</span>
                <span className="text-xs text-steel-400">{r.statLabel}</span>
              </div>
              <h3 className="font-display font-bold text-white mb-2">{r.title}</h3>
              <p className="text-steel-400 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
