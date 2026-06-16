import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import { INDUSTRIES, COMPANY } from '../../data/siteData'

export default function Industries() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="section-label mb-5 inline-flex">Industries Served</span>
          <h2 className="section-title text-white mb-5">
            Serving Every
            <span className="text-gradient-blue"> Industrial Sector</span>
          </h2>
          <p className="text-steel-400 max-w-xl mx-auto">
            From automotive giants to pharmaceutical companies — NK Traders provides specialized scrap management solutions tailored to each industry's unique requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card-glass rounded-2xl p-5 text-center group cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{ind.icon}</div>
              <h3 className="font-display font-semibold text-white text-sm mb-1">{ind.name}</h3>
              <p className="text-steel-400 text-xs mb-2">{ind.desc}</p>
              <span className="text-xs font-semibold text-electric-400">{ind.count}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=Hello, I want to discuss scrap disposal for my industry`}
            target="_blank" rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Discuss Your Industry Needs <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
