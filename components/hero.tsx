'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { BookingModal } from './booking-modal'

export function Hero() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <>
      <section className="relative min-h-screen bg-background pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text Content */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground text-balance md:text-5xl lg:text-6xl">
                Wealth Management for the Intentional Founder.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
                Fee-only fiduciary advice for tech professionals and early retirees who value time as much as capital.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 text-base px-8 py-6"
                >
                  Schedule a Fit Meeting
                </Button>
                <p className="text-sm text-muted-foreground">
                  30 minutes. No obligation.
                </p>
              </div>
            </motion.div>

            {/* Headshot */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-primary/5" />
                <Image
                  src="/images/marcus-headshot.jpg"
                  alt="Marcus Thorne, CFP® - Founder of Thorne Capital Management"
                  width={480}
                  height={600}
                  className="relative rounded-xl object-cover shadow-xl"
                  priority
                />
                <div className="absolute -bottom-4 -left-4 rounded-lg bg-card px-4 py-3 shadow-lg sm:-bottom-6 sm:-left-6 sm:px-6 sm:py-4">
                  <p className="font-serif text-sm font-semibold text-foreground sm:text-base">
                    Marcus Thorne, CFP®
                  </p>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    Founder & Wealth Advisor
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
