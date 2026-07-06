<template>
  <section id="testimonials" class="py-24 bg-[#050505] relative overflow-hidden" aria-labelledby="testimonials-heading">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <div ref="headerRef" class="text-center mb-16 opacity-0">
        <span class="section-label">Testimonials</span>
        <h2 id="testimonials-heading" class="font-serif text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Trusted by <em class="not-italic text-[#D4AF37]">Founders Worldwide</em>
        </h2>
        <p class="text-[14px] text-[#AAAAAA] max-w-[440px] mx-auto leading-relaxed">
          Real stories from real entrepreneurs who chose Thunder and never looked back.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="t in testimonials"
          :key="t.name"
          ref="cardRefs"
          class="group relative bg-[rgba(255,255,255,0.02)] border border-[rgba(212,175,55,0.08)] rounded-2xl p-7 opacity-0 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,175,55,0.22)]"
        >
          <!-- Large quote watermark -->
          <div class="absolute top-0 right-4 font-serif text-[90px] leading-none text-[rgba(212,175,55,0.05)] pointer-events-none select-none" aria-hidden="true">"</div>

          <!-- Stars -->
          <div class="flex gap-0.5 mb-4" aria-label="5 stars out of 5">
            <svg v-for="n in 5" :key="n" width="14" height="14" viewBox="0 0 24 24" fill="#D4AF37" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>

          <!-- Text -->
          <blockquote class="text-[12px] text-[#B8B8B8] leading-[1.85] mb-6 italic">
            "{{ t.text }}"
          </blockquote>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.22)] flex items-center justify-center text-[11px] font-extrabold text-[#D4AF37] flex-shrink-0">
              {{ t.initials }}
            </div>
            <div>
              <div class="text-[12px] font-bold text-[#BDBDBD]">{{ t.name }}</div>
              <div class="text-[10px] text-[#AAAAAA] mt-0.5">{{ t.role }}</div>
            </div>
          </div>

          <!-- Bottom hover line -->
          <div class="absolute bottom-0 left-[20%] right-[20%] h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background: linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)" aria-hidden="true"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const headerRef = ref<HTMLElement>()
const cardRefs  = ref<HTMLElement[]>([])

const testimonials = [
  {
    text:     'Thunder Biz Setup made the entire process effortless. My mainland license was ready in under 48 hours. The attention to detail is absolutely exceptional.',
    name:     'Ahmed S.',
    role:     'CEO · TechFlow DMCC',
    initials: 'AS'
  },
  {
    text:     'Company formation to bank account in 2 weeks flat. My dedicated manager handled everything. I\'d recommend Thunder to every serious investor entering the UAE.',
    name:     'Priya K.',
    role:     'Founder · LuxeRetail LLC',
    initials: 'PK'
  },
  {
    text:     'Professional, fast, and fully transparent. My Golden Visa was approved on the very first submission. Thunder is the only name I trust for UAE business setup.',
    name:     'Marcus R.',
    role:     'MD · Alpine Capital UAE',
    initials: 'MR'
  },
  {
    text:     'I had tried two other consultants before and both failed. Thunder got my free zone license approved within 3 days. Absolutely phenomenal team.',
    name:     'Sarah M.',
    role:     'Director · Nova Trading FZE',
    initials: 'SM'
  },
  {
    text:     'The VAT registration and accounting setup was seamless. Their team knew exactly what we needed without us having to explain it twice. Highly recommend.',
    name:     'David L.',
    role:     'CFO · GreenTech ME',
    initials: 'DL'
  },
  {
    text:     'From the first consultation call to our business launch, Thunder was with us every step. They truly go above and beyond what you\'d expect from a consultancy.',
    name:     'Fatima A.',
    role:     'CEO · Luxe Wellness FZ',
    initials: 'FA'
  }
]

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(headerRef.value, { opacity: 1, y: 0, duration: 0.72, ease: 'power3.out', scrollTrigger: { trigger: headerRef.value, start: 'top 82%' } })
  gsap.to(cardRefs.value,  { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', stagger: 0.09, scrollTrigger: { trigger: cardRefs.value[0], start: 'top 82%' } })
})
</script>
