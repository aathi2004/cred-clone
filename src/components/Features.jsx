import { motion } from 'framer-motion'
import { features } from '../data/siteData'
import NeoPopCard from './NeoPopCard'
import FloatingGradient from './FloatingGradient'
import { fadeUp, staggerContainer, viewportConfig } from '../animations/variants'

const colorMap = {
  blue: {
    glow: 'rgba(59,124,255,0.15)',
    border: 'rgba(59,124,255,0.25)',
    tag: 'bg-cred-blue/10 text-cred-blue border-cred-blue/20',
    icon: 'bg-cred-blue/10',
    shadow: '#1a4fff',
  },
  purple: {
    glow: 'rgba(139,92,246,0.15)',
    border: 'rgba(139,92,246,0.25)',
    tag: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    icon: 'bg-purple-500/10',
    shadow: '#5b21b6',
  },
  gold: {
    glow: 'rgba(245,197,24,0.12)',
    border: 'rgba(245,197,24,0.2)',
    tag: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    icon: 'bg-yellow-500/10',
    shadow: '#92400e',
  },
  cyan: {
    glow: 'rgba(6,214,214,0.12)',
    border: 'rgba(6,214,214,0.2)',
    tag: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    icon: 'bg-cyan-500/10',
    shadow: '#0e7490',
  },
}

export default function Features() {
  return (
    <section id="features" className="relative section-padding overflow-hidden">
      <FloatingGradient variant="mixed" />
      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-xs font-mono text-cred-blue tracking-[0.3em] uppercase mb-5"
          >
            What You Get
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display font-black text-cred-white leading-none tracking-tight text-balance"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            Built for the
            <span className="gradient-text"> privileged few.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-cred-gray font-body font-light text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Every feature on CRED is designed to make your financial life feel like
            a first-class experience — not a chore.
          </motion.p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => {
            const colors = colorMap[feature.color]
            return (
              <motion.div key={feature.id} variants={fadeUp}>
                <NeoPopCard color={feature.color} depth={4}>
                  <div
                    className="group relative rounded-2xl p-7 cursor-pointer transition-all duration-300 overflow-hidden"
                    style={{
                      background: 'rgba(17,17,22,0.8)',
                      border: `1px solid ${colors.border}`,
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${colors.glow} 0%, transparent 70%)`,
                      }}
                    />

                    {/* Top row */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center text-2xl`}
                      >
                        {feature.icon}
                      </div>
                      <span className={`text-xs font-mono tracking-widest px-3 py-1.5 rounded-lg border ${colors.tag}`}>
                        {feature.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-bold text-cred-white text-xl mb-3 group-hover:translate-y-px transition-transform">
                      {feature.title}
                    </h3>
                    <p className="text-cred-gray font-body font-light text-sm leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Arrow */}
                    <motion.a
                      href="#"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-mono tracking-wider"
                      style={{ color: feature.color === 'blue' ? '#3b7cff' : feature.color === 'purple' ? '#8b5cf6' : feature.color === 'gold' ? '#f5c518' : '#06d6d6' }}
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'tween', duration: 0.28 }}
                    >
                      <span>LEARN MORE</span>
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="shrink-0">
                        <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.a>
                  </div>
                </NeoPopCard>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-cred-gray font-body mb-6">
            All features unlock instantly when you join. No hidden charges, ever.
          </p>
          <motion.a
            href="#"
            className="inline-flex flex-col sm:flex-row items-center gap-2 text-sm font-mono text-cred-blue tracking-wider border-b border-cred-blue/30 pb-0.5 hover:border-cred-blue transition-colors"
            whileHover={{ x: 5 }}
            transition={{ type: 'tween', duration: 0.28 }}
          >
            <span>Explore all features</span>
            <span aria-hidden="true">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
