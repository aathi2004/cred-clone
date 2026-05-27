import { motion } from 'framer-motion'

/**
 * NeoPopCard — 3D tactile card with NeoPOP offset shadow effect
 */
export default function NeoPopCard({
  children,
  color = 'blue', // blue | purple | cyan | gold
  className = '',
  onClick,
  depth = 4,
}) {
  const shadowColors = {
    blue: '#1a4fff',
    purple: '#5b21b6',
    cyan: '#0891b2',
    gold: '#b45309',
    white: 'rgba(255,255,255,0.3)',
  }

  const shadowColor = shadowColors[color] || shadowColors.blue

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      variants={{
        rest: {
          x: 0,
          y: 0,
          boxShadow: `${depth}px ${depth}px 0px ${shadowColor}`,
        },
        hover: {
          x: -(depth / 2),
          y: -(depth / 2),
          boxShadow: `${depth * 1.5}px ${depth * 1.5}px 0px ${shadowColor}`,
          transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
        },
        tap: {
          x: depth / 2,
          y: depth / 2,
          boxShadow: `${depth / 2}px ${depth / 2}px 0px ${shadowColor}`,
          transition: { duration: 0.1 },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
