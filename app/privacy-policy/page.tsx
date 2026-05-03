import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | Thorne Capital Management',
  description: 'Privacy policy for Thorne Capital Management, describing how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: January 2024
        </p>
        
        <div className="mt-8 space-y-8">
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Our Commitment to Your Privacy
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Thorne Capital Management is committed to safeguarding the confidential information of our clients. We hold all personal information provided to our firm in the strictest confidence. This privacy policy describes the types of personal information we collect, how we use it, and the steps we take to protect it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Information We Collect
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We collect personal information that you voluntarily provide to us, including but not limited to: name, address, email address, telephone number, Social Security number, date of birth, employment information, financial information, and investment objectives. This information is collected when you engage our services, fill out forms, or communicate with us.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              How We Use Your Information
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We use the information we collect to: provide you with investment advisory services; maintain your account and records; respond to your inquiries; comply with legal and regulatory requirements; and protect against fraud and unauthorized transactions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Information Sharing
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We do not sell or rent your personal information to third parties. We may share your information with: service providers who assist us in operating our business; custodians who hold your assets; regulatory authorities when required by law; and other parties with your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Information Security
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We maintain physical, electronic, and procedural safeguards to protect your personal information. Access to your information is restricted to employees and service providers who need it to provide services to you. We regularly review our security procedures to ensure they remain effective.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Contact Us
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              If you have questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="mt-2 text-accent font-medium">
              privacy@thornecapital.com
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
