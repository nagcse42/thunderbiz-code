<template>
  <section id="why" class="py-24 bg-[#050505] relative overflow-hidden" aria-labelledby="why-heading">
    <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.03) 0%, transparent 60%)" aria-hidden="true"></div>
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <div ref="headerRef" class="text-center mb-16 opacity-0">
        <span class="section-label">Why Thunder</span>
        <h2 id="why-heading" class="font-serif text-4xl lg:text-5xl font-extrabold text-white mb-4">
          The Standard Others <em class="not-italic text-[#D4AF37]">Can't Match</em>
        </h2>
        <p class="text-[14px] text-[#AAAAAA] max-w-[440px] mx-auto leading-relaxed">
          Built for ambitious entrepreneurs and investors who demand nothing but absolute excellence.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(item, i) in items"
          :key="item.title"
          ref="cardRefs"
          class="group relative bg-[rgba(255,255,255,0.015)] border border-[rgba(212,175,55,0.07)] rounded-2xl opacity-0 overflow-hidden transition-all duration-350 hover:-translate-y-1.5 hover:border-[rgba(212,175,55,0.3)] hover:shadow-[0_8px_40px_rgba(212,175,55,0.07)]"
        >
          <div class="absolute top-0 left-[15%] right-[15%] h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background: linear-gradient(90deg, transparent, rgba(212,175,55,0.65), transparent)" aria-hidden="true"></div>

          <div class="w-full h-[90px] overflow-hidden relative" aria-hidden="true">
            <div v-html="item.illustration" class="w-full h-full transition-transform duration-500 group-hover:scale-105"></div>
            <div class="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-cinzel font-bold" style="background: rgba(212,175,55,0.15); border: 1px solid rgba(212,175,55,0.45); color: #D4AF37;">
              {{ String(i + 1).padStart(2,'0') }}
            </div>
          </div>

          <div class="p-6">
            <div class="w-11 h-11 bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.18)] rounded-xl flex items-center justify-center text-[#D4AF37] mb-4 transition-all duration-300 group-hover:bg-[rgba(212,175,55,0.16)] group-hover:border-[rgba(212,175,55,0.35)]">
              <span v-html="item.icon" aria-hidden="true"></span>
            </div>
            <h3 class="text-[14px] font-bold text-[#EAEAEA] mb-3">{{ item.title }}</h3>
            <p class="text-[12px] text-[#AAAAAA] leading-[1.78]">{{ item.desc }}</p>
          </div>
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

const items = [
  {
    title: 'Lightning Fast Processing',
    desc:  'Most licenses are issued within 24–48 hours. Our deep government relationships and in-house PRO team accelerate your application at every step.',
    icon:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4.09 12.97a1 1 0 0 0 .91 1.03H11v8l8.91-10.97A1 1 0 0 0 19 9H13z"/></svg>',
    illustration: `<svg width="100%" height="90" viewBox="0 0 320 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="90" fill="#07080A"/>
      <defs>
        <radialGradient id="w1g" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stop-color="rgba(212,175,55,0.14)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
      </defs>
      <rect width="320" height="90" fill="url(#w1g)"/>
      <circle cx="80" cy="45" r="34" fill="rgba(212,175,55,0.04)" stroke="rgba(212,175,55,0.25)" stroke-width="1.5"/>
      <circle cx="80" cy="45" r="26" fill="none" stroke="rgba(212,175,55,0.1)" stroke-width="0.8"/>
      <line x1="80" y1="13" x2="80" y2="19" stroke="rgba(212,175,55,0.5)" stroke-width="1.5"/>
      <line x1="80" y1="71" x2="80" y2="77" stroke="rgba(212,175,55,0.3)" stroke-width="1"/>
      <line x1="48" y1="45" x2="54" y2="45" stroke="rgba(212,175,55,0.3)" stroke-width="1"/>
      <line x1="106" y1="45" x2="112" y2="45" stroke="rgba(212,175,55,0.3)" stroke-width="1"/>
      <line x1="80" y1="45" x2="80" y2="27" stroke="#D4AF37" stroke-width="2" stroke-linecap="round"/>
      <line x1="80" y1="45" x2="95" y2="38" stroke="rgba(212,175,55,0.7)" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="80" cy="45" r="3" fill="#D4AF37"/>
      <rect x="58" y="53" width="44" height="13" rx="3" fill="rgba(212,175,55,0.12)" stroke="rgba(212,175,55,0.4)" stroke-width="0.8"/>
      <text x="80" y="63" text-anchor="middle" font-size="7.5" fill="#D4AF37" font-weight="bold" font-family="sans-serif">24 - 48 HRS</text>
      <path d="M158 14 L145 48 L155 48 L142 76 L168 38 L156 38 L172 14Z" fill="rgba(212,175,55,0.15)" stroke="rgba(212,175,55,0.5)" stroke-width="1"/>
      <line x1="185" y1="30" x2="215" y2="30" stroke="rgba(212,175,55,0.4)" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="190" y1="42" x2="230" y2="42" stroke="rgba(212,175,55,0.3)" stroke-width="1" stroke-linecap="round"/>
      <line x1="188" y1="54" x2="225" y2="54" stroke="rgba(212,175,55,0.2)" stroke-width="0.8" stroke-linecap="round"/>
      <circle cx="80" cy="45" r="34" fill="none" stroke="rgba(212,175,55,0.18)" stroke-width="0.8" stroke-dasharray="4 4">
        <animateTransform attributeName="transform" type="rotate" from="0 80 45" to="360 80 45" dur="8s" repeatCount="indefinite"/>
      </circle>
    </svg>`
  },
  {
    title: '98% First-Attempt Approval',
    desc:  'Our meticulous documentation process and pre-submission checks deliver an industry-leading 98% approval rate on the very first submission.',
    icon:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    illustration: `<svg width="100%" height="90" viewBox="0 0 320 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="90" fill="#07080A"/>
      <defs>
        <radialGradient id="w2g" cx="40%" cy="50%" r="55%">
          <stop offset="0%" stop-color="rgba(212,175,55,0.12)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
      </defs>
      <rect width="320" height="90" fill="url(#w2g)"/>
      <circle cx="80" cy="45" r="34" fill="rgba(212,175,55,0.04)" stroke="rgba(212,175,55,0.1)" stroke-width="1"/>
      <circle cx="80" cy="45" r="34" fill="none" stroke="rgba(212,175,55,0.6)" stroke-width="4" stroke-linecap="round"
        stroke-dasharray="213.8 0" stroke-dashoffset="0"
        transform="rotate(-90 80 45)"/>
      <circle cx="80" cy="45" r="34" fill="none" stroke="rgba(212,175,55,0.08)" stroke-width="4"/>
      <text x="80" y="40" text-anchor="middle" font-size="16" fill="#D4AF37" font-weight="bold" font-family="sans-serif">98%</text>
      <text x="80" y="54" text-anchor="middle" font-size="6.5" fill="rgba(212,175,55,0.6)" font-family="sans-serif">APPROVAL</text>
      <circle cx="80" cy="45" r="6" fill="rgba(212,175,55,0.08)">
        <animate attributeName="r" values="34;42;34" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <path d="M165 40 L175 50 L195 30" stroke="#22C55E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="180" cy="40" r="20" fill="none" stroke="rgba(34,197,94,0.15)" stroke-width="1.5"/>
      <circle cx="180" cy="40" r="26" fill="none" stroke="rgba(34,197,94,0.07)" stroke-width="1">
        <animateTransform attributeName="transform" type="rotate" from="0 180 40" to="360 180 40" dur="6s" repeatCount="indefinite"/>
      </circle>
      <circle cx="210" cy="28" r="3" fill="#22C55E" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.8s" repeatCount="indefinite"/>
      </circle>
    </svg>`
  },
  {
    title: 'Dedicated Account Manager',
    desc:  'One senior relationship manager handles every aspect of your setup — from document collection through to license delivery and bank account opening.',
    icon:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    illustration: `<svg width="100%" height="90" viewBox="0 0 320 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="90" fill="#07080A"/>
      <defs>
        <radialGradient id="w3g" cx="35%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(212,175,55,0.1)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
      </defs>
      <rect width="320" height="90" fill="url(#w3g)"/>
      <circle cx="75" cy="38" r="22" fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.3)" stroke-width="1.5"/>
      <circle cx="75" cy="32" r="10" fill="rgba(212,175,55,0.15)" stroke="rgba(212,175,55,0.4)" stroke-width="1"/>
      <path d="M56 56 Q75 50 94 56 L94 62 Q75 58 56 62Z" fill="rgba(212,175,55,0.12)" stroke="rgba(212,175,55,0.3)" stroke-width="0.8"/>
      <circle cx="94" cy="28" r="6" fill="#22C55E" opacity="0.9"/>
      <path d="M91 28 L93 30 L98 25" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="110" y="14" width="72" height="22" rx="6" fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.25)" stroke-width="0.8"/>
      <circle cx="121" cy="25" r="4" fill="rgba(212,175,55,0.3)"/>
      <rect x="130" y="20" width="42" height="4" rx="2" fill="rgba(212,175,55,0.4)"/>
      <rect x="130" y="27" width="28" height="3" rx="1.5" fill="rgba(212,175,55,0.2)"/>
      <rect x="110" y="44" width="80" height="22" rx="6" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.2)" stroke-width="0.8">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite"/>
      </rect>
      <circle cx="121" cy="55" r="4" fill="rgba(212,175,55,0.2)"/>
      <rect x="130" y="50" width="50" height="4" rx="2" fill="rgba(212,175,55,0.3)"/>
      <rect x="130" y="57" width="35" height="3" rx="1.5" fill="rgba(212,175,55,0.15)"/>
      <rect x="110" y="74" width="55" height="13" rx="6" fill="rgba(212,175,55,0.05)" stroke="rgba(212,175,55,0.15)" stroke-width="0.8"/>
      <circle cx="119" cy="80" r="3" fill="rgba(212,175,55,0.2)"/>
      <rect x="126" y="77" width="28" height="3" rx="1.5" fill="rgba(212,175,55,0.2)"/>
      <rect x="126" y="82" width="20" height="3" rx="1.5" fill="rgba(212,175,55,0.12)"/>
      <circle cx="214" cy="68" r="5" fill="#22C55E">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite"/>
      </circle>
      <circle cx="214" cy="68" r="9" fill="none" stroke="#22C55E" stroke-width="1" opacity="0.4">
        <animate attributeName="r" values="5;12;5" dur="1.6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.4;0;0.4" dur="1.6s" repeatCount="indefinite"/>
      </circle>
    </svg>`
  },
  {
    title: 'Transparent Pricing',
    desc:  'Flat-fee packages with zero hidden extras. The price you see is the price you pay — including government fees, notary, and all official charges.',
    icon:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    illustration: `<svg width="100%" height="90" viewBox="0 0 320 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="90" fill="#07080A"/>
      <defs>
        <radialGradient id="w4g" cx="30%" cy="50%" r="55%">
          <stop offset="0%" stop-color="rgba(212,175,55,0.1)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
      </defs>
      <rect width="320" height="90" fill="url(#w4g)"/>
      <path d="M52 20 L90 20 L98 45 L90 70 L52 70 L44 45Z" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.3)" stroke-width="1.2"/>
      <circle cx="60" cy="28" r="4" fill="rgba(212,175,55,0.25)" stroke="rgba(212,175,55,0.5)" stroke-width="0.8"/>
      <text x="71" y="46" text-anchor="middle" font-size="10" fill="#D4AF37" font-weight="bold" font-family="sans-serif">AED</text>
      <text x="71" y="60" text-anchor="middle" font-size="7" fill="rgba(212,175,55,0.5)" font-family="sans-serif">FIXED</text>
      <path d="M120 30 L125 35 L135 25" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="142" y="34" font-size="8" fill="rgba(255,255,255,0.6)" font-family="sans-serif">Govt. Fees Included</text>
      <path d="M120 46 L125 51 L135 41" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="142" y="50" font-size="8" fill="rgba(255,255,255,0.6)" font-family="sans-serif">Notary Included</text>
      <path d="M120 62 L125 67 L135 57" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="142" y="66" font-size="8" fill="rgba(255,255,255,0.6)" font-family="sans-serif">PRO Services</text>
      <rect x="240" y="30" width="68" height="20" rx="4" fill="rgba(220,38,38,0.1)" stroke="rgba(220,38,38,0.4)" stroke-width="0.8"/>
      <text x="274" y="44" text-anchor="middle" font-size="6.5" fill="#EF4444" font-weight="bold" font-family="sans-serif">NO HIDDEN FEES</text>
    </svg>`
  },
  {
    title: 'Post-Setup Support',
    desc:  'Our relationship extends well beyond license delivery. We handle renewals, visa processing, accounting, VAT filing, and compliance — year after year.',
    icon:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    illustration: `<svg width="100%" height="90" viewBox="0 0 320 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="90" fill="#07080A"/>
      <defs>
        <radialGradient id="w5g" cx="50%" cy="70%" r="60%">
          <stop offset="0%" stop-color="rgba(212,175,55,0.1)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
      </defs>
      <rect width="320" height="90" fill="url(#w5g)"/>
      <line x1="30" y1="75" x2="270" y2="75" stroke="rgba(212,175,55,0.15)" stroke-width="0.8"/>
      <line x1="30" y1="55" x2="270" y2="55" stroke="rgba(212,175,55,0.07)" stroke-width="0.5"/>
      <line x1="30" y1="35" x2="270" y2="35" stroke="rgba(212,175,55,0.07)" stroke-width="0.5"/>
      <polyline points="30,70 75,58 120,50 165,38 210,32 255,32" fill="none" stroke="rgba(212,175,55,0.5)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="30,70 75,58 120,50 165,38 210,32 255,32 255,75 30,75" fill="rgba(212,175,55,0.04)"/>
      <circle cx="75" cy="58" r="3.5" fill="#D4AF37" opacity="0.8">
        <animate attributeName="r" values="3.5;5.5;3.5" dur="2s" begin="0.3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="0.3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="120" cy="50" r="3.5" fill="#D4AF37" opacity="0.8">
        <animate attributeName="r" values="3.5;5.5;3.5" dur="2s" begin="0.6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="0.6s" repeatCount="indefinite"/>
      </circle>
      <circle cx="165" cy="38" r="3.5" fill="#D4AF37" opacity="0.8">
        <animate attributeName="r" values="3.5;5.5;3.5" dur="2s" begin="0.9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="0.9s" repeatCount="indefinite"/>
      </circle>
      <circle cx="210" cy="32" r="3.5" fill="#D4AF37" opacity="0.8">
        <animate attributeName="r" values="3.5;5.5;3.5" dur="2s" begin="1.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" begin="1.2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="255" cy="32" r="4.5" fill="#D4AF37"/>
      <rect x="232" y="8" width="50" height="15" rx="4" fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.4)" stroke-width="0.8"/>
      <text x="257" y="19" text-anchor="middle" font-size="7.5" fill="#22C55E" font-weight="bold" font-family="sans-serif">+240%</text>
      <!-- connector line from badge to circle -->
      <line x1="257" y1="23" x2="257" y2="28" stroke="rgba(34,197,94,0.4)" stroke-width="0.8" stroke-dasharray="2 2"/>
    </svg>`
  },
  {
    title: 'All Setup Types Covered',
    desc:  'Whether Mainland, Free Zone, or Offshore — we have deep expertise across all UAE jurisdictions and free zone authorities to get you the best structure.',
    icon:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    illustration: `<svg width="100%" height="90" viewBox="0 0 320 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="90" fill="#07080A"/>
      <defs>
        <radialGradient id="w6g" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="rgba(212,175,55,0.1)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
      </defs>
      <rect width="320" height="90" fill="url(#w6g)"/>
      <!-- Mainland card -->
      <rect x="12" y="10" width="84" height="70" rx="6" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.28)" stroke-width="1"/>
      <rect x="21" y="18" width="66" height="8" rx="2" fill="rgba(212,175,55,0.18)"/>
      <text x="54" y="25" text-anchor="middle" font-size="5.5" fill="#D4AF37" font-weight="bold" font-family="sans-serif">MAINLAND</text>
      <rect x="22" y="32" width="10" height="18" rx="1" fill="rgba(212,175,55,0.25)"/>
      <rect x="35" y="26" width="10" height="24" rx="1" fill="rgba(212,175,55,0.2)"/>
      <rect x="48" y="30" width="10" height="20" rx="1" fill="rgba(212,175,55,0.25)"/>
      <rect x="61" y="28" width="10" height="22" rx="1" fill="rgba(212,175,55,0.2)"/>
      <rect x="19" y="50" width="68" height="2" fill="rgba(212,175,55,0.15)"/>
      <text x="54" y="65" text-anchor="middle" font-size="5" fill="rgba(212,175,55,0.7)" font-family="sans-serif">DED LICENSE</text>
      <!-- Free Zone card -->
      <rect x="118" y="10" width="84" height="70" rx="6" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.22)" stroke-width="1"/>
      <rect x="127" y="18" width="66" height="8" rx="2" fill="rgba(212,175,55,0.14)"/>
      <text x="160" y="25" text-anchor="middle" font-size="5.5" fill="#D4AF37" font-weight="bold" font-family="sans-serif">FREE ZONE</text>
      <rect x="127" y="30" width="30" height="22" rx="2" fill="rgba(212,175,55,0.1)" stroke="rgba(212,175,55,0.2)" stroke-width="0.7"/>
      <rect x="163" y="30" width="30" height="22" rx="2" fill="rgba(212,175,55,0.1)" stroke="rgba(212,175,55,0.2)" stroke-width="0.7"/>
      <line x1="130" y1="38" x2="133" y2="30" stroke="rgba(212,175,55,0.4)" stroke-width="1.2"/>
      <line x1="137" y1="38" x2="140" y2="30" stroke="rgba(212,175,55,0.4)" stroke-width="1.2"/>
      <line x1="163" y1="38" x2="166" y2="30" stroke="rgba(212,175,55,0.4)" stroke-width="1.2"/>
      <line x1="170" y1="38" x2="173" y2="30" stroke="rgba(212,175,55,0.4)" stroke-width="1.2"/>
      <rect x="125" y="52" width="70" height="2" fill="rgba(212,175,55,0.15)"/>
      <text x="160" y="65" text-anchor="middle" font-size="5" fill="rgba(212,175,55,0.7)" font-family="sans-serif">40+ ZONES</text>
      <!-- Offshore card -->
      <rect x="224" y="10" width="84" height="70" rx="6" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.18)" stroke-width="1"/>
      <rect x="233" y="18" width="66" height="8" rx="2" fill="rgba(212,175,55,0.1)"/>
      <text x="266" y="25" text-anchor="middle" font-size="5.5" fill="#D4AF37" font-weight="bold" font-family="sans-serif">OFFSHORE</text>
      <circle cx="266" cy="44" r="16" fill="none" stroke="rgba(212,175,55,0.3)" stroke-width="1.2"/>
      <ellipse cx="266" cy="44" rx="8" ry="16" fill="none" stroke="rgba(212,175,55,0.15)" stroke-width="0.7"/>
      <line x1="250" y1="44" x2="282" y2="44" stroke="rgba(212,175,55,0.15)" stroke-width="0.7"/>
      <line x1="252" y1="36" x2="280" y2="36" stroke="rgba(212,175,55,0.1)" stroke-width="0.5"/>
      <line x1="252" y1="52" x2="280" y2="52" stroke="rgba(212,175,55,0.1)" stroke-width="0.5"/>
      <text x="266" y="68" text-anchor="middle" font-size="5" fill="rgba(212,175,55,0.7)" font-family="sans-serif">INTERNATIONAL</text>
      <!-- Connecting dots -->
      <circle cx="106" cy="45" r="3" fill="rgba(212,175,55,0.4)">
        <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="112" cy="45" r="3" fill="rgba(212,175,55,0.4)">
        <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" begin="0.3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="212" cy="45" r="3" fill="rgba(212,175,55,0.4)">
        <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" begin="0.6s" repeatCount="indefinite"/>
      </circle>
      <circle cx="218" cy="45" r="3" fill="rgba(212,175,55,0.4)">
        <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" begin="0.9s" repeatCount="indefinite"/>
      </circle>
    </svg>`
  }
]

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.fromTo(headerRef.value, { y: 28, opacity: 0 }, {
    y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: headerRef.value, start: 'top 85%' }
  })

  cardRefs.value.forEach((card, i) => {
    gsap.fromTo(card, { y: 36, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.75, ease: 'power3.out',
      delay: i * 0.1,
      scrollTrigger: { trigger: card, start: 'top 88%' }
    })
  })
})
</script>
