'use client'

import { motion } from 'framer-motion'

const trustLogos = [
  { name: 'CFP', label: 'Certified Financial Planner' },
  { name: 'NAPFA', label: 'National Association of Personal Financial Advisors' },
]

const mediaLogos = [
  { name: 'Forbes', label: 'Forbes' },
  { name: 'Financial Times', label: 'Financial Times' },
  { name: 'Bloomberg', label: 'Bloomberg' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export function TrustBar() {
  return (
    <section className="bg-card py-12 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Trust Credentials */}
          {trustLogos.map((logo) => (
            <motion.div
              key={logo.name}
              variants={itemVariants}
              className="flex flex-col items-center gap-1"
            >
              <div className="flex h-10 items-center justify-center">
                <CFPLogo name={logo.name} />
              </div>
              <span className="sr-only">{logo.label}</span>
            </motion.div>
          ))}

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="hidden h-8 w-px bg-border md:block"
          />

          {/* As Seen In */}
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              As Seen In
            </span>
          </motion.div>

          {/* Media Logos */}
          {mediaLogos.map((logo) => (
            <motion.div
              key={logo.name}
              variants={itemVariants}
              className="flex items-center opacity-60 grayscale transition-opacity hover:opacity-100"
            >
              <MediaLogo name={logo.name} />
              <span className="sr-only">{logo.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CFPLogo({ name }: { name: string }) {
  if (name === 'CFP') {
    return (
      <svg
        viewBox="0 0 120 40"
        className="h-8 w-auto text-foreground"
        fill="currentColor"
        aria-hidden="true"
      >
        <text x="0" y="28" fontFamily="serif" fontSize="24" fontWeight="600">
          CFP
        </text>
        <text x="58" y="20" fontFamily="sans-serif" fontSize="10">
          ®
        </text>
      </svg>
    )
  }
  
  if (name === 'NAPFA') {
    return (
      <svg
        viewBox="0 0 120 40"
        className="h-8 w-auto text-foreground"
        fill="currentColor"
        aria-hidden="true"
      >
        <text x="0" y="28" fontFamily="sans-serif" fontSize="18" fontWeight="600">
          NAPFA
        </text>
      </svg>
    )
  }
  
  return null
}

function MediaLogo({ name }: { name: string }) {
  const commonClass = "h-6 w-auto text-foreground"
  
  if (name === 'Forbes') {
    return (
      <svg viewBox="0 0 100 30" className={commonClass} fill="currentColor" aria-hidden="true">
        <text x="0" y="22" fontFamily="serif" fontSize="20" fontWeight="700" fontStyle="italic">
          Forbes
        </text>
      </svg>
    )
  }
  
  if (name === 'Financial Times') {
    return (
      <svg viewBox="0 0 140 30" className={commonClass} fill="currentColor" aria-hidden="true">
        <text x="0" y="22" fontFamily="serif" fontSize="18" fontWeight="400">
          Financial Times
        </text>
      </svg>
    )
  }
  
  if (name === 'Bloomberg') {
    return (
      <svg viewBox="0 0 120 30" className={commonClass} fill="currentColor" aria-hidden="true">
        <text x="0" y="22" fontFamily="sans-serif" fontSize="18" fontWeight="600">
          Bloomberg
        </text>
      </svg>
    )
  }
  
  return null
}
