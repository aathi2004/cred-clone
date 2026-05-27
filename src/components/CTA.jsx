import { motion } from 'framer-motion'
import CTAButton from './CTAButton'
import { fadeUp, staggerContainer, viewportConfig } from '../animations/variants'

export default function CTA() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cred-blue/5 via-transparent to-cred-purple/5" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(59,124,255,0.08) 0%, transparent 70%)' }}
      />

      {/* Border line top */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,124,255,0.4), transparent)' }}
      />

      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-mono text-cred-blue tracking-[0.3em] uppercase mb-6"
          >
            The Invitation
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display font-black text-cred-white leading-none tracking-tight mb-8 text-balance"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
          >
            You've earned<br />
            <span className="gradient-text">a better life.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-cred-gray font-body font-light text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Join 12 million responsible Indians who pay bills, earn rewards,
            and unlock a world of exclusive privileges — built just for you.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CTAButton variant="neopop" size="xl">
              Check Your Score
            </CTAButton>
            <CTAButton variant="secondary" size="xl">
              Download App
            </CTAButton>
          </motion.div>

          {/* App store badges */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center justify-center gap-6 opacity-50"
          >
            {['App Store', 'Google Play'].map((store) => (
              <div key={store} className="flex items-center gap-2 border border-cred-border rounded-xl px-4 py-2">
                <div className="w-5 h-5 bg-cred-gray rounded-full opacity-60" />
                <span className="text-xs font-body text-cred-gray">{store}</span>
              </div>
            ))}
            <span className="text-xs font-mono text-cred-muted">750+ credit score required</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Border line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,124,255,0.4), transparent)' }}
      />
    </section>
  )
}
