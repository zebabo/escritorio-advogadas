<template>
  <div class="lawyer-profile" :class="{ reverse: reverse }">
    <div class="profile-container">
      <!-- Imagem do perfil -->
      <div class="profile-image-wrapper">
        <div class="image-container">
          <img
            :src="imageUrl"
            :alt="name"
            class="profile-image"
            :style="{ transform: `scale(${imageScale / 100})` }"
          />
        </div>
      </div>

      <!-- Conteúdo do perfil -->
      <div class="profile-content">
        <div class="content-box">
          <div class="profile-header">
            <h2 class="profile-name">{{ name }}</h2>
            <div class="name-divider"></div>
            <span class="profile-label">{{ label }}</span>
          </div>

          <p class="profile-description" v-html="description.replace(/\n/g, '<br>')"></p>

          <!-- Botão de expandir -->
          <button
            class="expand-button"
            @click="toggleExpanded"
            :class="{ active: isExpanded }"
          >
            <span class="button-icon">{{ isExpanded ? '−' : '+' }}</span>
          </button>

          <!-- Informação extra (expandível inline para mobile) -->
          <transition name="slide-fade">
            <div v-if="isExpanded && !isDesktop" class="extra-info" v-html="extraInfo"></div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Modal para desktop -->
    <transition name="modal-fade">
      <div v-if="isExpanded && isDesktop" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal">×</button>
          <div class="modal-header">
            <span class="modal-label">{{ label }}</span>
            <h3 class="modal-name">{{ name }}</h3>
            <div class="modal-divider"></div>
          </div>
          <div class="modal-body" v-html="extraInfo"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LawyerProfile',
  props: {
    label: {
      type: String,
      default: 'ADVOGADA'
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    extraInfo: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      required: true
    },
    reverse: {
      type: Boolean,
      default: false
    },
    imageScale: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      isExpanded: false,
      isDesktop: false
    }
  },
  mounted() {
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize)
  },
  methods: {
    checkScreenSize() {
      this.isDesktop = window.innerWidth > 768
    },
    toggleExpanded() {
      this.isExpanded = !this.isExpanded
      if (this.isDesktop && this.isExpanded) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    closeModal() {
      this.isExpanded = false
      document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped>
.lawyer-profile {
  width: 100%;
  padding: 60px 20px;
  background: #f1eee9;
}

.profile-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  gap: 0;
  position: relative;
  border: 2px solid #5c5545;
  background: #f1eee9;
}

/* Layout normal - imagem à direita */
.profile-image-wrapper {
  flex: 0 0 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 2;
}

.profile-content {
  flex: 1;
  order: 1;
}

/* Layout invertido - imagem à esquerda */
.lawyer-profile.reverse .profile-image-wrapper {
  order: 1;
}

.lawyer-profile.reverse .profile-content {
  order: 2;
}

/* Container da imagem */
.image-container {
  width: 500px;
  height: 650px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: visible;
  position: relative;
}

.profile-image {
  width: auto;
  height: 120%;
  max-width: none;
  object-fit: cover;
  object-position: center bottom;
  transform-origin: bottom center;
  position: relative;
  z-index: 1;
}

/* Caixa de conteúdo */
.content-box {
  background: #f1eee9;
  border: none;
  padding: 60px 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.profile-header {
  margin-top: 60px;
}

.profile-label {
  font-size: 1.2rem;
  letter-spacing: 3px;
  color: #8b7355;
  font-weight: 300;
  display: block;
  margin-top: 20px;
  font-family: 'Object Sans', sans-serif;
}

.profile-name {
  font-size: 5rem;
  font-weight: 300;
  color: #5c5545;
  line-height: 1.1;
  margin: 0 0 20px 0;
  font-family: 'Playfair Display', serif;
  font-style: italic;
}

.name-divider {
  width: 100px;
  height: 3px;
  background: #5c5545;
}

.profile-description {
  font-size: 1.8rem;
  color: #5c5545;
  font-weight: 300;
  line-height: 1.5;
  margin: 40px 0;
  font-family: 'Aileron', sans-serif;
  font-style: italic;
}

/* Botão de expandir */
.expand-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #5c5545;
  border: none;
  color: #f1eee9;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
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

/* --- ESTILO UNIFICADO PARA EXTRA INFO (mobile + desktop) --- */
.extra-info,
.modal-body {
  font-size: 1.6rem;
  color: #5c5545;
  line-height: 1.8;
  font-family: 'Aileron', sans-serif;
  font-style: italic;
}

.extra-info strong,
.modal-body strong {
  color: #8b7355;
  font-weight: 500;
}

.extra-info {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #8b7355;
}

/* Animação de transição inline (mobile) */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Modal (desktop) */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(92, 85, 69, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: #ffffff;
  border: 2px solid #5c5545;
  max-width: 700px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: 60px 50px;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: none;
  background: #5c5545;
  color: #f1eee9;
  font-size: 2.5rem;
  line-height: 1;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.modal-close:hover {
  background: #8b7355;
  transform: rotate(90deg);
}

.modal-header {
  margin-bottom: 30px;
}

.modal-label {
  font-size: 1rem;
  letter-spacing: 3px;
  color: #8b7355;
  font-weight: 300;
  display: block;
  margin-bottom: 10px;
  font-family: 'Object Sans', sans-serif;
}

.modal-name {
  font-size: 3.5rem;
  font-weight: 300;
  color: #5c5545;
  line-height: 1.1;
  margin: 0 0 20px 0;
  font-family: 'Playfair Display', serif;
  font-style: italic;
}

.modal-divider {
  width: 100px;
  height: 3px;
  background: #5c5545;
}

/* Animação do modal */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-active .modal-content,
.modal-fade-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .modal-content {
  transform: scale(0.9) translateY(-20px);
}

.modal-fade-leave-to .modal-content {
  transform: scale(0.9) translateY(-20px);
}

/* Responsividade */



@media (max-width: 1200px) {


  .image-container {
    width: 400px;
    height: 620px;
  }

  .content-box {
    padding: 50px 40px;
  }

  .profile-name {
    font-size: 4rem;
  }

  .profile-description {
    font-size: 1.8rem;
  }
}

@media (max-width: 1024px) {

.lawyer-profile {
    padding: 30px 25px;
  }

  .image-container {
    width: 350px;
    height: 470px;
    margin-top: 200px;
  }

  .profile-name {
    font-size: 3.5rem;
  }

  .profile-description {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .lawyer-profile {
    padding: 40px 25px;
  }

  .profile-container {
    flex-direction: column;
    gap: 0;
    border: 2px solid #5c5545;
  }

  .profile-image-wrapper,
  .lawyer-profile.reverse .profile-image-wrapper {
    order: 1;
    flex: 0 0 auto;
    width: 100%;
    border-bottom: 2px solid #5c5545;
  }

  .profile-content,
  .lawyer-profile.reverse .profile-content {
    order: 2;
    width: 100%;
  }

  .image-container {
    width: 300px;
    height: 480px;
  }

  .content-box {
    padding: 40px 30px;
  }

  .profile-name {
    font-size: 3rem;
  }

  .profile-description {
    font-size: 1.6rem;
  }

  .profile-label {
    font-size: 1.2rem;
  }

  /* Fonte menor da extra info em mobile */
  .extra-info {
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .lawyer-profile {
    padding: 30px 25px;
  }

  .image-container {
    width: 250px;
    height: 420px;
  }

  .content-box {
    padding: 30px 20px;
  }

  .profile-name {
    font-size: 2.5rem;
  }

  .profile-description {
    font-size: 1.4rem;
  }

  .profile-label {
    font-size: 1.1rem;
    letter-spacing: 2px;
  }

  .name-divider {
    width: 80px;
    height: 2px;
  }

  .expand-button {
    width: 45px;
    height: 45px;
    font-size: 1.8rem;
  }

  .extra-info {
    font-size: 1.4rem;
  }
}
</style>
