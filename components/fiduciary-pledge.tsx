'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function FiduciaryPledge() {
  return (
    <section className="bg-card py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <blockquote className="relative">
            <div className="absolute -top-4 -left-4 text-6xl text-accent/20 font-serif">
              &ldquo;
            </div>
            <p className="relative font-serif text-xl leading-relaxed text-foreground md:text-2xl italic">
              I pledge to always act as your fiduciary, placing your financial interests above my own. I will provide honest counsel, transparent fees, and objective advice for as long as you honor me with your trust.
            </p>
            <div className="absolute -bottom-8 -right-4 text-6xl text-accent/20 font-serif">
              &rdquo;
            </div>
          </blockquote>
          
          <div className="mt-12 flex flex-col items-center">
            <Image
              src="/images/signature.png"
              alt="Marcus Thorne signature"
              width={180}
              height={60}
              className="h-12 w-auto opacity-80"
            />
            <p className="mt-4 font-medium text-foreground">
              Marcus Thorne, CFP®
            </p>
            <p className="text-sm text-muted-foreground">
              Founder, Thorne Capital Management
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
