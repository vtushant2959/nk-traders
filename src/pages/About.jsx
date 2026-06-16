import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, Award, Globe, Users, TrendingUp } from 'lucide-react'
import LeadForm from '../components/home/LeadForm'

const milestones = [
  { year: '2005', title: 'Founded', desc: 'NK Traders established in Delhi as a regional scrap dealer.' },
  { year: '2010', title: 'Pan India Expansion', desc: 'Operations expanded to 10 major Indian cities.' },
  { year: '2015', title: 'International Trade', desc: 'First export shipment to UAE. International trading division launched.' },
  { year: '2018', title: 'ISO Certification', desc: 'Achieved ISO 9001:2015 certification for quality management.' },
  { year: '2021', title: 'Plant Dismantling Division', desc: 'Launched specialized plant dismantling and asset recovery services.' },
  { year: '2025', title: '500+ Clients', desc: 'Reached milestone of 500+ industrial clients across 25+ Indian cities.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About NK Traders | India's Leading Scrap Metal Trading Company Since 2005</title>
        <meta name="description" content="Learn about NK Traders — India's trusted scrap and metal trading company since 2005. 18+ years experience, 500+ clients, pan India coverage, ISO certified." />
        <link rel="canonical" href="https://nktraders.in/about" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #020b18 0%, #071428 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-5 inline-flex">About Us</span>
            <h1 className="section-title text-white mb-6">
              18 Years of Industrial
              <span className="text-gradient-blue"> Excellence</span>
            </h1>
            <p className="text-steel-400 max-w-2xl mx-auto text-lg">
              From a small regional scrap dealer to India's most trusted industrial scrap and metal trading company — the NK Traders story is built on integrity, expertise, and commitment to our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: '🎯', title: 'Our Mission', desc: 'To be India\'s most trusted industrial scrap trading partner — delivering maximum value to clients while building a sustainable circular economy through responsible metal recycling.' },
              { icon: '🌱', title: 'Our Vision', desc: 'To become Asia\'s leading scrap metal trading company by 2030, processing 1 million MT annually and operating across 50+ countries with zero-waste commitment.' },
              { icon: '💎', title: 'Our Values', desc: 'Transparency in pricing. Speed in execution. Integrity in every transaction. We treat every client\'s scrap as an asset to be maximized, not a commodity to be minimized.' },
            ].map((item) => (
              <div key={item.title} className="card-glass rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-white text-xl mb-4">{item.title}</h3>
                <p className="text-steel-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="text-center mb-14">
            <span className="section-label mb-5 inline-flex">Our Journey</span>
            <h2 className="text-3xl font-display font-bold text-white">20 Years of Growth</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(180deg, transparent, rgba(0,102,255,0.4), transparent)' }} />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <div className="card-glass rounded-xl p-6 max-w-md ml-auto">
                      <div className="text-electric-400 font-bold text-sm mb-1">{m.year}</div>
                      <div className="font-display font-bold text-white text-lg mb-2">{m.title}</div>
                      <div className="text-steel-400 text-sm">{m.desc}</div>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 z-10"
                    style={{ background: 'linear-gradient(135deg, #0066ff, #00c6ff)' }}>
                    {i + 1}
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
    </>
  )
}
