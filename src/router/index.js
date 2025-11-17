import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ... suas rotas
  ],
  // Garante que o scroll só ocorra depois do DOM da nova rota estar renderizado
  scrollBehavior() {
    return new Promise((resolve) => {
      // Pequeno atraso para garantir que o novo conteúdo está no DOM
      setTimeout(() => {
        resolve({ top: 0, behavior: 'instant' })
      }, 100)
    })
  }
})

export default router
