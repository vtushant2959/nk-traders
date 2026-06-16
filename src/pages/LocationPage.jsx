import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import LeadForm from '../components/home/LeadForm'
import { SERVICES, COMPANY } from '../data/siteData'

const cityData = {
  delhi: { state: 'Delhi', zones: ['Narela', 'Okhla', 'Wazirpur', 'Mayapuri', 'Shahdara'], population: '32 million', industries: 'Manufacturing, Automotive, Pharma, Textiles' },
  gurgaon: { state: 'Haryana', zones: ['Sector 29', 'IMT Manesar', 'Udyog Vihar', 'Sector 58', 'Sohna Road'], population: '1.5 million', industries: 'Automotive, IT, FMCG, Logistics' },
  noida: { state: 'Uttar Pradesh', zones: ['Sector 63', 'Sector 80', 'Sector 58', 'Greater Noida', 'Dadri Road'], population: '2 million', industries: 'IT, Manufacturing, Electronics, FMCG' },
  faridabad: { state: 'Haryana', zones: ['NIT', 'Ballabhgarh', 'Sector 57', 'Mathura Road', 'Palwal Road'], population: '1.8 million', industries: 'Steel, Automotive, Rubber, Engineering' },
  ghaziabad: { state: 'Uttar Pradesh', zones: ['Modinagar', 'Hapur Road', 'NH58', 'Tronica City', 'Indirapuram'], population: '2.4 million', industries: 'Steel, Foundry, Heavy Engineering' },
  mumbai: { state: 'Maharashtra', zones: ['Bhiwandi', 'Turbhe', 'Taloja', 'Navi Mumbai', 'Thane'], population: '21 million', industries: 'Finance, Pharma, Textiles, Shipping' },
  pune: { state: 'Maharashtra', zones: ['MIDC Pimpri', 'Ranjangaon', 'Chakan', 'Bhosari', 'Hadapsar'], population: '7 million', industries: 'Automotive, IT, Engineering, Defence' },
  ahmedabad: { state: 'Gujarat', zones: ['Naroda', 'Vatva', 'Odhav', 'Sanand', 'Changodar'], population: '8 million', industries: 'Chemicals, Pharma, Textiles, Steel' },
  jaipur: { state: 'Rajasthan', zones: ['Sitapura', 'Vishwakarma', 'Malviya Nagar', 'Bagru', 'Mansarovar'], population: '3.5 million', industries: 'Gems, Textiles, Tourism, Engineering' },
  chennai: { state: 'Tamil Nadu', zones: ['Ambattur', 'Sriperumbudur', 'Madhavaram', 'Padi', 'Manali'], population: '11 million', industries: 'Automotive, Electronics, Shipping, IT' },
  hyderabad: { state: 'Telangana', zones: ['Patancheru', 'Jeedimetla', 'Pashamylaram', 'Uppal', 'Bollaram'], population: '10 million', industries: 'Pharma, IT, Aerospace, Biotech' },
  bangalore: { state: 'Karnataka', zones: ['Peenya', 'Bommasandra', 'Electronic City', 'Whitefield', 'Yeshwanthpur'], population: '13 million', industries: 'IT, Aerospace, Manufacturing, Biotech' },
  kolkata: { state: 'West Bengal', zones: ['Durgapur', 'Howrah', 'Haldia', 'Uttarpara', 'Garden Reach'], population: '15 million', industries: 'Steel, Jute, Shipping, Chemicals' },
}

export default function LocationPage() {
  const { city } = useParams()
  const data = cityData[city] || { state: 'India', zones: [], population: 'Large', industries: 'All sectors' }
  const cityName = city ? city.charAt(0).toUpperCase() + city.slice(1) : 'India'

  return (
    <>
      <Helmet>
        <title>Scrap Buyers in {cityName} | NK Traders | Best Metal Scrap Rates</title>
        <meta name="description" content={`NK Traders is the leading industrial scrap buyer in ${cityName}, ${data.state}. We buy copper scrap, aluminium scrap, factory scrap & warehouse scrap in ${cityName} with same-day pickup and fast payments.`} />
        <link rel="canonical" href={`https://nktraders.in/locations/${city}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: `NK Traders ${cityName}`,
          description: `Industrial scrap buyers in ${cityName}`,
          address: { '@type': 'PostalAddress', addressLocality: cityName, addressRegion: data.state, addressCountry: 'IN' },
          telephone: COMPANY.phone,
          url: `https://nktraders.in/locations/${city}`,
          areaServed: cityName,
        })}</script>
      </Helmet>

      <section className="pt-32 pb-20 relative" style={{ background: 'linear-gradient(135deg, #020b18, #071428)' }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="section-label mb-5 inline-flex">Scrap Buyers in {cityName}</span>
            <h1 className="section-title text-white mb-5">
              #1 Industrial Scrap Buyers
              <br />
              <span className="text-gradient-blue">in {cityName}, {data.state}</span>
            </h1>
            <p className="text-steel-400 text-lg leading-relaxed mb-8">
              NK Traders is {cityName}'s most trusted scrap metal buying company. We buy all types of industrial scrap, copper scrap, aluminium scrap, factory scrap, and warehouse scrap across {cityName} and {data.state}. Same-day inspection, competitive rates, and 24-hour payment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                📞 Call for {cityName} Pickup
              </a>
              <a href={`https://wa.me/${COMPANY.whatsapp}?text=I need scrap pickup in ${cityName}`}
                target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* City-specific content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                Scrap Services in {cityName}
              </h2>
              <div className="space-y-3">
                {SERVICES.slice(0, 6).map(s => (
                  <div key={s.id} className="flex items-center gap-3 p-4 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <div className="text-white font-medium text-sm">{s.title}</div>
                      <div className="text-electric-400 text-xs">Available in {cityName}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                {cityName} Coverage Areas
              </h2>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {data.zones.map(zone => (
                  <div key={zone} className="flex items-center gap-2 text-sm"
                    style={{ color: '#a8b8cc' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-400 shrink-0" />
                    {zone}
                  </div>
                ))}
              </div>

              <div className="card-glass rounded-2xl p-6">
                <h3 className="font-display font-bold text-white mb-4">Key Industries in {cityName}</h3>
                <p className="text-steel-400 text-sm mb-4">{data.industries}</p>
                <div className="text-sm text-steel-400">
                  <strong className="text-white">Population:</strong> {data.population}<br />
                  <strong className="text-white">State:</strong> {data.state}
                </div>
              </div>
            </div>
          </div>

          {/* Local SEO content */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              Why NK Traders is the Best Scrap Buyer in {cityName}?
            </h2>
            <div className="text-steel-400 leading-relaxed space-y-4">
              <p>NK Traders has been buying industrial and commercial scrap in {cityName} for over 15 years. We have established relationships with hundreds of factories, warehouses, and industrial parks across {cityName} and {data.state}. Our team is based locally, ensuring fast response times and same-day site inspections.</p>
              <p>We buy copper scrap, aluminium scrap, brass scrap, iron scrap, steel scrap, machinery scrap, and e-waste in {cityName}. Our weighbridge facilities and transparent grading process ensure you always get the maximum value for your scrap material.</p>
              <p>With 24-hour payment guarantee and complete GST documentation, NK Traders is the preferred choice for {cityName}'s leading manufacturers, warehouses, and corporate companies. Contact us today for a free scrap valuation in {cityName}.</p>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
    </>
  )
}
