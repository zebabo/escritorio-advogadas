<template>
  <section id="inicio" class="intro-section">
    <!-- Conteúdo principal -->
    <div class="intro-content">
      <div class="logo-container">
        <!-- Se tiveres logo, descomenta a linha abaixo e comenta a h1 -->
        <img src="/images/logo.png" alt="Logo Escritório" class="logo" />
      </div>
    </div>

    <!-- Indicador de scroll -->
    <div class="scroll-indicator" @click="scrollToContent">
      <div class="scroll-arrow">
        <span></span>
      </div>
      <p class="scroll-text">Ver mais</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroSection',
  methods: {
    scrollToContent() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
.intro-section {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #45212b;
  color: white;
  overflow: hidden;
}

/* Logo Content */
.intro-content {
  text-align: center;
  z-index: 1;
  width: 100%; /* Permite que o container ocupe toda a largura */
  max-width: none; /* Remove qualquer limitação de largura */
}

.logo-container {
  animation: fadeInUp 2.2s ease-out;
  width: 100%; /* Container ocupa toda a largura disponível */
}

.logo {
  /* Opção 1: Usar width em vez de max-width */
  width: 760px; /* Tamanho específico em pixels */
  height: auto;
  margin-bottom: 20px;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));

  /* Opção 2: Se ainda tiver problemas, use max-width com !important */
  /* max-width: 800px !important; */

  /* Opção 3: Usar transform para escalar */
  /* max-width: 600px;
  transform: scale(1.5); */

  /* Garantir que não há outras limitações */
  max-height: none;
  object-fit: contain; /* Mantém proporções */
}

/* Variações responsivas para o logo maior */
@media (max-width: 1200px) {
  .logo {
    width: 700px;
  }
}

@media (max-width: 900px) {
  .logo {
    width: 80vw; /* 80% da largura da viewport */
    max-width: 600px;
  }
}

@media (max-width: 600px) {
  .logo {
    width: 90vw; /* 90% da largura da viewport */
    max-width: 400px;
  }
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 1;
}

.scroll-arrow {
  margin-bottom: 10px;
  animation: bounce 2s infinite;
}

.scroll-arrow span {
  display: block;
  width: 25px;
  height: 25px;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  transform: rotate(45deg);
  margin: 0 auto;
  animation: scrollArrow 2s infinite;
}

.scroll-text {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;
}

/* Animações */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-8px);
  }
}

@keyframes scrollArrow {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-5px, -5px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(5px, 5px);
  }
}
</style>
