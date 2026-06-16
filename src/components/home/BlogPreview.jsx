import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { BLOG_POSTS } from '../../data/siteData'

export default function BlogPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <span className="section-label mb-5 inline-flex">Industry Insights</span>
            <h2 className="section-title text-white">
              Latest from the
              <span className="text-gradient-blue"> Metal Market</span>
            </h2>
          </div>
          <Link to="/blog" className="btn-secondary shrink-0">
            View All Articles <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="card-glass rounded-2xl overflow-hidden group"
            >
              {/* Thumbnail */}
              <div className="h-44 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,11,24,0.8) 0%, rgba(2,11,24,0.1) 60%)' }} />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold text-electric-400"
                    style={{ background: 'rgba(0,102,255,0.25)', border: '1px solid rgba(0,102,255,0.4)', backdropFilter: 'blur(8px)' }}>
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-steel-400 mb-3">
                  <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-display font-bold text-white text-sm leading-snug mb-3 group-hover:text-electric-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-steel-400 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-electric-400 flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read Article <ArrowRight size={11} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
