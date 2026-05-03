'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, BarChart3, UserCog } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: ShieldCheck,
    title: 'No Commissions',
    description: "We don't earn money selling you products. Our only incentive is your success.",
  },
  {
    icon: BarChart3,
    title: 'Objective Data',
    description: 'Recommendations backed by rigorous analysis, not sales quotas.',
  },
  {
    icon: UserCog,
    title: 'Personalized Strategy',
    description: 'Your plan is built for your life, not a demographic checkbox.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function FiduciaryDifference() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
            The Fiduciary Difference
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            As an independent Registered Investment Advisor, we&apos;re legally bound to act in your best interest.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={cardVariants}>
              <Card className="group h-full border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex flex-col items-start p-6 md:p-8">
                  <div className="mb-4 rounded-lg bg-accent/10 p-3">
                    <feature.icon className="size-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
