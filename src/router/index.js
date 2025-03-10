import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resume',
    name: 'Resume',
    // Chargement paresseux pour optimiser les performances
    component: () => import('../views/Resume.vue')
  },
  {
    path: '/project/:id',
    name: 'ProjectDetails',
    component: () => import('../views/ProjectDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // Remonter en haut de la page lors du changement de route
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router