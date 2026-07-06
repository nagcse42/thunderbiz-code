<template>
  <div style="background:#030510; min-height:100vh;">

    <!-- ── Hero Banner ── -->
    <section class="relative pt-[68px] overflow-hidden" aria-labelledby="contact-page-heading">
      <!-- Ambient -->
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
           style="background: radial-gradient(ellipse at 50% 60%, rgba(212,175,55,0.07) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(96,200,255,0.04) 0%, transparent 50%);"></div>
      <!-- Scan lines -->
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
           style="background: repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(96,200,255,0.012) 22px, rgba(96,200,255,0.012) 23px);"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center py-20 lg:py-28">

          <!-- Left: headline -->
          <div>
            <div class="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full"
                 style="background:rgba(212,175,55,0.06); border:1px solid rgba(212,175,55,0.22);">
              <span class="w-1.5 h-1.5 rounded-full" style="background:#D4AF37; animation:pulseDot 1.8s ease-in-out infinite;" aria-hidden="true"></span>
              <span class="text-[9px] tracking-[0.2em] uppercase font-bold" style="color:#D4AF37;">Free Consultation — No Obligation</span>
            </div>
            <h1 id="contact-page-heading" class="font-serif text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.06] mb-6">
              Let's Talk<br/>
              <span style="background:linear-gradient(135deg,#D4AF37,#F5E07A,#B8930A); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;">Business.</span>
            </h1>
            <p class="text-[15px] leading-[1.9] mb-10 max-w-[460px]" style="color:#8898AA;">
              Fill in the form and one of our senior business setup experts will reach out within 2 hours — tailored advice, zero pressure.
            </p>

            <!-- Response time promise -->
            <div class="flex flex-wrap gap-4 mb-10">
              <div v-for="p in promises" :key="p.label" class="flex items-center gap-3 rounded-xl px-4 py-3"
                   :style="`background:${p.color}08; border:1px solid ${p.color}22;`">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                     :style="`background:${p.color}12; border:1px solid ${p.color}28;`">
                  <span v-html="p.svg" :style="`color:${p.color};`" aria-hidden="true"></span>
                </div>
                <div>
                  <div class="text-[11px] font-bold" :style="`color:${p.color};`">{{ p.value }}</div>
                  <div class="text-[9px] tracking-wide uppercase" style="color:#4A5A6A;">{{ p.label }}</div>
                </div>
              </div>
            </div>

            <!-- Contact info quick links -->
            <div class="space-y-3">
              <a v-for="link in quickLinks" :key="link.label" :href="link.href"
                 :target="link.external ? '_blank' : undefined"
                 :rel="link.external ? 'noopener noreferrer' : undefined"
                 class="flex items-center gap-4 group">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
                     style="background:rgba(212,175,55,0.06); border:1px solid rgba(212,175,55,0.14);"
                     :class="'group-hover:bg-[rgba(212,175,55,0.12)] group-hover:border-[rgba(212,175,55,0.35)]'">
                  <span v-html="link.svg" style="color:#D4AF37;" aria-hidden="true"></span>
                </div>
                <div>
                  <div class="text-[9px] tracking-[0.14em] uppercase mb-0.5" style="color:#4A5A6A;">{{ link.label }}</div>
                  <div class="text-[13px] font-medium transition-colors duration-200" style="color:#EAEAEA;"
                       :class="'group-hover:text-[#D4AF37]'">{{ link.value }}</div>
                </div>
              </a>
            </div>
          </div>

          <!-- Right: HUD visual panel -->
          <div class="relative flex items-center justify-center">
            <div class="relative rounded-3xl overflow-hidden w-full max-w-md"
                 style="background:rgba(4,6,20,0.85); border:1px solid rgba(212,175,55,0.15);">
              <!-- Top glow -->
              <div class="absolute top-0 left-[10%] right-[10%] h-px" style="background:linear-gradient(90deg,transparent,rgba(212,175,55,0.7),transparent);" aria-hidden="true"></div>
              <!-- HUD corners -->
              <div class="absolute top-4 left-4 w-5 h-5" style="border-top:2px solid rgba(212,175,55,0.5);border-left:2px solid rgba(212,175,55,0.5);" aria-hidden="true"></div>
              <div class="absolute top-4 right-4 w-5 h-5" style="border-top:2px solid rgba(212,175,55,0.5);border-right:2px solid rgba(212,175,55,0.5);" aria-hidden="true"></div>
              <div class="absolute bottom-4 left-4 w-5 h-5" style="border-bottom:2px solid rgba(212,175,55,0.3);border-left:2px solid rgba(212,175,55,0.3);" aria-hidden="true"></div>
              <div class="absolute bottom-4 right-4 w-5 h-5" style="border-bottom:2px solid rgba(212,175,55,0.3);border-right:2px solid rgba(212,175,55,0.3);" aria-hidden="true"></div>
              <!-- Scan sweep -->
              <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
                   style="background:linear-gradient(90deg,transparent,rgba(96,200,255,0.03),transparent); animation:hudSweep 4s ease-in-out infinite;"></div>

              <div class="p-10">
                <div class="font-mono text-[8px] tracking-[0.2em] mb-6" style="color:rgba(96,200,255,0.45);">TBS-CONTACT // RESPONSE MODULE</div>

                <!-- Process steps -->
                <div class="space-y-4 mb-8">
                  <div v-for="(step, i) in steps" :key="step.label" class="flex items-center gap-4">
                    <!-- Step connector line -->
                    <div class="flex flex-col items-center flex-shrink-0">
                      <div class="w-8 h-8 rounded-full flex items-center justify-center font-mono text-[10px] font-bold"
                           :style="`background:${step.color}12; border:1.5px solid ${step.color}44; color:${step.color};`">
                        {{ String(i+1).padStart(2,'0') }}
                      </div>
                      <div v-if="i < steps.length - 1" class="w-px h-5 mt-1" :style="`background:${step.color}25;`" aria-hidden="true"></div>
                    </div>
                    <div class="flex-1 rounded-xl px-4 py-3" :style="`background:${step.color}08; border:1px solid ${step.color}18;`">
                      <div class="text-[11px] font-bold mb-0.5" :style="`color:${step.color};`">{{ step.label }}</div>
                      <div class="text-[10px]" style="color:#4A5A6A;">{{ step.desc }}</div>
                    </div>
                    <!-- Status dot -->
                    <div class="w-2 h-2 rounded-full flex-shrink-0"
                         :style="`background:${step.color}; box-shadow:0 0 8px ${step.color}; animation:pulseDot 2s ease-in-out infinite ${i*0.4}s;`" aria-hidden="true"></div>
                  </div>
                </div>

                <!-- Live stat row -->
                <div class="grid grid-cols-3 gap-3 pt-6"
                     style="border-top:1px solid rgba(212,175,55,0.1);">
                  <div v-for="s in heroStats" :key="s.label" class="text-center">
                    <div class="font-serif text-lg font-extrabold" style="color:#D4AF37;">{{ s.value }}</div>
                    <div class="text-[8px] tracking-wide uppercase mt-0.5" style="color:#3A4A5A;">{{ s.label }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- bottom divider -->
      <div class="absolute bottom-0 left-0 right-0 h-px" style="background:linear-gradient(90deg,transparent,rgba(212,175,55,0.2),transparent);" aria-hidden="true"></div>
    </section>

    <!-- ── Contact Form Section ── -->
    <ContactSection />

    <!-- ── FAQ ── -->
    <FaqSection />

  </div>
</template>

<script setup lang="ts">
import ContactSection from '@/components/home/ContactSection.vue'
import FaqSection     from '@/components/home/FaqSection.vue'

const svg = (d: string, w = 14) =>
  `<svg width="${w}" height="${w}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`

const promises = [
  { value: '< 2 Hours', label: 'Response Time', color: '#D4AF37',
    svg: svg('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>') },
  { value: 'Free', label: 'Consultation', color: '#22C55E',
    svg: svg('<polyline points="20 6 9 17 4 12"/>') },
  { value: '98%', label: 'Approval Rate', color: '#60C8FF',
    svg: svg('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>') },
]

const quickLinks = [
  { label: 'WhatsApp', value: '+971 58 641 8977', href: 'https://wa.me/971586418977', external: true,
    svg: svg('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>') },
  { label: 'Email', value: 'hello@thunderbizsetup.com', href: 'mailto:hello@thunderbizsetup.com', external: false,
    svg: svg('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>') },
  { label: 'Office', value: 'Business Bay, Dubai, UAE', href: 'https://maps.google.com/?q=Business+Bay+Dubai', external: true,
    svg: svg('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>') },
]

const steps = [
  { label: 'Submit Enquiry', desc: 'Fill the form — takes under 2 minutes', color: '#D4AF37' },
  { label: 'Expert Review', desc: 'We analyse your requirements', color: '#60C8FF' },
  { label: 'Personalised Plan', desc: 'Tailored setup strategy & quote', color: '#A78BFA' },
  { label: 'Launch Business', desc: 'We handle everything end-to-end', color: '#22C55E' },
]

const heroStats = [
  { value: '3,000+', label: 'Businesses' },
  { value: '2 hrs',  label: 'Response' },
  { value: '15+',    label: 'Yrs Exp.' },
]
</script>

<style scoped>
@keyframes hudSweep {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}
</style>
