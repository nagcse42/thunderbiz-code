<template>
  <Transition name="slide-up">
    <div
      v-if="visible"
      class="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[rgba(5,5,5,0.96)] border-t border-[rgba(212,175,55,0.14)] px-5 py-3 flex items-center gap-3"
      style="backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px)"
      role="complementary"
      aria-label="Quick call to action"
    >
      <div class="flex-1 min-w-0">
        <p class="text-[11px] text-[#B8B8B8] truncate">
          Ready to launch? <strong class="text-[#D4AF37]">Free consultation available today.</strong>
        </p>
      </div>
      <RouterLink
        to="/contact"
        class="btn-gold-primary btn-sheen flex-shrink-0 text-[10px] px-4 py-2.5 rounded-lg tracking-widest whitespace-nowrap"
        aria-label="Get started with your business setup for free"
      >
        Get Started Free
      </RouterLink>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
