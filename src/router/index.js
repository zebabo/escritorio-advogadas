import { createRouter, createWebHistory } from 'vue-router'

// Importação das views
import HomeView from '../views/HomeView.vue'
import Services from '../views/Services.vue'
import Team from '../views/Team.vue'
import Articles from '../views/Articles.vue'
import Political from '../views/Political.vue'
import Terms from '../views/Terms.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/services', name: 'Services', component: Services },
  { path: '/team', name: 'Team', component: Team },
  { path: '/articles', name: 'Articles', component: Articles },
  { path: '/political', name: 'Political', component: Political },
  { path: '/terms', name: 'Terms', component: Terms },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Sempre rola para o topo da página
    return { top: 0 }
  }
})

export default router
