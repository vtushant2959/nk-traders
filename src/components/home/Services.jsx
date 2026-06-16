import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { SERVICES } from '../../data/siteData'
import { COMPANY } from '../../data/siteData'

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="services" ref={ref} className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-5 inline-flex">Our Services</span>
          <h2 className="section-title text-white mb-5">
            Complete Scrap &
            <span className="text-gradient-blue"> Metal Trading</span>
            <br />Solutions Under One Roof
          </h2>
          <p className="text-steel-400 max-w-2xl mx-auto">
            From factory floor to global market — NK Traders offers end-to-end industrial scrap management, metal trading, and asset recovery services tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-glass rounded-2xl p-7 group relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at top left, ${service.color}12, transparent 60%)` }} />

              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`, opacity: 0.5 }} />

              {/* Service Image */}
              <div className="h-40 -mx-7 -mt-7 mb-5 relative overflow-hidden rounded-t-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,11,24,0.85) 0%, rgba(2,11,24,0.1) 70%)' }} />
                <div className="absolute bottom-3 left-4 text-3xl">{service.icon}</div>
              </div>

              <div className="relative z-10">
                <h3 className="font-display font-bold text-white text-xl mb-3">{service.title}</h3>
                <p className="text-steel-400 text-sm leading-relaxed mb-5">{service.desc}</p>

                <div className="space-y-2 mb-6">
                  {service.benefits.map(b => (
                    <div key={b} className="flex items-center gap-2">
                      <CheckCircle size={13} style={{ color: service.color }} className="shrink-0" />
                      <span className="text-steel-300 text-xs">{b}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?text=I need information about ${service.title}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/link"
                  style={{ color: service.color }}
                >
                  Get Quote <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <a href={`https://wa.me/${COMPANY.whatsapp}?text=I need a quote for scrap disposal`}
            target="_blank" rel="noopener noreferrer"
            className="btn-primary inline-flex">
            Get Free Quote for Your Scrap <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
