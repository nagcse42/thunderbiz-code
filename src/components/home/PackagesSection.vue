<template>
  <section id="packages" class="py-24 bg-[#070707] relative overflow-hidden" aria-labelledby="packages-heading">
    <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.035) 0%, transparent 60%)" aria-hidden="true"></div>
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <div ref="headerRef" class="text-center mb-16 opacity-0">
        <span class="section-label">Pricing</span>
        <h2 id="packages-heading" class="font-serif text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Transparent, <em class="not-italic text-[#D4AF37]">Premium</em> Packages
        </h2>
        <p class="text-[14px] text-[#AAAAAA] max-w-[440px] mx-auto leading-relaxed">
          No hidden fees. No surprises. Just results that speak for themselves.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        <!-- Starter -->
        <div ref="card1Ref" class="relative bg-[rgba(255,255,255,0.02)] border border-[rgba(212,175,55,0.1)] rounded-2xl p-8 opacity-0 transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(212,175,55,0.25)]">
          <div class="text-[10px] text-[#B8B8B8] tracking-[0.18em] uppercase mb-3">Starter</div>
          <div class="font-serif text-4xl font-extrabold text-white mb-1">
            <span class="text-[16px] text-[#D4AF37] align-top mt-2 inline-block">AED </span>5,999
          </div>
          <div class="text-[11px] text-[#AAAAAA] mb-6">one-time setup fee</div>
          <div class="gold-hr mb-6"></div>
          <div class="text-[11px] text-[#C4C4C4] mb-5">Perfect for solo founders and freelancers starting their UAE journey.</div>
          <ul class="space-y-3 mb-8" role="list">
            <li v-for="f in starterFeatures" :key="f" class="flex items-center gap-2.5 text-[12px] text-[#777]">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              {{ f }}
            </li>
          </ul>
          <RouterLink to="/contact" class="btn-gold-outline block text-center text-[11px] px-5 py-3 rounded-xl tracking-widest" aria-label="Get started with Starter package">
            Get Started
          </RouterLink>
        </div>

        <!-- Professional (Featured) -->
        <div ref="card2Ref" class="relative rounded-2xl p-8 opacity-0 transition-all duration-300 hover:-translate-y-2" style="background: rgba(212,175,55,0.04); border: 1px solid rgba(212,175,55,0.45);">
          <!-- Rotating conic border -->
          <div class="pro-border-anim" aria-hidden="true"></div>
          <!-- Badge -->
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] to-[#A67C00] text-[#050505] text-[9px] font-black tracking-[0.16em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap" style="animation: badgeEntrance 0.5s ease 0.4s both">
            ⚡ Most Popular
          </div>
          <div class="text-[10px] text-[#888] tracking-[0.18em] uppercase mb-3 mt-1">Professional</div>
          <div class="font-serif text-4xl font-extrabold text-white mb-1">
            <span class="text-[16px] text-[#D4AF37] align-top mt-2 inline-block">AED </span>11,999
          </div>
          <div class="text-[11px] text-[#AAAAAA] mb-6">one-time setup fee</div>
          <div class="gold-hr mb-6"></div>
          <div class="text-[11px] text-[#C4C4C4] mb-5">Ideal for growing businesses and serious SMEs entering the UAE market.</div>
          <ul class="space-y-3 mb-8" role="list">
            <li v-for="f in proFeatures" :key="f" class="flex items-center gap-2.5 text-[12px] text-[#BDBDBD]">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              {{ f }}
            </li>
          </ul>
          <RouterLink to="/contact" class="btn-gold-primary btn-sheen block text-center text-[11px] px-5 py-3.5 rounded-xl tracking-widest" aria-label="Get started with Professional package">
            Get Started
          </RouterLink>
        </div>

        <!-- Enterprise -->
        <div ref="card3Ref" class="relative bg-[rgba(255,255,255,0.02)] border border-[rgba(212,175,55,0.1)] rounded-2xl p-8 opacity-0 transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(212,175,55,0.25)]">
          <div class="text-[10px] text-[#B8B8B8] tracking-[0.18em] uppercase mb-3">Enterprise</div>
          <div class="font-serif text-3xl font-extrabold text-white mb-1 pt-1">Custom</div>
          <div class="text-[11px] text-[#AAAAAA] mb-6">tailored pricing</div>
          <div class="gold-hr mb-6"></div>
          <div class="text-[11px] text-[#C4C4C4] mb-5">For large corporations, holding groups, and multi-entity structures.</div>
          <ul class="space-y-3 mb-8" role="list">
            <li v-for="f in enterpriseFeatures" :key="f" class="flex items-center gap-2.5 text-[12px] text-[#777]">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              {{ f }}
            </li>
          </ul>
          <RouterLink to="/contact" class="btn-gold-outline block text-center text-[11px] px-5 py-3 rounded-xl tracking-widest" aria-label="Contact us for Enterprise package">
            Contact Us
          </RouterLink>
        </div>

      </div>

      <!-- Disclaimer -->
      <p ref="disclaimerRef" class="text-center text-[10px] text-[#888888] mt-8 opacity-0">
        All packages include free initial consultation. Prices exclude government fees which vary by license type and free zone.
        <RouterLink to="/contact" class="text-[#D4AF37] hover:underline ml-1">Ask us for a detailed quote.</RouterLink>
      </p>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const headerRef     = ref<HTMLElement>()
const card1Ref      = ref<HTMLElement>()
const card2Ref      = ref<HTMLElement>()
const card3Ref      = ref<HTMLElement>()
const disclaimerRef = ref<HTMLElement>()

const starterFeatures = [
  'Trade License (Mainland)',
  '1 Investor Visa',
  'Emirates ID',
  'Bank Account Introduction',
  '30-day Post-Setup Support'
]
const proFeatures = [
  'Trade License (Any Type)',
  '3 Investor Visas',
  'Corporate Bank Account Opening',
  'VAT Registration',
  '6-Month Accounting Service',
  'PRO Services Included',
  '12-month Priority Support'
]
const enterpriseFeatures = [
  'Multi-entity Setup',
  'Unlimited Investor Visas',
  'Offshore Structure',
  'Legal Advisory Services',
  'Annual Compliance Management',
  'Dedicated Expert Team',
  'Custom SLA'
]

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  const trigger = { trigger: headerRef.value, start: 'top 82%' }
  gsap.to(headerRef.value,     { opacity: 1, y: 0, duration: 0.72, ease: 'power3.out', scrollTrigger: trigger })
  gsap.to(card1Ref.value,      { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', delay: 0.1, scrollTrigger: { trigger: card1Ref.value, start: 'top 85%' } })
  gsap.to(card2Ref.value,      { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: card2Ref.value, start: 'top 85%' } })
  gsap.to(card3Ref.value,      { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', delay: 0.3, scrollTrigger: { trigger: card3Ref.value, start: 'top 85%' } })
  gsap.to(disclaimerRef.value, { opacity: 1, y: 0, duration: 0.5,  ease: 'power3.out', scrollTrigger: { trigger: disclaimerRef.value, start: 'top 92%' } })
})
</script>
