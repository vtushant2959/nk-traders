import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react'
import { COMPANY } from '../data/siteData'
import LeadForm from '../components/home/LeadForm'

const caseStudies = [
  {
    id: 1,
    category: 'Warehouse Scrap',
    title: 'Multinational 3PL Warehouse — Complete Clearance in 5 Days',
    client: 'Leading 3PL Provider (Confidential)',
    location: 'Gurgaon, Haryana',
    duration: '5 Days',
    value: '₹2.8 Crore',
    volume: '2,400 MT',
    icon: '🏪',
    color: '#7c3aed',
    challenge: '180,000 sq ft fulfillment center needed complete clearance before facility handover to new tenant. Mixed material — warehouse racking, shelving, packaging scrap, machinery, and structural steel. Tight 5-day deadline with active adjacent operations.',
    solution: 'NK Traders deployed 3 assessment teams simultaneously, completed material classification in under 4 hours. Mobilized 8 trucks and a 40-person collection team. Sequential bay clearance ensured zero disruption to adjacent operations.',
    results: [
      'Complete 180,000 sq ft clearance in exactly 5 days',
      '2,400 MT of mixed material processed',
      'Client received ₹2.8 Cr — 22% above initial estimate',
      'Zero business disruption to adjacent warehouse',
      'Full ESG documentation provided for annual sustainability report',
      'CPCB certificate for e-waste component',
    ],
    tags: ['Warehouse', 'Bulk Clearance', 'ESG Docs', 'Fast Execution'],
  },
  {
    id: 2,
    category: 'Plant Dismantling',
    title: 'Tier-1 Automotive Plant Shutdown — Zero-Incident Dismantling',
    client: 'Leading Auto Ancillary Manufacturer (Confidential)',
    location: 'Pune, Maharashtra',
    duration: '21 Days',
    value: '₹8.5 Crore',
    volume: '8,200 MT',
    icon: '🏭',
    color: '#0066ff',
    challenge: 'Tier-1 auto ancillary plant closing after 25 years of operation. 500+ machines, 3 stamping lines, 2 painting lines, complete electrical infrastructure, 120,000 sq ft of structural steel. 100+ year-old workers on active notice. Zero tolerance for safety incidents.',
    solution: 'NK Traders deployed certified dismantling engineers and 60-person specialized teams. Sequential shutdown plan starting from non-structural elements. HSE manager on-site full-time. 23 machines identified as refurbishable and sold to secondary buyers at premium.',
    results: [
      'Zero safety incidents across 21-day project',
      '8,200 MT material recovered and processed',
      '23 machines resold as refurbished equipment',
      '18% above client\'s initial value estimate',
      'Full pollution board compliance documentation',
      'Plant handed over clean as per lease terms',
    ],
    tags: ['Plant Dismantling', 'Automotive', 'Asset Recovery', 'Zero Incidents'],
  },
  {
    id: 3,
    category: 'E-Waste Procurement',
    title: 'FMCG Major — Nationwide E-Waste Collection Drive',
    client: 'Top-5 FMCG Company (Confidential)',
    location: 'Delhi, Mumbai, Bengaluru, Chennai, Hyderabad',
    duration: '30 Days',
    value: '₹65 Lakh',
    volume: '12.8 MT',
    icon: '💻',
    color: '#dc2626',
    challenge: 'FMCG major with 15 corporate offices across India needed CPCB-compliant disposal of 5 years of accumulated IT equipment: servers, workstations, laptops, UPS batteries, networking equipment. Data security was a critical non-negotiable requirement.',
    solution: 'NK Traders coordinated simultaneous collection from all 15 locations using our certified e-waste partner network. On-site data destruction with witnessed certificate generation. Consolidated CPCB certificates issued for each company entity.',
    results: [
      '12.8 MT e-waste responsibly recycled across 5 cities',
      'CPCB certificates issued for all 15 office locations',
      'Data destruction certificates with serial-level logging',
      'Zero compliance risk for the company\'s ESG audit',
      'All brand-sensitive devices physically destroyed on-site',
      'Full documentation within 48 hours of collection',
    ],
    tags: ['E-Waste', 'CPCB', 'Data Destruction', 'FMCG'],
  },
  {
    id: 4,
    category: 'Factory Scrap',
    title: 'Textile Mill Annual Scrap Disposal — Ongoing Partnership',
    client: 'Integrated Textile Mill, Ahmedabad',
    location: 'Ahmedabad, Gujarat',
    duration: 'Ongoing (3 years)',
    value: '₹45 L/month',
    volume: '380 MT/month',
    icon: '🧵',
    color: '#d97706',
    challenge: 'Large integrated textile mill with monthly scrap generation of 380+ MT across spinning, weaving, and garment divisions. Previous dealer was underpricing aluminium bobbins and causing delays in payment, impacting cash flow.',
    solution: 'NK Traders conducted full material audit across all production divisions. Reclassified 12 scrap categories that were being undervalued. Established weekly scheduled pickup cadence. Dedicated account manager assigned.',
    results: [
      'Revenue from scrap increased by 34% vs. previous dealer',
      '380 MT processed monthly on fixed pickup schedule',
      'Payments received within 24 hours every month, 36 months straight',
      'Zero storage space used — full just-in-time collection',
      'Quarterly price revision meetings ensure market-rate pricing',
    ],
    tags: ['Textile', 'Long-term Contract', 'Monthly Pickup', 'Reclassification'],
  },
  {
    id: 5,
    category: 'Asset Recovery',
    title: 'Engineering Company — Surplus Machinery Auction & Direct Sale',
    client: 'Mid-Size Engineering Company, Noida',
    location: 'Noida, Uttar Pradesh',
    duration: '45 Days',
    value: '₹1.2 Crore',
    volume: '94 machines',
    icon: '⚙️',
    color: '#059669',
    challenge: 'Engineering company downsizing operations had 94 machines of varying age and condition that they believed were worth only scrap value. Mix of CNC machines, conventional lathes, milling machines, hydraulic presses, and testing equipment.',
    solution: 'NK Traders asset recovery team conducted individual machine valuation. Identified 31 machines with refurbishment potential. Connected client to our secondary machinery buyer network. Remaining 63 machines sold at premium scrap rates.',
    results: [
      '31 machines sold as refurbished equipment at 4-8x scrap value',
      '63 machines sold at top-of-market scrap rates',
      'Total recovery: ₹1.2 Crore vs. client\'s estimated ₹38 Lakh',
      '3.2x more value recovered than client expected',
      'Project completed in 45 days including all transactions',
    ],
    tags: ['Asset Recovery', 'Machinery', 'Refurbishment', 'Value Maximization'],
  },
  {
    id: 6,
    category: 'Copper Scrap',
    title: 'Power Distribution Company — High-Volume Copper Cable Recovery',
    client: 'State Power Distribution Company',
    location: 'Delhi NCR',
    duration: '60 Days',
    value: '₹3.4 Crore',
    volume: '58 MT copper',
    icon: '⚡',
    color: '#CFB53B',
    challenge: 'State power distributor replacing 800+ km of aging HT and LT cables across Delhi NCR. Old cable scrap contained copper content ranging from 45-72% purity. Needed compliant buyer with capability to handle large volumes over 60 days.',
    solution: 'NK Traders assigned dedicated logistics team with 6 vehicles on rotating schedule. Our lab-tested each cable batch for actual copper content. Pricing revised on LME weekly basis with full transparency. Full GST compliance maintained for government entity requirements.',
    results: [
      '58 MT of copper recovered from 800+ km of cable',
      'Purity-based pricing — client paid per actual copper content',
      'Weekly LME-linked price revision for full market alignment',
      '₹3.4 Crore received with full GST invoicing for audit compliance',
      'Project completed 8 days ahead of 60-day timeline',
    ],
    tags: ['Copper Cable', 'Government', 'LME Pricing', 'High Volume'],
  },
]

const categories = ['All', 'Warehouse Scrap', 'Plant Dismantling', 'E-Waste Procurement', 'Factory Scrap', 'Asset Recovery', 'Copper Scrap']

export default function CaseStudiesPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? caseStudies : caseStudies.filter(c => c.category === active)

  return (
    <>
      <Helmet>
        <title>Case Studies | NK Traders Industrial Scrap Projects India</title>
        <meta name="description" content="Real case studies from NK Traders — warehouse clearance ₹2.8Cr, plant dismantling ₹8.5Cr, e-waste collection, asset recovery. Proven results for India's leading industrial companies." />
        <link rel="canonical" href="https://nktraders.in/case-studies" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #020b18 0%, #071428 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-6 inline-flex">Case Studies</span>
            <h1 className="section-title text-white mb-5">
              Real Projects.
              <span className="text-gradient-blue"> Exceptional Results.</span>
            </h1>
            <p className="text-steel-400 max-w-2xl mx-auto text-lg">
              Numbers tell the story. See how NK Traders delivered above-expectation value for India's leading industrial companies across 6 sectors.
            </p>
          </motion.div>

          {/* Key numbers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[['₹16+ Crore', 'Value Recovered (These 6 Projects)'], ['23,000+ MT', 'Material Processed'], ['100%', 'On-Time Delivery'], ['0', 'Safety Incidents']].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="text-3xl font-display font-black text-gradient-blue mb-1">{v}</div>
                <div className="text-steel-400 text-sm">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: active === cat ? '#0066ff' : 'rgba(255,255,255,0.04)',
                  color: active === cat ? '#fff' : '#a8b8cc',
                  border: `1px solid ${active === cat ? '#0066ff' : 'rgba(255,255,255,0.1)'}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Case Study Cards */}
          <div className="space-y-10">
            {filtered.map((cs, i) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Top accent bar */}
                <div className="h-1" style={{ background: `linear-gradient(90deg, ${cs.color}, ${cs.color}66)` }} />

                <div className="p-8 md:p-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                    <div className="text-5xl shrink-0">{cs.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{ background: cs.color + '20', color: cs.color, border: `1px solid ${cs.color}35` }}>
                          {cs.category}
                        </span>
                      </div>
                      <h2 className="font-display font-bold text-white text-2xl md:text-3xl mb-3 leading-tight">{cs.title}</h2>
                      <div className="flex flex-wrap gap-5 text-sm text-steel-400">
                        <span className="flex items-center gap-1.5"><MapPin size={13} className="text-electric-400" /> {cs.location}</span>
                        <span className="flex items-center gap-1.5"><Clock size={13} className="text-electric-400" /> {cs.duration}</span>
                        <span className="font-semibold text-white">💰 {cs.value}</span>
                        <span className="text-steel-400">📦 {cs.volume}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {/* Challenge */}
                    <div className="rounded-xl p-5"
                      style={{ background: 'rgba(220,38,38,0.06)', border: '1px solid rgba(220,38,38,0.15)' }}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold text-white"
                          style={{ background: 'rgba(220,38,38,0.3)' }}>!</div>
                        <span className="text-xs font-bold uppercase tracking-widest text-red-400">Challenge</span>
                      </div>
                      <p className="text-steel-400 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="rounded-xl p-5"
                      style={{ background: `${cs.color}08`, border: `1px solid ${cs.color}20` }}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold text-white"
                          style={{ background: cs.color + '40' }}>→</div>
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: cs.color }}>Our Approach</span>
                      </div>
                      <p className="text-steel-400 text-sm leading-relaxed">{cs.solution}</p>
                    </div>

                    {/* Results */}
                    <div className="rounded-xl p-5"
                      style={{ background: 'rgba(5,150,105,0.06)', border: '1px solid rgba(5,150,105,0.2)' }}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold text-white"
                          style={{ background: 'rgba(5,150,105,0.3)' }}>✓</div>
                        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Results</span>
                      </div>
                      <ul className="space-y-2">
                        {cs.results.slice(0, 4).map((r, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <CheckCircle size={12} className="text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-steel-300 text-xs leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tags + CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-full text-xs text-steel-400"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/${COMPANY.whatsapp}?text=Hello NK Traders, I want to discuss a similar ${cs.category} project.`}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-all hover:gap-3"
                      style={{ color: cs.color }}
                    >
                      Discuss Similar Project <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(0,102,255,0.12), rgba(0,198,255,0.04))', border: '1px solid rgba(0,102,255,0.2)' }}
          >
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Ready to Become Our Next Success Story?</h2>
              <p className="text-steel-400 max-w-xl mx-auto mb-8 text-lg">
                Whether it's a factory clearance or a 500-machine plant dismantling — we deliver maximum value, every time.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={`tel:${COMPANY.phone}`} className="btn-primary">📞 Call: {COMPANY.phone}</a>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?text=I want to discuss a scrap project with NK Traders`}
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
