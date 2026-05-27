import { motion } from 'framer-motion'
import FloatingGradient from './FloatingGradient'
import AnimatedCounter from './AnimatedCounter'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportConfig } from '../animations/variants'
import { stats, trustBadges } from '../data/siteData'

export default function Trust() {
  return (
    <section id="about" className="relative section-padding overflow-hidden bg-cred-dark">
      <FloatingGradient variant="purple" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Stats row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-cred-border mb-24 md:mb-32 rounded-2xl overflow-hidden"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="bg-cred-dark p-8 md:p-10 flex flex-col items-center text-center"
            >
              <span className="font-display font-black text-cred-white mb-1 leading-none"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
              </span>
              <span className="text-sm text-cred-gray font-body tracking-wider uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 md:mb-32">
          {/* Left: text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <span className="inline-block text-xs font-mono text-cred-blue tracking-[0.3em] uppercase mb-6">
              About CRED
            </span>
            <h2 className="font-display font-black text-cred-white leading-none tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Not everyone<br />
              <span className="gradient-text">gets in.</span>
            </h2>
            <p className="text-cred-gray font-body font-light text-lg leading-relaxed mb-8">
              CRED is built for people who have earned the right to premium financial privileges.
              With a credit score above 750, you unlock a world that doesn't exist for everyone.
            </p>
            <p className="text-cred-gray font-body font-light text-lg leading-relaxed mb-10">
              We believe responsible behavior should be rewarded — not ignored. Every bill you pay
              earns you CRED coins. Every coin unlocks something extraordinary.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {['AM', 'PS', 'RN', 'SK'].map((initials, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-cred-dark flex items-center justify-center text-xs font-display font-bold
                    ${['bg-cred-blue', 'bg-cred-purple', 'bg-cred-cyan', 'bg-amber-500'][i]} text-white`}>
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-cred-white font-display font-bold text-sm">12M+ members</p>
                <p className="text-cred-gray text-xs font-body">already living the CRED life</p>
              </div>
            </div>
          </motion.div>

          {/* Right: visual card stack */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative h-96 md:h-[480px]"
          >
            {/* Glow */}
            <div className="absolute inset-0 blur-3xl opacity-20 bg-cred-purple rounded-full" />

            {/* Stacked cards */}
            {[
              { rotate: -8, y: 20, delay: 0, bg: 'bg-cred-card', label: 'HDFC Regalia', number: '**** **** **** 4721', limit: '₹5,00,000' },
              { rotate: -3, y: 10, delay: 0.1, bg: 'bg-gradient-to-br from-cred-blue/30 to-cred-purple/20', label: 'ICICI Sapphiro', number: '**** **** **** 8834', limit: '₹8,00,000' },
              { rotate: 2, y: 0, delay: 0.2, bg: 'bg-gradient-to-br from-cred-card to-cred-muted', label: 'Axis Magnus', number: '**** **** **** 2209', limit: '₹12,00,000' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: card.y, rotate: card.rotate }}
                viewport={viewportConfig}
                transition={{ delay: 0.3 + card.delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: card.y - 8, rotate: 0, zIndex: 10 }}
                className={`absolute left-0 right-0 mx-auto md:left-8 md:right-auto w-72 md:w-80 rounded-2xl p-6 ${card.bg} border border-cred-border cursor-pointer transition-shadow duration-300`}
                style={{
                  top: `${i * 60}px`,
                  zIndex: i,
                  boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                }}
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-xs font-mono text-cred-gray tracking-widest uppercase">{card.label}</span>
                  <div className="flex gap-1">
                    <div className="w-6 h-6 rounded-full bg-yellow-500 opacity-80" />
                    <div className="w-6 h-6 rounded-full bg-orange-500 opacity-80 -ml-3" />
                  </div>
                </div>
                <p className="font-mono text-sm text-cred-silver mb-1 tracking-widest">{card.number}</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-cred-gray font-body">Credit Limit</p>
                    <p className="font-display font-bold text-cred-white">{card.limit}</p>
                  </div>
                  <div className="w-8 h-6 rounded bg-cred-blue/20 border border-cred-blue/30 flex items-center justify-center">
                    <span className="text-xs text-cred-blue font-mono">VISA</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust badges marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          className="border-t border-b border-cred-border/30 py-6 overflow-hidden"
        >
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...trustBadges, ...trustBadges].map((badge, i) => (
              <span key={i} className="text-xs font-mono text-cred-muted tracking-[0.3em] uppercase flex-shrink-0">
                {badge}
                <span className="ml-8 text-cred-border">•</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
