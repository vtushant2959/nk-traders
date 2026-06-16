import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { COMPANY } from '../../data/siteData'

export default function ExitPopup() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return
    const wasShown = sessionStorage.getItem('exitPopupShown')
    if (wasShown) return

    const handleMouseLeave = (e) => {
      if (e.clientY < 10 && !dismissed) {
        setShow(true)
        sessionStorage.setItem('exitPopupShown', '1')
      }
    }

    // Also show after 45 seconds
    const timer = setTimeout(() => {
      if (!dismissed) {
        setShow(true)
        sessionStorage.setItem('exitPopupShown', '1')
      }
    }, 45000)

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(timer)
    }
  }, [dismissed])

  const close = () => {
    setShow(false)
    setDismissed(true)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.8, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative w-full max-w-md rounded-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
            style={{ background: 'linear-gradient(135deg, #071428 0%, #040f1f 100%)', border: '1px solid rgba(0,102,255,0.3)' }}
          >
            {/* Top accent */}
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #0066ff, #00c6ff)' }} />

            <div className="p-8 text-center">
              <button onClick={close} className="absolute top-4 right-4 p-1.5 text-steel-400 hover:text-white transition-colors">
                <X size={18} />
              </button>

              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Wait! Don't Miss Out
              </h3>
              <p className="text-steel-400 mb-6 leading-relaxed">
                Get an <strong className="text-white">instant price quote</strong> for your scrap metal. Our experts provide valuations within <strong className="text-electric-400">60 minutes</strong> — zero obligation.
              </p>

              <div className="space-y-3 mb-5">
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?text=I want an instant scrap quote`}
                  target="_blank" rel="noopener noreferrer"
                  onClick={close}
                  className="btn-whatsapp w-full justify-center"
                >
                  WhatsApp for Instant Quote
                </a>
                <a href={`tel:${COMPANY.phone}`} onClick={close} className="btn-secondary w-full justify-center">
                  📞 Call: {COMPANY.phone}
                </a>
                <a href="#lead-form" onClick={close}
                  className="w-full flex items-center justify-center gap-2 text-sm text-electric-400 hover:text-white transition-colors">
                  Fill Quote Form <ArrowRight size={14} />
                </a>
              </div>

              <button onClick={close} className="text-xs text-steel-400 hover:text-white transition-colors underline">
                No thanks, I'll leave without a quote
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
