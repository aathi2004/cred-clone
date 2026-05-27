import { motion } from 'framer-motion'
import { footerLinks } from '../data/siteData'
import { fadeUp, staggerContainer, viewportConfig } from '../animations/variants'

export default function Footer() {
  const socials = [
    { name: 'Twitter / X', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'YouTube', href: '#' },
  ]

  return (
    <footer className="relative border-t border-cred-border/30 bg-cred-dark overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,124,255,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-20 pb-10">
        {/* Main grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16"
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-cred-blue rounded-lg flex items-center justify-center">
                <span className="font-display font-black text-white text-xs">C</span>
              </div>
              <span className="font-display font-bold text-cred-white text-lg tracking-widest uppercase">CRED</span>
            </div>
            <p className="text-cred-gray font-body font-light text-sm leading-relaxed mb-6 max-w-xs">
              Premium financial services for India's elite.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  whileHover={{ y: -2, color: '#3b7cff' }}
                  className="text-xs font-mono text-cred-muted hover:text-cred-blue transition-colors duration-200"
                >
                  {s.name.split(' ')[0]}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={fadeUp}>
              <h4 className="text-xs font-mono text-cred-blue tracking-[0.25em] uppercase mb-5">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 3, color: '#f0f0f8' }}
                      className="text-sm font-body text-cred-gray hover:text-cred-white transition-colors duration-200 inline-block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row */}
        <div className="border-t border-cred-border/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-cred-muted">
            © {new Date().getFullYear()} Aathithya S. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-xs font-body text-cred-muted hover:text-cred-gray transition-colors">
                {item}
              </a>
            ))}
          </div>
          <p className="text-xs font-mono text-cred-muted tracking-wider">
            CRED — Premium Financial Services for India's Elite
          </p>
        </div>
      </div>
    </footer>
  )
}
