import { useState, useEffect, useRef } from 'react'

export function useCounter(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start)
  const [isRunning, setIsRunning] = useState(false)
  const ref = useRef(null)

  const startCounting = () => setIsRunning(true)

  useEffect(() => {
    if (!isRunning) return

    const startTime = performance.now()
    const range = end - start

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

    const tick = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)
      setCount(start + easedProgress * range)

      if (progress < 1) {
        ref.current = requestAnimationFrame(tick)
      }
    }

    ref.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(ref.current)
  }, [isRunning, end, start, duration])

  return { count, startCounting }
}
