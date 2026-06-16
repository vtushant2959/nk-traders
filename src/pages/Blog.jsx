import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight, Tag, TrendingUp } from 'lucide-react'

const posts = [
  {
    slug: 'copper-scrap-prices-india-2025',
    title: "Copper Scrap Prices in India 2025: Complete Buyer's Guide",
    category: 'Metal Scrap',
    date: 'June 10, 2025',
    readTime: '6 min',
    excerpt: 'Comprehensive guide to copper scrap pricing in India. Understand LME rate linkage, grade classification (Birch, Cliff, Barley, Candy), and how to negotiate the best price for your copper scrap disposal.',
    tags: ['Copper', 'Pricing', 'LME'],
    icon: '🔶',
    color: '#b87333',
  },
  {
    slug: 'warehouse-clearance-guide',
    title: 'Complete Warehouse Clearance Guide: Maximize Your Scrap Value',
    category: 'Warehouse Liquidation',
    date: 'May 28, 2025',
    readTime: '8 min',
    excerpt: 'Step-by-step guide to planning and executing a warehouse clearance. How to categorize materials, prepare for buyer inspection, handle documentation, and maximize scrap recovery value.',
    tags: ['Warehouse', 'Clearance', 'Planning'],
    icon: '🏪',
    color: '#7c3aed',
  },
  {
    slug: 'plant-dismantling-india',
    title: 'Industrial Plant Dismantling in India: Complete Regulatory Guide 2025',
    category: 'Factory Clearance',
    date: 'May 15, 2025',
    readTime: '10 min',
    excerpt: 'Everything plant managers need to know about regulatory compliance, pollution board NOCs, safety protocols, and best practices for industrial plant dismantling in India.',
    tags: ['Plant Dismantling', 'Compliance', 'Safety'],
    icon: '🏭',
    color: '#0066ff',
  },
  {
    slug: 'aluminium-scrap-grades',
    title: 'Aluminium Scrap Grades Explained: From UBC to Extrusions',
    category: 'Metal Scrap',
    date: 'April 30, 2025',
    readTime: '5 min',
    excerpt: 'A technical guide to aluminium scrap classification — taint tabor, EC wire, extrusions, UBC cans, foil, and castings. Know your grade to get the right price.',
    tags: ['Aluminium', 'Grades', 'Technical'],
    icon: '🔘',
    color: '#848789',
  },
  {
    slug: 'ewaste-cpcb-compliance',
    title: 'E-Waste Disposal for Companies: CPCB Compliance Made Simple',
    category: 'E-Waste',
    date: 'April 15, 2025',
    readTime: '7 min',
    excerpt: 'How Indian companies must legally handle e-waste under the E-Waste Management Rules 2022. Producer responsibility, authorized recyclers, certificates, and penalties explained.',
    tags: ['E-Waste', 'CPCB', 'Compliance'],
    icon: '💻',
    color: '#dc2626',
  },
  {
    slug: 'scrap-metal-circular-economy',
    title: "How Scrap Metal Trading Drives India's Circular Economy",
    category: 'Circular Economy',
    date: 'March 30, 2025',
    readTime: '7 min',
    excerpt: 'The critical role of organized scrap metal trading in reducing carbon emissions, conserving primary resources, and building sustainable industrial supply chains in India.',
    tags: ['Sustainability', 'ESG', 'Circular Economy'],
    icon: '🌱',
    color: '#059669',
  },
  {
    slug: 'lme-scrap-pricing',
    title: 'How LME Prices Affect Your Scrap Metal Valuation in India',
    category: 'Scrap Prices',
    date: 'March 15, 2025',
    readTime: '6 min',
    excerpt: 'Understanding how London Metal Exchange (LME) spot prices for copper, aluminium, and other metals directly influence the rates you receive from Indian scrap buyers.',
    tags: ['LME', 'Pricing', 'Markets'],
    icon: '📈',
    color: '#d97706',
  },
  {
    slug: 'brass-scrap-types',
    title: 'Brass Scrap Types & Current Prices: Yellow Brass, Red Brass & More',
    category: 'Metal Scrap',
    date: 'February 28, 2025',
    readTime: '5 min',
    excerpt: 'Complete guide to brass scrap classification. Learn the difference between yellow brass, red brass, semi-red brass, and high-brass, and how each grade is priced in the Indian market.',
    tags: ['Brass', 'Grades', 'Pricing'],
    icon: '🟡',
    color: '#CFB53B',
  },
]

const categories = ['All', 'Metal Scrap', 'Warehouse Liquidation', 'Factory Clearance', 'Circular Economy', 'Scrap Prices', 'E-Waste']

const trending = posts.slice(0, 3)

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Industry Blog | Metal Scrap Prices, News & Insights | NK Traders</title>
        <meta name="description" content="Expert insights on metal scrap prices, LME rates, industrial recycling, warehouse clearance, plant dismantling, and circular economy from NK Traders — India's leading scrap trading company." />
        <link rel="canonical" href="https://nktraders.in/blog" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #020b18 0%, #071428 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-6 inline-flex">
              <TrendingUp size={12} /> Industry Intelligence
            </span>
            <h1 className="section-title text-white mb-5">
              Metal Market
              <span className="text-gradient-blue"> Insights & News</span>
            </h1>
            <p className="text-steel-400 max-w-2xl mx-auto text-lg">
              Expert analysis, scrap price updates, regulatory guides, and industry news from India's most trusted scrap metal trading company.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Main content */}
            <div className="lg:col-span-3">
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 mb-10">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                    style={{
                      background: activeCategory === cat ? '#0066ff' : 'rgba(255,255,255,0.04)',
                      color: activeCategory === cat ? '#fff' : '#a8b8cc',
                      border: `1px solid ${activeCategory === cat ? '#0066ff' : 'rgba(255,255,255,0.1)'}`,
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((post, i) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="rounded-2xl overflow-hidden group"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    {/* Thumbnail */}
                    <div className="h-44 relative flex items-center justify-center overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${post.color}18, ${post.color}05)` }}>
                      <div className="absolute inset-0 grid-bg opacity-50" />
                      <span className="text-7xl opacity-25 relative z-0">{post.icon}</span>
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ background: post.color + '25', color: post.color, border: `1px solid ${post.color}40` }}>
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-steel-400">
                          <Clock size={10} /> {post.readTime}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-xs text-steel-400 mb-2">{post.date}</p>
                      <h2 className="font-display font-bold text-white mb-3 leading-snug group-hover:text-electric-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-steel-400 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2 flex-wrap">
                          {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="flex items-center gap-1 text-xs text-steel-400">
                              <Tag size={9} /> {tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-electric-400 hover:gap-2 transition-all"
                        >
                          Read <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-16 text-steel-400">No articles in this category yet. Check back soon.</div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending */}
              <div className="rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 className="font-display font-bold text-white mb-5 flex items-center gap-2">
                  <TrendingUp size={16} className="text-electric-400" /> Trending
                </h3>
                <div className="space-y-5">
                  {trending.map((post, i) => (
                    <Link key={post.slug} to={`/blog/${post.slug}`} className="flex gap-3 group">
                      <span className="text-xl shrink-0">{post.icon}</span>
                      <div>
                        <p className="text-white text-sm font-medium group-hover:text-electric-400 transition-colors leading-snug mb-1">
                          {post.title}
                        </p>
                        <p className="text-steel-400 text-xs">{post.readTime} read</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Quote CTA */}
              <div className="rounded-2xl p-6 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(0,102,255,0.15), rgba(0,102,255,0.05))', border: '1px solid rgba(0,102,255,0.25)' }}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative z-10">
                  <div className="text-3xl mb-3">💬</div>
                  <h3 className="font-display font-bold text-white mb-2">Get Scrap Price Today</h3>
                  <p className="text-steel-400 text-sm mb-5">Instant quote for copper, aluminium, brass, steel & more.</p>
                  <a
                    href="https://wa.me/919876543210?text=I want current scrap metal prices"
                    target="_blank" rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center text-sm !py-3"
                  >
                    WhatsApp for Price
                  </a>
                </div>
              </div>

              {/* Categories list */}
              <div className="rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 className="font-display font-bold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.filter(c => c !== 'All').map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className="w-full flex items-center justify-between text-sm text-steel-400 hover:text-white transition-colors py-1.5"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-500" />
                        {cat}
                      </span>
                      <span className="text-xs text-steel-400">
                        {posts.filter(p => p.category === cat).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
