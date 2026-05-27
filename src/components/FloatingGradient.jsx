import { motion } from 'framer-motion'

/**
 * FloatingGradient — decorative glowing orbs for section backgrounds
 */
export default function FloatingGradient({ variant = 'blue', className = '' }) {
  const configs = {
    blue: {
      orbs: [
        { size: 600, x: '10%', y: '20%', color: 'rgba(59,124,255,0.12)', delay: 0, duration: 12 },
        { size: 400, x: '70%', y: '60%', color: 'rgba(59,124,255,0.08)', delay: 4, duration: 16 },
      ],
    },
    purple: {
      orbs: [
        { size: 500, x: '60%', y: '10%', color: 'rgba(139,92,246,0.12)', delay: 0, duration: 14 },
        { size: 350, x: '20%', y: '70%', color: 'rgba(139,92,246,0.08)', delay: 6, duration: 18 },
      ],
    },
    mixed: {
      orbs: [
        { size: 700, x: '5%', y: '10%', color: 'rgba(59,124,255,0.1)', delay: 0, duration: 15 },
        { size: 500, x: '75%', y: '5%', color: 'rgba(139,92,246,0.1)', delay: 3, duration: 12 },
        { size: 400, x: '50%', y: '80%', color: 'rgba(6,214,214,0.07)', delay: 7, duration: 20 },
      ],
    },
    hero: {
      orbs: [
        { size: 900, x: '50%', y: '-20%', color: 'rgba(59,124,255,0.08)', delay: 0, duration: 20 },
        { size: 600, x: '-10%', y: '50%', color: 'rgba(139,92,246,0.07)', delay: 5, duration: 16 },
        { size: 500, x: '80%', y: '70%', color: 'rgba(6,214,214,0.05)', delay: 10, duration: 18 },
      ],
    },
  }

  const { orbs } = configs[variant] || configs.blue

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
