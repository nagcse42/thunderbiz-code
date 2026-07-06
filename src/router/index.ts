import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Thunder Biz Setup | Premium UAE Business Setup Services'
      }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue'),
      meta: {
        title: 'Our Services | Thunder Biz Setup'
      }
    },
    {
      path: '/packages',
      name: 'packages',
      component: () => import('@/views/PackagesView.vue'),
      meta: {
        title: 'Packages & Pricing | Thunder Biz Setup'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'About Us | Thunder Biz Setup'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: {
        title: 'Contact Us | Thunder Biz Setup'
      }
    }
  ]
})

// Update page title on navigation
router.beforeEach((to) => {
  const title = to.meta?.title as string
  if (title) document.title = title
})

export default router
