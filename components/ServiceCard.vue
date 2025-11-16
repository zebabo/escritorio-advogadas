<template>
  <div class="service-card" :class="{ expanded: isExpanded }">
    <div class="card-header" @click="toggleExpanded">
      <div class="header-left">
        <span class="service-icon">{{ icon }}</span>
        <h2 class="service-title">{{ title }}</h2>
      </div>
      <button class="expand-button" :class="{ active: isExpanded }">
        <span class="button-icon">{{ isExpanded ? '−' : '+' }}</span>
      </button>
    </div>

    <transition name="expand">
      <div v-if="isExpanded" class="card-content">
        <div class="services-list">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="service-item"
          >
            <span class="bullet">•</span>
            <p class="service-text">{{ service }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: {
      type: String,
      required: true
    },
    services: {
      type: Array,
      required: true
    },
    icon: {
      type: String,
      default: '⚖'
    }
  },
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    toggleExpanded() {
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>

<style scoped>
.service-card {
  background: #ffffff;
  border: 2px solid #5c5545;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(139, 115, 85, 0.1);
  height: fit-content;
}

.service-card:hover {
  box-shadow: 0 15px 40px rgba(139, 115, 85, 0.2);
  transform: translateY(-3px);
}

.service-card.expanded {
  border-color: #8b7355;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 35px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.card-header:hover {
  background: rgba(139, 115, 85, 0.05);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
}

.service-icon {
  font-size: 3rem;
  color: #5c5545;
  flex-shrink: 0;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 300;
  color: #5c5545;
  margin: 0;
  font-family: 'Noto Serif Display', serif;
  line-height: 1.2;
}

.expand-button {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #5c5545;
  border: none;
  color: #f1eee9;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.expand-button:hover {
  background: #8b7355;
  transform: scale(1.1);
}

.expand-button.active {
  background: #8b7355;
  transform: rotate(180deg);
}

.button-icon {
  line-height: 1;
  font-weight: 300;
}

.card-content {
  border-top: 2px solid #f1eee9;
  padding: 35px 35px 40px 35px;
  background: rgba(241, 238, 233, 0.3);
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.service-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.bullet {
  color: #8b7355;
  font-size: 1.8rem;
  line-height: 1.5;
  flex-shrink: 0;
  margin-top: -2px;
}

.service-text {
  font-size: 1.5rem;
  color: #5c5545;
  font-weight: 300;
  line-height: 1.6;
  margin: 0;
  font-family: 'Aileron', sans-serif;
}

/* Animação de expansão */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 1000px;
}

/* Responsividade */
@media (max-width: 1024px) {
  .card-header {
    padding: 25px 30px;
  }

  .service-icon {
    font-size: 2.5rem;
  }

  .service-title {
    font-size: 1.4rem;
  }

  .expand-button {
    width: 32px;
    height: 32px;
    font-size: 1.4rem;
  }

  .card-content {
    padding: 30px;
  }

  .service-text {
    font-size: 1.4rem;
  }
}

@media (max-width: 768px) {
  .card-header {
    padding: 20px 30px;
  }

  .header-left {
    gap: 15px;
  }

  .service-icon {
    font-size: 2.2rem;
  }

  .service-title {
    font-size: 1.2rem;
  }

  .expand-button {
    width: 30px;
    height: 30px;
    font-size: 1.3rem;
  }

  .card-content {
    padding: 25px 30px;
  }

  .services-list {
    gap: 15px;
  }

  .service-text {
    font-size: 1.3rem;
  }

  .bullet {
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .card-header {
    padding: 18px 25px;
  }

  .header-left {
    gap: 12px;
  }

  .service-icon {
    font-size: 2rem;
  }

  .service-title {
    font-size: 1.3rem;
  }

  .expand-button {
    width: 28px;
    height: 28px;
    font-size: 1.2rem;
  }

  .card-content {
    padding: 20px 25px;
  }

  .services-list {
    gap: 12px;
  }

  .service-text {
    font-size: 1.2rem;
  }

  .bullet {
    font-size: 1.5rem;
  }
}
</style>
