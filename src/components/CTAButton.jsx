import { motion } from 'framer-motion'

/**
 * CTAButton — Premium animated call-to-action button with NeoPOP 3D effect
 */
export default function CTAButton({
  children,
  variant = 'primary', // primary | secondary | ghost | neopop
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
}) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
    xl: 'px-12 py-5 text-lg',
  }

  const variantClasses = {
    primary: 'bg-cred-blue text-white hover:bg-blue-500 shadow-glow-blue',
    secondary: 'bg-cred-card border border-cred-border text-cred-white hover:bg-cred-muted',
    ghost: 'bg-transparent border border-cred-border text-cred-silver hover:text-cred-white hover:border-cred-blue',
    neopop: 'bg-cred-blue text-white',
    outline: 'bg-transparent border-2 border-cred-blue text-cred-blue hover:bg-cred-blue hover:text-white',
  }

  const baseClasses = `
    relative inline-flex items-center justify-center gap-2.5
    font-display font-semibold tracking-wide rounded-xl
    transition-all duration-200 cursor-pointer select-none
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `

  const motionProps = {
    whileHover: variant === 'neopop' ? { x: -2, y: -2 } : { scale: 1.02 },
    whileTap: variant === 'neopop' ? { x: 2, y: 2 } : { scale: 0.98 },
    transition: { duration: 0.15 },
  }

  const neopopShadow = variant === 'neopop' ? {
    boxShadow: '4px 4px 0px #1a4fff',
  } : {}

  const neopopHoverShadow = variant === 'neopop' ? {
    whileHover: { x: -3, y: -3, boxShadow: '6px 6px 0px #1a4fff' },
    whileTap: { x: 2, y: 2, boxShadow: '2px 2px 0px #1a4fff' },
  } : {}

  const Tag = href ? 'a' : 'button'

  return (
    <motion.div
      {...motionProps}
      {...neopopHoverShadow}
      style={neopopShadow}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        className={baseClasses}
      >
        {/* Shine effect */}
        <span className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <span
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
            }}
          />
        </span>
        {children}
        {icon && <span className="text-lg">{icon}</span>}
      </Tag>
    </motion.div>
  )
}
