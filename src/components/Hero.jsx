import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import FloatingGradient from './FloatingGradient'
import CTAButton from './CTAButton'
import { staggerContainer, fadeUp } from '../animations/variants'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background layers */}
      <FloatingGradient variant="hero" />
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-cred-blue/20"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 4 + i * 2, delay: i * 1.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ margin: `${i * 60}px` }}
            />
          ))}
        </div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-24 pb-20 text-center"
      >
        {/* Exclusive badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-cred-border bg-cred-card/50 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cred-blue animate-pulse" />
          <span className="text-xs font-mono font-medium text-cred-silver tracking-widest uppercase">
            Members-Only Platform — India's Most Exclusive
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="overflow-hidden mb-2">
            <motion.h1
              variants={fadeUp}
              className="font-display font-black text-cred-white leading-none tracking-tight text-balance"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)' }}
            >
              Good things
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              variants={fadeUp}
              className="font-display font-black leading-none tracking-tight text-balance"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)' }}
            >
              <span className="gradient-text">happen to</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={fadeUp}
              className="font-display font-black text-cred-white leading-none tracking-tight text-balance"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)' }}
            >
              good people.
            </motion.h1>
          </div>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-2xl mx-auto text-cred-gray text-lg md:text-xl font-body font-light leading-relaxed mb-12"
        >
          A members-only club for people with good credit scores.
          Pay bills. Earn rewards. Unlock privileges designed for the responsible few.
        </motion.p>

        {/* CTA group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <CTAButton variant="neopop" size="xl">
            Check Eligibility
          </CTAButton>
          <CTAButton variant="ghost" size="xl">
            Watch Story
          </CTAButton>
        </motion.div>

        {/* Floating phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-sm mx-auto"
        >
          {/* Glow behind phone */}
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-b from-cred-blue via-cred-purple to-transparent rounded-full" />

          {/* Phone frame */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative mx-auto w-52 md:w-64"
          >
            <div className="relative rounded-[2.5rem] border border-cred-border bg-cred-card overflow-hidden shadow-2xl"
              style={{ aspectRatio: '9/19', boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 60px rgba(59,124,255,0.15)' }}
            >
              {/* Phone top notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-cred-black rounded-full z-10" />

              {/* Phone screen content */}
              <div className="p-5 pt-12 h-full flex flex-col gap-3">
                {/* Credit score ring */}
                <div className="flex flex-col items-center py-3">
                  <div className="relative w-24 h-24 mb-2">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(59,124,255,0.1)" strokeWidth="6" />
                      <motion.circle
                        cx="50" cy="50" r="42"
                        fill="none" stroke="#3b7cff" strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="264"
                        initial={{ strokeDashoffset: 264 }}
                        animate={{ strokeDashoffset: 264 * (1 - 0.76) }}
                        transition={{ duration: 2, delay: 1.5, ease: 'easeOut' }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display font-bold text-xl text-cred-white">763</span>
                      <span className="text-xs text-cred-blue font-mono">GOOD</span>
                    </div>
                  </div>
                  <span className="text-xs text-cred-gray font-body">Credit Score</span>
                </div>

                {/* Mini cards */}
                {[
                  { label: 'Total Due', value: '₹8,420', color: 'text-cred-white' },
                  { label: 'Coins Earned', value: '12,450', color: 'text-cred-gold' },
                  { label: 'Cashback', value: '₹1,280', color: 'text-cred-cyan' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 + i * 0.15 }}
                    className="flex justify-between items-center px-3 py-2 rounded-xl bg-cred-muted/50 border border-cred-border/50"
                  >
                    <span className="text-xs text-cred-gray font-body">{item.label}</span>
                    <span className={`text-xs font-display font-bold ${item.color}`}>{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-cred-gray tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-cred-gray to-transparent"
        />
      </motion.div>
    </section>
  )
}
