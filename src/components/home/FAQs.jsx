import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '../../data/siteData'

export default function FAQs() {
  const [open, setOpen] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #040f1f 0%, #020b18 100%)' }}>

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      })}} />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <span className="section-label mb-5 inline-flex">FAQs</span>
            <h2 className="section-title text-white mb-6">
              Frequently Asked
              <br />
              <span className="text-gradient-blue">Questions</span>
            </h2>
            <p className="text-steel-400 leading-relaxed mb-8">
              Everything you need to know about selling scrap to NK Traders. Can't find your answer? Call us or WhatsApp — we respond in minutes.
            </p>
            <div className="space-y-3">
              {[
                { icon: '📞', label: 'Call Us', sub: FAQS[0]?.a?.slice(0, 30) + '...', action: 'tel:+91-98765-43210' },
                { icon: '💬', label: 'WhatsApp', sub: 'Get instant answers', action: 'https://wa.me/919876543210' },
              ].map(item => (
                <a key={item.label} href={item.action}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-white/05"
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.label}</div>
                    <div className="text-steel-400 text-xs">{item.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  border: `1px solid ${open === i ? 'rgba(0,102,255,0.35)' : 'rgba(255,255,255,0.07)'}`,
                  background: open === i ? 'rgba(0,102,255,0.06)' : 'rgba(255,255,255,0.02)',
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left gap-4"
                >
                  <span className="text-white font-medium text-sm flex-1">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className="text-steel-400 shrink-0 transition-transform duration-300"
                    style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-5 text-steel-400 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
