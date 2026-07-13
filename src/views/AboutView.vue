<template>
  <div style="background:#030510; min-height:100vh;">

    <!-- ── Hero ── -->
    <section class="relative pt-[68px] overflow-hidden" aria-labelledby="about-heading">
      <!-- Ambient layers -->
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
           style="background: radial-gradient(ellipse at 65% 40%, rgba(212,175,55,0.07) 0%, transparent 55%), radial-gradient(ellipse at 20% 70%, rgba(96,200,255,0.04) 0%, transparent 50%);"></div>
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
           style="background: repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(96,200,255,0.012) 22px, rgba(96,200,255,0.012) 23px);"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-24">
        <div class="grid lg:grid-cols-2 gap-16 items-center">

          <!-- Left text -->
          <div>
            <div class="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full"
                 style="background:rgba(212,175,55,0.06); border:1px solid rgba(212,175,55,0.22);">
              <span class="w-1.5 h-1.5 rounded-full" style="background:#D4AF37; animation:pulseDot 1.8s ease-in-out infinite;" aria-hidden="true"></span>
              <span class="text-[9px] tracking-[0.2em] uppercase font-bold" style="color:#D4AF37;">About Thunder Biz Setup</span>
            </div>
            <h1 id="about-heading" class="font-serif text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.06] mb-7">
              Built on Trust.<br/>
              <span style="background:linear-gradient(135deg,#D4AF37,#F5E07A,#B8930A); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;">Driven by Results.</span>
            </h1>
            <p class="text-[15px] leading-[1.9] mb-5 max-w-[480px]" style="color:#8898AA;">
              Thunder Biz Setup was founded with a single mission: to make starting a business in the UAE fast, transparent, and stress-free. Over 15 years, we've helped more than 3,000 entrepreneurs, investors, and multinationals establish their UAE presence.
            </p>
            <p class="text-[13px] leading-[1.9] mb-10 max-w-[460px]" style="color:#6A7A8A;">
              From first-time entrepreneurs to Fortune 500 companies, our team handles every detail — from license applications to Golden Visas, from bank accounts to annual compliance. We don't just set you up; we stay with you as your long-term business partner.
            </p>
            <div class="flex flex-wrap gap-4">
              <RouterLink to="/contact" class="btn-gold-primary btn-sheen inline-flex items-center gap-2.5 text-[12px] px-7 py-3.5 rounded-xl" aria-label="Work with Thunder Biz Setup">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L4.09 12.97a1 1 0 0 0 .91 1.03H11v8l8.91-10.97A1 1 0 0 0 19 9H13z"/></svg>
                Work With Us
              </RouterLink>
              <RouterLink to="/services" class="inline-flex items-center gap-2 text-[11px] px-6 py-3.5 rounded-xl font-semibold tracking-widest uppercase transition-all duration-200"
                          style="color:#60C8FF; border:1px solid rgba(96,200,255,0.3); background:transparent;" aria-label="View our services">
                Our Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </RouterLink>
            </div>
          </div>

          <!-- Right: stat grid -->
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(stat, i) in stats" :key="stat.label"
              :ref="el => { if (el) statRefs[i] = el as HTMLElement }"
              class="stat-card relative rounded-2xl overflow-hidden"
              style="background:rgba(8,10,28,0.9);"
              :style="`border:1px solid ${stat.color}20;`"
              @mousemove="onStatTilt($event, i)"
              @mouseleave="onStatReset(i)"
            >
              <!-- Top glow -->
              <div class="absolute top-0 left-[15%] right-[15%] h-px" :style="`background:linear-gradient(90deg,transparent,${stat.color}70,transparent);`" aria-hidden="true"></div>
              <!-- Corner -->
              <div class="absolute top-3 right-3 w-4 h-4 pointer-events-none" aria-hidden="true"
                   :style="`border-top:1.5px solid ${stat.color}44; border-right:1.5px solid ${stat.color}44;`"></div>
              <div class="p-8 text-center">
                <div class="font-mono text-[8px] tracking-[0.2em] uppercase mb-3" :style="`color:${stat.color}55;`">{{ stat.sys }}</div>
                <div class="font-serif text-4xl font-extrabold mb-2" :style="`color:${stat.color};`">{{ stat.value }}</div>
                <div class="text-[9px] tracking-[0.14em] uppercase" style="color:#4A5A6A;">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom divider -->
      <div class="absolute bottom-0 left-0 right-0 h-px" style="background:linear-gradient(90deg,transparent,rgba(212,175,55,0.2),transparent);" aria-hidden="true"></div>
    </section>

    <!-- ── Mission & Vision ── -->
    <section class="py-24 relative overflow-hidden" aria-labelledby="mission-heading">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
           style="background:radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.05) 0%, transparent 55%);"></div>
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Mission -->
          <div class="rounded-2xl p-10 relative overflow-hidden" style="background:rgba(8,10,28,0.9); border:1px solid rgba(212,175,55,0.15);">
            <div class="absolute top-0 left-[10%] right-[10%] h-px" style="background:linear-gradient(90deg,transparent,rgba(212,175,55,0.6),transparent);" aria-hidden="true"></div>
            <div class="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
                 style="background:rgba(212,175,55,0.06); border:1px solid rgba(212,175,55,0.22);">
              <span class="text-[9px] tracking-[0.2em] uppercase font-bold" style="color:#D4AF37;">Our Mission</span>
            </div>
            <h2 id="mission-heading" class="font-serif text-2xl lg:text-3xl font-extrabold text-white mb-4">
              From Idea to Incorporation
            </h2>
            <p class="text-[13px] leading-[1.9]" style="color:#8898AA;">
              We exist to turn "I have an idea" into "I have a company." We don't just file paperwork — we lay the legal foundation for legacies. Our mission is to make company formation seamless, so builders can focus on building fast, fearlessly, and without the red tape.
            </p>
          </div>

          <!-- Vision -->
          <div class="rounded-2xl p-10 relative overflow-hidden" style="background:rgba(8,10,28,0.9); border:1px solid rgba(96,200,255,0.15);">
            <div class="absolute top-0 left-[10%] right-[10%] h-px" style="background:linear-gradient(90deg,transparent,rgba(96,200,255,0.6),transparent);" aria-hidden="true"></div>
            <div class="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
                 style="background:rgba(96,200,255,0.06); border:1px solid rgba(96,200,255,0.22);">
              <span class="text-[9px] tracking-[0.2em] uppercase font-bold" style="color:#60C8FF;">Our Vision</span>
            </div>
            <h2 class="font-serif text-2xl lg:text-3xl font-extrabold text-white mb-4">
              The Gateway to Incorporation
            </h2>
            <p class="text-[13px] leading-[1.9]" style="color:#8898AA;">
              To become the fastest, most trusted gateway between ambition and incorporation — anywhere in the world.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Timeline: Our Story ── -->
    <section class="py-24 relative overflow-hidden" aria-labelledby="story-heading">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
           style="background:radial-gradient(ellipse at 30% 50%, rgba(96,200,255,0.04) 0%, transparent 55%);"></div>
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
               style="background:rgba(96,200,255,0.06); border:1px solid rgba(96,200,255,0.18);">
            <span class="font-mono text-[9px] tracking-[0.2em] uppercase" style="color:#60C8FF;">// our journey</span>
          </div>
          <h2 id="story-heading" class="font-serif text-4xl lg:text-5xl font-extrabold text-white">
            15 Years of Building<br/>
            <span style="color:#D4AF37;">UAE Dreams</span>
          </h2>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Vertical spine -->
          <div class="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style="background:linear-gradient(to bottom, transparent, rgba(212,175,55,0.3), rgba(212,175,55,0.1), transparent);" aria-hidden="true"></div>

          <div v-for="(ev, i) in timeline" :key="ev.year" class="relative flex items-center gap-8 mb-12" :class="i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'">
            <!-- Card -->
            <div class="w-[calc(50%-32px)] rounded-2xl p-6" :class="i % 2 === 0 ? 'text-right' : 'text-left'"
                 style="background:rgba(8,10,28,0.8); border:1px solid rgba(212,175,55,0.1);">
              <div class="font-mono text-[9px] tracking-[0.2em] uppercase mb-2" style="color:rgba(212,175,55,0.5);">{{ ev.year }}</div>
              <div class="font-serif text-[16px] font-bold text-white mb-1.5">{{ ev.title }}</div>
              <div class="text-[12px] leading-[1.7]" style="color:#6A7A8A;">{{ ev.desc }}</div>
            </div>

            <!-- Spine dot -->
            <div class="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full flex items-center justify-center z-10"
                 style="background:#D4AF37; box-shadow:0 0 16px rgba(212,175,55,0.6);" aria-hidden="true">
              <div style="width:6px;height:6px;border-radius:50%;background:#030510;"></div>
            </div>

            <!-- Spacer -->
            <div class="w-[calc(50%-32px)]"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Values ── -->
    <section class="py-24 relative overflow-hidden" aria-labelledby="values-heading">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
           style="background:radial-gradient(ellipse at 70% 50%, rgba(212,175,55,0.05) 0%, transparent 55%); border-top:1px solid rgba(212,175,55,0.08); border-bottom:1px solid rgba(212,175,55,0.08);"></div>
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
               style="background:rgba(212,175,55,0.06); border:1px solid rgba(212,175,55,0.2);">
            <span class="text-[9px] tracking-[0.2em] uppercase font-bold" style="color:#D4AF37;">Our Values</span>
          </div>
          <h2 id="values-heading" class="font-serif text-4xl lg:text-5xl font-extrabold text-white">
            What We <span style="color:#D4AF37;">Stand For</span>
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="(val, i) in values" :key="val.title"
            :ref="el => { if (el) valRefs[i] = el as HTMLElement }"
            class="val-card relative rounded-2xl overflow-hidden cursor-default"
            style="background:rgba(8,10,28,0.9);"
            :style="`border:1px solid ${val.color}18;`"
            @mousemove="onValTilt($event, i)"
            @mouseleave="onValReset(i)"
          >
            <div class="absolute top-0 left-[10%] right-[10%] h-px" :style="`background:linear-gradient(90deg,transparent,${val.color}66,transparent);`" aria-hidden="true"></div>
            <div class="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 val-glow"
                 :style="`background:radial-gradient(ellipse at 50% 0%, ${val.color}0E 0%, transparent 65%);`" aria-hidden="true"></div>
            <div class="p-8">
              <!-- Icon -->
              <div class="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center relative"
                   :style="`background:${val.color}10; border:1px solid ${val.color}28;`">
                <span v-html="val.svg" :style="`color:${val.color};`" aria-hidden="true"></span>
                <div class="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full"
                     :style="`background:${val.color}; box-shadow:0 0 8px ${val.color}; animation:pulseDot 2s ease-in-out infinite ${i*0.25}s;`" aria-hidden="true"></div>
              </div>
              <h3 class="font-serif text-[16px] font-bold text-white mb-3">{{ val.title }}</h3>
              <p class="text-[12px] leading-[1.8]" style="color:#6A7A8A;">{{ val.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Team ── -->
    <section class="py-24 relative overflow-hidden" aria-labelledby="team-heading">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
           style="background:radial-gradient(ellipse at 50% 30%, rgba(96,200,255,0.04) 0%, transparent 55%);"></div>
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
               style="background:rgba(96,200,255,0.06); border:1px solid rgba(96,200,255,0.18);">
            <span class="font-mono text-[9px] tracking-[0.2em] uppercase" style="color:#60C8FF;">// the people</span>
          </div>
          <h2 id="team-heading" class="font-serif text-4xl lg:text-5xl font-extrabold text-white">
            The Experts Behind<br/>
            <span style="color:#D4AF37;">Thunder</span>
          </h2>
          <p class="text-[14px] max-w-[420px] mx-auto mt-4 leading-relaxed" style="color:#6A7A8A;">
            A dedicated team of UAE business setup specialists, PRO officers, and compliance experts.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="(member, i) in team" :key="member.name"
            :ref="el => { if (el) teamRefs[i] = el as HTMLElement }"
            class="team-card relative rounded-2xl overflow-hidden cursor-default"
            style="background:rgba(8,10,28,0.9); border:1px solid rgba(212,175,55,0.1);"
            @mousemove="onTeamTilt($event, i)"
            @mouseleave="onTeamReset(i)"
          >
            <div class="absolute top-0 left-[10%] right-[10%] h-px" style="background:linear-gradient(90deg,transparent,rgba(212,175,55,0.5),transparent);" aria-hidden="true"></div>
            <!-- HUD corner brackets -->
            <div class="absolute top-3 left-3 w-4 h-4" style="border-top:1.5px solid rgba(212,175,55,0.4);border-left:1.5px solid rgba(212,175,55,0.4);" aria-hidden="true"></div>
            <div class="absolute bottom-3 right-3 w-4 h-4" style="border-bottom:1.5px solid rgba(212,175,55,0.2);border-right:1.5px solid rgba(212,175,55,0.2);" aria-hidden="true"></div>

            <div class="p-8 text-center">
              <!-- Avatar ring -->
              <div class="relative mx-auto mb-5" style="width:72px;height:72px;">
                <svg class="absolute inset-0 team-ring" width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
                  <circle cx="36" cy="36" r="34" fill="none" stroke="rgba(212,175,55,0.25)" stroke-width="1" stroke-dasharray="5 3"/>
                </svg>
                <div class="absolute inset-2 rounded-full flex items-center justify-center font-serif text-xl font-bold"
                     style="background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.3); color:#D4AF37;">
                  {{ member.initials }}
                </div>
              </div>

              <div class="font-serif text-[15px] font-bold text-white mb-1">{{ member.name }}</div>
              <div class="text-[10px] tracking-[0.12em] uppercase font-semibold mb-4" style="color:#D4AF37;">{{ member.role }}</div>
              <p class="text-[11px] leading-[1.75]" style="color:#6A7A8A;">{{ member.desc }}</p>

              <!-- Exp badge -->
              <div class="mt-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                   style="background:rgba(212,175,55,0.06); border:1px solid rgba(212,175,55,0.18);">
                <span class="w-1.5 h-1.5 rounded-full" style="background:#D4AF37;" aria-hidden="true"></span>
                <span class="text-[9px] tracking-wide font-semibold" style="color:#D4AF37;">{{ member.exp }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="gold-hr" aria-hidden="true"></div>
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContactSection from '@/components/home/ContactSection.vue'

const statRefs = ref<HTMLElement[]>([])
const valRefs  = ref<HTMLElement[]>([])
const teamRefs = ref<HTMLElement[]>([])

// ── Tilt helpers ────────────────────────────────────────────────────────────
function tilt(el: HTMLElement, e: MouseEvent, rx: number, ry: number, shadow?: string) {
  const rect = el.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width  - 0.5) *  ry
  const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -rx
  el.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px) scale(1.02)`
  if (shadow) el.style.boxShadow = shadow
  el.style.transition = 'box-shadow 0.1s'
}
function resetTilt(el: HTMLElement) {
  el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0) scale(1)'
  el.style.boxShadow = 'none'
  el.style.transition = 'all 0.4s ease'
}

function onStatTilt(e: MouseEvent, i: number) { const el = statRefs.value[i]; if (el) tilt(el, e, 10, 12, `0 20px 50px ${stats[i].color}18`) }
function onStatReset(i: number) { const el = statRefs.value[i]; if (el) resetTilt(el) }
function onValTilt(e: MouseEvent, i: number) {
  const el = valRefs.value[i]; if (!el) return
  tilt(el, e, 10, 12)
  const glow = el.querySelector('.val-glow') as HTMLElement
  if (glow) glow.style.opacity = '1'
}
function onValReset(i: number) {
  const el = valRefs.value[i]; if (!el) return
  resetTilt(el)
  const glow = el.querySelector('.val-glow') as HTMLElement
  if (glow) glow.style.opacity = '0'
}
function onTeamTilt(e: MouseEvent, i: number) { const el = teamRefs.value[i]; if (el) tilt(el, e, 10, 12, '0 20px 50px rgba(212,175,55,0.08)') }
function onTeamReset(i: number) { const el = teamRefs.value[i]; if (el) resetTilt(el) }

// ── Data ────────────────────────────────────────────────────────────────────
const stats = [
  { value: '3,000+', label: 'Companies Formed',  color: '#D4AF37', sys: 'BIZ-FORMED' },
  { value: '98%',    label: 'Approval Rate',      color: '#60C8FF', sys: 'APPROVAL-SYS' },
  { value: '15+',    label: 'Years Experience',   color: '#A78BFA', sys: 'EXPERIENCE' },
  { value: '24 hrs', label: 'Avg. License Time',  color: '#22C55E', sys: 'PROC-TIME' },
]

const timeline = [
  { year: '2009', title: 'Founded in Dubai', desc: 'Thunder Biz Setup launches with a team of 3, helping SMEs navigate mainland licensing.' },
  { year: '2013', title: 'Free Zone Expertise', desc: 'Expanded into 20+ free zone jurisdictions, becoming DMCC and DAFZA accredited partners.' },
  { year: '2016', title: '1,000 Businesses Formed', desc: 'Crossed the 1,000 company milestone — serving entrepreneurs across 40+ nationalities.' },
  { year: '2019', title: 'Golden Visa Launch', desc: 'Became one of Dubai\'s first approved Golden Visa facilitators for investors and talent.' },
  { year: '2021', title: '100% Foreign Ownership Era', desc: 'Helped hundreds of clients capitalise on UAE\'s landmark ownership law reform.' },
  { year: '2024', title: '3,000+ Companies & Growing', desc: 'Today we\'re Dubai\'s most trusted boutique business setup firm with a 98% approval rate.' },
]

const svg = (d: string) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`

const values = [
  {
    title: 'Absolute Transparency',
    desc: 'No hidden fees, no surprises. Every cost is disclosed upfront before you commit to anything.',
    color: '#D4AF37',
    svg: svg('<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>')
  },
  {
    title: 'Speed Without Compromise',
    desc: 'We work with urgency because your business success depends on getting started fast.',
    color: '#60C8FF',
    svg: svg('<path d="M13 2L4.09 12.97a1 1 0 0 0 .91 1.03H11v8l8.91-10.97A1 1 0 0 0 19 9H13z"/>')
  },
  {
    title: 'Long-term Partnership',
    desc: 'We\'re not a one-time service. We stay with you through renewals, compliance, and growth.',
    color: '#22C55E',
    svg: svg('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>')
  },
  {
    title: 'Expert Execution',
    desc: 'Every team member is a specialist. You get the right expert for every stage of your journey.',
    color: '#A78BFA',
    svg: svg('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>')
  },
]

const team = [
  { initials: 'AR', name: 'Ahmed R.', role: 'Managing Director', exp: '15 Yrs Experience',
    desc: '15 years in UAE business setup. Former DED consultant with deep regulatory expertise.' },
  { initials: 'SF', name: 'Sarah F.', role: 'Head of Free Zones', exp: '500+ Licenses',
    desc: 'Expert in 20+ free zone jurisdictions. Processed 500+ free zone licenses across DMCC, DIFC, DAFZA.' },
  { initials: 'KP', name: 'Kavya P.', role: 'Banking & Finance Lead', exp: '98% Bank Success',
    desc: 'Ex-banker with relationships at all major UAE banks. 98% corporate account opening success rate.' },
  { initials: 'MH', name: 'Mohammed H.', role: 'PRO Services Manager', exp: '12 Yrs PRO',
    desc: 'Certified PRO officer with 12 years in government liaison, visa processing, and Emirates ID.' },
]
</script>

<style scoped>
.stat-card, .val-card, .team-card {
  transform-style: preserve-3d;
  transition: all 0.4s ease;
}
.team-ring { animation: svcRingCW 18s linear infinite; transform-origin: center; }
@keyframes svcRingCW { to { transform: rotate(360deg); } }
</style>
