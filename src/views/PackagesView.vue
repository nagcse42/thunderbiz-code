<template>
  <div class="pt-[68px]">
    <section class="py-24 bg-[#050505] text-center relative overflow-hidden" aria-labelledby="packages-page-heading">
      <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 65%)" aria-hidden="true"></div>
      <div class="max-w-xl mx-auto px-6">
        <span class="section-label">Pricing</span>
        <h1 id="packages-page-heading" class="font-serif text-5xl lg:text-6xl font-extrabold text-white mb-5">
          Simple, <em class="not-italic text-[#D4AF37]">Transparent</em> Pricing
        </h1>
        <p class="text-[15px] text-[#AAAAAA] leading-relaxed">
          No hidden fees. No surprises. Choose the package that fits your business — or talk to us for a custom quote.
        </p>
      </div>
    </section>
    <PackagesSection />
    <!-- What's Included -->
    <section class="py-24 relative overflow-hidden" style="background:#030510;">
      <!-- Ambient glow -->
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
           style="background: radial-gradient(ellipse at 50% 60%, rgba(212,175,55,0.05) 0%, transparent 60%);">
      </div>
      <!-- Scan lines -->
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
           style="background: repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(96,200,255,0.012) 22px, rgba(96,200,255,0.012) 23px);">
      </div>

      <div class="max-w-5xl mx-auto px-6 lg:px-8 relative">
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
               style="background:rgba(212,175,55,0.06); border:1px solid rgba(212,175,55,0.2);">
            <span class="w-1.5 h-1.5 rounded-full" style="background:#D4AF37; animation:pulseDot 1.8s ease-in-out infinite;" aria-hidden="true"></span>
            <span class="text-[9px] tracking-[0.2em] uppercase font-bold" style="color:#D4AF37;">Included in Every Package</span>
          </div>
          <h2 class="font-serif text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            What You Get,<br/>
            <span style="background:linear-gradient(135deg,#D4AF37,#F5E07A,#D4AF37); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;">No Matter Which Plan</span>
          </h2>
        </div>

        <!-- Cards -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="(inc, i) in included" :key="inc.title"
            :ref="el => { if (el) incRefs[i] = el as HTMLElement }"
            class="inc-card group relative rounded-2xl overflow-hidden cursor-default"
            style="background:rgba(8,10,28,0.9);"
            :style="`border:1px solid ${inc.color}18;`"
            @mousemove="onIncTilt($event, i)"
            @mouseleave="onIncReset(i)"
          >
            <!-- Top glow line -->
            <div class="absolute top-0 left-[10%] right-[10%] h-px" :style="`background:linear-gradient(90deg,transparent,${inc.color}88,transparent);`" aria-hidden="true"></div>
            <!-- Corner bracket top-left -->
            <div class="absolute top-3 left-3 w-4 h-4 pointer-events-none" aria-hidden="true"
                 :style="`border-top:1.5px solid ${inc.color}55; border-left:1.5px solid ${inc.color}55;`"></div>
            <!-- Corner bracket bottom-right -->
            <div class="absolute bottom-3 right-3 w-4 h-4 pointer-events-none" aria-hidden="true"
                 :style="`border-bottom:1.5px solid ${inc.color}33; border-right:1.5px solid ${inc.color}33;`"></div>
            <!-- Radial glow bg -->
            <div class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 :style="`background:radial-gradient(ellipse at 50% 0%, ${inc.color}10 0%, transparent 65%);`" aria-hidden="true"></div>

            <div class="p-7 flex flex-col items-center text-center">
              <!-- Icon ring -->
              <div class="relative mb-6">
                <div class="w-16 h-16 rounded-2xl flex items-center justify-center"
                     :style="`background:${inc.color}10; border:1px solid ${inc.color}30;`">
                  <span v-html="inc.svg" :style="`color:${inc.color};`" aria-hidden="true"></span>
                </div>
                <!-- Orbiting pulse dot -->
                <div class="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                     :style="`background:${inc.color}; box-shadow:0 0 8px ${inc.color}; animation:pulseDot 2s ease-in-out infinite ${i*0.3}s;`" aria-hidden="true"></div>
              </div>

              <h3 class="font-serif text-[15px] font-bold text-white mb-2 leading-tight">{{ inc.title }}</h3>
              <p class="text-[11px] leading-[1.75]" style="color:#6A7A8A;">{{ inc.desc }}</p>

              <!-- Bottom stat chip -->
              <div class="mt-5 px-3 py-1.5 rounded-full text-[9px] tracking-[0.12em] uppercase font-bold"
                   :style="`background:${inc.color}0D; border:1px solid ${inc.color}25; color:${inc.color};`">
                {{ inc.badge }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PackagesSection from '@/components/home/PackagesSection.vue'
import ContactSection  from '@/components/home/ContactSection.vue'

const incRefs = ref<HTMLElement[]>([])

function onIncTilt(e: MouseEvent, i: number) {
  const el = incRefs.value[i]; if (!el) return
  const rect = el.getBoundingClientRect()
  const rx = ((e.clientY - rect.top)  / rect.height - 0.5) * -12
  const ry = ((e.clientX - rect.left) / rect.width  - 0.5) *  14
  el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px) scale(1.03)`
  el.style.boxShadow = `0 24px 60px ${included[i].color}18`
  el.style.transition = 'box-shadow 0.1s, border-color 0.1s'
}
function onIncReset(i: number) {
  const el = incRefs.value[i]; if (!el) return
  el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)'
  el.style.boxShadow = 'none'
  el.style.transition = 'all 0.4s ease'
}

const svg = (d: string) => `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`

const included = [
  {
    title: 'Free Consultation',
    desc: 'Initial assessment with a senior business setup expert — zero obligation.',
    badge: 'Complimentary',
    color: '#D4AF37',
    svg: svg('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>')
  },
  {
    title: 'Full Documentation',
    desc: 'We prepare, review, and submit all required government documents on your behalf.',
    badge: 'All Forms Covered',
    color: '#60C8FF',
    svg: svg('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>')
  },
  {
    title: 'Real-time Updates',
    desc: 'Stay fully informed at every stage via WhatsApp, email, and our client portal.',
    badge: '24 / 7 Updates',
    color: '#22C55E',
    svg: svg('<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>')
  },
  {
    title: 'Money-back Guarantee',
    desc: 'If your license is rejected for any reason, we refile at absolutely no extra cost.',
    badge: '100% Protected',
    color: '#A78BFA',
    svg: svg('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>')
  },
]
</script>

<style scoped>
.inc-card {
  transform-style: preserve-3d;
  transition: all 0.4s ease;
}
</style>
