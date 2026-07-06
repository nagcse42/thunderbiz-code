<template>
  <div class="relative overflow-hidden" style="background:#040610; border-top:1px solid rgba(96,200,255,0.08); border-bottom:1px solid rgba(212,175,55,0.1);" aria-label="Trust credentials">

    <!-- Ambient glow -->
    <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 70%);" aria-hidden="true"></div>

    <!-- Moving scan line -->
    <div class="absolute top-0 left-0 right-0 h-px overflow-hidden" aria-hidden="true">
      <div class="trust-scan absolute h-px w-1/4" style="background: linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent);"></div>
    </div>
    <!-- Bottom scan line -->
    <div class="absolute bottom-0 left-0 right-0 h-px overflow-hidden" aria-hidden="true">
      <div class="trust-scan-rev absolute h-px w-1/4" style="background: linear-gradient(90deg, transparent, rgba(96,200,255,0.4), transparent);"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-5">
      <div class="flex flex-wrap justify-center items-center gap-0">
        <div
          v-for="(badge, i) in badges"
          :key="badge.label"
          class="trust-badge group flex items-center gap-2.5 px-5 py-2 relative cursor-default"
        >
          <!-- Divider (not after last) -->
          <div v-if="i < badges.length - 1"
               class="absolute right-0 top-1/2 -translate-y-1/2 w-px h-5"
               style="background: linear-gradient(to bottom, transparent, rgba(212,175,55,0.2), transparent);"
               aria-hidden="true"></div>

          <!-- Icon -->
          <div class="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300"
               :style="`background: rgba(${badge.color},0.08); border: 1px solid rgba(${badge.color},0.2);`">
            <span :style="`color: rgba(${badge.color},0.9); display:flex;`" v-html="badge.icon" aria-hidden="true"></span>
          </div>

          <!-- Text -->
          <div class="flex flex-col leading-none">
            <span class="text-[10px] font-bold tracking-[0.12em] uppercase transition-colors duration-300"
                  :style="`color: rgba(${badge.color},0.85);`">{{ badge.label }}</span>
            <span class="text-[8px] tracking-[0.08em] mt-0.5" style="color:rgba(255,255,255,0.3);">{{ badge.sub }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const badges = [
  {
    label: 'DED Approved',
    sub: 'Licensed & Verified',
    color: '212,175,55',
    icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>'
  },
  {
    label: '5-Star Rated',
    sub: 'Google & Trustpilot',
    color: '246,211,101',
    icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
  },
  {
    label: 'ISO Certified',
    sub: 'Quality Assured',
    color: '96,200,255',
    icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>'
  },
  {
    label: 'DMCC Partner',
    sub: 'Authorised Agent',
    color: '167,139,250',
    icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  },
  {
    label: 'Bank Guaranteed',
    sub: 'Secure & Protected',
    color: '34,197,94',
    icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>'
  },
  {
    label: '15+ Years',
    sub: 'UAE Market Expertise',
    color: '212,175,55',
    icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  }
]
</script>

<style scoped>
.trust-scan {
  animation: trustSweep 5s linear infinite;
}
.trust-scan-rev {
  animation: trustSweep 7s linear infinite reverse;
}
@keyframes trustSweep {
  0%   { left: -30%; }
  100% { left: 120%; }
}

.trust-badge {
  transition: all 0.25s ease;
}
.trust-badge:hover {
  background: rgba(255,255,255,0.02);
  border-radius: 10px;
}
</style>
