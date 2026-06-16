import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const networkNodes = [
  { label: 'India', sub: 'HQ & Operations', x: 62, y: 45, isHQ: true },
  { label: 'UAE', sub: 'Export Hub', x: 55, y: 38, isHQ: false },
  { label: 'Singapore', sub: 'SEA Hub', x: 76, y: 53, isHQ: false },
  { label: 'Malaysia', sub: 'SEA Market', x: 74, y: 57, isHQ: false },
  { label: 'China', sub: 'Major Buyer', x: 79, y: 33, isHQ: false },
  { label: 'Europe', sub: 'Premium Market', x: 48, y: 27, isHQ: false },
  { label: 'USA', sub: 'Americas Hub', x: 20, y: 33, isHQ: false },
]

const routes = [
  { from: { x: 62, y: 45 }, to: { x: 55, y: 38 } },
  { from: { x: 62, y: 45 }, to: { x: 76, y: 53 } },
  { from: { x: 62, y: 45 }, to: { x: 79, y: 33 } },
  { from: { x: 62, y: 45 }, to: { x: 48, y: 27 } },
  { from: { x: 62, y: 45 }, to: { x: 20, y: 33 } },
]

const stats = [
  { label: 'Countries Exported', value: '15+' },
  { label: 'MT Annual Export', value: '2,400+' },
  { label: 'Active Buyers', value: '50+' },
  { label: 'Trade Lanes', value: '12+' },
]

// Animated dot that travels along a line using keyframes (no CSS motion path)
function AnimatedDot({ from, to, duration, delay }) {
  return (
    <motion.circle
      r="0.7"
      fill="#0066ff"
      initial={{ cx: from.x, cy: from.y, opacity: 0 }}
      animate={{
        cx: [from.x, to.x, from.x],
        cy: [from.y, to.y, from.y],
        opacity: [0, 1, 1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ filter: 'drop-shadow(0 0 3px #0066ff)' }}
    />
  )
}

export default function GlobalNetwork() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

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
          <span className="section-label mb-5 inline-flex">Global Network</span>
          <h2 className="section-title text-white mb-5">
            Trading Scrap
            <span className="text-gradient-blue"> Globally</span>
          </h2>
          <p className="text-steel-400 max-w-xl mx-auto">
            NK Traders exports premium recycled metal to buyers across 15+ countries. Our global network ensures your scrap commands the highest international market value.
          </p>
        </motion.div>

        {/* World Map SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden mb-12"
          style={{ background: 'rgba(0,102,255,0.04)', border: '1px solid rgba(0,102,255,0.12)' }}
        >
          <div className="relative" style={{ paddingTop: '48%' }}>
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 55"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Background grid */}
              <defs>
                <pattern id="mapgrid" width="5" height="5" patternUnits="userSpaceOnUse">
                  <path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(0,102,255,0.08)" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100" height="55" fill="url(#mapgrid)" />

              {/* Trade route lines */}
              {routes.map((route, i) => (
                <line
                  key={i}
                  x1={route.from.x} y1={route.from.y}
                  x2={route.to.x} y2={route.to.y}
                  stroke="rgba(0,102,255,0.3)"
                  strokeWidth="0.35"
                  strokeDasharray="1.5,1"
                />
              ))}

              {/* Animated dots on routes (no offsetPath) */}
              {inView && routes.map((route, i) => (
                <AnimatedDot
                  key={i}
                  from={route.from}
                  to={route.to}
                  duration={2.5 + i * 0.6}
                  delay={i * 0.5}
                />
              ))}

              {/* Network Nodes */}
              {networkNodes.map((node, i) => (
                <motion.g
                  key={node.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.12 }}
                >
                  {/* Pulse ring for HQ */}
                  {node.isHQ && (
                    <motion.circle
                      cx={node.x} cy={node.y}
                      r="3"
                      fill="none" stroke="#0066ff" strokeWidth="0.4"
                      animate={{ r: [1.5, 5], opacity: [0.8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  {/* Node dot */}
                  <circle
                    cx={node.x} cy={node.y}
                    r={node.isHQ ? 2.2 : 1.4}
                    fill={node.isHQ ? '#0066ff' : '#002299'}
                    stroke={node.isHQ ? '#00c6ff' : '#0066ff'}
                    strokeWidth="0.5"
                  />
                  {/* Label */}
                  <text x={node.x} y={node.y - 3}
                    textAnchor="middle" fill="white"
                    fontSize="2" fontWeight="bold" fontFamily="sans-serif">
                    {node.label}
                  </text>
                  <text x={node.x} y={node.y - 1}
                    textAnchor="middle" fill="rgba(168,184,204,0.8)"
                    fontSize="1.4" fontFamily="sans-serif">
                    {node.sub}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center glass rounded-xl py-6 px-4"
            >
              <div className="text-3xl font-display font-black text-gradient-blue mb-1">{s.value}</div>
              <div className="text-steel-400 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
