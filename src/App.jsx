import { useEffect } from 'react'
import { motion } from 'framer-motion'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Security from './components/Security'
import CTA from './components/CTA'
import Footer from './components/Footer'

// Page reveal animation
const pageReveal = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function App() {

  // Custom Cursor Effect
  useEffect(() => {

    const isMobile = window.matchMedia('(pointer: coarse)').matches

    if (isMobile) return

    // Cursor Dot
    const cursor = document.createElement('div')

    cursor.id = 'custom-cursor'

    cursor.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 8px;
      height: 8px;
      background: #3b82f6;
      border-radius: 9999px;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition:
        width 0.2s ease,
        height 0.2s ease,
        background 0.2s ease;
      mix-blend-mode: screen;
    `

    // Cursor Ring
    const cursorRing = document.createElement('div')

    cursorRing.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 32px;
      height: 32px;
      border: 1px solid rgba(59,130,246,0.5);
      border-radius: 9999px;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
      transition:
        width 0.3s ease,
        height 0.3s ease,
        border-color 0.3s ease;
    `

    document.body.appendChild(cursor)
    document.body.appendChild(cursorRing)

    let mouseX = 0
    let mouseY = 0

    let ringX = 0
    let ringY = 0

    // Mouse Move
    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      cursor.style.left = `${mouseX}px`
      cursor.style.top = `${mouseY}px`
    }

    // Animate Ring
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12

      cursorRing.style.left = `${ringX}px`
      cursorRing.style.top = `${ringY}px`

      requestAnimationFrame(animateRing)
    }

    // Hover Interactions
    const handleMouseOver = (e) => {

      if (e.target.closest('a, button, [role="button"]')) {

        cursor.style.width = '16px'
        cursor.style.height = '16px'

        cursorRing.style.width = '48px'
        cursorRing.style.height = '48px'

        cursorRing.style.borderColor = 'rgba(59,130,246,0.8)'

      } else {

        cursor.style.width = '8px'
        cursor.style.height = '8px'

        cursorRing.style.width = '32px'
        cursorRing.style.height = '32px'

        cursorRing.style.borderColor = 'rgba(59,130,246,0.5)'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    requestAnimationFrame(animateRing)

    return () => {

      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)

      cursor.remove()
      cursorRing.remove()
    }

  }, [])

  return (
    <motion.div
      {...pageReveal}
      className="
        min-h-screen
        bg-cred-black
        text-cred-white
        overflow-x-hidden
      "
      style={{
        cursor: 'none',
      }}
    >

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= MAIN ================= */}
      <main>

        {/* HERO */}
        <section id="hero">
          <Hero />
        </section>

        {/* FEATURES */}
        <section id="features">
          <Trust />
          <Features />
        </section>

        {/* STORIES */}
        <section id="stories">
          <Testimonials />
        </section>

        {/* SECURITY */}
        <section id="security">
          <Security />
        </section>

        {/* INVITATION */}
        <section id="invitation">
          <CTA />
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

    </motion.div>
  )
}