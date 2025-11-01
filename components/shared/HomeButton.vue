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
.home-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  z-index: 100;
}

.home-button.fixed-position {
  position: fixed;
  top: 30px;
  right: 30px;
}

.home-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.home-text {
  font-family: 'Object Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.home-button:hover {
  transform: translateY(-2px);
}

.home-button:hover .home-icon {
  transform: scale(1.1);
}

.home-button:active {
  transform: translateY(0);
}

.home-button:focus {
  outline-offset: 4px;
}

/* Responsivo */
@media (max-width: 768px) {
  .home-button.fixed-position {
    top: 20px;
    right: 20px;
    padding: 12px;
  }

  .home-icon {
    width: 32px;
    height: 32px;
  }

  .home-text {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .home-button.fixed-position {
    top: 15px;
    right: 15px;
    padding: 10px;
  }

  .home-icon {
    width: 28px;
    height: 28px;
  }

  .home-text {
    font-size: 0.8rem;
  }
}
</style>
