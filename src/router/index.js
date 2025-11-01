import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/Services',
      name: 'Services',
      component: () => import('../views/Services.vue'),
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: () => import('../views/Portfolio.vue'),
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: () => import('../views/Blog.vue'),
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue'),
    },
  ],
})

export default router
