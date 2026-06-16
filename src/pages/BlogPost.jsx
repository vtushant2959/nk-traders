import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Tag, Calendar } from 'lucide-react'
import { BLOG_POSTS, COMPANY } from '../data/siteData'
import LeadForm from '../components/home/LeadForm'

export default function BlogPost() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="text-6xl mb-6">📄</div>
        <h1 className="text-3xl font-display font-bold text-white mb-4">Article Not Found</h1>
        <p className="text-steel-400 mb-8">This article may have moved or been removed.</p>
        <Link to="/blog" className="btn-primary">← Back to Blog</Link>
      </div>
    )
  }

  const articleContent = {
    'copper-scrap-prices-india-2025': `
      <p>Copper is one of India's most valuable recycled metals, with prices closely tracking the London Metal Exchange (LME). In 2025, copper scrap prices in India range from ₹560–640/kg depending on grade, purity, and market conditions.</p>
      <h2>Copper Scrap Grades & Prices</h2>
      <ul>
        <li><strong>Birch/Cliff (99% purity):</strong> ₹610–640/kg</li>
        <li><strong>Heavy copper (97–98%):</strong> ₹590–620/kg</li>
        <li><strong>Copper radiators:</strong> ₹480–520/kg</li>
        <li><strong>Copper wire (insulated):</strong> ₹380–440/kg</li>
        <li><strong>Mixed copper scrap:</strong> ₹350–420/kg</li>
      </ul>
      <h2>Factors Affecting Copper Scrap Prices</h2>
      <p>LME copper prices, USD/INR exchange rate, domestic demand from cable manufacturers and foundries, grade purity, and quantity all affect your final price. NK Traders offers purity-tested pricing — you're never undervalued due to incorrect grade classification.</p>
      <h2>How to Get the Best Copper Scrap Price</h2>
      <p>Sort your copper by type before selling. Mixed loads fetch lower prices than separated grades. Our metallurgists assess each lot and provide accurate grade-based pricing.</p>
    `,
    'warehouse-clearance-guide': `
      <p>Clearing a warehouse is a complex operation. Whether you're closing a facility, downsizing, or relocating, the key to maximizing recovery value is proper planning and finding the right buyer.</p>
      <h2>Step 1: Inventory Assessment</h2>
      <p>Before contacting any scrap buyer, create a rough inventory of what you have: racking systems, machinery, electrical equipment, packaging material, and general scrap. This helps get accurate quotes.</p>
      <h2>Step 2: Choosing the Right Buyer</h2>
      <p>Look for buyers who can handle mixed loads, have logistics infrastructure, and can provide GST documentation. Avoid buyers who cherry-pick high-value items and leave the rest.</p>
      <h2>Step 3: Documentation</h2>
      <p>Ensure you receive: GST invoice, weighbridge slips for each load, material receipt, and for e-waste — CPCB certificates. NK Traders provides all documentation digitally.</p>
      <h2>Step 4: Timeline Planning</h2>
      <p>Large warehouses (50,000+ sq ft) typically require 3–7 days for clearance. Plan around your facility handover date. NK Traders has cleared facilities up to 180,000 sq ft in 5 days.</p>
    `,
    'plant-dismantling-india': `
      <p>Industrial plant dismantling in India is heavily regulated. Understanding the requirements before starting saves time, money, and legal risk.</p>
      <h2>Key Regulatory Requirements</h2>
      <ul>
        <li><strong>Pollution Control Board (PCB) NOC:</strong> Required for plants with hazardous processes</li>
        <li><strong>CPCB Authorization:</strong> Mandatory for e-waste and hazardous material handling</li>
        <li><strong>Labour Department permits:</strong> For large dismantling projects</li>
        <li><strong>Electrical Authority clearance:</strong> For HT/LT electrical infrastructure</li>
      </ul>
      <h2>Safety Standards</h2>
      <p>All dismantling work must comply with Factories Act 1948, Environment Protection Act 1986, and relevant IS standards. NK Traders' certified teams handle all safety compliance.</p>
      <h2>Asset Recovery During Dismantling</h2>
      <p>The goal isn't just to remove scrap — it's to maximize asset recovery. Machinery in working condition should be refurbished and resold rather than scrapped. NK Traders evaluates each piece of equipment individually.</p>
    `,
    'scrap-metal-circular-economy': `
      <p>India's scrap metal industry processes over 30 million MT of material annually, contributing significantly to the country's circular economy and sustainability goals.</p>
      <h2>Environmental Impact</h2>
      <p>Recycling one tonne of steel saves 1.1 tonnes of iron ore, 630 kg of coking coal, and 55 kg of limestone. Copper recycling uses 85% less energy than primary production.</p>
      <h2>India's Recycling Opportunity</h2>
      <p>India has set a target of 50% recycled content in steel production by 2030. This creates massive demand for organized scrap aggregators like NK Traders who can supply consistent quality material to mills.</p>
      <h2>ESG & Reporting</h2>
      <p>For companies with ESG mandates, proper scrap disposal documentation is critical. NK Traders provides complete sustainability reporting support — quantity recycled, carbon saved, and waste diverted from landfill.</p>
    `,
  }

  const content = articleContent[slug] || `<p>${post.excerpt}</p>`

  return (
    <>
      <Helmet>
        <title>{post.title} | NK Traders Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://nktraders.in/blog/${slug}`} />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 relative" style={{ background: 'linear-gradient(135deg, #020b18, #071428)' }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-custom relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-steel-400 hover:text-white transition-colors mb-8">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-electric-400"
                style={{ background: 'rgba(0,102,255,0.15)', border: '1px solid rgba(0,102,255,0.25)' }}>
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-steel-400"><Calendar size={12} /> {post.date}</span>
              <span className="flex items-center gap-1.5 text-xs text-steel-400"><Clock size={12} /> {post.readTime} read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-black text-white mb-6 leading-tight">{post.title}</h1>
            <p className="text-steel-400 text-lg leading-relaxed">{post.excerpt}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div
                className="prose-article text-steel-400 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: content }}
                style={{ lineHeight: '1.8' }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-8"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                {post.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-steel-400"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Quick Quote CTA */}
              <div className="rounded-2xl p-6"
                style={{ background: 'linear-gradient(135deg, rgba(0,102,255,0.15), rgba(0,102,255,0.05))', border: '1px solid rgba(0,102,255,0.25)' }}>
                <h3 className="font-display font-bold text-white mb-2">Get a Free Quote</h3>
                <p className="text-steel-400 text-sm mb-4">Talk to our experts about your scrap disposal needs.</p>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?text=I read your blog and need a scrap quote`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-sm"
                >
                  WhatsApp Us
                </a>
              </div>

              {/* More Articles */}
              <div>
                <h3 className="font-display font-bold text-white mb-4 text-sm">More Articles</h3>
                <div className="space-y-3">
                  {BLOG_POSTS.filter(p => p.slug !== slug).map(p => (
                    <Link
                      key={p.slug}
                      to={`/blog/${p.slug}`}
                      className="block p-4 rounded-xl transition-all duration-200 hover:bg-white/5"
                      style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      <div className="text-xs text-electric-400 mb-1">{p.category}</div>
                      <div className="text-white text-sm font-medium leading-snug">{p.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <style>{`
        .prose-article h2 { font-family: 'Syne', sans-serif; font-size: 1.375rem; font-weight: 700; color: white; margin-top: 2rem; margin-bottom: 0.75rem; }
        .prose-article ul { list-style: disc; padding-left: 1.5rem; space-y: 0.5rem; }
        .prose-article li { color: #a8b8cc; margin-bottom: 0.5rem; }
        .prose-article strong { color: #e2e8f0; }
        .prose-article p { color: #a8b8cc; margin-bottom: 1rem; }
      `}</style>

      <LeadForm />
    </>
  )
}
