<template>
  <footer class="bg-[#030303] border-t border-[rgba(212,175,55,0.08)] pt-16 pb-6" role="contentinfo">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- Top grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

        <!-- Brand -->
        <div class="lg:col-span-1">
          <RouterLink to="/" class="flex items-center gap-3 mb-5 group" aria-label="Thunder Biz Setup home">
            <div class="relative w-9 h-9 flex-shrink-0">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <rect width="40" height="40" rx="9" fill="rgba(212,175,55,0.07)" stroke="rgba(212,175,55,0.15)" stroke-width="0.8"/>
                <path d="M22 6L11 22H18.5L14 34L29 17H21.5L22 6Z" fill="#D4AF37" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <div class="gold-text font-serif text-sm font-bold leading-tight">Thunder Biz Setup</div>
              <div class="text-[9px] tracking-[0.2em] text-[#999999] uppercase">Dubai · UAE</div>
            </div>
          </RouterLink>
          <p class="text-[11px] text-[#AAAAAA] leading-relaxed mb-6 max-w-[220px]">
            UAE's premier business setup consultancy — turning ambitious entrepreneurs into successful business owners since 2009.
          </p>
          <!-- Social Links -->
          <div class="flex gap-2">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 bg-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.12)] rounded-lg flex items-center justify-center text-[#D4AF37] hover:bg-[rgba(212,175,55,0.14)] hover:border-[rgba(212,175,55,0.35)] transition-all duration-200 text-xs"
            >
              <span v-html="social.icon"></span>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-[9px] tracking-[0.2em] text-[#D4AF37] uppercase font-bold mb-5">Services</h3>
          <ul class="space-y-2.5">
            <li v-for="s in footerServices" :key="s">
              <RouterLink
                to="/services"
                class="text-[11px] text-[#AAAAAA] hover:text-[#D4AF37] transition-colors duration-200"
              >{{ s }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-[9px] tracking-[0.2em] text-[#D4AF37] uppercase font-bold mb-5">Company</h3>
          <ul class="space-y-2.5">
            <li v-for="link in companyLinks" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-[11px] text-[#AAAAAA] hover:text-[#D4AF37] transition-colors duration-200"
              >{{ link.label }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-[9px] tracking-[0.2em] text-[#D4AF37] uppercase font-bold mb-5">Contact</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-2.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 flex-shrink-0" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <a href="mailto:nagcse42@gmail.com" class="text-[11px] text-[#AAAAAA] hover:text-[#D4AF37] transition-colors break-all">nagcse42@gmail.com</a>
            </li>
            <li class="flex items-start gap-2.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span class="text-[11px] text-[#AAAAAA]">Dubai, United Arab Emirates</span>
            </li>
            <li class="flex items-start gap-2.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 flex-shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span class="text-[11px] text-[#AAAAAA]">Mon – Sat · 9:00 AM – 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Gold divider -->
      <div class="gold-hr mb-6"></div>

      <!-- Bottom bar -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-[10px] text-[#888888]">
          © {{ new Date().getFullYear() }} Thunder Biz Setup. All rights reserved. Registered in Dubai, UAE.
        </p>
        <div class="flex gap-5">
          <RouterLink to="/contact" class="text-[10px] text-[#888888] hover:text-[#D4AF37] transition-colors">Privacy Policy</RouterLink>
          <RouterLink to="/contact" class="text-[10px] text-[#888888] hover:text-[#D4AF37] transition-colors">Terms of Service</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerServices = [
  'Mainland Company Formation',
  'Free Zone Setup',
  'Offshore Company',
  'Golden Visa',
  'Corporate Banking',
  'Accounting & VAT',
  'PRO Services',
  'Trademark Registration'
]

const companyLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/#process', label: 'Our Process' },
  { to: '/#testimonials', label: 'Testimonials' },
  { to: '/packages', label: 'Packages' },
  { to: '/contact', label: 'Contact' }
]

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>'
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>'
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/971586418977',
    icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>'
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com',
    icon: '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'
  }
]
</script>
