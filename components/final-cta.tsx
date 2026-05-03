'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { BookingModal } from './booking-modal'

export function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-card py-24 md:py-32">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl text-balance">
              Experience the Fiduciary Standard.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl text-pretty">
              Schedule your 30-minute introductory &quot;Fit Meeting&quot; with Marcus today. No pressure, no obligation—just an honest conversation about your financial future.
            </p>
            <motion.div
              className="mt-10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 shadow-lg shadow-accent/20"
              >
                Schedule Your Fit Meeting
              </Button>
            </motion.div>
            <p className="mt-4 text-sm text-muted-foreground">
              Typically responds within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
