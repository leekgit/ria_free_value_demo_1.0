"use client"

import { Linkedin, Twitter } from 'lucide-react'
import { LegalModal } from './legal-modals'

type LegalModalType = "form-adv" | "privacy-policy" | "disclosures"

const legalLinks: { label: string; type: LegalModalType }[] = [
  { label: 'Form ADV', type: 'form-adv' },
  { label: 'Privacy Policy', type: 'privacy-policy' },
  { label: 'Disclosures', type: 'disclosures' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/marcus-thorne', icon: Linkedin },
  { label: 'X (Twitter)', href: 'https://x.com/marcusthorne', icon: Twitter },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold">
              Thorne Capital
            </h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-xs">
              Independent, fee-only wealth management for those who demand fiduciary care.
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.type}>
                  <LegalModal type={link.type}>
                    <button
                      className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </LegalModal>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <p className="text-xs leading-relaxed text-primary-foreground/60">
            Thorne Capital Management is a Registered Investment Advisor. Information presented is for educational purposes only and does not intend to make an offer or solicitation for the sale or purchase of any specific securities, investments, or investment strategies. Past performance is not indicative of future results. Investing involves risk, including the potential loss of principal. This website is not intended as tax, legal, or accounting advice. Please consult with qualified professionals regarding your specific situation.
          </p>
          <p className="mt-4 text-xs text-primary-foreground/60">
            &copy; {currentYear} Thorne Capital Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
