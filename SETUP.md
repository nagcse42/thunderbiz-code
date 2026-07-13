# Thunder Biz Setup — Project Setup Guide

## Tech Stack
- Vue 3 (Composition API)
- TypeScript
- Vite
- Tailwind CSS
- Vue Router 4
- GSAP (ScrollTrigger)
- FormSubmit (contact form)

## Quick Start

### 1. Install dependencies
```bash
cd thunder-biz-setup
npm install
```

### 2. Start dev server
```bash
npm run dev
```
Open: http://localhost:5173

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## Project Structure

```
thunder-biz-setup/
├── index.html                    # Entry HTML with SEO meta tags
├── public/
│   └── favicon.svg               # Gold thunderbolt favicon
├── src/
│   ├── main.ts                   # App entry — GSAP registered here
│   ├── App.vue                   # Root: NavBar + RouterView + Footer + floating buttons
│   ├── assets/
│   │   └── main.css              # Global CSS, animations, Tailwind, CSS variables
│   ├── router/
│   │   └── index.ts              # Vue Router (Home, Services, Packages, About, Contact)
│   ├── views/
│   │   ├── HomeView.vue          # Full home page assembler
│   │   ├── ServicesView.vue      # Detailed services page
│   │   ├── PackagesView.vue      # Pricing page
│   │   ├── AboutView.vue         # About us page
│   │   └── ContactView.vue       # Contact page
│   └── components/
│       ├── layout/
│       │   ├── NavBar.vue        # Sticky glass navbar with mobile menu
│       │   └── AppFooter.vue     # Full footer with social links
│       ├── home/
│       │   ├── HeroSection.vue   # Hero with particle canvas + Dubai skyline
│       │   ├── TrustBar.vue      # Trust badges bar
│       │   ├── ServicesSection.vue
│       │   ├── ProcessSection.vue
│       │   ├── WhyChooseUs.vue
│       │   ├── PackagesSection.vue  # 3 pricing cards with animated Pro card
│       │   ├── TestimonialsSection.vue
│       │   ├── FaqSection.vue    # Animated accordion FAQ
│       │   └── ContactSection.vue   # FormSubmit AJAX contact form
│       └── shared/
│           ├── WhatsAppButton.vue   # Fixed floating WhatsApp CTA
│           └── StickyCTA.vue        # Mobile sticky bottom bar
```

---

## Contact Form

Uses **FormSubmit AJAX** (no backend required):
- Endpoint: `https://formsubmit.co/ajax/info@thunderbizsetup.com`
- All enquiries go to: `info@thunderbizsetup.com`
- Subject: `New Business Setup Enquiry - Thunder Biz Setup`
- Fields: Name, Email, Mobile, Company, Activity, Setup Type, Budget, Message
- Built-in validation, loading state, success/error feedback

**First submission:** FormSubmit will send a confirmation email to activate the endpoint. Click the link to confirm.

---

## Customisation

### Change WhatsApp Number
In `WhatsAppButton.vue` and `ContactSection.vue`:
```
https://wa.me/971XXXXXXXXX
```

### Update Pricing
Edit `PackagesSection.vue` — `starterFeatures`, `proFeatures`, `enterpriseFeatures` arrays.

### Add/Remove Services
Edit `ServicesSection.vue` — `services` array.

---

## Animations Used
- **GSAP ScrollTrigger** — fade-up on all sections as they enter viewport
- **CSS @keyframes** — shimmer gold text, floating cards, rotating logo rings, particle rise, scan lines
- **Particle canvas** — hero background gold particles (vanilla canvas API)
- **CSS transitions** — card hover lifts, nav link underlines, form focus states
- **Vue Transitions** — page enter/exit, mobile menu, sticky CTA slide-up

---

## Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder to netlify.com
```

### Manual
```bash
npm run build
# Upload contents of dist/ to your web host
```

---

## Performance Notes
- GSAP and Lucide are code-split into separate chunks
- Google Fonts loaded with `rel="preconnect"`
- All images are inline SVG (zero HTTP requests)
- Tailwind purges unused CSS at build time
- Lazy-loaded route views (Services, Packages, About, Contact)
