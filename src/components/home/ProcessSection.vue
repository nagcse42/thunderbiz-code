<template>
  <section id="process" ref="sectionRef" class="py-24 bg-[#070707] relative overflow-hidden" aria-labelledby="process-heading">
    <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.025) 0%, transparent 60%)" aria-hidden="true"></div>
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- Header -->
      <div ref="headerRef" class="text-center mb-20 opacity-0">
        <span class="section-label">Our Process</span>
        <h2 id="process-heading" class="font-serif text-4xl lg:text-5xl font-extrabold text-white mb-4">
          From Idea to Launch in <em class="not-italic text-[#D4AF37]">6 Steps</em>
        </h2>
        <p class="text-[14px] text-[#AAAAAA] max-w-[440px] mx-auto leading-relaxed">
          We handle every detail so you can focus entirely on building your business. Most clients are operational within 5–7 business days.
        </p>
      </div>

      <!-- Steps -->
      <div ref="stepsRef" class="relative opacity-0">
        <!-- Connector line -->
        <div class="absolute top-[28px] left-[8%] right-[8%] h-px hidden lg:block" aria-hidden="true">
          <div style="background: linear-gradient(90deg, transparent, rgba(212,175,55,0.18) 20%, rgba(212,175,55,0.18) 80%, transparent); height: 100%; position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(90deg, transparent, rgba(212,175,55,0.7), transparent); animation: scanLine 3s ease-in-out infinite;"></div>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          <div
            v-for="(step, i) in steps"
            :key="step.label"
            class="flex flex-col items-center text-center"
          >
            <!-- Number ring -->
            <div class="relative mb-5">
              <div class="step-ring-outer" aria-hidden="true"></div>
              <div class="step-ring-inner" aria-hidden="true"></div>
              <div
                class="relative z-10 w-14 h-14 rounded-full flex items-center justify-center font-serif text-lg font-extrabold text-[#D4AF37] border transition-all duration-300"
                :class="i === 0
                  ? 'bg-[rgba(212,175,55,0.14)] border-[rgba(212,175,55,0.65)]'
                  : 'bg-[rgba(212,175,55,0.05)] border-[rgba(212,175,55,0.22)]'"
                :style="i === 0 ? 'animation: stepPulse 2.5s ease-in-out infinite' : ''"
                :aria-label="`Step ${i + 1}`"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </div>
            </div>

            <!-- Icon -->
            <div class="text-[#D4AF37] mb-3 opacity-70" v-html="step.icon" aria-hidden="true"></div>

            <!-- Label -->
            <div class="text-[11px] font-bold text-[#888] tracking-wide leading-snug">{{ step.label }}</div>
            <div class="text-[10px] text-[#999999] mt-1.5 leading-relaxed hidden lg:block">{{ step.desc }}</div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div ref="ctaRef" class="text-center mt-16 opacity-0">
        <RouterLink
          to="/contact"
          class="btn-gold-primary btn-sheen inline-flex items-center gap-2.5 text-[12px] px-8 py-3.5 rounded-lg"
          aria-label="Start your business setup process"
        >
          Start Your Journey Today
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sectionRef = ref<HTMLElement>()
const headerRef  = ref<HTMLElement>()
const stepsRef   = ref<HTMLElement>()
const ctaRef     = ref<HTMLElement>()

const steps = [
  {
    label: 'Free Consultation',
    desc:  'We assess your business goals',
    icon:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
  },
  {
    label: 'Document Collection',
    desc:  'We guide you on what\'s needed',
    icon:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>'
  },
  {
    label: 'License Approval',
    desc:  'We file and manage your application',
    icon:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
  },
  {
    label: 'Visa Processing',
    desc:  'Residency visas for you and your team',
    icon:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>'
  },
  {
    label: 'Bank Account Opening',
    desc:  'Corporate account with top UAE banks',
    icon:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>'
  },
  {
    label: 'Business Launch',
    desc:  'You\'re live and ready to trade!',
    icon:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4.09 12.97a1 1 0 0 0 .91 1.03H11v8l8.91-10.97A1 1 0 0 0 19 9H13z"/></svg>'
  }
]

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(headerRef.value, { opacity: 1, y: 0, duration: 0.72, ease: 'power3.out', scrollTrigger: { trigger: headerRef.value, start: 'top 82%' } })
  gsap.to(stepsRef.value,  { opacity: 1, y: 0, duration: 0.72, ease: 'power3.out', scrollTrigger: { trigger: stepsRef.value,  start: 'top 82%' } })
  gsap.to(ctaRef.value,    { opacity: 1, y: 0, duration: 0.6,  ease: 'power3.out', scrollTrigger: { trigger: ctaRef.value,    start: 'top 88%' } })
})
</script>
