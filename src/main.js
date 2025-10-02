import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// Configuração simples do router
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('/views/HomeView.vue'),
  },

  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/Team.vue'),
  },

  {
    path: '/articles',
    name: 'Articles',
    component: () => import('../views/Articles.vue'),
  },

  {
    path: '/political',
    name: 'Political',
    component: () => import('../views/Political.vue'),
  },

  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/Terms.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
