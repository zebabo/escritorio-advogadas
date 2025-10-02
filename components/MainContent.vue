<template>
  <section class="main-content">
    <!-- Home icon -->
    <div class="home-icon"></div>

    <!-- Top text -->
    <div class="top-text">
      Tem dúvidas, precisa de esclarecimentos ou pretende marcar uma consulta com uma advogada?
    </div>

    <!-- Main triangle section -->
    <div class="triangle-section">
      <!-- Triangle background -->
      <div class="triangle-bg"></div>

      <!-- Main content inside triangle -->
      <div class="triangle-content">
        <h1 class="main-title">
          <span class="title-line1">Bem</span>
          <span class="title-line2">Vindo!</span>
        </h1>
        <router-link to="/team" class="sobre-nos-btn">SOBRE NÓS</router-link>
      </div>
    </div>

    <!-- Bottom buttons -->
    <div class="bottom-buttons">
      <button class="service-btn">SERVIÇOS</button>
      <router-link to="/articles" class="contact-btn">ARTIGOS</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroSection',
}
</script>

<style scoped>
.main-content {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  overflow: hidden;
}

.home-icon {
  position: absolute;
  top: 2rem;
  left: 2rem;
  color: #6b5b4d;
  z-index: 20;
}

.top-text {
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1800px;
  text-align: center;
  font-size: 1.2rem;
  color: white;
  line-height: 1.6;
  z-index: 20;
  padding: 0 1rem;
}

.triangle-section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.triangle-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #45212b;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  z-index: 1;
}

.triangle-content {
  position: relative;
  z-index: 10;
  text-align: center;
  margin-top: 0rem;
}

.main-title {
  color: #ffffff;
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  letter-spacing: 0.2em;
  margin-bottom: 3rem;
}

.title-line1 {
  display: block;
  font-size: 5rem;
  margin-bottom: 0.5rem;
}

.title-line2 {
  display: block;
  font-size: 5rem;
  font-weight: 400;
}

.sobre-nos-btn {
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 1rem 2.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.sobre-nos-btn:hover {
  background: #f5f1eb;
  color: #6b5b4d;
  text-decoration: none;
}

.bottom-buttons {
  position: absolute;
  bottom: 10rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 14rem;
  z-index: 20;
}

.service-btn,
.contact-btn {
  background: transparent;
  color: #e4e2dd;
  border: 2px solid #6b5b4d;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.service-btn:hover,
.contact-btn:hover {
  background: #e4e2dd;
  color: #ffffff;
  text-decoration: none;
}

/* Breakpoints detalhados para responsividade */

/* Desktop grande (1400px+) */
@media (max-width: 1600px) {
  .bottom-buttons {
    padding: 0 12rem;
  }

  .top-text {
    max-width: 1600px;
    font-size: 1.15rem;
  }
}

/* Desktop médio (1200px - 1400px) */
@media (max-width: 1400px) {
  .bottom-buttons {
    padding: 0 10rem;
  }

  .title-line1 {
    font-size: 3.8rem;
  }

  .title-line2 {
    font-size: 4.8rem;
  }

  .top-text {
    max-width: 1400px;
    font-size: 1.1rem;
  }
}

/* Desktop pequeno (1024px - 1200px) */
@media (max-width: 1200px) {
  .bottom-buttons {
    padding: 0 8rem;
  }

  .title-line1 {
    font-size: 3.5rem;
  }

  .title-line2 {
    font-size: 4.5rem;
  }

  .top-text {
    max-width: 1200px;
    font-size: 1rem;
    top: 8rem;
  }

  .sobre-nos-btn {
    padding: 0.9rem 2.2rem;
    font-size: 0.85rem;
  }
}

/* Tablet landscape (900px - 1024px) */
@media (max-width: 1024px) {
  .bottom-buttons {
    padding: 0 6rem;
    bottom: 8rem;
  }

  .title-line1 {
    font-size: 3.2rem;
  }

  .title-line2 {
    font-size: 4rem;
  }

  .top-text {
    max-width: 1000px;
    top: 6rem;
    font-size: 0.95rem;
  }

  .service-btn,
  .contact-btn {
    padding: 0.9rem 1.8rem;
    font-size: 0.85rem;
  }

  .main-title {
    margin-bottom: 2.5rem;
  }
}

/* Tablet portrait (768px - 900px) */
@media (max-width: 900px) {
  .bottom-buttons {
    padding: 0 4rem;
    bottom: 6rem;
  }

  .title-line1 {
    font-size: 3rem;
  }

  .title-line2 {
    font-size: 3.8rem;
  }

  .top-text {
    max-width: 800px;
    top: 5rem;
    font-size: 0.9rem;
  }
}

/* Transição para mobile (768px) */
@media (max-width: 768px) {
  /* Mudar o fundo para a cor do triângulo */
  .main-content {
    background: #45212b;
  }

  /* Esconder o triângulo */
  .triangle-bg {
    display: none;
  }

  /* Ajustar a cor do texto superior para branco */
  .top-text {
    color: #f5f1eb;
    top: 4rem;
    font-size: 1rem;
    padding: 0 2rem;
    max-width: 600px;
  }

  /* Ajustar as cores dos botões inferiores para branco */
  .service-btn,
  .contact-btn {
    color: #f5f1eb;
    border-color: #f5f1eb;
  }

  .service-btn:hover,
  .contact-btn:hover {
    background: #f5f1eb;
    color: #582936;
  }

  .home-icon {
    top: 1rem;
    left: 1rem;
    color: #f5f1eb;
  }

  .triangle-content {
    margin-top: 2rem;
  }

  .title-line1 {
    font-size: 2.5rem;
  }

  .title-line2 {
    font-size: 3rem;
  }

  .sobre-nos-btn {
    padding: 0.8rem 2rem;
    font-size: 0.8rem;
  }

  .sobre-nos-btn:hover {
    background: #f5f1eb;
    color: #582936;
  }

  .bottom-buttons {
    bottom: 2rem;
    padding: 0 2rem;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .service-btn,
  .contact-btn {
    width: 200px;
    padding: 0.8rem 1.5rem;
    font-size: 0.8rem;
  }
}

/* Mobile grande (600px - 768px) */
@media (max-width: 600px) {
  .top-text {
    top: 3.5rem;
    font-size: 0.95rem;
    padding: 0 1.5rem;
  }

  .title-line1 {
    font-size: 2.3rem;
  }

  .title-line2 {
    font-size: 2.8rem;
  }

  .triangle-content {
    margin-top: 1.5rem;
  }

  .main-title {
    margin-bottom: 2rem;
  }
}

/* Mobile médio (480px - 600px) */
@media (max-width: 480px) {
  .top-text {
    top: 3rem;
    font-size: 0.9rem;
    padding: 0 1rem;
  }

  .title-line1 {
    font-size: 2rem;
    margin-bottom: 0.3rem;
  }

  .title-line2 {
    font-size: 2.5rem;
  }

  .sobre-nos-btn {
    padding: 0.7rem 1.8rem;
    font-size: 0.75rem;
  }

  .service-btn,
  .contact-btn {
    width: 180px;
    padding: 0.7rem 1.3rem;
    font-size: 0.75rem;
  }

  .bottom-buttons {
    bottom: 1.5rem;
    padding: 0 1.5rem;
  }
}

/* Mobile pequeno (360px - 480px) */
@media (max-width: 360px) {
  .top-text {
    top: 2.5rem;
    font-size: 0.85rem;
    padding: 0 0.5rem;
  }

  .title-line1 {
    font-size: 1.8rem;
  }

  .title-line2 {
    font-size: 2.2rem;
  }

  .sobre-nos-btn {
    padding: 0.6rem 1.5rem;
    font-size: 0.7rem;
  }

  .service-btn,
  .contact-btn {
    width: 160px;
    padding: 0.6rem 1rem;
    font-size: 0.7rem;
  }

  .bottom-buttons {
    bottom: 1rem;
    padding: 0 1rem;
    gap: 0.8rem;
  }

  .home-icon {
    top: 0.8rem;
    left: 0.8rem;
  }
}

/* Landscape orientation para mobile */
@media (max-height: 500px) and (orientation: landscape) {
  .top-text {
    top: 1rem;
    font-size: 0.8rem;
  }

  .triangle-content {
    margin-top: 0;
  }

  .title-line1 {
    font-size: 1.5rem;
  }

  .title-line2 {
    font-size: 1.8rem;
  }

  .main-title {
    margin-bottom: 1rem;
  }

  .sobre-nos-btn {
    padding: 0.5rem 1.2rem;
    font-size: 0.65rem;
  }

  .bottom-buttons {
    bottom: 0.5rem;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }

  .service-btn,
  .contact-btn {
    width: auto;
    padding: 0.4rem 0.8rem;
    font-size: 0.65rem;
  }
}
</style>
