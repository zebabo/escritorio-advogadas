<template>
  <div class="articles-carousel">
    <div class="carousel-container">
      <!-- Navegação anterior -->
      <button
        @click="previousArticle"
        class="nav-button prev-button"
        :disabled="currentIndex === 0"
      >
        <span class="nav-icon">‹</span>
      </button>

      <!-- Container dos artigos -->
      <div class="articles-wrapper">
        <div class="articles-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(article, index) in articles" :key="index" class="article-slide">
            <div class="article-card">
              <div class="article-header">
                <div class="author-info">
                  <div class="author-avatar">
                    <img :src="article.authorImage" :alt="article.author" />
                  </div>
                  <div class="author-details">
                    <h3 class="author-name">{{ article.author }}</h3>
                    <p class="article-date">{{ formatDate(article.date) }}</p>
                  </div>
                </div>
                <div class="article-category">{{ article.category }}</div>
              </div>

              <div class="article-content">
                <h2 class="article-title">{{ article.title }}</h2>
                <p class="article-excerpt">{{ article.excerpt }}</p>

                <button @click="readMore(article)" class="read-more-btn">
                  Ler artigo completo
                </button>
              </div>

              <div class="article-footer">
                <div class="tags">
                  <span v-for="tag in article.tags" :key="tag" class="tag">
                    {{ tag }}
                  </span>
                </div>
                <div class="read-time">{{ article.readTime }} min de leitura</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navegação seguinte -->
      <button
        @click="nextArticle"
        class="nav-button next-button"
        :disabled="currentIndex === articles.length - 1"
      >
        <span class="nav-icon">›</span>
      </button>
    </div>

    <!-- Indicadores -->
    <div class="carousel-indicators">
      <button
        v-for="(article, index) in articles"
        :key="index"
        @click="goToSlide(index)"
        class="indicator"
        :class="{ active: currentIndex === index }"
      ></button>
    </div>

    <!-- Contador -->
    <div class="carousel-counter">{{ currentIndex + 1 }} / {{ articles.length }}</div>
  </div>
</template>

<script>
export default {
  name: 'ArticlesCarousel',
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    nextArticle() {
      if (this.currentIndex < this.articles.length - 1) {
        this.currentIndex++
      }
    },
    previousArticle() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    goToSlide(index) {
      this.currentIndex = index
    },
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Date(date).toLocaleDateString('pt-PT', options)
    },
    readMore(article) {
      // Aqui podes implementar a lógica para abrir o artigo completo
      // Por exemplo, navegar para uma página de detalhes ou abrir um modal
      console.log('Ler artigo:', article.title)
      // this.$router.push(`/article/${article.id}`)
    },
    autoPlay() {
      setInterval(() => {
        if (this.currentIndex === this.articles.length - 1) {
          this.currentIndex = 0
        } else {
          this.nextArticle()
        }
      }, 8000) // Muda a cada 8 segundos
    },
  },
  mounted() {
    // Auto-navegação opcional (descomenttar se quiseres)
    // this.autoPlay()
  },
}
</script>

<style scoped>
.articles-carousel {
  background: #f1eee9;
  padding: 80px 0;
  position: relative;
}

.carousel-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 30px;
}

.articles-wrapper {
  flex: 1;
  overflow: hidden;
  border-radius: 0;
  width: 100%;
}

.articles-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.article-slide {
  min-width: 100%;
  padding: 0 20px;
}

.article-card {
  background: #fff;
  border: 2px solid #8b7355;
  padding: 50px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(139, 115, 85, 0.1);
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #8b7355;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-name {
  font-size: 1.8rem;
  color: #5c5545;
  font-weight: 500;
  margin: 0 0 5px 0;
  font-family: 'Noto Serif Display', serif;
}

.article-date {
  font-size: 1.2rem;
  color: #8b7355;
  margin: 0;
  font-family: 'Object Sans', sans-serif;
}

.article-category {
  background: #8b7355;
  color: #f1eee9;
  padding: 8px 16px;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  font-family: 'Object Sans', sans-serif;
}

.article-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.article-title {
  font-size: 3.2rem;
  color: #5c5545;
  font-weight: 300;
  line-height: 1.2;
  margin: 0 0 30px 0;
  font-family: 'Noto Serif Display', serif;
}

.article-excerpt {
  font-size: 1.6rem;
  color: #5c5545;
  line-height: 1.6;
  margin: 0 0 40px 0;
  flex: 1;
  font-family: 'Object Sans', sans-serif;
}

.read-more-btn {
  background: #5c5545;
  color: #f1eee9;
  border: none;
  padding: 15px 30px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  font-family: 'Object Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.read-more-btn:hover {
  background: #4a473a;
  transform: translateY(-2px);
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #e5e5e5;
}

.tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.tag {
  background: #f1eee9;
  color: #5c5545;
  padding: 5px 12px;
  font-size: 1.1rem;
  border: 1px solid #8b7355;
  font-family: 'Object Sans', sans-serif;
}

.read-time {
  font-size: 1.2rem;
  color: #8b7355;
  font-family: 'Object Sans', sans-serif;
}

/* Botões de navegação */
.nav-button {
  background: #5c5545;
  color: #f1eee9;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.nav-button:hover:not(:disabled) {
  background: #4a473a;
  transform: scale(1.1);
}

.nav-button:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.5;
}

.nav-icon {
  font-size: 2.4rem;
  font-weight: 300;
  line-height: 1;
}

/* Indicadores */
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #8b7355;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active,
.indicator:hover {
  background: #8b7355;
}

/* Contador */
.carousel-counter {
  text-align: center;
  margin-top: 20px;
  font-size: 1.4rem;
  color: #8b7355;
  font-family: 'Object Sans', sans-serif;
}

/* Responsividade */
@media (max-width: 1024px) {
  .carousel-container {
    gap: 20px;
  }

  .article-card {
    padding: 40px;
    min-height: 550px;
  }

  .article-title {
    font-size: 2.8rem;
  }

  .nav-button {
    width: 50px;
    height: 50px;
  }

  .nav-icon {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .articles-carousel {
    padding: 40px 0;
  }

  .carousel-container {
    flex-direction: column;
    gap: 20px;
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }

  .prev-button {
    left: 10px;
  }

  .next-button {
    right: 10px;
  }

  .article-slide {
    padding: 0 50px;
  }

  .article-card {
    padding: 30px;
    min-height: 500px;
  }

  .article-header {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }

  .article-title {
    font-size: 2.4rem;
  }

  .article-excerpt {
    font-size: 1.4rem;
  }

  .article-footer {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .article-slide {
    padding: 0 10px;
  }

  .article-card {
    padding: 20px;
    min-height: 450px;
  }

  .article-title {
    font-size: 2rem;
  }

  .author-avatar {
    width: 50px;
    height: 50px;
  }

  .author-name {
    font-size: 1.6rem;
  }

  .nav-button {
    width: 40px;
    height: 40px;
  }

  .nav-icon {
    font-size: 1.6rem;
  }
}
</style>
