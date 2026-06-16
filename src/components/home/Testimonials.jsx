import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../../data/siteData'

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020b18 0%, #071428 100%)' }}>

      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(0,102,255,0.06) 0%, transparent 70%)' }} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="section-label mb-5 inline-flex">Client Testimonials</span>
          <h2 className="section-title text-white mb-5">
            What Our Clients
            <span className="text-gradient-blue"> Say About Us</span>
          </h2>
          <p className="text-steel-400 max-w-xl mx-auto">
            500+ satisfied clients across India trust NK Traders for their scrap disposal needs. Here's what some of them say.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            loop={true}
            className="pb-12"
          >
            {TESTIMONIALS.map((t, i) => (
              <SwiperSlide key={t.name}>
                <div className="card-glass rounded-2xl p-7 h-full relative group">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-6 right-6 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(0,102,255,0.5), transparent)' }} />

                  <Quote className="text-electric-600 opacity-30 mb-4" size={36} />

                  <p className="text-steel-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>

                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white text-sm"
                      style={{ background: 'linear-gradient(135deg, #0066ff, #00c6ff)' }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-steel-400 text-xs">{t.role} — {t.company}</div>
                      <div className="text-electric-400 text-xs">{t.city}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .swiper-pagination-bullet { background: rgba(255,255,255,0.3) !important; }
        .swiper-pagination-bullet-active { background: #0066ff !important; }
      `}</style>
    </section>
  )
}
