<template>
  <section id="services" ref="sectionRef" class="py-24 bg-[#050505] relative overflow-hidden" aria-labelledby="services-heading">
    <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.03) 0%, transparent 60%)" aria-hidden="true"></div>
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- Header -->
      <div ref="headerRef" class="text-center mb-16 opacity-0">
        <span class="section-label">What We Offer</span>
        <h2 id="services-heading" class="font-serif text-4xl lg:text-5xl font-extrabold text-white mb-4">
          End-to-End Business Setup <em class="not-italic text-[#D4AF37]">Services</em>
        </h2>
        <p class="text-[14px] text-[#AAAAAA] max-w-[480px] mx-auto leading-relaxed">
          Everything you need to launch and grow your business in the UAE — handled by seasoned experts so you can focus on what matters.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          ref="cardRefs"
          class="service-card group relative bg-[rgba(255,255,255,0.018)] border border-[rgba(212,175,55,0.07)] rounded-2xl cursor-pointer opacity-0 overflow-hidden"
          :style="`animation-delay: ${i * 0.06}s; transform-style: preserve-3d; transition: transform 0.18s ease, border-color 0.3s, box-shadow 0.3s;`"
          role="article"
          @mousemove="onCardTilt($event, i)"
          @mouseleave="onCardReset(i)"
        >
          <!-- Hover shimmer -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background: linear-gradient(145deg, rgba(212,175,55,0.04), transparent)" aria-hidden="true"></div>
          <!-- Bottom accent line -->
          <div class="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background: linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)" aria-hidden="true"></div>

          <!-- Illustration -->
          <div class="w-full h-[110px] overflow-hidden relative" aria-hidden="true">
            <div v-html="service.illustration" class="w-full h-full transition-transform duration-500 group-hover:scale-105"></div>
          </div>

          <!-- Content -->
          <div class="p-5">
            <!-- Icon -->
            <div class="w-10 h-10 bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.14)] rounded-xl flex items-center justify-center text-[#D4AF37] mb-4 transition-all duration-300 group-hover:bg-[rgba(212,175,55,0.16)] group-hover:border-[rgba(212,175,55,0.3)]">
              <span v-html="service.icon" aria-hidden="true"></span>
            </div>
            <h3 class="text-[13px] font-bold text-[#EAEAEA] mb-2 tracking-wide">{{ service.title }}</h3>
            <p class="text-[11px] text-[#AAAAAA] leading-relaxed">{{ service.desc }}</p>
            <!-- Arrow -->
            <div class="mt-4 flex items-center gap-1.5 text-[10px] text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
              <span class="tracking-widest uppercase font-semibold">Learn more</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div ref="ctaRef" class="text-center mt-12 opacity-0">
        <RouterLink
          to="/services"
          class="btn-gold-outline inline-flex items-center gap-2.5 text-[12px] px-8 py-3.5 rounded-lg"
          aria-label="View all our services"
        >
          View All Services
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

function onCardTilt(e: MouseEvent, idx: number) {
  const card = (cardRefs.value as HTMLElement[])[idx]
  if (!card) return
  const rect = card.getBoundingClientRect()
  const rx = ((e.clientY - rect.top)  / rect.height - 0.5) * -12
  const ry = ((e.clientX - rect.left) / rect.width  - 0.5) *  14
  card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px) scale(1.02)`
  card.style.borderColor = 'rgba(212,175,55,0.4)'
  card.style.boxShadow = '0 16px 50px rgba(212,175,55,0.1), 0 0 0 1px rgba(212,175,55,0.15)'
}
function onCardReset(idx: number) {
  const card = (cardRefs.value as HTMLElement[])[idx]
  if (!card) return
  card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)'
  card.style.borderColor = 'rgba(212,175,55,0.07)'
  card.style.boxShadow = 'none'
}
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sectionRef = ref<HTMLElement>()
const headerRef  = ref<HTMLElement>()
const ctaRef     = ref<HTMLElement>()
const cardRefs   = ref<HTMLElement[]>([])

const services = [
  {
    title: 'Mainland Company Formation',
    desc:  'Trade anywhere in UAE with full market access via DED trade license.',
    icon:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
    illustration: `<svg width="100%" height="110" viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="110" fill="#0A0C18"/>
      <rect width="280" height="110" fill="url(#mGlow)" opacity="0.6"/>
      <defs>
        <radialGradient id="mGlow" cx="50%" cy="100%" r="70%">
          <stop offset="0%" stop-color="rgba(212,175,55,0.18)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
      </defs>
      <!-- Ground -->
      <rect x="0" y="95" width="280" height="15" fill="#060810"/>
      <rect x="0" y="94" width="280" height="1" fill="rgba(212,175,55,0.2)"/>
      <!-- Far buildings -->
      <rect x="10" y="70" width="18" height="25" fill="#131828" rx="1"/>
      <rect x="14" y="74" width="4" height="3" rx="0.3" fill="rgba(255,220,100,0.3)"/>
      <rect x="20" y="74" width="4" height="3" rx="0.3" fill="rgba(255,220,100,0.25)"/>
      <rect x="240" y="68" width="22" height="27" fill="#131828" rx="1"/>
      <rect x="244" y="72" width="4" height="3" rx="0.3" fill="rgba(255,220,100,0.3)"/>
      <rect x="250" y="72" width="4" height="3" rx="0.3" fill="rgba(255,220,100,0.2)"/>
      <!-- Main DED building (center) -->
      <rect x="100" y="30" width="80" height="65" fill="#1C2240" rx="2"/>
      <rect x="115" y="20" width="50" height="12" fill="#1A1F3A" rx="1"/>
      <rect x="128" y="12" width="24" height="10" fill="#161B33" rx="1"/>
      <!-- Building windows grid -->
      <rect x="108" y="38" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.55)"/>
      <rect x="120" y="38" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.45)"/>
      <rect x="132" y="38" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.6)"/>
      <rect x="144" y="38" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.4)"/>
      <rect x="156" y="38" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.5)"/>
      <rect x="168" y="38" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.35)"/>
      <rect x="108" y="50" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.4)"/>
      <rect x="120" y="50" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.6)"/>
      <rect x="132" y="50" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.35)"/>
      <rect x="144" y="50" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.55)"/>
      <rect x="156" y="50" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.45)"/>
      <rect x="168" y="50" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.5)"/>
      <rect x="108" y="62" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.5)"/>
      <rect x="120" y="62" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.35)"/>
      <rect x="132" y="62" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.55)"/>
      <rect x="144" y="62" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.4)"/>
      <rect x="156" y="62" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.6)"/>
      <rect x="168" y="62" width="8" height="5" rx="0.5" fill="rgba(255,220,100,0.3)"/>
      <!-- Entrance -->
      <rect x="128" y="80" width="24" height="15" fill="#0D1020" rx="1"/>
      <rect x="135" y="80" width="10" height="15" fill="#0A0D18"/>
      <!-- Flagpole -->
      <line x1="140" y1="4" x2="140" y2="12" stroke="rgba(212,175,55,0.7)" stroke-width="1"/>
      <rect x="140" y="4" width="12" height="7" fill="rgba(212,175,55,0.5)" rx="0.5"/>
      <!-- Left wing -->
      <rect x="60" y="50" width="42" height="45" fill="#161C35" rx="1"/>
      <rect x="66" y="56" width="6" height="4" rx="0.3" fill="rgba(255,220,100,0.4)"/>
      <rect x="76" y="56" width="6" height="4" rx="0.3" fill="rgba(255,220,100,0.35)"/>
      <rect x="86" y="56" width="6" height="4" rx="0.3" fill="rgba(255,220,100,0.45)"/>
      <rect x="66" y="66" width="6" height="4" rx="0.3" fill="rgba(255,220,100,0.5)"/>
      <rect x="76" y="66" width="6" height="4" rx="0.3" fill="rgba(255,220,100,0.3)"/>
      <!-- Right wing -->
      <rect x="178" y="50" width="42" height="45" fill="#161C35" rx="1"/>
      <rect x="184" y="56" width="6" height="4" rx="0.3" fill="rgba(255,220,100,0.4)"/>
      <rect x="194" y="56" width="6" height="4" rx="0.3" fill="rgba(255,220,100,0.5)"/>
      <rect x="204" y="56" width="6" height="4" rx="0.3" fill="rgba(255,220,100,0.35)"/>
      <rect x="184" y="66" width="6" height="4" rx="0.3" fill="rgba(255,220,100,0.45)"/>
      <!-- DED label -->
      <rect x="112" y="25" width="56" height="6" rx="1" fill="rgba(212,175,55,0.12)"/>
      <rect x="118" y="27" width="44" height="2" rx="0.5" fill="rgba(212,175,55,0.4)"/>
    </svg>`
  },
  {
    title: 'Free Zone Setup',
    desc:  '100% foreign ownership, zero tax, and 40+ free zones to choose from.',
    icon:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    illustration: `<svg width="100%" height="110" viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="110" fill="#070D14"/>
      <defs>
        <radialGradient id="fzGlow" cx="50%" cy="80%" r="60%">
          <stop offset="0%" stop-color="rgba(30,160,212,0.12)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
      </defs>
      <rect width="280" height="110" fill="url(#fzGlow)"/>
      <!-- Ground -->
      <rect x="0" y="94" width="280" height="16" fill="#040A10"/>
      <rect x="0" y="93" width="280" height="1" fill="rgba(212,175,55,0.15)"/>
      <!-- Road markings -->
      <rect x="100" y="94" width="80" height="2" fill="rgba(212,175,55,0.08)"/>
      <rect x="135" y="95" width="10" height="1" fill="rgba(212,175,55,0.3)"/>
      <!-- Free Zone warehouses -->
      <rect x="20" y="62" width="55" height="32" fill="#0F1A24" rx="1"/>
      <rect x="20" y="58" width="55" height="6" fill="#122030" rx="1"/>
      <rect x="26" y="62" width="18" height="20" fill="#0A1520" rx="0.5"/>
      <rect x="48" y="62" width="18" height="20" fill="#0A1520" rx="0.5"/>
      <rect x="26" y="60" width="18" height="2" fill="rgba(212,175,55,0.3)"/>
      <rect x="48" y="60" width="18" height="2" fill="rgba(212,175,55,0.2)"/>
      <!-- Warehouse 2 -->
      <rect x="113" y="55" width="55" height="39" fill="#0E1E2A" rx="1"/>
      <rect x="113" y="50" width="55" height="7" fill="#112030" rx="1"/>
      <rect x="119" y="55" width="18" height="22" fill="#0A1520" rx="0.5"/>
      <rect x="141" y="55" width="18" height="22" fill="#0A1520" rx="0.5"/>
      <rect x="119" y="52" width="18" height="2" fill="rgba(212,175,55,0.4)"/>
      <rect x="141" y="52" width="18" height="2" fill="rgba(212,175,55,0.25)"/>
      <!-- Warehouse 3 -->
      <rect x="205" y="62" width="55" height="32" fill="#0F1A24" rx="1"/>
      <rect x="205" y="58" width="55" height="6" fill="#122030" rx="1"/>
      <rect x="211" y="62" width="18" height="20" fill="#0A1520" rx="0.5"/>
      <rect x="233" y="62" width="18" height="20" fill="#0A1520" rx="0.5"/>
      <rect x="211" y="60" width="18" height="2" fill="rgba(212,175,55,0.3)"/>
      <!-- Cranes -->
      <line x1="75" y1="35" x2="75" y2="62" stroke="rgba(212,175,55,0.35)" stroke-width="1.5"/>
      <line x1="55" y1="35" x2="95" y2="35" stroke="rgba(212,175,55,0.35)" stroke-width="1.5"/>
      <line x1="75" y1="35" x2="75" y2="55" stroke="rgba(212,175,55,0.2)" stroke-width="0.8" stroke-dasharray="3,2"/>
      <!-- Globe icon top right -->
      <circle cx="240" cy="28" r="16" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.25)" stroke-width="1"/>
      <ellipse cx="240" cy="28" rx="8" ry="16" fill="none" stroke="rgba(212,175,55,0.2)" stroke-width="0.8"/>
      <line x1="224" y1="28" x2="256" y2="28" stroke="rgba(212,175,55,0.2)" stroke-width="0.8"/>
      <line x1="226" y1="21" x2="254" y2="21" stroke="rgba(212,175,55,0.12)" stroke-width="0.5"/>
      <line x1="226" y1="35" x2="254" y2="35" stroke="rgba(212,175,55,0.12)" stroke-width="0.5"/>
      <!-- 100% tag -->
      <rect x="22" y="20" width="50" height="18" rx="4" fill="rgba(212,175,55,0.1)" stroke="rgba(212,175,55,0.3)" stroke-width="0.8"/>
      <text x="47" y="32" text-anchor="middle" font-size="9" fill="#D4AF37" font-weight="bold" font-family="sans-serif">100% OWN</text>
      <!-- Zero tax badge -->
      <rect x="120" y="20" width="40" height="16" rx="3" fill="rgba(74,222,128,0.08)" stroke="rgba(74,222,128,0.3)" stroke-width="0.8"/>
      <text x="140" y="31" text-anchor="middle" font-size="8" fill="#4ADE80" font-weight="bold" font-family="sans-serif">0% TAX</text>
    </svg>`
  },
  {
    title: 'Offshore Company',
    desc:  'International corporate structure with a prestigious UAE presence.',
    icon:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    illustration: `<svg width="100%" height="110" viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="110" fill="#060810"/>
      <defs>
        <radialGradient id="offGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(100,120,212,0.1)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
      </defs>
      <rect width="280" height="110" fill="url(#offGlow)"/>
      <!-- Globe -->
      <circle cx="140" cy="55" r="44" fill="rgba(212,175,55,0.04)" stroke="rgba(212,175,55,0.2)" stroke-width="1"/>
      <ellipse cx="140" cy="55" rx="22" ry="44" fill="none" stroke="rgba(212,175,55,0.15)" stroke-width="0.8"/>
      <ellipse cx="140" cy="55" rx="44" ry="18" fill="none" stroke="rgba(212,175,55,0.15)" stroke-width="0.8"/>
      <line x1="96" y1="55" x2="184" y2="55" stroke="rgba(212,175,55,0.15)" stroke-width="0.8"/>
      <line x1="100" y1="37" x2="180" y2="37" stroke="rgba(212,175,55,0.1)" stroke-width="0.5"/>
      <line x1="100" y1="73" x2="180" y2="73" stroke="rgba(212,175,55,0.1)" stroke-width="0.5"/>
      <!-- Continents simplified -->
      <ellipse cx="122" cy="46" rx="12" ry="8" fill="rgba(212,175,55,0.1)" stroke="rgba(212,175,55,0.2)" stroke-width="0.5"/>
      <ellipse cx="155" cy="60" rx="10" ry="7" fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.18)" stroke-width="0.5"/>
      <ellipse cx="135" cy="65" rx="6" ry="4" fill="rgba(212,175,55,0.07)" stroke="rgba(212,175,55,0.15)" stroke-width="0.5"/>
      <!-- Location pins -->
      <circle cx="122" cy="44" r="3" fill="rgba(212,175,55,0.8)"/>
      <line x1="122" y1="47" x2="122" y2="53" stroke="rgba(212,175,55,0.5)" stroke-width="0.8"/>
      <circle cx="155" cy="58" r="3" fill="rgba(212,175,55,0.6)"/>
      <line x1="155" y1="61" x2="155" y2="67" stroke="rgba(212,175,55,0.4)" stroke-width="0.8"/>
      <!-- Connection lines between pins -->
      <path d="M125 44 Q140 30 152 58" stroke="rgba(212,175,55,0.3)" stroke-width="0.8" stroke-dasharray="3,2" fill="none"/>
      <!-- Stars -->
      <circle cx="30" cy="15" r="1" fill="rgba(255,255,255,0.4)"/>
      <circle cx="60" cy="8" r="0.8" fill="rgba(255,255,255,0.35)"/>
      <circle cx="220" cy="12" r="1" fill="rgba(255,255,255,0.4)"/>
      <circle cx="250" cy="20" r="0.8" fill="rgba(255,255,255,0.3)"/>
      <!-- UAE flag hint bottom right -->
      <rect x="225" y="75" width="40" height="25" rx="2" fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.2)" stroke-width="0.8"/>
      <rect x="225" y="75" width="8" height="25" rx="1" fill="rgba(212,175,55,0.2)"/>
      <text x="244" y="91" text-anchor="middle" font-size="7" fill="rgba(212,175,55,0.7)" font-family="sans-serif">UAE</text>
    </svg>`
  },
  {
    title: 'Golden Visa',
    desc:  '10-year UAE residency for investors, founders, and their families.',
    icon:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>',
    illustration: `<svg width="100%" height="110" viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="110" fill="#0A0800"/>
      <defs>
        <radialGradient id="gvGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="rgba(212,175,55,0.18)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
        <linearGradient id="gvCard" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1A1400"/>
          <stop offset="50%" stop-color="#2A2000"/>
          <stop offset="100%" stop-color="#1A1400"/>
        </linearGradient>
      </defs>
      <rect width="280" height="110" fill="url(#gvGlow)"/>
      <!-- Passport book -->
      <rect x="72" y="14" width="136" height="86" rx="6" fill="#0D1A0D" stroke="rgba(212,175,55,0.3)" stroke-width="1"/>
      <rect x="72" y="14" width="12" height="86" rx="3" fill="rgba(212,175,55,0.15)"/>
      <!-- Passport inner page -->
      <rect x="88" y="20" width="114" height="74" rx="3" fill="url(#gvCard)" stroke="rgba(212,175,55,0.12)" stroke-width="0.5"/>
      <!-- UAE emblem -->
      <circle cx="145" cy="45" r="14" fill="none" stroke="rgba(212,175,55,0.4)" stroke-width="1"/>
      <circle cx="145" cy="45" r="10" fill="rgba(212,175,55,0.06)"/>
      <!-- Falcon silhouette simplified -->
      <path d="M140 40 Q145 36 150 40 Q148 50 145 52 Q142 50 140 40Z" fill="rgba(212,175,55,0.35)"/>
      <path d="M136 43 Q140 40 145 38" stroke="rgba(212,175,55,0.4)" stroke-width="1" fill="none"/>
      <path d="M154 43 Q150 40 145 38" stroke="rgba(212,175,55,0.4)" stroke-width="1" fill="none"/>
      <!-- UAE text -->
      <text x="145" y="67" text-anchor="middle" font-size="7" fill="rgba(212,175,55,0.7)" font-family="serif" letter-spacing="2">UNITED ARAB EMIRATES</text>
      <!-- 10 YEAR stamp -->
      <rect x="96" y="72" width="42" height="16" rx="3" fill="rgba(212,175,55,0.1)" stroke="rgba(212,175,55,0.5)" stroke-width="1"/>
      <text x="117" y="83" text-anchor="middle" font-size="8" fill="#D4AF37" font-weight="bold" font-family="sans-serif">10 YEARS</text>
      <!-- Stars scattered -->
      <circle cx="30" cy="20" r="1.2" fill="rgba(212,175,55,0.5)"/>
      <circle cx="50" cy="40" r="0.8" fill="rgba(212,175,55,0.35)"/>
      <circle cx="240" cy="25" r="1" fill="rgba(212,175,55,0.4)"/>
      <circle cx="255" cy="55" r="0.8" fill="rgba(212,175,55,0.3)"/>
      <circle cx="230" cy="80" r="1.2" fill="rgba(212,175,55,0.45)"/>
      <!-- Gold shimmer line -->
      <rect x="72" y="12" width="136" height="2" rx="1" fill="rgba(212,175,55,0.5)"/>
    </svg>`
  },
  {
    title: 'Corporate Banking',
    desc:  "Business accounts opened with UAE's leading banks — fast and guaranteed.",
    icon:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>',
    illustration: `<svg width="100%" height="110" viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="110" fill="#08070A"/>
      <defs>
        <radialGradient id="bnkGlow" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stop-color="rgba(180,140,55,0.14)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1C1500"/>
          <stop offset="100%" stop-color="#2E2200"/>
        </linearGradient>
      </defs>
      <rect width="280" height="110" fill="url(#bnkGlow)"/>
      <!-- Bank card 1 (back) -->
      <rect x="55" y="35" width="105" height="65" rx="6" fill="#161010" stroke="rgba(212,175,55,0.2)" stroke-width="1" transform="rotate(-5 107 67)"/>
      <!-- Bank card 2 (front) -->
      <rect x="65" y="28" width="105" height="65" rx="6" fill="url(#cardGrad)" stroke="rgba(212,175,55,0.45)" stroke-width="1"/>
      <!-- Card chip -->
      <rect x="80" y="42" width="20" height="16" rx="2" fill="rgba(212,175,55,0.25)" stroke="rgba(212,175,55,0.5)" stroke-width="0.8"/>
      <line x1="80" y1="50" x2="100" y2="50" stroke="rgba(212,175,55,0.3)" stroke-width="0.5"/>
      <line x1="90" y1="42" x2="90" y2="58" stroke="rgba(212,175,55,0.3)" stroke-width="0.5"/>
      <!-- Card contactless -->
      <path d="M110 46 Q118 50 110 54" stroke="rgba(212,175,55,0.4)" stroke-width="1" fill="none"/>
      <path d="M114 43 Q125 50 114 57" stroke="rgba(212,175,55,0.3)" stroke-width="1" fill="none"/>
      <path d="M118 40 Q132 50 118 60" stroke="rgba(212,175,55,0.2)" stroke-width="1" fill="none"/>
      <!-- Card number -->
      <rect x="78" y="65" width="12" height="5" rx="1" fill="rgba(212,175,55,0.2)"/>
      <rect x="94" y="65" width="12" height="5" rx="1" fill="rgba(212,175,55,0.2)"/>
      <rect x="110" y="65" width="12" height="5" rx="1" fill="rgba(212,175,55,0.2)"/>
      <rect x="126" y="65" width="12" height="5" rx="1" fill="rgba(212,175,55,0.25)"/>
      <!-- Card name line -->
      <rect x="78" y="74" width="40" height="3" rx="1" fill="rgba(212,175,55,0.15)"/>
      <!-- Bank logos cluster right -->
      <circle cx="210" cy="45" r="18" fill="rgba(212,175,55,0.05)" stroke="rgba(212,175,55,0.2)" stroke-width="0.8"/>
      <text x="210" y="49" text-anchor="middle" font-size="9" fill="rgba(212,175,55,0.6)" font-weight="bold" font-family="sans-serif">NBD</text>
      <circle cx="245" cy="65" r="14" fill="rgba(212,175,55,0.04)" stroke="rgba(212,175,55,0.15)" stroke-width="0.8"/>
      <text x="245" y="69" text-anchor="middle" font-size="8" fill="rgba(212,175,55,0.5)" font-weight="bold" font-family="sans-serif">FAB</text>
      <circle cx="215" cy="82" r="12" fill="rgba(212,175,55,0.04)" stroke="rgba(212,175,55,0.12)" stroke-width="0.8"/>
      <text x="215" y="86" text-anchor="middle" font-size="7" fill="rgba(212,175,55,0.45)" font-weight="bold" font-family="sans-serif">ADCB</text>
      <!-- Tick mark -->
      <circle cx="148" cy="88" r="8" fill="rgba(74,222,128,0.1)" stroke="rgba(74,222,128,0.4)" stroke-width="1"/>
      <path d="M144 88 L147 91 L153 85" stroke="#4ADE80" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    title: 'Accounting & VAT',
    desc:  'Full-service bookkeeping, VAT filing, and FTA compliance management.',
    icon:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    illustration: `<svg width="100%" height="110" viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="110" fill="#06080A"/>
      <defs>
        <radialGradient id="vatGlow" cx="30%" cy="60%" r="55%">
          <stop offset="0%" stop-color="rgba(212,175,55,0.1)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
      </defs>
      <rect width="280" height="110" fill="url(#vatGlow)"/>
      <!-- Ledger/book -->
      <rect x="30" y="22" width="80" height="72" rx="3" fill="#0E1218" stroke="rgba(212,175,55,0.2)" stroke-width="0.8"/>
      <rect x="30" y="22" width="8" height="72" rx="2" fill="rgba(212,175,55,0.15)"/>
      <!-- Ledger lines -->
      <line x1="40" y1="38" x2="104" y2="38" stroke="rgba(212,175,55,0.12)" stroke-width="0.5"/>
      <line x1="40" y1="48" x2="104" y2="48" stroke="rgba(212,175,55,0.12)" stroke-width="0.5"/>
      <line x1="40" y1="58" x2="104" y2="58" stroke="rgba(212,175,55,0.12)" stroke-width="0.5"/>
      <line x1="40" y1="68" x2="104" y2="68" stroke="rgba(212,175,55,0.12)" stroke-width="0.5"/>
      <line x1="40" y1="78" x2="104" y2="78" stroke="rgba(212,175,55,0.12)" stroke-width="0.5"/>
      <line x1="40" y1="88" x2="104" y2="88" stroke="rgba(212,175,55,0.12)" stroke-width="0.5"/>
      <!-- Ledger column dividers -->
      <line x1="80" y1="30" x2="80" y2="90" stroke="rgba(212,175,55,0.1)" stroke-width="0.5"/>
      <!-- Numbers/entries -->
      <rect x="42" y="42" width="24" height="2" rx="0.5" fill="rgba(255,255,255,0.15)"/>
      <rect x="83" y="42" width="16" height="2" rx="0.5" fill="rgba(74,222,128,0.4)"/>
      <rect x="42" y="52" width="20" height="2" rx="0.5" fill="rgba(255,255,255,0.12)"/>
      <rect x="83" y="52" width="14" height="2" rx="0.5" fill="rgba(74,222,128,0.35)"/>
      <rect x="42" y="62" width="26" height="2" rx="0.5" fill="rgba(255,255,255,0.15)"/>
      <rect x="83" y="62" width="18" height="2" rx="0.5" fill="rgba(239,68,68,0.4)"/>
      <rect x="42" y="72" width="18" height="2" rx="0.5" fill="rgba(255,255,255,0.12)"/>
      <rect x="83" y="72" width="14" height="2" rx="0.5" fill="rgba(74,222,128,0.4)"/>
      <rect x="42" y="82" width="22" height="2" rx="0.5" fill="rgba(255,255,255,0.1)"/>
      <rect x="83" y="82" width="16" height="2" rx="0.5" fill="rgba(74,222,128,0.3)"/>
      <!-- Bar chart -->
      <rect x="130" y="88" width="12" height="18" rx="1" fill="rgba(212,175,55,0.3)" transform="translate(0,-18)"/>
      <rect x="148" y="88" width="12" height="30" rx="1" fill="rgba(212,175,55,0.45)" transform="translate(0,-30)"/>
      <rect x="166" y="88" width="12" height="22" rx="1" fill="rgba(212,175,55,0.35)" transform="translate(0,-22)"/>
      <rect x="184" y="88" width="12" height="40" rx="1" fill="rgba(212,175,55,0.55)" transform="translate(0,-40)"/>
      <rect x="202" y="88" width="12" height="34" rx="1" fill="rgba(212,175,55,0.45)" transform="translate(0,-34)"/>
      <line x1="128" y1="88" x2="218" y2="88" stroke="rgba(212,175,55,0.2)" stroke-width="0.8"/>
      <!-- VAT badge -->
      <rect x="225" y="20" width="38" height="20" rx="4" fill="rgba(212,175,55,0.1)" stroke="rgba(212,175,55,0.4)" stroke-width="1"/>
      <text x="244" y="33" text-anchor="middle" font-size="9" fill="#D4AF37" font-weight="bold" font-family="sans-serif">5% VAT</text>
      <!-- FTA badge -->
      <rect x="225" y="48" width="38" height="16" rx="3" fill="rgba(74,222,128,0.06)" stroke="rgba(74,222,128,0.3)" stroke-width="0.8"/>
      <text x="244" y="59" text-anchor="middle" font-size="8" fill="#4ADE80" font-weight="bold" font-family="sans-serif">FTA ✓</text>
    </svg>`
  },
  {
    title: 'PRO Services',
    desc:  'Government liaison, visa stamping, and document processing handled for you.',
    icon:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    illustration: `<svg width="100%" height="110" viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="110" fill="#080A0A"/>
      <defs>
        <radialGradient id="proGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="rgba(212,175,55,0.1)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
      </defs>
      <rect width="280" height="110" fill="url(#proGlow)"/>
      <!-- Document stack -->
      <rect x="55" y="30" width="72" height="72" rx="3" fill="#0D1010" stroke="rgba(212,175,55,0.15)" stroke-width="0.8" transform="rotate(4 91 66)"/>
      <rect x="50" y="26" width="72" height="72" rx="3" fill="#111418" stroke="rgba(212,175,55,0.2)" stroke-width="0.8" transform="rotate(2 86 62)"/>
      <rect x="45" y="22" width="72" height="72" rx="3" fill="#141820" stroke="rgba(212,175,55,0.3)" stroke-width="1"/>
      <!-- Document lines -->
      <line x1="55" y1="38" x2="107" y2="38" stroke="rgba(212,175,55,0.2)" stroke-width="0.8"/>
      <line x1="55" y1="47" x2="107" y2="47" stroke="rgba(212,175,55,0.15)" stroke-width="0.5"/>
      <line x1="55" y1="56" x2="107" y2="56" stroke="rgba(212,175,55,0.15)" stroke-width="0.5"/>
      <line x1="55" y1="65" x2="90"  y2="65" stroke="rgba(212,175,55,0.15)" stroke-width="0.5"/>
      <line x1="55" y1="74" x2="98"  y2="74" stroke="rgba(212,175,55,0.15)" stroke-width="0.5"/>
      <!-- Signature line -->
      <line x1="55" y1="84" x2="107" y2="84" stroke="rgba(212,175,55,0.1)" stroke-width="0.5"/>
      <path d="M58 82 Q65 78 72 82 Q78 86 85 82" stroke="rgba(212,175,55,0.5)" stroke-width="1" fill="none"/>
      <!-- Approved stamp — centered between doc (ends ~117) and visa (starts 178) → midpoint 148 -->
      <circle cx="148" cy="58" r="26" fill="rgba(212,175,55,0.04)" stroke="rgba(212,175,55,0.5)" stroke-width="2" stroke-dasharray="4,3"/>
      <circle cx="148" cy="58" r="20" fill="none" stroke="rgba(212,175,55,0.2)" stroke-width="0.8"/>
      <text x="148" y="55" text-anchor="middle" font-size="9" fill="rgba(212,175,55,0.85)" font-weight="bold" font-family="sans-serif" letter-spacing="1">APPROVED</text>
      <text x="148" y="67" text-anchor="middle" font-size="7" fill="rgba(212,175,55,0.5)" font-family="sans-serif">GOVERNMENT</text>
      <!-- Visa sticker -->
      <rect x="178" y="24" width="72" height="50" rx="3" fill="#0E1418" stroke="rgba(212,175,55,0.25)" stroke-width="0.8"/>
      <rect x="178" y="24" width="72" height="10" rx="2" fill="rgba(212,175,55,0.12)"/>
      <text x="214" y="32" text-anchor="middle" font-size="7" fill="rgba(212,175,55,0.7)" font-family="sans-serif" letter-spacing="1">UAE VISA</text>
      <rect x="186" y="40" width="20" height="26" rx="1" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.15)" stroke-width="0.5"/>
      <!-- Biometric dots -->
      <circle cx="196" cy="47" r="4" fill="rgba(212,175,55,0.15)"/>
      <line x1="188" y1="56" x2="204" y2="56" stroke="rgba(212,175,55,0.2)" stroke-width="0.5"/>
      <line x1="188" y1="60" x2="204" y2="60" stroke="rgba(212,175,55,0.15)" stroke-width="0.5"/>
      <rect x="212" y="40" width="32" height="4" rx="0.5" fill="rgba(255,255,255,0.08)"/>
      <rect x="212" y="48" width="28" height="3" rx="0.5" fill="rgba(255,255,255,0.06)"/>
      <rect x="212" y="55" width="24" height="3" rx="0.5" fill="rgba(255,255,255,0.06)"/>
      <rect x="212" y="62" width="30" height="3" rx="0.5" fill="rgba(255,255,255,0.05)"/>
      <!-- Barcode -->
      <rect x="180" y="80" width="68" height="14" rx="1" fill="rgba(212,175,55,0.04)" stroke="rgba(212,175,55,0.15)" stroke-width="0.5"/>
      <line x1="184" y1="82" x2="184" y2="92" stroke="rgba(212,175,55,0.3)" stroke-width="1.5"/>
      <line x1="187" y1="82" x2="187" y2="92" stroke="rgba(212,175,55,0.2)" stroke-width="0.8"/>
      <line x1="190" y1="82" x2="190" y2="92" stroke="rgba(212,175,55,0.35)" stroke-width="1"/>
      <line x1="193" y1="82" x2="193" y2="92" stroke="rgba(212,175,55,0.15)" stroke-width="0.5"/>
      <line x1="196" y1="82" x2="196" y2="92" stroke="rgba(212,175,55,0.3)" stroke-width="1.2"/>
      <line x1="199" y1="82" x2="199" y2="92" stroke="rgba(212,175,55,0.2)" stroke-width="0.8"/>
      <line x1="202" y1="82" x2="202" y2="92" stroke="rgba(212,175,55,0.4)" stroke-width="1.5"/>
      <line x1="205" y1="82" x2="205" y2="92" stroke="rgba(212,175,55,0.15)" stroke-width="0.5"/>
      <line x1="208" y1="82" x2="208" y2="92" stroke="rgba(212,175,55,0.25)" stroke-width="1"/>
      <line x1="211" y1="82" x2="211" y2="92" stroke="rgba(212,175,55,0.35)" stroke-width="1.2"/>
      <line x1="214" y1="82" x2="214" y2="92" stroke="rgba(212,175,55,0.2)" stroke-width="0.8"/>
      <line x1="217" y1="82" x2="217" y2="92" stroke="rgba(212,175,55,0.3)" stroke-width="1"/>
      <line x1="220" y1="82" x2="220" y2="92" stroke="rgba(212,175,55,0.15)" stroke-width="0.5"/>
      <line x1="223" y1="82" x2="223" y2="92" stroke="rgba(212,175,55,0.4)" stroke-width="1.5"/>
      <line x1="226" y1="82" x2="226" y2="92" stroke="rgba(212,175,55,0.2)" stroke-width="0.8"/>
      <line x1="229" y1="82" x2="229" y2="92" stroke="rgba(212,175,55,0.3)" stroke-width="1"/>
      <line x1="232" y1="82" x2="232" y2="92" stroke="rgba(212,175,55,0.15)" stroke-width="0.5"/>
      <line x1="235" y1="82" x2="235" y2="92" stroke="rgba(212,175,55,0.35)" stroke-width="1.2"/>
      <line x1="238" y1="82" x2="238" y2="92" stroke="rgba(212,175,55,0.25)" stroke-width="0.8"/>
      <line x1="241" y1="82" x2="241" y2="92" stroke="rgba(212,175,55,0.3)" stroke-width="1.5"/>
      <line x1="244" y1="82" x2="244" y2="92" stroke="rgba(212,175,55,0.15)" stroke-width="0.5"/>
    </svg>`
  },
  {
    title: 'Trademark Registration',
    desc:  'Protect your brand across the UAE and GCC region with expert IP support.',
    icon:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    illustration: `<svg width="100%" height="110" viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="110" fill="#080608"/>
      <defs>
        <radialGradient id="tmGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="rgba(212,175,55,0.15)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
      </defs>
      <rect width="280" height="110" fill="url(#tmGlow)"/>
      <!-- Shield outer -->
      <path d="M140 8 L180 22 L180 58 Q180 85 140 98 Q100 85 100 58 L100 22 Z" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.4)" stroke-width="1.5"/>
      <!-- Shield inner -->
      <path d="M140 18 L168 30 L168 56 Q168 76 140 86 Q112 76 112 56 L112 30 Z" fill="rgba(212,175,55,0.04)" stroke="rgba(212,175,55,0.2)" stroke-width="0.8"/>
      <!-- TM symbol inside shield -->
      <text x="140" y="60" text-anchor="middle" font-size="26" fill="rgba(212,175,55,0.7)" font-weight="bold" font-family="serif">™</text>
      <!-- Certificate left -->
      <rect x="20" y="30" width="64" height="50" rx="3" fill="#0E1015" stroke="rgba(212,175,55,0.2)" stroke-width="0.8"/>
      <rect x="20" y="30" width="64" height="10" rx="2" fill="rgba(212,175,55,0.08)"/>
      <text x="52" y="38" text-anchor="middle" font-size="6" fill="rgba(212,175,55,0.6)" font-family="sans-serif" letter-spacing="0.5">CERTIFICATE</text>
      <line x1="28" y1="48" x2="76" y2="48" stroke="rgba(212,175,55,0.15)" stroke-width="0.5"/>
      <line x1="28" y1="55" x2="76" y2="55" stroke="rgba(212,175,55,0.12)" stroke-width="0.5"/>
      <line x1="28" y1="62" x2="68" y2="62" stroke="rgba(212,175,55,0.12)" stroke-width="0.5"/>
      <circle cx="52" cy="72" r="8" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.3)" stroke-width="0.8"/>
      <text x="52" y="75" text-anchor="middle" font-size="7" fill="rgba(212,175,55,0.5)" font-family="sans-serif">®</text>
      <!-- Certificate right -->
      <rect x="196" y="30" width="64" height="50" rx="3" fill="#0E1015" stroke="rgba(212,175,55,0.2)" stroke-width="0.8"/>
      <rect x="196" y="30" width="64" height="10" rx="2" fill="rgba(212,175,55,0.08)"/>
      <text x="228" y="38" text-anchor="middle" font-size="6" fill="rgba(212,175,55,0.6)" font-family="sans-serif" letter-spacing="0.5">IP PROTECTED</text>
      <line x1="204" y1="48" x2="252" y2="48" stroke="rgba(212,175,55,0.15)" stroke-width="0.5"/>
      <line x1="204" y1="55" x2="252" y2="55" stroke="rgba(212,175,55,0.12)" stroke-width="0.5"/>
      <line x1="204" y1="62" x2="244" y2="62" stroke="rgba(212,175,55,0.12)" stroke-width="0.5"/>
      <!-- Checkmark circle -->
      <circle cx="228" cy="72" r="8" fill="rgba(74,222,128,0.08)" stroke="rgba(74,222,128,0.4)" stroke-width="0.8"/>
      <path d="M224 72 L227 75 L233 69" stroke="#4ADE80" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <!-- Connection lines -->
      <line x1="84" y1="55" x2="100" y2="55" stroke="rgba(212,175,55,0.2)" stroke-width="0.5" stroke-dasharray="3,2"/>
      <line x1="180" y1="55" x2="196" y2="55" stroke="rgba(212,175,55,0.2)" stroke-width="0.5" stroke-dasharray="3,2"/>
      <!-- GCC countries dots -->
      <circle cx="140" cy="103" r="2" fill="rgba(212,175,55,0.5)"/>
      <!-- GCC region label -->
      <text x="140" y="108" text-anchor="middle" font-size="7" fill="rgba(212,175,55,0.4)" font-family="sans-serif" letter-spacing="1">UAE · GCC REGION</text>
    </svg>`,
  }
]

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to(headerRef.value, {
    opacity: 1, y: 0, duration: 0.7,
    scrollTrigger: { trigger: headerRef.value, start: 'top 85%' }
  })

  const cards = cardRefs.value as HTMLElement[]
  cards.forEach((card, i) => {
    gsap.to(card, {
      opacity: 1, y: 0, duration: 0.55,
      delay: i * 0.06,
      scrollTrigger: { trigger: card, start: 'top 90%' }
    })
  })

  gsap.to(ctaRef.value, {
    opacity: 1, y: 0, duration: 0.6,
    scrollTrigger: { trigger: ctaRef.value, start: 'top 92%' }
  })
})
</script>
