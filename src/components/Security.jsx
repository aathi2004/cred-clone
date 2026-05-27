import { motion } from 'framer-motion'
import { securityFeatures } from '../data/siteData'
import FloatingGradient from './FloatingGradient'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportConfig } from '../animations/variants'

export default function Security() {
  return (
    <section id="security" className="relative section-padding overflow-hidden">
      <FloatingGradient variant="purple" />

      {/* Animated grid bg */}
      <div className="grid-bg absolute inset-0 opacity-40" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: visual */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative order-2 lg:order-1"
          >
            {/* Central shield */}
            <div className="relative flex items-center justify-center py-12">
              {/* Outer rings */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute rounded-full border border-cred-blue/10"
                  style={{ width: ring * 140, height: ring * 140 }}
                  animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 20 + ring * 8, repeat: Infinity, ease: 'linear' }}
                >
                  {/* Ring dots */}
                  {[0, 90, 180, 270].map((angle) => (
                    <div
                      key={angle}
                      className="absolute w-1.5 h-1.5 bg-cred-blue/40 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${angle}deg) translateX(${ring * 70 - 3}px) translateY(-50%)`,
                      }}
                    />
                  ))}
                </motion.div>
              ))}

              {/* Shield icon */}
              <motion.div
                className="relative z-10 w-32 h-32 rounded-3xl bg-gradient-to-br from-cred-blue/20 to-cred-purple/20 border border-cred-blue/30 flex items-center justify-center"
                animate={{ boxShadow: ['0 0 30px rgba(59,124,255,0.2)', '0 0 60px rgba(59,124,255,0.4)', '0 0 30px rgba(59,124,255,0.2)'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <path d="M28 4L8 12v14c0 13.3 8.5 25.7 20 29 11.5-3.3 20-15.7 20-29V12L28 4z"
                    fill="rgba(59,124,255,0.15)" stroke="#3b7cff" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M20 28l6 6 10-10" stroke="#3b7cff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </div>

            {/* Floating security badges */}
            {[
              { label: 'ENCRYPTED', value: '256-bit SSL', x: '-left-4', y: 'top-1/4' },
              { label: 'COMPLIANT', value: 'RBI Licensed', x: '-right-4', y: 'top-1/3' },
              { label: 'AUDITED', value: 'SOC 2 Type II', x: '-left-8', y: 'bottom-1/4' },
            ].map((badge) => (
              <motion.div
                key={badge.label}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute ${badge.x} ${badge.y} glass-card rounded-xl px-4 py-2.5 border border-cred-blue/20 hidden md:block`}
              >
                <p className="text-xs font-mono text-cred-blue tracking-widest">{badge.label}</p>
                <p className="text-sm font-display font-bold text-cred-white">{badge.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-xs font-mono text-cred-blue tracking-[0.3em] uppercase mb-6">
              Enterprise Security
            </span>
            <h2 className="font-display font-black text-cred-white leading-none tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)' }}>
              Your money.<br />
              <span className="gradient-text">Fort Knox-level</span><br />
              protection.
            </h2>
            <p className="text-cred-gray font-body font-light text-lg leading-relaxed mb-12">
              Security isn't a feature we added — it's the foundation we built on.
              Every transaction, every data point is protected by the same technology used by the world's top banks.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid sm:grid-cols-2 gap-4"
            >
              {securityFeatures.map((feat) => (
                <motion.div
                  key={feat.title}
                  variants={fadeUp}
                  whileHover={{ y: -4, borderColor: 'rgba(59,124,255,0.3)' }}
                  className="rounded-xl p-5 bg-cred-card/50 border border-cred-border/60 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="text-2xl mb-3">{feat.icon}</div>
                  <h4 className="font-display font-bold text-cred-white text-sm mb-1.5">{feat.title}</h4>
                  <p className="text-cred-gray font-body text-xs leading-relaxed">{feat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
