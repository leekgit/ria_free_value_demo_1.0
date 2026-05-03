import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Disclosures | Thorne Capital Management',
  description: 'Important disclosures and regulatory information for Thorne Capital Management.',
}

export default function DisclosuresPage() {
  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>

        <h1 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
          Important Disclosures
        </h1>
        
        <div className="mt-8 space-y-8">
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Investment Advisory Services
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Thorne Capital Management is a Registered Investment Advisor. Registration does not imply a certain level of skill or training. Investment advisory services are offered only to clients or prospective clients where Thorne Capital Management and its representatives are properly licensed or exempt from licensure.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              No Guarantees
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Past performance is not indicative of future results. Investing involves risk, including the potential loss of principal. No investment strategy can guarantee a profit or protect against loss in periods of declining values. There is no guarantee that any strategies discussed will result in a positive outcome.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              General Information
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              The information presented on this website is for educational purposes only and does not constitute an offer or solicitation to buy or sell any specific securities, investments, or investment strategies. All information is believed to be from reliable sources; however, we make no representation as to its completeness or accuracy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Tax and Legal Advice
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              This website is not intended to provide tax, legal, or accounting advice. Please consult with your own tax, legal, or accounting professionals before engaging in any transaction based on information contained on this website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Fiduciary Standard
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              As a fiduciary, Thorne Capital Management is required to act in the best interest of our clients at all times. We are fee-only, meaning we do not receive commissions or other compensation from third parties for recommending specific products or services. Our compensation comes solely from the fees paid by our clients.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Professional Designations
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              The CERTIFIED FINANCIAL PLANNER (CFP®) certification is a professional designation granted by the Certified Financial Planner Board of Standards, Inc. To obtain CFP® certification, candidates must meet education, examination, experience, and ethics requirements. The CFP® marks identify professionals who have demonstrated competency in financial planning.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Website Content
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              The content on this website is subject to change without notice. Thorne Capital Management is not responsible for any errors or omissions in the content of this website or for any damages arising from the use of this website.
            </p>
          </section>

          <div className="mt-12 rounded-lg border border-border bg-card p-6">
            <h3 className="font-semibold text-foreground">Questions About These Disclosures?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              If you have any questions about these disclosures, please contact our compliance team:
            </p>
            <p className="mt-2 text-accent font-medium">
              compliance@thornecapital.com
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
