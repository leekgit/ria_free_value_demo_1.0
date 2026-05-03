'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    title: 'The Discovery',
    description: 'We learn about your goals, values, and what keeps you up at night.',
  },
  {
    title: 'The Strategy',
    description: 'We build a comprehensive plan across investments, tax, and estate.',
  },
  {
    title: 'The Management',
    description: 'Ongoing oversight, quarterly reviews, and always-on access.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function Process() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl font-semibold text-primary-foreground md:text-4xl">
            Our Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            A thoughtful approach to managing your wealth.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={stepVariants}
              className="relative"
            >
              {/* Connector line (hidden on mobile, shown on md+) */}
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-full hidden h-px w-full bg-primary-foreground/20 md:block" />
              )}
              
              <div className="flex flex-col">
                <h3 className="font-serif text-xl font-semibold text-primary-foreground md:text-2xl">
                  {step.title}
                </h3>
                <div className="mt-3 h-px w-16 bg-accent" />
                <p className="mt-4 leading-relaxed text-primary-foreground/80">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
