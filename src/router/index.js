import { createRouter, createWebHistory } from 'vue-router'

// Importação das views
import HomeView from '../views/HomeView.vue'
import Services from '../views/Services.vue'
import Team from '../views/Team.vue'
import Articles from '../views/Articles.vue'
import Political from '../views/Political.vue'
import Terms from '../views/Terms.vue'
import AdminLogin from '../views/AdminLogin.vue'
import AdminDashboard from '../views/AdminDashboard.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/services', name: 'Services', component: Services },
  { path: '/team', name: 'Team', component: Team },
  { path: '/articles', name: 'Articles', component: Articles },
  { path: '/political', name: 'Political', component: Political },
  { path: '/terms', name: 'Terms', component: Terms },
  { path: '/admin', name: 'AdminLogin', component: AdminLogin },
  { path: '/admin/artigos', name: 'AdminDashboard', component: AdminDashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
