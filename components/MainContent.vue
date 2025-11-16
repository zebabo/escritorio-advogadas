<template>
  <section class="main-content">
    <!-- Home icon -->
    <div class="home-icon"></div>

    <!-- Top text -->
    <div class="top-text">
      Somos <span class="highlight">profissionais</span> que fazem da <span class="highlight">justiça</span> o seu <span class="highlight">propósito diário</span>.
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
     <router-link to="/services" class="service-btn">SERVIÇOS</router-link>
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
  font-size: 1.8rem;
  font-family: 'Raleway';
  font-style: italic;
  color: white;
  line-height: 1.6;
  z-index: 20;
  padding: 0 1rem;
}

.highlight {
  font-weight: 700;
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
  background: #5c5545;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  z-index: 1;
}

.triangle-content {
  position: relative;
  z-index: 10;
  text-align: center;
  margin-top: 0;
}

.main-title {
  color: #ffffff;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 300;
  letter-spacing: 0.2em;
  margin-bottom: 6rem;
}

.title-line1,
.title-line2 {
  display: block;
  font-size: 7rem;
}

.title-line1 {
  margin-bottom: -30px;
}

.title-line2 {
  font-weight: 400;
}

.sobre-nos-btn,
.service-btn,
.contact-btn {
  background: transparent;
  border: 2px solid;
  padding: 1rem 2.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.sobre-nos-btn {
  color: #ffffff;
  border-color: #ffffff;
}

.sobre-nos-btn:hover {
  background: #f5f1eb;
  color: #6b5b4d;
}

.service-btn,
.contact-btn {
  color: #5c5545;
  border-color: #6b5b4d;
  padding: 1rem 2rem;
}

.service-btn:hover,
.contact-btn:hover {
  background: #5c5545;
  color: #ffffff;
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

/* Desktop grande (1400px+) */
@media (max-width: 1600px) {
  .bottom-buttons {
    padding: 0 12rem;
  }
  .top-text {
    max-width: 1600px;
    font-size: 2rem;
  }
}

/* Desktop médio (1200px - 1400px) */
@media (max-width: 1400px) {
  .bottom-buttons {
    padding: 0 10rem;
  }
  .title-line1,
  .title-line2 {
    font-size: 4.8rem;
  }
  .main-title {
    margin-bottom: 8rem;
  }
  .top-text {
    max-width: 1400px;
    font-size: 2rem;
  }
}

/* Desktop pequeno (1024px - 1200px) */
@media (max-width: 1200px) {
  .bottom-buttons {
    padding: 0 8rem;
  }
  .title-line1,
  .title-line2 {
    font-size: 4.5rem;
  }
  .main-title {
    margin-bottom: 8rem;
  }
  .top-text {
    max-width: 1200px;
    font-size: 2rem;
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
  .title-line1,
  .title-line2 {
    font-size: 4rem;
  }
  .main-title {
    margin-bottom: 8rem;
  }
  .top-text {
    max-width: 1000px;
    top: 6rem;
    font-size: 2rem;
  }
  .service-btn,
  .contact-btn {
    padding: 0.9rem 1.8rem;
    font-size: 0.85rem;
  }
}

/* Tablet portrait (768px - 900px) */
@media (max-width: 900px) {
  .bottom-buttons {
    padding: 0 4rem;
    bottom: 6rem;
  }
  .main-title {
    margin-bottom: 8rem;
  }
  .title-line1,
  .title-line2 {
    font-size: 3.8rem;
  }
  .top-text {
    max-width: 800px;
    top: 5rem;
    font-size: 1.9rem;
  }
}

/* MEDIA QUERIES PARA ALTURA - LAPTOPS/MACBOOKS */

/* Altura 800px+ (laptops grandes) */
@media (min-width: 769px) and (min-height: 1000px) {
  .top-text {
    top: 8rem;
  }
}


@media (min-width: 769px) and (max-height: 1000px) {
  .top-text {
    top: 7rem;
    font-size: 1.4rem;
    line-height: 1.4;
    max-width: 1200px;
  }
  .triangle-content {
    margin-top: -4rem;
  }
  .title-line1 {
    font-size: 4.8rem;
    margin-bottom: -15px;
  }
  .title-line2 {
    font-size: 4.8rem;
  }
  .main-title {
    margin-bottom: 2.5rem;
  }
  .sobre-nos-btn {
    padding: 0.7rem 1.8rem;
    font-size: 0.8rem;
    margin-top: 20px;
  }
  .bottom-buttons {
    padding: 0 8rem;
  }
  .service-btn,
  .contact-btn {
    padding: 0.7rem 1.8rem;
    font-size: 0.8rem;
  }
}
/* Altura 700px - 800px (MacBook Air 13", laptops comuns) */
@media (min-width: 769px) and (max-height: 800px) {
  .top-text {
    top: 7rem;
    font-size: 1.4rem;
    line-height: 1.4;
    max-width: 1200px;
  }
  .triangle-content {
    margin-top: -4rem;
  }
  .title-line1 {
    font-size: 4.8rem;
    margin-bottom: -15px;
  }
  .title-line2 {
    font-size: 4.8rem;
  }
  .main-title {
    margin-bottom: 2.5rem;
  }
  .sobre-nos-btn {
    padding: 0.7rem 1.8rem;
    font-size: 0.8rem;
    margin-top: 20px;
  }
  .bottom-buttons {
    padding: 0 8rem;
  }
  .service-btn,
  .contact-btn {
    padding: 0.7rem 1.8rem;
    font-size: 0.8rem;
  }
}

/* Altura 650px - 700px (laptops compactos) */
@media (min-width: 769px) and (max-height: 700px) {
  .top-text {
    top: 7rem;
    font-size: 1.4rem;
    line-height: 1.4;
    max-width: 1200px;
  }
  .triangle-content {
    margin-top: -4rem;
  }
  .title-line1 {
    font-size: 4.4rem;
    margin-bottom: -15px;
  }
  .title-line2 {
    font-size: 4.4rem;
  }
  .main-title {
    margin-bottom: 2.5rem;
  }
  .sobre-nos-btn {
    padding: 0.7rem 1.8rem;
    font-size: 0.8rem;
  }
  .bottom-buttons {
    padding: 0 8rem;
  }
  .service-btn,
  .contact-btn {
    padding: 0.7rem 1.8rem;
    font-size: 0.8rem;
  }
}

/* Altura 600px - 650px (laptops muito compactos) */
@media (min-width: 769px) and (max-height: 650px) {
   .top-text {
    top: 5rem;
    font-size: 1.3rem;
    line-height: 1.4;
    max-width: 1200px;
  }
  .triangle-content {
    margin-top: -4rem;
  }
  .title-line1 {
    font-size: 3.8rem;
    margin-bottom: -15px;
  }
  .title-line2 {
    font-size: 3.8rem;
  }
  .main-title {
    margin-bottom: 2.5rem;
  }
  .sobre-nos-btn {
    padding: 0.7rem 1.8rem;
    font-size: 0.8rem;
  }
  .bottom-buttons {
    padding: 0 8rem;
  }
  .service-btn,
  .contact-btn {
    padding: 0.7rem 1.8rem;
    font-size: 0.8rem;
  }
}

/* Altura 550px - 600px (netbooks) */
@media (min-width: 769px) and (max-height: 600px) {
   .top-text {
    top: 5rem;
    font-size: 1.3rem;
    line-height: 1.4;
    max-width: 1200px;
  }
  .triangle-content {
    margin-top: -2rem;
  }
  .title-line1 {
    font-size: 3.8rem;
    margin-bottom: -15px;
  }
  .title-line2 {
    font-size: 3.8rem;
  }
  .main-title {
    margin-bottom: 2.5rem;
  }
  .sobre-nos-btn {
    padding: 0.7rem 1.8rem;
    font-size: 0.8rem;
  }
  .bottom-buttons {
    padding: 0 8rem;
  }
  .service-btn,
  .contact-btn {
    padding: 0.7rem 1.8rem;
    font-size: 0.8rem;
  }
}

/* Transição para mobile (768px) */
@media (max-width: 768px) {
  .main-content {
    background: #5c5545;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  .triangle-bg {
    display: none;
  }
  .top-text {
    color: #f5f1eb;
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    font-size: 1.8rem;
    padding: 0 2rem;
    max-width: 600px;
    margin-bottom: 3rem;
  }
  .triangle-section {
    position: relative;
    height: auto;
    margin-bottom: 3rem;
  }
  .service-btn,
  .contact-btn {
    color: #f5f1eb;
    border-color: #f5f1eb;
  }
  .service-btn:hover,
  .contact-btn:hover {
    background: #f5f1eb;
    color: #5c5545;
  }
  .home-icon {
    top: 1rem;
    left: 1rem;
    color: #f5f1eb;
  }
  .triangle-content {
    margin-top: 0;
    margin-bottom: 3rem;
  }
  .title-line1,
  .title-line2 {
    font-size: 3rem;
  }
  .title-line1 {
    margin-bottom: -10px;
  }
  .sobre-nos-btn {
    width: 200px;
    padding: 0.8rem 1.5rem;
    font-size: 0.8rem;
    margin-top: 4rem;
  }
  .sobre-nos-btn:hover {
    background: #f5f1eb;
    color: #5c5545;
  }
  .main-title {
    margin-bottom: 2rem;
  }
  .bottom-buttons {
    position: relative;
    bottom: 4rem;
    padding: 0;
    flex-direction: column;
    gap: 1.5rem;
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
    font-size: 0.95rem;
    padding: 0 1.5rem;
    margin-bottom: 2.5rem;
  }
  .title-line1 {
    font-size: 2.3rem;
  }
  .title-line2 {
    font-size: 2.8rem;
  }
  .triangle-content {
    margin-bottom: 2.5rem;
  }
  .main-title {
    margin-bottom: 2.5rem;
  }
  .bottom-buttons {
    bottom: 4rem;
    gap: 1.5rem;
  }
}

/* Mobile médio (480px - 600px) */
@media (max-width: 480px) {
  .top-text {
    font-size: 0.9rem;
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
  .title-line1,
  .title-line2 {
    font-size: 2.5rem;
  }
  .title-line1 {
    margin-bottom: -10px;
  }
  .triangle-content {
    margin-bottom: 2rem;
  }
  .main-title {
    margin-bottom: 1rem;
  }
  .sobre-nos-btn {
    margin-top: 4rem;
    padding: 0.7rem 1.8rem;
    font-size: 0.75rem;
  }
  .service-btn,
  .contact-btn {
    width: 200px;
    padding: 0.7rem 1.3rem;
    font-size: 0.75rem;
  }
  .bottom-buttons {
    bottom: 3.2rem;
    gap: 1.5rem;
  }
}

/* Mobile pequeno (360px - 480px) */
@media (max-width: 300px) {
  .top-text {
    font-size: 0.85rem;
    padding: 0 0.5rem;
    margin-bottom: 1.5rem;
  }
  .title-line1,
  .title-line2 {
    font-size: 2.2rem;
  }
  .triangle-content {
    margin-bottom: 1.5rem;
  }
  .main-title {
    margin-bottom: 1.5rem;
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
    gap: 1.2rem;
  }
  .home-icon {
    top: 0.8rem;
    left: 0.8rem;
  }
}

/* Landscape orientation para mobile */
@media (max-height: 500px) and (orientation: landscape) {
  .main-content {
    padding: 1rem;
  }
  .top-text {
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
  }
  .triangle-content {
    margin-bottom: 1.5rem;
  }
  .title-line1,
  .title-line2 {
    font-size: 1.5rem;
  }
  .main-title {
    margin-bottom: 1.5rem;
  }
  .sobre-nos-btn {
    padding: 0.5rem 1.2rem;
    font-size: 0.65rem;
  }
  .bottom-buttons {
    flex-direction: row;
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
