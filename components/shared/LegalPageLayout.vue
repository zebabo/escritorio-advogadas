<template>
  <div class="legal-page">
    <header class="legal-header">
      <div class="container">
        <h1 class="page-title">{{ title }}</h1>
        <p class="page-subtitle">{{ subtitle }}</p>
        <div class="header-divider"></div>
      </div>
    </header>

    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <slot />

            <div class="last-update">
              <p><strong>Última atualização:</strong> {{ formatDate(new Date()) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LegalPageLayout',
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
  },
  methods: {
    formatDate(date) {
      return date.toLocaleDateString('pt-PT', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
  },
}
</script>

<style scoped>
.legal-page {
  width: 100%;
  min-height: 100vh;
  background: #f1eee9;
}

.legal-header {
  background: #f1eee9;
  padding: 120px 0 60px 0;
  border-bottom: 2px solid #8b7355;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 5rem;
  font-weight: 100;
  color: #5c5545;
  margin: 0 0 30px 0;
  font-family: 'Noto Serif Display', serif;
}

.page-subtitle {
  font-size: 1.4rem;
  color: #5c5545;
  font-weight: 300;
  margin: 0 0 40px 0;
  font-family: 'Aileron', sans-serif;
}

.header-divider {
  width: 200px;
  height: 4px;
  background: #5c5545;
  margin: 0 auto;
}

.legal-content {
  padding: 80px 0;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.legal-text {
  background: #f1eee9;
  padding: 60px;
  border: 2px solid #8b7355;
  box-shadow: 0 10px 30px rgba(139, 115, 85, 0.1);
}

.last-update {
  margin-top: 50px;
  padding-top: 30px;
  border-top: 2px solid #8b7355;
  text-align: center;
}

.last-update p {
  font-size: 1.4rem;
  color: #8b7355;
  font-style: italic;
}

@media (max-width: 768px) {
  .legal-header {
    padding: 80px 0 40px 0;
  }
  .page-title {
    font-size: 2.8rem;
  }

  .page-subtitle {
    font-size: 1rem;
    max-width: 600px;
    padding: 0 20px;
  }
  .legal-text {
    padding: 30px;
  }
  .legal-content {
    padding: 40px 0;
  }
}

@media (max-width: 480px) {
 .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 0.8rem;
    max-width: 100%;
    padding: 0 25px;
  }
  .legal-text {
    padding: 20px;
  }
}
</style>
