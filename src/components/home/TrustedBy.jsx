import { motion } from 'framer-motion'

const companies = [
  'Tata Steel', 'JSW Group', 'Vedanta', 'Hindalco', 'SAIL',
  'Bharat Forge', 'Godrej Industries', 'L&T', 'Adani Group', 'Reliance',
  'Apollo Tyres', 'Mahindra', 'Havells', 'Bajaj Auto', 'Asian Paints',
]

export default function TrustedBy() {
  return (
    <section className="py-14 relative overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="absolute inset-0" style={{ background: 'rgba(0,102,255,0.02)' }} />
      <div className="container-custom mb-6">
        <p className="text-center text-xs text-steel-400 tracking-widest uppercase font-semibold">
          Trusted by India's Leading Industrial Groups & Manufacturers
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #020b18, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, #020b18, transparent)' }} />

        <div className="flex gap-8 animate-marquee">
          {[...companies, ...companies].map((company, i) => (
            <div key={`${company}-${i}`}
              className="shrink-0 flex items-center gap-3 px-6 py-3 rounded-full whitespace-nowrap"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="w-2 h-2 rounded-full bg-electric-500" />
              <span className="text-steel-300 font-medium text-sm">{company}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
