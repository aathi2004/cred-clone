import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * AnimatedCounter — counts up when scrolled into view
 */
export default function AnimatedCounter({ value, suffix = '', prefix = '', decimals = 0, duration = 2000 }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const hasStarted = useRef(false)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!inView || hasStarted.current) return
    hasStarted.current = true

    const startTime = performance.now()
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)
      setDisplayValue(easedProgress * value)
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [inView, value, duration])

  const formatted = decimals > 0
    ? displayValue.toFixed(decimals)
    : Math.round(displayValue).toLocaleString()

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3 }}
    >
      {prefix}{formatted}{suffix}
    </motion.span>
  )
}
