<template>
  <router-link
    :to="homeRoute"
    class="home-button"
    :class="{ 'fixed-position': fixed }"
    :aria-label="ariaLabel"
  >
    <img
      :src="imageSrc"
      alt="Home"
      class="home-icon"
    />
    <span v-if="showText" class="home-text">{{ text }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'HomeButton',
  props: {
    homeRoute: {
      type: String,
      default: '/',
    },
    fixed: {
      type: Boolean,
      default: true,
    },
    showText: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: 'Início',
    },
    ariaLabel: {
      type: String,
      default: 'Voltar à página inicial',
    },
    imageSrc: {
      type: String,
      default: '/images/icons/home.png',
    },
  },
}
</script>

<style scoped>
/* Estilo igual ao menu-button */
.home-button {
  position: fixed;
  top: 25px;
  right: 25px;

  background: #f1eee9;
  border: 2px solid #8b7355;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;
  text-decoration: none;
  z-index: 1001;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Hover igual ao menu-button */
.home-button:hover {
  background: #e8e4dc;
  border-color: #5c5545;
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.home-icon {
  width: 28px;
  height: 28px;
  transition: 0.3s ease;
}

/* Texto opcional continua igual */
.home-text {
  font-family: 'Object Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* Resposivo igual ao menu-button */
@media (max-width: 768px) {
  .home-button {
    top: 20px;
    right: 20px;
    padding: 10px;
  }

  .home-icon {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 480px) {
  .home-button {
    top: 15px;
    right: 15px;
    padding: 8px;
  }

  .home-icon {
    width: 16px;
    height: 16px;
  }
}

</style>
