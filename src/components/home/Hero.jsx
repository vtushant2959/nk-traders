import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, ArrowRight, Shield, CheckCircle, Zap, Truck } from 'lucide-react'
import { COMPANY } from '../../data/siteData'

const trustBadges = [
  { icon: Shield, label: 'GST Registered', sub: 'Verified Business' },
  { icon: CheckCircle, label: 'MSME Certified', sub: 'Govt. of India' },
  { icon: Zap, label: 'Fast Payments', sub: 'Within 24 Hours' },
  { icon: Truck, label: 'Pan India Pickup', sub: '25+ Cities' },
]

const words = ['Industrial Scrap', 'Metal Scrap', 'Copper Scrap', 'Factory Scrap', 'Warehouse Scrap']

const orbits = [
  { size: 320, duration: 12, dotColor: '#0066ff', dotSize: 8, angle: 20 },
  { size: 380, duration: 18, dotColor: '#00c6ff', dotSize: 6, angle: -35 },
  { size: 440, duration: 25, dotColor: '#0052cc', dotSize: 5, angle: 55 },
]

const floatCards = [
  { label: '500+ Clients', sub: 'Pan India', pos: { top: '8%', left: '-5%' }, delay: 0 },
  { label: '50,000 MT', sub: 'Monthly Volume', pos: { bottom: '12%', left: '-8%' }, delay: 1 },
  { label: '24hr Payment', sub: 'Guaranteed', pos: { top: '30%', right: '-10%' }, delay: 2 },
  { label: '15+ Countries', sub: 'Export Network', pos: { bottom: '30%', right: '-8%' }, delay: 1.5 },
]

const scrapEmojis = ['⚙️', '🔩', '🔧', '⛏️', '🏗️', '⚡', '🔶']

function AnimatedGlobe() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow rings */}
      {[1, 1.3, 1.6, 2.0].map((scale, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: `${scale * 280}px`,
            height: `${scale * 280}px`,
            borderColor: `rgba(0,102,255,${0.25 - i * 0.05})`,
            borderWidth: i === 0 ? 1.5 : 1,
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* Orbit rings with animated dots */}
      {orbits.map((orbit, i) => (
        <div
          key={`orbit-${i}`}
          className="absolute rounded-full"
          style={{
            width: orbit.size,
            height: orbit.size,
            border: `1px dashed rgba(0,102,255,0.2)`,
            transform: `rotate(${orbit.angle}deg)`,
          }}
        >
          {/* Orbit dot — single style prop, transformOrigin points to ring center */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: orbit.dotSize,
              height: orbit.dotSize,
              background: orbit.dotColor,
              top: -orbit.dotSize / 2,
              left: `calc(50% - ${orbit.dotSize / 2}px)`,
              boxShadow: `0 0 12px ${orbit.dotColor}, 0 0 24px ${orbit.dotColor}60`,
              transformOrigin: `${orbit.dotSize / 2}px ${orbit.size / 2 + orbit.dotSize / 2}px`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: orbit.duration, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      ))}

      {/* Core Globe */}
      <motion.div
        className="relative z-10 rounded-full flex items-center justify-center"
        style={{
          width: 280,
          height: 280,
          background: 'radial-gradient(circle at 35% 35%, #0a2550 0%, #04111f 50%, #020b18 100%)',
          border: '2px solid rgba(0,102,255,0.4)',
          boxShadow: '0 0 60px rgba(0,102,255,0.25), inset 0 0 60px rgba(0,0,0,0.5)',
        }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Globe grid lines */}
        <svg
          viewBox="0 0 280 280"
          className="absolute inset-0 w-full h-full rounded-full"
          style={{ opacity: 0.15 }}
        >
          {[40, 70, 100, 140, 180, 210, 240].map(y => (
            <ellipse key={`lat-${y}`} cx="140" cy={y} rx="135" ry="20"
              fill="none" stroke="#0066ff" strokeWidth="0.8" />
          ))}
          {[0, 30, 60, 90, 120, 150].map(angle => (
            <ellipse key={`lon-${angle}`} cx="140" cy="140" rx={20 + angle * 0.8} ry="135"
              fill="none" stroke="#0066ff" strokeWidth="0.8"
              transform={`rotate(${angle} 140 140)`} />
          ))}
        </svg>

        {/* Continent blobs */}
        <svg viewBox="0 0 280 280" className="absolute inset-0 w-full h-full rounded-full" style={{ opacity: 0.12 }}>
          <ellipse cx="90" cy="110" rx="40" ry="25" fill="#0066ff" />
          <ellipse cx="160" cy="130" rx="55" ry="30" fill="#0066ff" />
          <ellipse cx="200" cy="90" rx="25" ry="18" fill="#0066ff" />
          <ellipse cx="120" cy="180" rx="30" ry="18" fill="#0066ff" />
          <ellipse cx="70" cy="170" rx="20" ry="12" fill="#0066ff" />
        </svg>

        {/* Center text */}
        <div className="relative z-10 text-center">
          <div className="font-display font-black text-5xl text-gradient-blue leading-none">NK</div>
          <div className="text-white font-bold text-xs tracking-widest mt-1 uppercase opacity-80">Global</div>
          <div className="text-electric-400 text-xs tracking-widest uppercase opacity-60">Trading</div>
        </div>

        {/* Shimmer overlay */}
        <div className="absolute inset-0 rounded-full" style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(0,102,255,0.05) 100%)',
        }} />
      </motion.div>

      {/* Floating metric cards */}
      {floatCards.map(({ label, sub, pos, delay }) => (
        <motion.div
          key={label}
          className="absolute glass rounded-xl px-4 py-3"
          style={pos}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.5, delay },
            scale: { duration: 0.5, delay },
            y: { duration: 4, repeat: Infinity, delay, ease: 'easeInOut' },
          }}
        >
          <div className="text-white font-bold text-sm leading-none">{label}</div>
          <div className="text-steel-400 text-xs mt-0.5">{sub}</div>
        </motion.div>
      ))}

      {/* Scrap particle emojis */}
      {scrapEmojis.map((emoji, i) => (
        <motion.div
          key={emoji}
          className="absolute text-xl pointer-events-none select-none"
          style={{
            left: `${15 + i * 12}%`,
            top: `${10 + (i % 3) * 28}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.9, 0.4],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 3 + i * 0.8,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  )
}

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setCurrentWord(w => (w + 1) % words.length), 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
      style={{ background: 'linear-gradient(135deg, #020b18 0%, #040f1f 50%, #020b18 100%)' }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0,198,255,0.08) 0%, transparent 70%)' }} />
      </div>

      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="section-label">🌍 &nbsp;India's #1 Scrap Trading Partner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-white leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              India's Trusted
              <br />
              <span className="text-gradient-blue">Global Scrap</span>
              <br />& Metal Trading
              <br />Partner
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-steel-400 leading-relaxed mb-5 max-w-xl"
            >
              Premium buyers of{' '}
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-electric-400 font-semibold"
                style={{ display: 'inline-block' }}
              >
                {words[currentWord]}
              </motion.span>
              {' '}across India — fast payments, competitive pricing, pan India logistics.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a href="#lead-form" className="btn-primary">
                Get Instant Quote <ArrowRight size={16} />
              </a>
              <a href="#process" className="btn-secondary">
                Schedule Pickup <Truck size={16} />
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=Hello NK Traders, I need a scrap pickup quote.`}
                target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Now
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {trustBadges.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-3 py-3 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(0,102,255,0.15)' }}
                  >
                    <Icon size={14} className="text-electric-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white leading-none mb-0.5">{label}</div>
                    <div className="text-xs text-steel-400 leading-none">{sub}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Animated Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative h-[500px] lg:h-[580px] hidden md:flex items-center justify-center"
          >
            <AnimatedGlobe />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-steel-400 tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: '1px solid rgba(255,255,255,0.2)' }}
        >
          <div className="w-1 h-2 rounded-full bg-electric-400" />
        </motion.div>
      </div>
    </section>
  )
}
