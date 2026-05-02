# Thorne Capital Management - Implementation Plan

## Project Overview

A sophisticated, high-conversion landing page for Thorne Capital Management, an independent RIA firm led by Marcus Thorne, CFP®. The page targets tech professionals and early retirees seeking fee-only fiduciary wealth management.

**Goal:** Single conversion action — "Schedule a Fit Meeting" via modal form.

---

## Design Token System

### Color Palette (5 Colors)

| Token | Hex | Usage |
|-------|-----|-------|
| `--midnight-navy` | `#0f172a` | Primary backgrounds, headers, footer |
| `--slate` | `#475569` | Secondary text, borders, subtle elements |
| `--cream` | `#f8f5f0` | Page background, card backgrounds |
| `--white` | `#ffffff` | Text on dark backgrounds, clean sections |
| `--burnt-orange` | `#c2410c` | CTA buttons only (high contrast accent) |

### CSS Variables (globals.css)

```css
:root {
  /* Background Colors */
  --background: 39 33% 97%;           /* cream #f8f5f0 */
  --foreground: 222 47% 11%;          /* midnight-navy #0f172a */
  
  /* Card & Surface */
  --card: 0 0% 100%;                  /* white */
  --card-foreground: 222 47% 11%;     /* midnight-navy */
  
  /* Primary (Navy) */
  --primary: 222 47% 11%;             /* midnight-navy */
  --primary-foreground: 39 33% 97%;   /* cream */
  
  /* Secondary (Slate) */
  --secondary: 215 19% 35%;           /* slate #475569 */
  --secondary-foreground: 0 0% 100%;  /* white */
  
  /* Accent (Burnt Orange - CTAs only) */
  --accent: 21 90% 40%;               /* burnt-orange #c2410c */
  --accent-foreground: 0 0% 100%;     /* white */
  
  /* Muted */
  --muted: 215 19% 35%;               /* slate */
  --muted-foreground: 215 14% 50%;    /* lighter slate */
  
  /* Border & Input */
  --border: 215 19% 85%;              /* light slate */
  --input: 215 19% 85%;
  --ring: 21 90% 40%;                 /* burnt-orange for focus */
  
  /* Radius */
  --radius: 0.5rem;
}
```

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headings (h1-h4) | Playfair Display (Serif) | 600-700 | 2.5rem - 1.25rem |
| Body | Inter (Sans-serif) | 400-500 | 1rem - 1.125rem |
| CTA Buttons | Inter | 600 | 1rem |
| Nav Links | Inter | 500 | 0.875rem |

### Tailwind Config Additions

```js
fontFamily: {
  sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  serif: ['var(--font-playfair)', 'Georgia', 'serif'],
}
```

---

## Page Structure & Sections

### 1. Sticky Navigation Bar
- **Position:** Fixed top, z-50
- **Background:** Midnight navy with subtle backdrop blur
- **Content:**
  - Left: Firm logo/wordmark "Thorne Capital"
  - Right: CTA Button #1 — "Schedule a Fit Meeting" (burnt-orange)
- **Behavior:** Appears on scroll, smooth transition

### 2. Hero Section
- **Background:** Cream
- **Layout:** Two-column on desktop (text left, headshot right), stacked on mobile
- **Content:**
  - Headline: "Wealth Management for the Intentional Founder."
  - Subheadline: "Fee-only fiduciary advice for tech professionals and early retirees who value time as much as capital."
  - CTA Button #2 — "Schedule a Fit Meeting" (large, burnt-orange)
  - Placeholder headshot of Marcus Thorne (generated)
- **Animation:** Subtle fade-in on load

### 3. Trust Bar
- **Background:** White
- **Layout:** Centered horizontal row, responsive wrap
- **Content:**
  - CFP® logo
  - NAPFA logo
  - "As Seen In" divider with: Forbes, Financial Times, Bloomberg (placeholder SVG icons)
- **Style:** Grayscale logos, subtle opacity, no accompanying text

### 4. The Fiduciary Difference
- **Background:** Cream
- **Layout:** 3-column grid (stacks to single column on mobile)
- **Content:** Three cards explaining the "Independent RIA" advantage:
  1. **No Commissions** — "We don't earn money selling you products. Our only incentive is your success."
  2. **Objective Data** — "Recommendations backed by rigorous analysis, not sales quotas."
  3. **Personalized Strategy** — "Your plan is built for your life, not a demographic checkbox."
- **Icons:** Lucide icons (ShieldCheck, BarChart3, UserCog)
- **Animation:** Staggered fade-in on scroll, subtle hover lift on cards

### 5. The Process
- **Background:** Midnight navy
- **Layout:** Three horizontal steps (vertical stack on mobile)
- **Content:**
  1. **The Discovery** — "We learn about your goals, values, and what keeps you up at night."
  2. **The Strategy** — "We build a comprehensive plan across investments, tax, and estate."
  3. **The Management** — "Ongoing oversight, quarterly reviews, and always-on access."
- **Style:** No numbering, clean divider lines between steps
- **Animation:** Slide-in from left on scroll

### 6. Common Questions (FAQ)
- **Background:** Cream
- **Component:** shadcn Accordion
- **Content:** 5 Q&As as specified in original plan
- **Style:**
  - Slim ChevronDown icons
  - Subtle hover background on accordion items
  - Smooth expand/collapse animation (300ms ease)

### 7. Final Push CTA Section
- **Background:** Gradient from cream to soft ivory
- **Layout:** Centered text block
- **Content:**
  - Headline: "Experience the Fiduciary Standard."
  - Subheadline: "Schedule your 30-minute introductory 'Fit Meeting' with Marcus today."
  - CTA Button #3 — "Schedule Your Fit Meeting" (largest size, burnt-orange)
- **Style:** Increased vertical padding, slightly larger typography
- **Animation:** Gentle pulse on CTA button hover

### 8. Fiduciary Pledge (Above Footer)
- **Background:** White
- **Content:**
  - Blockquote-style pledge text
  - Generated signature image for Marcus Thorne
  - Credentials: "Marcus Thorne, CFP® | Founder, Thorne Capital Management"
- **Style:** Elegant, personal, centered

### 9. Footer
- **Background:** Midnight navy
- **Layout:** Multi-column grid
- **Content:**
  - Column 1: Logo, brief firm description
  - Column 2: Links — Form ADV, Privacy Policy, Disclosures (internal routes)
  - Column 3: Social icons — LinkedIn, X (placeholder hrefs)
  - Bottom row: Legal disclaimer, copyright
- **Disclaimer Text:** "Thorne Capital Management is a Registered Investment Advisor. Information presented is for educational purposes only and does not intend to make an offer or solicitation for the sale or purchase of any specific securities, investments, or investment strategies. Past performance is not indicative of future results. Investing involves risk, including the potential loss of principal."

---

## CTA Placement Strategy (4 Total)

| Location | Button Text | Size | Notes |
|----------|-------------|------|-------|
| Sticky Nav | "Schedule a Fit Meeting" | Small | Always visible |
| Hero Section | "Schedule a Fit Meeting" | Large | Primary conversion point |
| After FAQ | "Get Started Today" | Medium | Secondary nudge |
| Final Push Section | "Schedule Your Fit Meeting" | Extra Large | Final conversion |

---

## Modal Form Specification

**Trigger:** All CTA buttons
**Type:** Centered modal with backdrop blur
**Fields:**
- Full Name (required)
- Email (required, email validation)
- Phone (optional, phone format validation)
- Best Time to Meet (dropdown: Morning, Afternoon, Evening)
- Brief Message (optional textarea)

**Validation:** Client-side only (React Hook Form or native)
**Success State:** Confirmation message within modal, auto-close after 3s
**Error Handling:** Inline field errors, red border + message

---

## Animation Strategy (Framer Motion)

| Element | Animation | Timing |
|---------|-----------|--------|
| Hero content | Fade up | 0.6s ease-out, delay 0.2s |
| Trust bar logos | Staggered fade | 0.4s each, 0.1s stagger |
| Fiduciary cards | Staggered slide up | 0.5s each, 0.15s stagger |
| Process steps | Slide in from left | 0.5s ease-out |
| FAQ items | None (accordion native) | — |
| CTA buttons | Scale on hover | 0.2s ease |
| Cards | Subtle lift on hover | 0.2s ease |

**Scroll Trigger:** useInView hook with `once: true` for single-fire animations

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | Single column, stacked layout, hamburger nav (optional) |
| Tablet (640-1024px) | Two columns where appropriate |
| Desktop (>1024px) | Full three-column grids, side-by-side hero |

---

## File Structure

```
app/
├── layout.tsx          # Root layout with fonts, metadata
├── page.tsx            # Main landing page (imports all sections)
├── globals.css         # Design tokens, base styles

components/
├── navigation.tsx      # Sticky nav with CTA
├── hero.tsx            # Hero section with headshot
├── trust-bar.tsx       # Logo row
├── fiduciary-difference.tsx  # 3-column feature grid
├── process.tsx         # 3-step process section
├── faq.tsx             # Accordion FAQ
├── final-cta.tsx       # Final push section
├── fiduciary-pledge.tsx # Signature pledge
├── footer.tsx          # Compliance footer
├── booking-modal.tsx   # Modal form component

public/
├── images/
│   ├── marcus-headshot.jpg    # Generated placeholder
│   ├── signature.png          # Generated signature
│   └── logos/
│       ├── cfp-logo.svg
│       ├── napfa-logo.svg
│       ├── forbes.svg
│       ├── financial-times.svg
│       └── bloomberg.svg
```

---

## Dependencies to Install

```bash
pnpm add framer-motion @radix-ui/react-dialog
```

Note: shadcn/ui components (Accordion, Button, Card, Dialog) are already available.

---

## Legal Pages (Placeholder Routes)

| Route | Content |
|-------|---------|
| `/form-adv` | Placeholder page with SEC Form ADV explanation |
| `/privacy-policy` | Standard privacy policy template |
| `/disclosures` | Investment advisory disclosures |

---

## Implementation Order

1. **Design System Setup**
   - Update globals.css with design tokens
   - Configure fonts in layout.tsx
   - Update tailwind.config.ts with font families

2. **Core Components**
   - Navigation (sticky with CTA)
   - Hero Section (with generated headshot)
   - Booking Modal

3. **Content Sections**
   - Trust Bar
   - Fiduciary Difference
   - Process
   - FAQ Accordion
   - Final CTA
   - Fiduciary Pledge

4. **Footer & Legal**
   - Footer with all required elements
   - Placeholder legal pages

5. **Animation & Polish**
   - Framer Motion scroll animations
   - Hover states
   - Mobile responsive refinements

6. **Asset Generation**
   - Marcus Thorne headshot
   - Signature image
   - Trust bar logos (SVG)

---

## Assumptions Confirmed

- No backend/database integration at this stage
- No email capture workflow (modal is presentational only)
- No analytics tracking
- Single-page layout, no multi-page routing (except legal pages)
- Mobile-responsive required
- No authentication

---

## Ready for Implementation

All decisions have been made. Proceed with coding following the implementation order above.
