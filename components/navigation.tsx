'use client'

import * as React from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { BookingModal } from './booking-modal'

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          backgroundColor: isScrolled ? 'oklch(0.15 0.03 260 / 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span 
              className={`font-serif text-xl font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-primary-foreground' : 'text-primary'
              }`}
            >
              Thorne Capital
            </span>
          </a>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105"
            size="sm"
          >
            Schedule a Fit Meeting
          </Button>
        </nav>
      </motion.header>

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
