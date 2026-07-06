<template>
  <section id="faq" class="py-24 bg-[#070707] relative" aria-labelledby="faq-heading">
    <div class="max-w-3xl mx-auto px-6 lg:px-8">

      <div ref="headerRef" class="text-center mb-14 opacity-0">
        <span class="section-label">FAQ</span>
        <h2 id="faq-heading" class="font-serif text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Frequently Asked <em class="not-italic text-[#D4AF37]">Questions</em>
        </h2>
        <p class="text-[14px] text-[#AAAAAA] leading-relaxed">
          Everything you need to know about setting up your business in the UAE.
        </p>
      </div>

      <div ref="listRef" class="space-y-3 opacity-0">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          class="border border-[rgba(212,175,55,0.1)] rounded-xl overflow-hidden transition-all duration-200"
          :class="openIndex === i ? 'border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.03)]' : 'bg-[rgba(255,255,255,0.018)]'"
        >
          <button
            class="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
            @click="toggle(i)"
            :aria-expanded="openIndex === i"
            :aria-controls="`faq-${i}`"
          >
            <span class="text-[13px] font-semibold" :class="openIndex === i ? 'text-[#D4AF37]' : 'text-[#EAEAEA]'">
              {{ faq.q }}
            </span>
            <div
              class="flex-shrink-0 w-6 h-6 rounded-full border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-[#D4AF37] transition-transform duration-300"
              :class="openIndex === i ? 'rotate-45 border-[rgba(212,175,55,0.5)]' : ''"
              aria-hidden="true"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </div>
          </button>

          <div
            :id="`faq-${i}`"
            class="faq-answer"
            :class="{ open: openIndex === i }"
            role="region"
          >
            <div class="px-6 pb-5 text-[12px] text-[#B8B8B8] leading-[1.85] border-t border-[rgba(212,175,55,0.08)] pt-4">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>

      <div ref="ctaRef" class="text-center mt-10 opacity-0">
        <p class="text-[12px] text-[#AAAAAA] mb-4">Still have questions? We'd love to hear from you.</p>
        <RouterLink to="/contact" class="btn-gold-outline inline-flex items-center gap-2 text-[11px] px-6 py-2.5 rounded-lg" aria-label="Contact us with your questions">
          Ask Us Anything
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const headerRef = ref<HTMLElement>()
const listRef   = ref<HTMLElement>()
const ctaRef    = ref<HTMLElement>()
const openIndex = ref<number | null>(0)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}

const faqs = [
  { q: 'How long does it take to set up a company in the UAE?', a: 'With Thunder Biz Setup, most mainland licenses are approved within 24–48 hours. Free zone setups typically take 3–5 business days. Offshore company formation can take 5–7 business days. The full process including visas and bank accounts is usually completed within 2–3 weeks.' },
  { q: 'What is the difference between Mainland, Free Zone, and Offshore?', a: 'Mainland companies (licensed by DED) can trade anywhere in the UAE and take government contracts with no ownership restrictions since 2021. Free Zone companies offer 100% foreign ownership, zero tax, and fast setup but may have restrictions on trading within the UAE mainland. Offshore companies are for holding assets and international business with no UAE operations required.' },
  { q: 'Do I need to be physically present in the UAE to set up my company?', a: 'In many cases, no. Much of the process can be handled remotely with notarised and attested documents. However, some authorities may require a visit for biometrics and Emirates ID collection. Our team will guide you on exactly what\'s needed for your specific setup type.' },
  { q: 'Can I open a corporate bank account as a non-resident?', a: 'Yes, many UAE banks offer corporate accounts to non-resident directors. However, banks have become more selective. Our PRO team has strong relationships with major UAE banks and can significantly improve your approval chances and speed.' },
  { q: 'What is the Golden Visa and who qualifies?', a: 'The UAE Golden Visa is a 10-year renewable residency visa available to investors, entrepreneurs, specialised talent, and outstanding students. To qualify as an investor, you typically need a minimum investment of AED 2 million. Business owners with a licensed company can also qualify. We handle the entire application process.' },
  { q: 'Do I need to be in Dubai to get a business set up there?', a: 'No — we handle the full process remotely for many clients. We\'ll coordinate notarisation, attestation, and submission on your behalf. For the Emirates ID biometrics and visa stamping, a brief visit to the UAE is usually required (typically just 1–2 days).' },
  { q: 'What ongoing support do you provide after setup?', a: 'We offer comprehensive post-setup services including VAT registration and filing, annual accounting, license renewals, visa renewals, PRO services for government documents, and corporate amendments. We act as your long-term business setup partner in the UAE.' }
]

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(headerRef.value, { opacity: 1, y: 0, duration: 0.72, ease: 'power3.out', scrollTrigger: { trigger: headerRef.value, start: 'top 82%' } })
  gsap.to(listRef.value,   { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', scrollTrigger: { trigger: listRef.value,   start: 'top 82%' } })
  gsap.to(ctaRef.value,    { opacity: 1, y: 0, duration: 0.6,  ease: 'power3.out', scrollTrigger: { trigger: ctaRef.value,    start: 'top 90%' } })
})
</script>
