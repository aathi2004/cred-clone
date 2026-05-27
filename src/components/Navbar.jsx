import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'

import { navLinks } from '../data/siteData'
import CTAButton from './CTAButton'
import { useScrolled } from '../hooks/useScrolled'

export default function Navbar() {
  const { scrolled } = useScrolled(40)
  const [menuOpen, setMenuOpen] = useState(false)

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-black/40 backdrop-blur-3xl border-b border-white/10'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="hero"
            smooth={true}
            duration={1000}
            offset={-100}
            className="cursor-pointer"
          >
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                <span className="font-black text-white text-sm">
                  C
                </span>
              </div>

              <span className="font-bold text-white text-2xl tracking-[0.2em] uppercase">
                CRED
              </span>
            </motion.div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                to={link.href.replace('#', '')}
                smooth={true}
                duration={1000}
                offset={-100}
                spy={true}
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.07,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  className="
                    relative
                    px-5
                    py-3
                    text-sm
                    text-white/60
                    hover:text-white
                    transition-all
                    duration-300
                    cursor-pointer
                    group
                  "
                >
                  {link.label}

                  {/* UNDERLINE */}
                  <span
                    className="
                      absolute
                      left-1/2
                      -translate-x-1/2
                      bottom-1
                      w-0
                      h-[2px]
                      bg-blue-500
                      transition-all
                      duration-300
                      group-hover:w-8
                    "
                  />
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-4">

            <button
              className="
                text-sm
                text-white/60
                hover:text-white
                transition-colors
              "
            >
              Sign in
            </button>

            <CTAButton variant="primary" size="sm">
              Get Invite
            </CTAButton>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-50"
          >
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 8 }
                  : { rotate: 0, y: 0 }
              }
              className="block w-6 h-0.5 bg-white"
            />

            <motion.span
              animate={
                menuOpen
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
              className="block w-6 h-0.5 bg-white"
            />

            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0 }
              }
              className="block w-6 h-0.5 bg-white"
            />
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-40
              bg-black/95
              backdrop-blur-3xl
              flex
              flex-col
              pt-28
              px-8
              pb-12
              md:hidden
            "
          >
            <nav className="flex flex-col gap-3 mt-4">
              {navLinks.map((link, i) => (
                <Link
                  key={link.label}
                  to={link.href.replace('#', '')}
                  smooth={true}
                  duration={1000}
                  offset={-100}
                  spy={true}
                  onClick={() => setMenuOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.07,
                      duration: 0.4,
                    }}
                    className="
                      text-3xl
                      font-bold
                      text-white/70
                      hover:text-white
                      py-4
                      border-b
                      border-white/10
                      transition-all
                      duration-300
                      cursor-pointer
                    "
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <CTAButton
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                Get Your Invite
              </CTAButton>

              <CTAButton
                variant="ghost"
                size="lg"
                className="w-full justify-center"
              >
                Sign In
              </CTAButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}