<template>
  <section id="contact" class="py-24 bg-[#060606] relative overflow-hidden" aria-labelledby="contact-heading">
    <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.03) 0%, transparent 65%)" aria-hidden="true"></div>
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <div ref="headerRef" class="text-center mb-14 opacity-0">
        <span class="section-label">Get in Touch</span>
        <h2 id="contact-heading" class="font-serif text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Start Your UAE <em class="not-italic text-[#D4AF37]">Journey Today</em>
        </h2>
        <p class="text-[14px] text-[#AAAAAA] max-w-[420px] mx-auto leading-relaxed">
          Submit your enquiry and receive a personalised response from our experts within 2 hours.
        </p>
      </div>

      <div ref="gridRef" class="grid lg:grid-cols-5 gap-12 opacity-0">

        <!-- Left: Contact Info -->
        <div class="lg:col-span-2 space-y-8">
          <div>
            <h3 class="font-serif text-2xl font-bold text-white mb-3 leading-snug">
              Let's Build Something<br /><em class="not-italic text-[#D4AF37]">Exceptional Together.</em>
            </h3>
            <p class="text-[13px] text-[#AAAAAA] leading-relaxed">
              Our experts are ready to guide you through every step of your UAE business setup. No obligation, no pressure.
            </p>
          </div>

          <div class="space-y-4">
            <a
              v-for="detail in contactDetails"
              :key="detail.label"
              :href="detail.href"
              :target="detail.external ? '_blank' : undefined"
              :rel="detail.external ? 'noopener noreferrer' : undefined"
              class="flex items-center gap-4 group cursor-pointer"
            >
              <div class="w-11 h-11 flex-shrink-0 bg-[rgba(212,175,55,0.06)] border border-[rgba(212,175,55,0.14)] rounded-xl flex items-center justify-center text-[#D4AF37] transition-all duration-200 group-hover:bg-[rgba(212,175,55,0.12)] group-hover:border-[rgba(212,175,55,0.3)]">
                <span v-html="detail.icon" aria-hidden="true"></span>
              </div>
              <div>
                <div class="text-[9px] text-[#AAAAAA] tracking-[0.12em] uppercase mb-1">{{ detail.label }}</div>
                <div class="text-[13px] text-[#EAEAEA] font-medium group-hover:text-[#D4AF37] transition-colors">{{ detail.value }}</div>
              </div>
            </a>
          </div>

          <!-- Trust badges mini -->
          <div class="border-t border-[rgba(212,175,55,0.08)] pt-6">
            <div class="text-[9px] text-[#999999] uppercase tracking-widest mb-4">We Are Trusted By</div>
            <div class="flex flex-wrap gap-2">
              <span v-for="badge in miniBadges" :key="badge" class="text-[9px] text-[#AAAAAA] border border-[rgba(212,175,55,0.12)] rounded-full px-3 py-1 tracking-wide">
                {{ badge }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="lg:col-span-3">
          <!-- Success state -->
          <div
            v-if="formState === 'success'"
            class="relative bg-[rgba(34,197,94,0.04)] border border-[rgba(34,197,94,0.2)] rounded-2xl p-12 text-center"
          >
            <div class="w-16 h-16 bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.3)] rounded-full flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 class="font-serif text-2xl font-bold text-white mb-3">Enquiry Submitted!</h3>
            <p class="text-[13px] text-[#B8B8B8] mb-6">Thank you for reaching out. Our team will respond within 2 hours during business hours.</p>
            <button @click="formState = 'idle'" class="btn-gold-outline text-[11px] px-6 py-2.5 rounded-lg">Submit Another Enquiry</button>
          </div>

          <!-- Form -->
          <form
            v-else
            @submit.prevent="submitForm"
            class="relative bg-[rgba(255,255,255,0.015)] border border-[rgba(212,175,55,0.11)] rounded-2xl p-8 overflow-hidden"
            novalidate
            aria-label="Business setup enquiry form"
          >
            <!-- Top sheen -->
            <div class="absolute top-0 left-[15%] right-[15%] h-px" style="background: linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)" aria-hidden="true"></div>
            <div class="absolute bottom-0 left-[25%] right-[25%] h-px" style="background: linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)" aria-hidden="true"></div>

            <!-- Error banner -->
            <div v-if="formState === 'error'" class="mb-5 bg-[rgba(239,68,68,0.06)] border border-[rgba(239,68,68,0.2)] rounded-xl px-4 py-3 text-[12px] text-[#EF4444]" role="alert">
              Failed to send your enquiry. Please try again or email us directly at info@thunderbizsetup.com
            </div>

            <!-- Row 1 -->
            <div class="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="form-label" for="fullName">Full Name *</label>
                <input
                  id="fullName" v-model="form.fullName" type="text" placeholder="John Smith"
                  class="form-input input-gold" :class="{ 'border-red-500/40': errors.fullName }"
                  required aria-required="true"
                />
                <span v-if="errors.fullName" class="text-[10px] text-red-400 mt-1 block">{{ errors.fullName }}</span>
              </div>
              <div>
                <label class="form-label" for="email">Email Address *</label>
                <input
                  id="email" v-model="form.email" type="email" placeholder="john@company.com"
                  class="form-input input-gold" :class="{ 'border-red-500/40': errors.email }"
                  required aria-required="true"
                />
                <span v-if="errors.email" class="text-[10px] text-red-400 mt-1 block">{{ errors.email }}</span>
              </div>
            </div>

            <!-- Row 2 -->
            <div class="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="form-label" for="mobile">Mobile Number *</label>
                <input
                  id="mobile" v-model="form.mobile" type="tel" placeholder="+971 50 000 0000"
                  class="form-input input-gold" :class="{ 'border-red-500/40': errors.mobile }"
                  required aria-required="true"
                />
                <span v-if="errors.mobile" class="text-[10px] text-red-400 mt-1 block">{{ errors.mobile }}</span>
              </div>
              <div>
                <label class="form-label" for="company">Company Name</label>
                <input id="company" v-model="form.company" type="text" placeholder="My Company LLC" class="form-input input-gold" />
              </div>
            </div>

            <!-- Row 3 -->
            <div class="mb-4">
              <label class="form-label" for="activity">Business Activity *</label>
              <input
                id="activity" v-model="form.activity" type="text" placeholder="e.g. Trading, Technology, Consulting, Healthcare..."
                class="form-input input-gold" :class="{ 'border-red-500/40': errors.activity }"
                required aria-required="true"
              />
              <span v-if="errors.activity" class="text-[10px] text-red-400 mt-1 block">{{ errors.activity }}</span>
            </div>

            <!-- Row 4 -->
            <div class="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="form-label" for="setup">Preferred Setup *</label>
                <select id="setup" v-model="form.setup" class="form-select input-gold" :class="{ 'border-red-500/40': errors.setup }" required aria-required="true" style="color:#EAEAEA;background:#0D0D12;">
                  <option value="" disabled style="color:#888;background:#0D0D12;">Select type</option>
                  <option value="Mainland" style="color:#EAEAEA;background:#0D0D12;">Mainland</option>
                  <option value="Free Zone" style="color:#EAEAEA;background:#0D0D12;">Free Zone</option>
                  <option value="Offshore" style="color:#EAEAEA;background:#0D0D12;">Offshore</option>
                  <option value="Not Sure" style="color:#EAEAEA;background:#0D0D12;">Not Sure Yet</option>
                </select>
                <span v-if="errors.setup" class="text-[10px] text-red-400 mt-1 block">{{ errors.setup }}</span>
              </div>
              <div>
                <label class="form-label" for="budget">Estimated Budget</label>
                <select id="budget" v-model="form.budget" class="form-select input-gold" style="color:#EAEAEA;background:#0D0D12;">
                  <option value="" disabled style="color:#888;background:#0D0D12;">Select range</option>
                  <option value="AED 5,000 – 10,000" style="color:#EAEAEA;background:#0D0D12;">AED 5,000 – 10,000</option>
                  <option value="AED 10,000 – 25,000" style="color:#EAEAEA;background:#0D0D12;">AED 10,000 – 25,000</option>
                  <option value="AED 25,000 – 50,000" style="color:#EAEAEA;background:#0D0D12;">AED 25,000 – 50,000</option>
                  <option value="AED 50,000+" style="color:#EAEAEA;background:#0D0D12;">AED 50,000+</option>
                </select>
              </div>
            </div>

            <!-- Message -->
            <div class="mb-6">
              <label class="form-label" for="message">Message</label>
              <textarea
                id="message" v-model="form.message" rows="4" placeholder="Tell us about your business idea, goals, and any specific questions..."
                class="form-input input-gold resize-none"
              ></textarea>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="formState === 'loading'"
              class="btn-gold-primary btn-sheen w-full flex items-center justify-center gap-2.5 text-[12px] py-4 rounded-xl tracking-widest disabled:opacity-60 disabled:cursor-not-allowed"
              aria-label="Submit your business setup enquiry"
            >
              <svg v-if="formState === 'loading'" class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
              <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              {{ formState === 'loading' ? 'Sending...' : 'Submit Enquiry — It\'s Free' }}
            </button>

            <p class="text-center text-[10px] text-[#888888] mt-3">
              We respond within 2 hours · No spam, ever · 100% confidential
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const headerRef = ref<HTMLElement>()
const gridRef   = ref<HTMLElement>()

type FormState = 'idle' | 'loading' | 'success' | 'error'
const formState = ref<FormState>('idle')

const form = reactive({
  fullName: '',
  email:    '',
  mobile:   '',
  company:  '',
  activity: '',
  setup:    '',
  budget:   '',
  message:  ''
})

const errors = reactive<Record<string, string>>({})

function validate(): boolean {
  Object.keys(errors).forEach(k => delete errors[k])
  let ok = true

  if (!form.fullName.trim()) { errors.fullName = 'Full name is required'; ok = false }
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = 'Valid email is required'; ok = false }
  if (!form.mobile.trim()) { errors.mobile = 'Mobile number is required'; ok = false }
  if (!form.activity.trim()) { errors.activity = 'Business activity is required'; ok = false }
  if (!form.setup) { errors.setup = 'Please select a setup type'; ok = false }

  return ok
}

async function submitForm() {
  if (!validate()) return
  formState.value = 'loading'

  try {
    const res = await fetch('https://formsubmit.co/ajax/a79e75a80a4ad6f657dcf376223680f9', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        _subject: 'New Business Setup Enquiry - Thunder Biz Setup',
        _template: 'table',
        'Full Name':        form.fullName,
        'Email Address':    form.email,
        'Mobile Number':    form.mobile,
        'Company Name':     form.company || 'Not provided',
        'Business Activity': form.activity,
        'Preferred Setup':  form.setup,
        'Estimated Budget': form.budget || 'Not specified',
        'Message':          form.message || 'No message provided'
      })
    })

    const data = await res.json()
    if (data.success === 'true' || data.success === true) {
      formState.value = 'success'
      Object.assign(form, { fullName: '', email: '', mobile: '', company: '', activity: '', setup: '', budget: '', message: '' })
    } else {
      formState.value = 'error'
    }
  } catch {
    formState.value = 'error'
  }
}

const contactDetails = [
  {
    label:    'Email Us',
    value:    'info@thunderbizsetup.com',
    href:     'mailto:info@thunderbizsetup.com',
    external: false,
    icon:     '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>'
  },
  {
    label:    'WhatsApp',
    value:    '+971 XX XXX XXXX',
    href:     'https://wa.me/971586418977',
    external: true,
    icon:     '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>'
  },
  {
    label:    'Location',
    value:    'Dubai, United Arab Emirates',
    href:     'https://maps.google.com/?q=Dubai,UAE',
    external: true,
    icon:     '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
  },
  {
    label:    'Business Hours',
    value:    'Mon – Sat · 9:00 AM – 6:00 PM',
    href:     '#',
    external: false,
    icon:     '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  }
]

const miniBadges = ['DED Registered', 'DMCC Partner', 'ISO 9001', '5-Star Rated', 'Bank Approved']

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(headerRef.value, { opacity: 1, y: 0, duration: 0.72, ease: 'power3.out', scrollTrigger: { trigger: headerRef.value, start: 'top 82%' } })
  gsap.to(gridRef.value,   { opacity: 1, y: 0, duration: 0.72, ease: 'power3.out', scrollTrigger: { trigger: gridRef.value,   start: 'top 82%' } })
})
</script>

<style scoped>
.form-label {
  display: block;
  font-size: 0.625rem;
  color: #C8A84B;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  font-weight: 600;
  font-family: 'DM Mono', monospace;
}
.form-input,
.form-select {
  width: 100%;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(212,175,55,0.18);
  border-radius: 0.5rem;
  padding: 0.65rem 0.85rem;
  font-size: 0.75rem;
  color: #EAEAEA;
  font-family: 'Plus Jakarta Sans', sans-serif;
  transition: border-color 0.2s, background 0.2s;
}
.form-input:focus,
.form-select:focus {
  border-color: rgba(212,175,55,0.5);
  background: rgba(212,175,55,0.04);
  outline: none;
}
.form-select {
  background: #0D0D12;
  appearance: none;
  cursor: pointer;
  color: #EAEAEA;
}
.form-select option {
  background: #0D0D12;
  color: #EAEAEA;
}
.form-select option:disabled {
  color: #666;
}
.form-input::placeholder { color: #444; }
</style>
