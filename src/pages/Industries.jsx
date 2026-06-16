import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { COMPANY } from '../data/siteData'
import LeadForm from '../components/home/LeadForm'

const industries = [
  {
    icon: '🚗',
    name: 'Automotive',
    desc: 'OEM plants, Tier 1 & 2 automotive suppliers, component manufacturers. We handle press shop scrap, casting runners, rejected parts, tooling scrap, and complete plant closures.',
    scrap: ['Press shop scrap', 'Die casting runners', 'Aluminium turnings', 'Steel offcuts', 'Tooling scrap'],
    clients: '80+ clients',
    color: '#0066ff',
  },
  {
    icon: '🏗️',
    name: 'Construction & Real Estate',
    desc: 'Builders, contractors, and real estate developers across India trust NK Traders for structural steel recovery, demolition scrap, and rebar collection.',
    scrap: ['Structural steel', 'Rebar & TMT', 'MS plates & channels', 'Scaffolding scrap', 'Electrical wiring'],
    clients: '60+ clients',
    color: '#7c3aed',
  },
  {
    icon: '🏭',
    name: 'Manufacturing',
    desc: 'General and heavy manufacturing units across India. We buy production waste, offcuts, rejected material, and machinery at the end of its operational life.',
    scrap: ['Production offcuts', 'Rejected components', 'Machinery scrap', 'MS scrap', 'Stainless steel scrap'],
    clients: '150+ clients',
    color: '#0052cc',
  },
  {
    icon: '🏪',
    name: 'Warehousing & Logistics',
    desc: '3PL providers, e-commerce fulfillment centers, and distribution hubs rely on us for periodic warehouse clearance and ongoing scrap management programs.',
    scrap: ['Racking & shelving', 'Forklift scrap', 'Packaging material', 'Pallet scrap', 'Electrical scrap'],
    clients: '45+ clients',
    color: '#059669',
  },
  {
    icon: '🧴',
    name: 'FMCG & Consumer Goods',
    desc: 'Fast-moving consumer goods companies with large manufacturing footprints. We provide scheduled, documented scrap pickup that integrates with their ESG reporting.',
    scrap: ['Packaging scrap', 'Production waste', 'Machinery offcuts', 'Tin & aluminium', 'E-waste'],
    clients: '30+ clients',
    color: '#d97706',
  },
  {
    icon: '⚙️',
    name: 'Engineering & Capital Goods',
    desc: 'Capital goods manufacturers, precision engineering companies, and machine tool makers. We accurately classify and value technical scrap grades.',
    scrap: ['Tool steel scrap', 'HSS cutters', 'Carbide inserts', 'Cast iron chips', 'Alloy steel'],
    clients: '70+ clients',
    color: '#dc2626',
  },
  {
    icon: '💊',
    name: 'Pharmaceutical',
    desc: 'Pharma plants and biotech facilities need compliant, documented scrap disposal. NK Traders provides CPCB-certified handling with full audit trail documentation.',
    scrap: ['SS 316L scrap', 'GMP equipment', 'Clean room scrap', 'E-waste', 'Lab equipment'],
    clients: '25+ clients',
    color: '#0891b2',
  },
  {
    icon: '⚡',
    name: 'Power Plants & Energy',
    desc: 'Thermal power plants, solar farms, and wind energy projects generate significant transformer, cable, and structural scrap which we handle at scale.',
    scrap: ['Transformer copper', 'HT cables', 'Generator scrap', 'Solar panel scrap', 'Structural steel'],
    clients: '20+ clients',
    color: '#f59e0b',
  },
  {
    icon: '🧵',
    name: 'Textile & Garments',
    desc: 'Spinning mills, weaving factories, and garment manufacturers. We collect textile machinery scrap, aluminium bobbins, and all metallic waste from the textile process.',
    scrap: ['Spinning machinery', 'Aluminium bobbins', 'Needle bars', 'Motor scrap', 'Frame scrap'],
    clients: '35+ clients',
    color: '#8b5cf6',
  },
  {
    icon: '🛤️',
    name: 'Infrastructure',
    desc: 'Road contractors, metro projects, bridge builders, and airport developers. Large structural steel recovery from decommissioned bridges, buildings, and railway infrastructure.',
    scrap: ['Bridge steel', 'Railway scrap', 'MS girders', 'Precast formwork', 'Site scrap'],
    clients: '40+ clients',
    color: '#374151',
  },
]

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>Industries We Serve | NK Traders Industrial Scrap Buyers India</title>
        <meta name="description" content="NK Traders serves automotive, manufacturing, pharmaceutical, FMCG, construction, power plants, and 10+ more industries for industrial scrap disposal across India with competitive rates and fast payments." />
        <link rel="canonical" href="https://nktraders.in/industries" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #020b18 0%, #071428 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label mb-6 inline-flex">Industries We Serve</span>
            <h1 className="section-title text-white mb-6">
              Specialized Scrap Solutions
              <br />
              <span className="text-gradient-blue">for Every Industry</span>
            </h1>
            <p className="text-steel-400 max-w-2xl mx-auto text-lg leading-relaxed">
              From automotive giants to pharmaceutical companies — NK Traders delivers industry-specific scrap management, tailored pricing, and compliance documentation for 10+ industrial sectors across India.
            </p>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            {[['500+', 'Industrial Clients'], ['10+', 'Sectors Served'], ['25+', 'Cities Covered'], ['18+', 'Years Experience']].map(([val, lbl]) => (
              <div key={lbl} className="text-center">
                <div className="text-3xl font-display font-black text-gradient-blue">{val}</div>
                <div className="text-steel-400 text-sm">{lbl}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding relative">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="rounded-2xl overflow-hidden group"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Top colored bar */}
                <div className="h-1" style={{ background: `linear-gradient(90deg, ${ind.color}, ${ind.color}66)` }} />

                <div className="p-8">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="text-5xl shrink-0">{ind.icon}</div>
                    <div>
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h2 className="font-display font-bold text-white text-xl">{ind.name}</h2>
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={{ background: ind.color + '18', color: ind.color, border: `1px solid ${ind.color}30` }}>
                          {ind.clients}
                        </span>
                      </div>
                      <p className="text-steel-400 text-sm leading-relaxed">{ind.desc}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-steel-400 uppercase tracking-widest mb-3">Scrap Types We Buy</p>
                    <div className="flex flex-wrap gap-2">
                      {ind.scrap.map(s => (
                        <span key={s} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#c0cfe0' }}>
                          <CheckCircle size={10} style={{ color: ind.color }} />
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}?text=Hello NK Traders, I work in the ${ind.name} sector and need a scrap quote.`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                    style={{ color: ind.color }}
                  >
                    Get Industry Quote <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(0,102,255,0.12), rgba(0,198,255,0.05))', border: '1px solid rgba(0,102,255,0.2)' }}
          >
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Don't See Your Industry?
              </h2>
              <p className="text-steel-400 max-w-xl mx-auto mb-8 text-lg">
                We serve all industrial sectors. If you have scrap metal, machinery, or industrial assets — we buy it. Call us for a free consultation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                  📞 Call Now: {COMPANY.phone}
                </a>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?text=Hello, I want to discuss scrap disposal for my business`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <LeadForm />
    </>
  )
}
