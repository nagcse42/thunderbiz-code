<template>
  <div class="services-page" style="background:#030510;">

    <!-- ── Hero Banner ── -->
    <section class="relative pt-[68px] pb-20 overflow-hidden" aria-labelledby="services-heading">
      <!-- Background elements -->
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
           style="background: radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 60%, rgba(96,200,255,0.05) 0%, transparent 50%);">
      </div>
      <!-- Scan lines -->
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
           style="background: repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(96,200,255,0.015) 22px, rgba(96,200,255,0.015) 23px);">
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8 text-center">
        <div class="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
             style="background:rgba(212,175,55,0.06); border:1px solid rgba(212,175,55,0.22);">
          <span class="w-1.5 h-1.5 rounded-full" style="background:#D4AF37; animation:pulseDot 1.8s ease-in-out infinite;" aria-hidden="true"></span>
          <span class="text-[10px] tracking-[0.16em] uppercase font-semibold" style="color:#D4AF37;">Premium Business Services</span>
        </div>
        <h1 id="services-heading" class="font-serif text-5xl lg:text-7xl font-extrabold mb-5 leading-tight">
          Everything You Need<br/>
          <span style="background: linear-gradient(135deg,#D4AF37,#F5E07A,#D4AF37); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;">to Build in the UAE</span>
        </h1>
        <p class="text-[15px] max-w-[520px] mx-auto leading-[1.9]" style="color:#8898AA;">
          From company formation to banking, visa to VAT — our end-to-end services cover every aspect of your UAE business journey.
        </p>

        <!-- Service count chips -->
        <div class="flex flex-wrap justify-center gap-3 mt-8">
          <div v-for="chip in chips" :key="chip" class="px-4 py-1.5 rounded-full text-[10px] tracking-widest uppercase font-semibold"
               style="background:rgba(255,255,255,0.03); border:1px solid rgba(212,175,55,0.15); color:#D4AF37;">
            {{ chip }}
          </div>
        </div>
      </div>
    </section>

    <!-- ── Services Grid ── -->
    <section class="pb-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <!-- Featured service (first, large) -->
        <div
          ref="featuredRef"
          class="svc-featured relative rounded-3xl overflow-hidden mb-8 cursor-pointer"
          style="background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(4,6,20,0.95) 60%); border:1px solid rgba(212,175,55,0.18);"
          @mousemove="onFeaturedTilt"
          @mouseleave="onFeaturedReset"
        >
          <!-- Corner decorations -->
          <div class="absolute top-0 left-0 w-16 h-16 pointer-events-none" aria-hidden="true"
               style="border-top:2px solid rgba(212,175,55,0.4); border-left:2px solid rgba(212,175,55,0.4); border-radius:16px 0 0 0;"></div>
          <div class="absolute top-0 right-0 w-16 h-16 pointer-events-none" aria-hidden="true"
               style="border-top:2px solid rgba(212,175,55,0.4); border-right:2px solid rgba(212,175,55,0.4); border-radius:0 16px 0 0;"></div>
          <div class="absolute bottom-0 left-0 w-16 h-16 pointer-events-none" aria-hidden="true"
               style="border-bottom:2px solid rgba(212,175,55,0.4); border-left:2px solid rgba(212,175,55,0.4); border-radius:0 0 0 16px;"></div>
          <div class="absolute bottom-0 right-0 w-16 h-16 pointer-events-none" aria-hidden="true"
               style="border-bottom:2px solid rgba(212,175,55,0.4); border-right:2px solid rgba(212,175,55,0.4); border-radius:0 0 16px 0;"></div>

          <div class="grid lg:grid-cols-2 gap-0">
            <!-- Text -->
            <div class="p-10 lg:p-14">
              <div class="flex items-center gap-3 mb-6">
                <div class="svc-icon-box" style="background:rgba(212,175,55,0.1); border-color:rgba(212,175,55,0.3);">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <span class="text-[9px] tracking-[0.2em] uppercase font-bold px-3 py-1 rounded-full" style="color:#D4AF37; background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.2);">Most Popular</span>
              </div>
              <h2 class="font-serif text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">Mainland Company<br/>Formation</h2>
              <p class="text-[13px] leading-[1.9] mb-7" style="color:#8898AA;">
                Set up under the UAE Department of Economic Development (DED) and trade freely across the entire UAE. Since 2021, foreign investors enjoy 100% ownership in most activities — the most flexible setup for serving the local market directly.
              </p>
              <ul class="space-y-2.5 mb-8">
                <li v-for="f in services[0].features" :key="f" class="flex items-center gap-3 text-[12px]" style="color:#C4C4C4;">
                  <span class="svc-check" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  {{ f }}
                </li>
              </ul>
              <RouterLink to="/contact" class="btn-gold-primary btn-sheen inline-flex items-center gap-2.5 text-[11px] px-7 py-3.5 rounded-xl" aria-label="Enquire about Mainland Company Formation">
                Enquire Now
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </RouterLink>
            </div>

            <!-- Visual panel -->
            <div class="relative flex items-center justify-center p-10 lg:p-14">
              <div class="absolute inset-0 lg:inset-y-8 lg:left-0 lg:right-8 rounded-2xl pointer-events-none"
                   style="background: radial-gradient(ellipse at 40% 50%, rgba(212,175,55,0.06), transparent 70%);" aria-hidden="true"></div>
              <!-- HUD stat ring -->
              <div class="relative" style="width:220px; height:220px;">
                <svg class="absolute inset-0 svc-ring-slow" width="220" height="220" viewBox="0 0 220 220" aria-hidden="true">
                  <circle cx="110" cy="110" r="104" fill="none" stroke="rgba(212,175,55,0.12)" stroke-width="1" stroke-dasharray="6 4"/>
                </svg>
                <svg class="absolute inset-0 svc-ring-fast" width="220" height="220" viewBox="0 0 220 220" aria-hidden="true">
                  <circle cx="110" cy="110" r="85" fill="none" stroke="rgba(212,175,55,0.2)" stroke-width="1.2" stroke-dasharray="20 8"/>
                </svg>
                <!-- Center stat -->
                <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div class="font-serif text-5xl font-extrabold mb-1" style="color:#D4AF37;">100%</div>
                  <div class="text-[10px] tracking-wide uppercase" style="color:#6080A0;">Foreign Ownership</div>
                  <div class="text-[9px] mt-1" style="color:rgba(212,175,55,0.5);">Since 2021</div>
                </div>
                <!-- Orbiting dot -->
                <div class="absolute inset-0" style="animation: svcOrbit 6s linear infinite;" aria-hidden="true">
                  <div style="position:absolute; top:6px; left:50%; transform:translateX(-50%); width:8px; height:8px; border-radius:50%; background:#D4AF37; box-shadow:0 0 10px rgba(212,175,55,0.8);"></div>
                </div>
              </div>
              <!-- DED badge -->
              <div class="absolute bottom-8 right-8 rounded-xl px-4 py-2.5 text-center font-mono"
                   style="background:rgba(4,6,20,0.8); border:1px solid rgba(212,175,55,0.2);">
                <div class="text-[8px] tracking-widest uppercase mb-0.5" style="color:rgba(212,175,55,0.5);">Authority</div>
                <div class="text-[12px] font-bold" style="color:#D4AF37;">DED · DDA · ADDED</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3-column card grid for remaining services -->
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          <div
            v-for="(svc, i) in services.slice(1)"
            :key="svc.title"
            :ref="el => { if(el) cardRefs[i] = el as HTMLElement }"
            class="svc-card group relative rounded-2xl overflow-hidden cursor-pointer"
            style="background: rgba(8,10,28,0.9); border:1px solid rgba(212,175,55,0.08);"
            @mousemove="onCardTilt($event, i)"
            @mouseleave="onCardReset(i)"
          >
            <!-- Top accent line -->
            <div class="absolute top-0 left-0 right-0 h-px" :style="`background: linear-gradient(90deg, transparent, ${svc.accentColor}55, transparent);`" aria-hidden="true"></div>

            <!-- Glow -->
            <div class="absolute inset-0 pointer-events-none svc-card-glow" :style="`background: radial-gradient(ellipse at 30% 0%, ${svc.accentColor}0D 0%, transparent 60%);`" aria-hidden="true"></div>

            <div class="p-7">
              <!-- Icon + number -->
              <div class="flex items-start justify-between mb-5">
                <div class="svc-icon-box" :style="`background:${svc.accentColor}12; border-color:${svc.accentColor}33;`">
                  <span v-html="svc.icon" aria-hidden="true"></span>
                </div>
                <span class="font-mono text-[10px] font-bold" :style="`color:${svc.accentColor}55;`">0{{ i + 2 }}</span>
              </div>

              <h3 class="font-serif text-xl font-bold text-white mb-2.5 leading-tight">{{ svc.title }}</h3>
              <p class="text-[12px] leading-[1.8] mb-5" style="color:#6A7A8A;">{{ svc.desc }}</p>

              <!-- Features -->
              <ul class="space-y-1.5 mb-6">
                <li v-for="f in svc.features" :key="f" class="flex items-center gap-2 text-[11px]" style="color:#9AA8B8;">
                  <span class="svc-dot" :style="`background:${svc.accentColor};`" aria-hidden="true"></span>
                  {{ f }}
                </li>
              </ul>

              <!-- Stat chip + CTA -->
              <div class="flex items-center justify-between mt-auto">
                <div class="rounded-lg px-3 py-2" :style="`background:${svc.accentColor}0D; border:1px solid ${svc.accentColor}22;`">
                  <div class="font-serif text-lg font-extrabold leading-none" :style="`color:${svc.accentColor};`">{{ svc.stat }}</div>
                  <div class="text-[8px] tracking-wide uppercase mt-0.5" style="color:#4A5A6A;">{{ svc.statLabel }}</div>
                </div>
                <RouterLink to="/contact" class="inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-bold transition-all duration-200 group-hover:gap-2.5"
                  :style="`color:${svc.accentColor};`" :aria-label="`Enquire about ${svc.title}`">
                  Enquire
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" :stroke="svc.accentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA Strip ── -->
    <section class="py-20 relative overflow-hidden" style="background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(4,6,20,1) 50%, rgba(96,200,255,0.04) 100%);">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
           style="border-top:1px solid rgba(212,175,55,0.12); border-bottom:1px solid rgba(212,175,55,0.12);"></div>
      <div class="max-w-2xl mx-auto px-6 text-center">
        <div class="font-mono text-[9px] tracking-[0.25em] uppercase mb-4" style="color:rgba(96,200,255,0.5);">// ready to begin?</div>
        <h2 class="font-serif text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
          Start Your UAE Business<br/>
          <span style="color:#D4AF37;">Journey Today</span>
        </h2>
        <p class="text-[14px] mb-10 leading-relaxed" style="color:#7A8A9A;">
          Free consultation. No commitment. Just expert guidance from Day 1.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <RouterLink to="/contact" class="btn-gold-primary btn-sheen inline-flex items-center gap-2.5 text-[12px] px-8 py-4 rounded-xl" aria-label="Book a free consultation">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L4.09 12.97a1 1 0 0 0 .91 1.03H11v8l8.91-10.97A1 1 0 0 0 19 9H13z"/></svg>
            Book Free Consultation
          </RouterLink>
          <a href="https://wa.me/971586418977" class="inline-flex items-center gap-2.5 text-[12px] px-8 py-4 rounded-xl font-semibold transition-all duration-200"
             style="background:rgba(37,211,102,0.08); border:1px solid rgba(37,211,102,0.3); color:#25D366;"
             target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.857L.057 23.428a.5.5 0 0 0 .515.572l5.752-1.508A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.651-.52-5.163-1.424l-.37-.22-3.811.999 1.015-3.704-.242-.381A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const featuredRef = ref<HTMLElement>()
const cardRefs = ref<HTMLElement[]>([])

const chips = ['Mainland', 'Free Zone', 'Offshore', 'Golden Visa', 'Corporate Banking', 'Accounting & VAT', 'PRO Services', 'Trademark']

// ── Card tilt ──────────────────────────────────────────────────────────────
function onFeaturedTilt(e: MouseEvent) {
  const el = featuredRef.value!
  const rect = el.getBoundingClientRect()
  const rx = ((e.clientY - rect.top)  / rect.height - 0.5) * -4
  const ry = ((e.clientX - rect.left) / rect.width  - 0.5) *  5
  el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`
  el.style.boxShadow = '0 30px 80px rgba(212,175,55,0.08), 0 0 0 1px rgba(212,175,55,0.22)'
}
function onFeaturedReset() {
  const el = featuredRef.value!
  el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)'
  el.style.boxShadow = 'none'
}

function onCardTilt(e: MouseEvent, i: number) {
  const card = cardRefs.value[i]
  if (!card) return
  const rect = card.getBoundingClientRect()
  const rx = ((e.clientY - rect.top)  / rect.height - 0.5) * -10
  const ry = ((e.clientX - rect.left) / rect.width  - 0.5) *  12
  card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px) scale(1.015)`
  card.style.borderColor = services.value[i + 1]?.accentColor + '44' || 'rgba(212,175,55,0.3)'
  card.style.boxShadow = `0 20px 60px ${services.value[i + 1]?.accentColor}14`
  card.style.transition = 'box-shadow 0.1s, border-color 0.1s'
}
function onCardReset(i: number) {
  const card = cardRefs.value[i]
  if (!card) return
  card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)'
  card.style.borderColor = 'rgba(212,175,55,0.08)'
  card.style.boxShadow = 'none'
  card.style.transition = 'all 0.4s ease'
}

const svgIcon = (path: string) => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`

const services = ref([
  {
    title: 'Mainland Company Formation',
    desc: 'Trade freely across the UAE with 100% foreign ownership since 2021.',
    features: ['Full UAE market access', '100% foreign ownership', 'Government contracts eligible', 'No employee restrictions', 'Office in any emirate'],
    stat: '100%', statLabel: 'Foreign Ownership',
    accentColor: '#D4AF37',
    icon: svgIcon('<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>')
  },
  {
    title: 'Free Zone Formation',
    desc: '45+ free zones with 0% tax, fast licensing, and full profit repatriation. DMCC, DIFC, DAFZA, JAFZA, IFZA and more.',
    features: ['Zero corporate tax', '45+ authorities available', 'Fast 24–72h licensing', 'Visa allocation included', '100% profit repatriation'],
    stat: '45+', statLabel: 'Free Zones',
    accentColor: '#60C8FF',
    icon: svgIcon('<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>')
  },
  {
    title: 'Offshore Formation',
    desc: 'Asset protection, privacy, and international banking access through RAK ICC, JAFZA, ADGM, and DIFC offshore jurisdictions.',
    features: ['No physical office required', 'Asset protection structure', 'International banking access', 'No audit requirements', 'Confidential ownership'],
    stat: '0%', statLabel: 'Corporate Tax',
    accentColor: '#A78BFA',
    icon: svgIcon('<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>')
  },
  {
    title: 'Golden Visa',
    desc: '10-year renewable UAE residency for investors, entrepreneurs, and specialist talent. Extends to family members and dependants.',
    features: ['10-year renewable visa', 'Spouse and children included', 'No UAE sponsor required', 'Multiple entry flexibility', 'Fast-track processing'],
    stat: '10 Yr', statLabel: 'Residency',
    accentColor: '#F59E0B',
    icon: svgIcon('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>')
  },
  {
    title: 'Corporate Banking',
    desc: 'Open business accounts with ENBD, FAB, ADCB, and RAKBANK through our direct bank relationships. Full KYC guidance.',
    features: ['Access to 10+ UAE banks', 'Pre-screening & preparation', 'KYC document guidance', 'Multi-currency accounts', 'Online banking setup'],
    stat: '10+', statLabel: 'Bank Partners',
    accentColor: '#22C55E',
    icon: svgIcon('<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>')
  },
  {
    title: 'Accounting & VAT',
    desc: 'FTA-registered accountants handling VAT registration, quarterly filings, monthly bookkeeping, and corporate tax compliance.',
    features: ['FTA-registered accountants', 'VAT registration & filing', 'Monthly bookkeeping', 'Annual financial statements', 'Corporate tax compliance'],
    stat: '5%', statLabel: 'UAE VAT Managed',
    accentColor: '#60C8FF',
    icon: svgIcon('<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>')
  },
  {
    title: 'PRO Services',
    desc: 'Complete government liaison services — visa stamping, Emirates ID, medical tests, labor cards, license renewals, and more.',
    features: ['Visa stamping & renewals', 'Emirates ID processing', 'Medical fitness tests', 'Labor & immigration filing', 'License renewals'],
    stat: '48h', statLabel: 'Avg Processing',
    accentColor: '#D4AF37',
    icon: svgIcon('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>')
  },
  {
    title: 'Trademark Registration',
    desc: 'Protect your brand across the UAE and GCC. Ministry of Economy filing, multi-country GCC registration, and brand monitoring.',
    features: ['Trademark search & clearance', 'UAE Ministry of Economy filing', 'GCC multi-country registration', 'Brand monitoring', 'Renewal management'],
    stat: '30+', statLabel: 'Trademarks / Year',
    accentColor: '#A78BFA',
    icon: svgIcon('<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>')
  },
])
</script>

<style scoped>
/* ── Page ──────────────────────────────── */
.services-page { min-height: 100vh; }

/* ── Icon box ──────────────────────────── */
.svc-icon-box {
  width: 44px; height: 44px;
  border-radius: 12px; border: 1px solid;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

/* ── Check dot ─────────────────────────── */
.svc-check {
  width: 18px; height: 18px; border-radius: 50%;
  background: rgba(212,175,55,0.08); border: 1px solid rgba(212,175,55,0.25);
  display: inline-flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.svc-dot {
  width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; opacity: 0.7;
}

/* ── Featured card ─────────────────────── */
.svc-featured {
  transition: transform 0.12s ease, box-shadow 0.2s ease;
  transform-style: preserve-3d;
}

/* ── Service cards ─────────────────────── */
.svc-card {
  transition: transform 0.4s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
  display: flex; flex-direction: column;
}
.svc-card:hover .svc-card-glow { opacity: 1.5; }

/* ── Ring animations ───────────────────── */
.svc-ring-slow { animation: svcRingCW 20s linear infinite; transform-origin: center; }
.svc-ring-fast { animation: svcRingCCW 10s linear infinite; transform-origin: center; }

@keyframes svcRingCW  { to { transform: rotate(360deg);  } }
@keyframes svcRingCCW { to { transform: rotate(-360deg); } }
@keyframes svcOrbit   { to { transform: rotate(360deg);  } }
</style>
