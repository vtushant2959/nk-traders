import { Helmet } from 'react-helmet-async'
import ServicesSection from '../components/home/Services'
import ScrapCategories from '../components/home/ScrapCategories'
import ProcessTimeline from '../components/home/ProcessTimeline'
import LeadForm from '../components/home/LeadForm'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Scrap Metal Trading Services | NK Traders India</title>
        <meta name="description" content="NK Traders offers complete scrap metal trading services — industrial scrap buying, copper scrap, aluminium scrap, plant dismantling, e-waste procurement. Pan India coverage." />
        <link rel="canonical" href="https://nktraders.in/services" />
      </Helmet>

      <section className="pt-32 pb-16 relative" style={{ background: 'linear-gradient(135deg, #020b18, #071428)' }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-5 inline-flex">Our Services</span>
            <h1 className="section-title text-white mb-5">
              Complete Scrap &
              <span className="text-gradient-blue"> Metal Solutions</span>
            </h1>
            <p className="text-steel-400 max-w-2xl mx-auto">
              End-to-end industrial scrap management, metal trading, plant dismantling, and asset recovery services across India.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesSection />
      <ScrapCategories />
      <ProcessTimeline />
      <LeadForm />
    </>
  )
}
