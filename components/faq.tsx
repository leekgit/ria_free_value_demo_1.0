'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { BookingModal } from './booking-modal'

const faqs = [
  {
    question: 'What does "fee-only" mean?',
    answer: 'Fee-only means we are compensated solely by the fees you pay us directly. We do not receive commissions, referral fees, or any other compensation from third parties. This structure eliminates conflicts of interest and ensures our advice is always in your best interest.',
  },
  {
    question: 'What is a fiduciary, and why does it matter?',
    answer: "A fiduciary is legally obligated to act in your best interest at all times. Unlike brokers who only need to make 'suitable' recommendations, fiduciaries must prioritize your financial wellbeing over their own. This is the highest standard of care in financial services.",
  },
  {
    question: 'What are your minimum investment requirements?',
    answer: 'We typically work with clients who have $1 million or more in investable assets. However, we evaluate each situation individually and may make exceptions for clients who are a strong fit for our services and approach.',
  },
  {
    question: 'How do you charge for your services?',
    answer: 'We charge a transparent annual fee based on assets under management, typically ranging from 0.5% to 1.0% depending on portfolio size. There are no hidden fees, trading commissions, or product charges. You will always know exactly what you are paying.',
  },
  {
    question: 'What is a "Fit Meeting" and what should I expect?',
    answer: "A Fit Meeting is a complimentary 30-minute conversation where we learn about your financial situation, goals, and concerns. It's also an opportunity for you to ask questions and determine if our approach aligns with your needs. There's no pressure or obligation—it's simply a mutual discovery process.",
  },
]

export function FAQ() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <>
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Common Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Transparency is fundamental to our practice. Here are answers to questions we hear most often.
            </p>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border transition-colors hover:bg-muted/30"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="mb-4 text-muted-foreground">
              Have more questions? Let&apos;s talk.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105"
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
