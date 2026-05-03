"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

type LegalModalType = "form-adv" | "privacy-policy" | "disclosures"

interface LegalModalProps {
  type: LegalModalType
  children: React.ReactNode
}

const legalContent = {
  "form-adv": {
    title: "Form ADV",
    content: (
      <div className="space-y-6">
        <p className="text-base text-muted-foreground">
          Form ADV is the uniform form used by investment advisers to register with both the Securities and Exchange Commission (SEC) and state securities authorities.
        </p>

        <section>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            What is Form ADV?
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Form ADV consists of two parts. Part 1 requires information about the investment adviser&apos;s business, ownership, clients, employees, business practices, affiliations, and any disciplinary events. Part 2 requires investment advisers to prepare narrative brochures written in plain English that contain information such as the types of advisory services offered, the adviser&apos;s fee schedule, disciplinary information, conflicts of interest, and the educational and business background of management and key advisory personnel.
          </p>
        </section>

        <section>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Thorne Capital Management Disclosure
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Thorne Capital Management is registered as an Investment Adviser with the appropriate regulatory authorities. Our Form ADV Parts 1 and 2 are available upon request. To obtain a copy of our current Form ADV or for more information about our firm, please contact us directly or visit the SEC&apos;s Investment Adviser Public Disclosure website at adviserinfo.sec.gov.
          </p>
        </section>

        <div className="rounded-lg border border-border bg-card p-4">
          <h4 className="font-semibold text-foreground">Request Our Form ADV</h4>
          <p className="mt-1 text-sm text-muted-foreground">
            To receive a copy of our current Form ADV Parts 1 and 2, please email us at:
          </p>
          <p className="mt-1 text-accent font-medium">
            compliance@thornecapital.com
          </p>
        </div>
      </div>
    ),
  },
  "privacy-policy": {
    title: "Privacy Policy",
    content: (
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">
          Last updated: January 2024
        </p>

        <section>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Our Commitment to Your Privacy
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Thorne Capital Management is committed to safeguarding the confidential information of our clients. We hold all personal information provided to our firm in the strictest confidence. This privacy policy describes the types of personal information we collect, how we use it, and the steps we take to protect it.
          </p>
        </section>

        <section>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Information We Collect
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We collect personal information that you voluntarily provide to us, including but not limited to: name, address, email address, telephone number, Social Security number, date of birth, employment information, financial information, and investment objectives. This information is collected when you engage our services, fill out forms, or communicate with us.
          </p>
        </section>

        <section>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            How We Use Your Information
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We use the information we collect to: provide you with investment advisory services; maintain your account and records; respond to your inquiries; comply with legal and regulatory requirements; and protect against fraud and unauthorized transactions.
          </p>
        </section>

        <section>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Information Sharing
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We do not sell or rent your personal information to third parties. We may share your information with: service providers who assist us in operating our business; custodians who hold your assets; regulatory authorities when required by law; and other parties with your explicit consent.
          </p>
        </section>

        <section>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Information Security
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We maintain physical, electronic, and procedural safeguards to protect your personal information. Access to your information is restricted to employees and service providers who need it to provide services to you. We regularly review our security procedures to ensure they remain effective.
          </p>
        </section>

        <section>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Contact Us
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            If you have questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <p className="mt-1 text-accent font-medium">
            privacy@thornecapital.com
          </p>
        </section>
      </div>
    ),
  },
  disclosures: {
    title: "Important Disclosures",
    content: (
      <div className="space-y-6">
        <section>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Investment Advisory Services
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Thorne Capital Management is a Registered Investment Advisor. Registration does not imply a certain level of skill or training. Investment advisory services are offered only to clients or prospective clients where Thorne Capital Management and its representatives are properly licensed or exempt from licensure.
          </p>
        </section>

        <section>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            No Guarantees
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Past performance is not indicative of future results. Investing involves risk, including the potential loss of principal. No investment strategy can guarantee a profit or protect against loss in periods of declining values. There is no guarantee that any strategies discussed will result in a positive outcome.
          </p>
        </section>

        <section>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            General Information
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            The information presented on this website is for educational purposes only and does not constitute an offer or solicitation to buy or sell any specific securities, investments, or investment strategies. All information is believed to be from reliable sources; however, we make no representation as to its completeness or accuracy.
          </p>
        </section>

        <section>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Tax and Legal Advice
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            This website is not intended to provide tax, legal, or accounting advice. Please consult with your own tax, legal, or accounting professionals before engaging in any transaction based on information contained on this website.
          </p>
        </section>

        <section>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Fiduciary Standard
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            As a fiduciary, Thorne Capital Management is required to act in the best interest of our clients at all times. We are fee-only, meaning we do not receive commissions or other compensation from third parties for recommending specific products or services. Our compensation comes solely from the fees paid by our clients.
          </p>
        </section>

        <section>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Professional Designations
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            The CERTIFIED FINANCIAL PLANNER (CFP) certification is a professional designation granted by the Certified Financial Planner Board of Standards, Inc. To obtain CFP certification, candidates must meet education, examination, experience, and ethics requirements. The CFP marks identify professionals who have demonstrated competency in financial planning.
          </p>
        </section>

        <section>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Website Content
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            The content on this website is subject to change without notice. Thorne Capital Management is not responsible for any errors or omissions in the content of this website or for any damages arising from the use of this website.
          </p>
        </section>

        <div className="rounded-lg border border-border bg-card p-4">
          <h4 className="font-semibold text-foreground">Questions About These Disclosures?</h4>
          <p className="mt-1 text-sm text-muted-foreground">
            If you have any questions about these disclosures, please contact our compliance team:
          </p>
          <p className="mt-1 text-accent font-medium">
            compliance@thornecapital.com
          </p>
        </div>
      </div>
    ),
  },
}

export function LegalModal({ type, children }: LegalModalProps) {
  const { title, content } = legalContent[type]

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[85vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border">
          <DialogTitle className="font-serif text-2xl font-semibold">
            {title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(85vh-100px)] px-6 py-4">
          {content}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
