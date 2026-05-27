import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { testimonials } from '../data/siteData'
import FloatingGradient from './FloatingGradient'
import { fadeUp, staggerContainer, viewportConfig } from '../animations/variants'

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i < rating ? '#f5c518' : 'none'} stroke={i < rating ? '#f5c518' : '#444'} strokeWidth="1">
          <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="glass-card rounded-2xl p-7 h-full flex flex-col group hover:border-cred-blue/20 transition-all duration-300"
      style={{ border: '1px solid rgba(255,255,255,0.06)', minHeight: 240 }}
    >
      {/* Quote icon */}
      <div className="text-4xl text-cred-blue/20 font-display font-black mb-4 leading-none">"</div>

      <p className="text-cred-silver font-body font-light text-sm leading-relaxed flex-1 mb-6">
        {testimonial.text}
      </p>

      <div className="mt-auto">
        <StarRating rating={testimonial.rating} />
        <div className="flex items-center gap-3 mt-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cred-blue/40 to-cred-purple/40 border border-cred-border flex items-center justify-center">
            <span className="text-xs font-display font-bold text-cred-white">{testimonial.avatar}</span>
          </div>
          <div>
            <p className="text-cred-white font-display font-semibold text-sm">{testimonial.name}</p>
            <p className="text-cred-gray text-xs font-body">{testimonial.role}</p>
          </div>
          <span className="ml-auto text-xs font-mono text-cred-muted">{testimonial.joined}</span>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative section-padding overflow-hidden bg-cred-dark">
      <FloatingGradient variant="blue" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-14 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs font-mono text-cred-blue tracking-[0.3em] uppercase mb-5"
            >
              Member Stories
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-display font-black text-cred-white leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              The CRED life,<br />
              <span className="gradient-text">from those living it.</span>
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="flex gap-8 md:flex-shrink-0">
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center mb-1">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="#f5c518"><path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5z"/></svg>
                <span className="font-display font-black text-cred-white text-2xl">4.8</span>
              </div>
              <p className="text-xs text-cred-gray font-mono tracking-wider">APP STORE</p>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center mb-1">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="#34d399"><path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5z"/></svg>
                <span className="font-display font-black text-cred-white text-2xl">4.7</span>
              </div>
              <p className="text-xs text-cred-gray font-mono tracking-wider">PLAY STORE</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
