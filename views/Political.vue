<template>
  <div class="privacy-page">
    <!-- Componente com o conteúdo da política -->
    <Political />

    <AppFooter />
  </div>
</template>

<script>
import PrivacyPolicyContent from '../components/Political.vue'
import AppFooter from '../components/shared/AppFooter.vue'

export default {
  name: 'PrivacyPolicyView',
  components: {
    Political: PrivacyPolicyContent,
    AppFooter,
  },
}
</script>

<style scoped>
.privacy-page {
  width: 100%;
  min-height: 100vh;
  background: #f1eee9;
  overflow-x: hidden;
}

/* Header da página */
.privacy-header {
  background: #f1eee9;
  padding: 120px 0 60px 0;
  border-bottom: 2px solid #8b7355;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 6rem;
  font-weight: 100;
  color: #5c5545;
  line-height: 1.1;
  margin: 0 0 30px 0;
  font-family: 'Noto Serif Display', serif;
}

.page-subtitle {
  font-size: 2.4rem;
  color: #5c5545;
  font-weight: 300;
  line-height: 1.4;
  margin: 0 0 40px 0;
  font-family: 'Object Sans', sans-serif;
}

.header-divider {
  width: 200px;
  height: 4px;
  background: #5c5545;
  margin: 0 auto;
}

/* Responsividade */
@media (max-width: 1024px) {
  .privacy-header {
    padding: 100px 0 50px 0;
  }

  .page-title {
    font-size: 5rem;
  }

  .page-subtitle {
    font-size: 2rem;
  }

  .header-divider {
    width: 160px;
    height: 3px;
  }
}

@media (max-width: 768px) {
  .privacy-header {
    padding: 80px 0 40px 0;
  }

  .page-title {
    font-size: 4rem;
  }

  .page-subtitle {
    font-size: 1.8rem;
  }

  .header-divider {
    width: 120px;
  }

  .container {
    padding: 0 15px;
  }
}

@media (max-width: 480px) {
  .privacy-header {
    padding: 60px 0 30px 0;
  }

  .page-title {
    font-size: 3rem;
  }

  .page-subtitle {
    font-size: 1.5rem;
  }

  .header-divider {
    width: 100px;
    height: 3px;
  }
}
</style>
