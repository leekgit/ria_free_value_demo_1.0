import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Form ADV | Thorne Capital Management',
  description: 'SEC Form ADV disclosure document for Thorne Capital Management, a Registered Investment Advisor.',
}

export default function FormADVPage() {
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
          Form ADV
        </h1>
        
        <div className="mt-8 prose prose-slate max-w-none">
          <p className="text-lg text-muted-foreground">
            Form ADV is the uniform form used by investment advisers to register with both the Securities and Exchange Commission (SEC) and state securities authorities.
          </p>

          <h2 className="mt-8 font-serif text-xl font-semibold text-foreground">
            What is Form ADV?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Form ADV consists of two parts. Part 1 requires information about the investment adviser&apos;s business, ownership, clients, employees, business practices, affiliations, and any disciplinary events. Part 2 requires investment advisers to prepare narrative brochures written in plain English that contain information such as the types of advisory services offered, the adviser&apos;s fee schedule, disciplinary information, conflicts of interest, and the educational and business background of management and key advisory personnel.
          </p>

          <h2 className="mt-8 font-serif text-xl font-semibold text-foreground">
            Thorne Capital Management Disclosure
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Thorne Capital Management is registered as an Investment Adviser with the appropriate regulatory authorities. Our Form ADV Parts 1 and 2 are available upon request. To obtain a copy of our current Form ADV or for more information about our firm, please contact us directly or visit the SEC&apos;s Investment Adviser Public Disclosure website at adviserinfo.sec.gov.
          </p>

          <div className="mt-12 rounded-lg border border-border bg-card p-6">
            <h3 className="font-semibold text-foreground">Request Our Form ADV</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              To receive a copy of our current Form ADV Parts 1 and 2, please email us at:
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
