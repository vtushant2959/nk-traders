import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PROCESS_STEPS, COMPANY } from '../../data/siteData'

export default function ProcessTimeline() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="process" ref={ref} className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020b18 0%, #040f1f 100%)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="section-label mb-5 inline-flex">Our Process</span>
          <h2 className="section-title text-white mb-5">
            How It Works —
            <span className="text-gradient-blue"> Simple & Fast</span>
          </h2>
          <p className="text-steel-400 max-w-xl mx-auto">
            Selling your scrap to NK Traders is a seamless, transparent process. From first contact to payment — typically completed in 24-72 hours.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-10 right-10 h-px hidden lg:block"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,102,255,0.4), transparent)' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                {/* Step number badge */}
                <div className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center mb-6 relative mx-auto lg:mx-0"
                  style={{ background: 'linear-gradient(135deg, rgba(0,102,255,0.2), rgba(0,102,255,0.05))', border: '1px solid rgba(0,102,255,0.3)' }}>
                  <div className="text-3xl">{step.icon}</div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: '#0066ff' }}>
                    {step.step}
                  </div>
                </div>

                <h3 className="font-display font-bold text-white text-lg mb-3 text-center lg:text-left">{step.title}</h3>
                <p className="text-steel-400 text-sm leading-relaxed text-center lg:text-left">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(0,102,255,0.12), rgba(0,198,255,0.05))', border: '1px solid rgba(0,102,255,0.2)' }}
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-steel-400 mb-8 max-w-lg mx-auto">
              Contact us now for a free site inspection and instant price quote. Our team responds within 60 minutes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                📞 Call Now: {COMPANY.phone}
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=I want to schedule a scrap pickup`}
                target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp for Pickup
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
