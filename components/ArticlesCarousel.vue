<template>
  <div class="articles-grid">
    <div class="grid-container">
      <!-- Grid de artigos -->
      <div class="articles-wrapper">
        <div v-for="(article, index) in articles" :key="index" class="article-item">
          <div class="article-card">
            <div class="article-header">
              <div class="author-info">
                <div class="author-avatar">
                  <img :src="article.authorImage" :alt="article.author" loading="lazy" />
                </div>
                <div class="author-details">
                  <h3 class="author-name">{{ article.author }}</h3>
                  <p class="article-date">{{ formatDate(article.date) }}</p>
                </div>
              </div>
            </div>

            <div class="article-content">
              <h2 class="article-title">{{ article.title }}</h2>

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
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal do artigo completo -->
    <div v-if="selectedArticle" class="article-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-modal" @click="closeModal">×</button>

        <div class="modal-header">
          <div class="modal-author-info">
            <div class="modal-author-avatar">
              <img :src="selectedArticle.authorImage" :alt="selectedArticle.author" />
            </div>
            <div>
              <h3 class="modal-author-name">{{ selectedArticle.author }}</h3>
              <p class="modal-article-date">{{ formatDate(selectedArticle.date) }}</p>
            </div>
          </div>
          <div class="modal-category">{{ selectedArticle.category }}</div>
        </div>

        <h1 class="modal-title">{{ selectedArticle.title }}</h1>

        <div class="modal-body">
          <p class="modal-intro">{{ selectedArticle.excerpt }}</p>

          <div class="modal-full-content" v-html="selectedArticle.fullContent"></div>

          <div class="modal-contact">
            <p><strong>Rua Ramalho Ortigão, 57</strong><br>
            4400-265, Vila Nova de Gaia</p>
            <p>T. +351 918844926 | sara.santos.costa@sscb.pt<br>
            T. +351 910035536 | carina.babo@sscb.pt</p>
          </div>
        </div>

        <div class="modal-footer">
          <div class="modal-tags">
            <span v-for="tag in selectedArticle.tags" :key="tag" class="modal-tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticlesGrid',
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedArticle: null,
    }
  },
  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Date(date).toLocaleDateString('pt-PT', options)
    },
    readMore(article) {
      this.selectedArticle = article
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.selectedArticle = null
      document.body.style.overflow = 'auto'
    },
  },
  beforeUnmount() {
    document.body.style.overflow = 'auto'
  },
}
</script>

<style scoped>
.articles-grid {
  background: #ffffff;
  padding: 80px 0;
  position: relative;
}

.grid-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Grid de artigos - 3 por linha */
.articles-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* tamanho fixo como se houvesse 3 artigos */
  gap: 40px;
  justify-content: center; /* centraliza os itens na linha se houver menos que 3 */
}

.article-item {
  width: 100%;
  aspect-ratio: 1 / 1;
}

.article-card {
  background: #ffffff;
  border: 2px solid #5c5545;
  padding: 30px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(139, 115, 85, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(139, 115, 85, 0.2);
}

.article-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e5e5e5;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #5c5545;
  flex-shrink: 0;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.author-details {
  text-align: left;
}

.author-name {
  font-size: 1.3rem;
  color: #5c5545;
  font-weight: 500;
  margin: 0 0 3px 0;
  font-family: 'Noto Serif Display', serif;
}

.article-date {
  font-size: 0.95rem;
  color: #5c5545;
  margin: 0;
  font-family: 'Object Sans', sans-serif;
}

.article-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
}

.article-title {
  font-size: 1.8rem;
  color: #5c5545;
  font-weight: 300;
  line-height: 1.3;
  margin: 0;
  font-family: 'Noto Serif Display', serif;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.read-more-btn {
  background: #5c5545;
  color: #f1eee9;
  border: none;
  padding: 12px 24px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
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
  justify-content: center;
  align-items: center;
  margin-top: auto;
  padding-top: 15px;
  border-top: 1px solid #e5e5e5;
}

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.tag {
  background: #f1eee9;
  color: #5c5545;
  padding: 4px 10px;
  font-size: 0.9rem;
  border: 1px solid #8b7355;
  font-family: 'Object Sans', sans-serif;
}

/* Modal do artigo */
.article-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  overflow-y: auto;
}

.modal-content {
  background: #fff;
  border: 2px solid #5c5545;
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 100px;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  will-change: transform;
  transform: translateZ(0);
}

.close-modal {
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  font-size: 3rem;
  color: #5c5545;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
  line-height: 1;
}

.close-modal:hover {
  color: #4a473a;
  transform: scale(1.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #5c5545;
}

.modal-author-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.modal-author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #5c5545;
}

.modal-author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.modal-author-name {
  font-size: 1.6rem;
  color: #5c5545;
  font-weight: 500;
  margin: 0 0 5px 0;
  font-family: 'Noto Serif Display', serif;
}

.modal-article-date {
  font-size: 1.1rem;
  color: #5c5545;
  margin: 0;
  font-family: 'Object Sans', sans-serif;
}

.modal-category {
  background: #5c5545;
  color: #f1eee9;
  padding: 6px 12px;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  font-family: 'Object Sans', sans-serif;
}

.modal-title {
  font-size: 3.2rem;
  color: #5c5545;
  font-weight: 300;
  line-height: 1.3;
  margin: 0 0 30px 0;
  font-family: 'Noto Serif Display', serif;
}

.modal-body {
  margin: 40px 0;
}

.modal-intro {
  font-size: 1.6rem;
  color: #ffffff;
  margin-bottom: 30px;
  font-family: 'Aileron', sans-serif;
  font-style: italic;
  padding: 20px;
  background: #5c5545;
  border-left: 4px solid #8b7355;
  line-height: 1.6;
}

.modal-full-content {
  font-size: 1.5rem;
  color: #5c5545;
  line-height: 1.8;
  font-family: 'Aileron', sans-serif;
  text-align: left;
}

.modal-full-content h3 {
  font-size: 2rem;
  color: #5c5545;
  font-weight: 500;
  margin: 30px 0 20px 0;
  font-family: 'Noto Serif Display', serif;
  line-height: 1.3;
}

.modal-full-content h4 {
  font-size: 1.8rem;
  color: #8b7355;
  font-weight: 500;
  margin: 25px 0 15px 0;
  font-family: 'Noto Serif Display', serif;
}

.modal-full-content p {
  margin-bottom: 20px;
}

.modal-contact {
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px solid #8b7355;
  font-size: 1.4rem;
  color: #5c5545;
  font-family: 'Aileron', sans-serif;
  text-align: center;
}

.modal-contact p {
  margin: 10px 0;
}

.modal-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px solid #8b7355;
}

.modal-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.modal-tag {
  background: #f1eee9;
  color: #5c5545;
  padding: 5px 12px;
  font-size: 1.1rem;
  border: 1px solid #8b7355;
  font-family: 'Object Sans', sans-serif;
}

/* Responsividade */
@media (max-width: 1400px) {
  .articles-wrapper {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 1200px) {
  .articles-grid {
    padding: 60px 0;
  }

  .article-card {
    padding: 25px;
  }

  .article-title {
    font-size: 1.4rem;
  }

  .read-more-btn {
    padding: 8px 18px;
    font-size: 0.8rem;
  }

  .modal-content {
    padding: 40px;
  }

  .modal-title {
    font-size: 2.8rem;
  }
}

@media (max-width: 1024px) {
  .articles-grid {
    padding: 60px 0;
  }

  .article-card {
    padding: 25px;
  }

  .article-title {
    font-size: 1.4rem;
  }

  .read-more-btn {
    padding: 8px 18px;
    font-size: 0.8rem;
  }

  .modal-content {
    padding: 40px;
  }

  .modal-title {
    font-size: 2.8rem;
  }
}

@media (max-width: 768px) {
  .articles-grid {
    padding: 40px 0;
  }

  .articles-wrapper {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .article-card {
    padding: 25px;
  }

  .article-header {
    margin-bottom: 20px;
    padding-bottom: 12px;
  }

  .author-avatar {
    width: 40px;
    height: 40px;
  }

  .author-name {
    font-size: 1.2rem;
  }

  .article-date {
    font-size: 0.9rem;
  }

  .article-title {
    font-size: 1.3rem;
  }

  .tag {
    font-size: 0.85rem;
    padding: 3px 8px;
  }

  .read-more-btn {
    padding: 8px 18px;
    font-size: 0.8rem;
  }

  .modal-content {
    padding: 30px;
  }

  .modal-title {
    font-size: 2.4rem;
  }

  .modal-header {
    flex-direction: column;
    gap: 15px;
  }

  .modal-footer {
    justify-content: center;
  }

  .modal-full-content {
    font-size: 1.4rem;
  }

  .modal-full-content h3 {
    font-size: 1.8rem;
  }

  .modal-full-content h4 {
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .grid-container {
    padding: 0 15px;
  }

  .article-card {
    padding: 20px;
  }

  .author-avatar {
    width: 38px;
    height: 38px;
  }

  .author-name {
    font-size: 1.1rem;
  }

  .article-date {
    font-size: 0.85rem;
  }

  .article-title {
    font-size: 1.2rem;
  }

  .tag {
    font-size: 0.8rem;
    padding: 3px 7px;
  }

  .read-more-btn {
    padding: 8px 16px;
    font-size: 0.65rem;
  }

  .modal-content {
    padding: 20px;
  }

  .modal-title {
    font-size: 2rem;
  }

  .close-modal {
    font-size: 2.5rem;
    top: 15px;
    right: 20px;
  }

  .modal-intro {
    font-size: 1.4rem;
  }

  .modal-full-content {
    font-size: 1.3rem;
  }

  .modal-full-content h3 {
    font-size: 1.6rem;
  }

  .modal-full-content h4 {
    font-size: 1.4rem;
  }

  .modal-contact {
    font-size: 1.2rem;
  }

  .modal-tag {
    font-size: 1rem;
  }
}
</style>
