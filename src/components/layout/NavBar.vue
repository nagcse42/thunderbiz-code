<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'navbar-glass' : 'bg-transparent'
    ]"
    role="banner"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between">

      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-3 group" aria-label="Thunder Biz Setup home">
        <div class="relative w-10 h-10 flex-shrink-0">
          <div class="logo-ring-1"></div>
          <div class="logo-ring-2"></div>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <rect width="40" height="40" rx="9" fill="rgba(212,175,55,0.07)" stroke="rgba(212,175,55,0.2)" stroke-width="0.8"/>
            <path d="M22 6L11 22H18.5L14 34L29 17H21.5L22 6Z" fill="#D4AF37" stroke="#F6D365" stroke-width="0.4" stroke-linejoin="round"/>
            <circle cx="22" cy="6" r="1.8" fill="#F6D365" opacity="0.85"/>
          </svg>
        </div>
        <div>
          <div class="gold-text font-serif text-base font-bold tracking-wide leading-tight">Thunder Biz Setup</div>
          <div class="text-[9px] tracking-[0.2em] text-[#AAAAAA] uppercase font-normal">Dubai · UAE</div>
        </div>
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-8" aria-label="Main navigation">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-item text-[11px] text-[#777] uppercase tracking-widest font-medium hover:text-[#D4AF37] transition-colors duration-200 relative py-1"
          :aria-label="`Navigate to ${link.label}`"
        >
          {{ link.label }}
          <span class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#D4AF37] to-[#F6D365] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 nav-underline"></span>
        </RouterLink>
      </nav>

      <!-- CTA -->
      <div class="hidden lg:flex items-center gap-3">
        <a
          href="mailto:info@thunderbizsetup.com"
          class="text-[11px] text-[#D4AF37] border border-[rgba(212,175,55,0.3)] rounded-lg px-4 py-2 hover:bg-[rgba(212,175,55,0.08)] transition-all duration-200 tracking-widest uppercase font-semibold"
          aria-label="Send us an email"
        >
          Email Us
        </a>
        <RouterLink
          to="/contact"
          class="btn-gold-primary btn-sheen px-6 py-2.5 rounded-lg"
          style="font-size:12px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:#050505 !important;"
          aria-label="Get started with your business setup"
        >
          Get Started
        </RouterLink>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="lg:hidden text-[#D4AF37] p-2"
        @click="mobileOpen = !mobileOpen"
        :aria-expanded="mobileOpen"
        aria-label="Toggle navigation menu"
      >
        <span class="block w-5 h-0.5 bg-current mb-1 transition-all duration-200" :class="mobileOpen ? 'rotate-45 translate-y-1.5' : ''"></span>
        <span class="block w-5 h-0.5 bg-current mb-1 transition-all duration-200" :class="mobileOpen ? 'opacity-0' : ''"></span>
        <span class="block w-5 h-0.5 bg-current transition-all duration-200" :class="mobileOpen ? '-rotate-45 -translate-y-1.5' : ''"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div :class="['mobile-menu navbar-glass border-t border-[rgba(212,175,55,0.1)]', mobileOpen ? 'open' : '']">
      <nav class="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-[12px] text-[#888] uppercase tracking-widest py-3 border-b border-[rgba(212,175,55,0.06)] hover:text-[#D4AF37] transition-colors"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink
          to="/contact"
          class="btn-gold-primary btn-sheen px-5 py-3 rounded-lg text-center mt-3"
          style="color:#050505 !important; font-size:12px; font-weight:800; letter-spacing:0.1em;"
          @click="mobileOpen = false"
        >
          Get Started Free
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/packages', label: 'Packages' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
]

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.nav-item:hover .nav-underline,
.nav-item.router-link-active .nav-underline {
  transform: scaleX(1);
}
.router-link-active {
  color: #D4AF37 !important;
}
</style>
