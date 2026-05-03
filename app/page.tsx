import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { FiduciaryDifference } from '@/components/fiduciary-difference'
import { Process } from '@/components/process'
import { FAQ } from '@/components/faq'
import { FinalCTA } from '@/components/final-cta'
import { FiduciaryPledge } from '@/components/fiduciary-pledge'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <FiduciaryDifference />
        <Process />
        <FAQ />
        <FinalCTA />
        <FiduciaryPledge />
      </main>
      <Footer />
    </>
  )
}
