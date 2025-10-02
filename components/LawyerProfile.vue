<template>
  <div class="main-content">
    <section class="lawyer-profile">
      <div class="container">
        <div class="profile-card">
          <div class="profile-content" :class="{ 'reverse-layout': reverse }">
            <div class="profile-text">
              <p class="profile-label">{{ label }}</p>
              <h1 class="lawyer-name">
                {{ formattedName }}
              </h1>
              <div class="divider"></div>
              <p class="service-description" v-html="formattedDescription"></p>

              <!-- Botão de expandir/colapsar -->
              <button
                @click="toggleExpanded"
                class="expand-button"
                :aria-label="isExpanded ? 'Menos informação' : 'Mais informação'"
              >
                <span class="expand-icon">{{ isExpanded ? '×' : '+' }}</span>
              </button>
            </div>
            <div class="profile-image">
              <img :src="imageUrl" :alt="`${label} ${name}`" class="lawyer-photo" />
            </div>
          </div>
        </div>

        <!-- Pop-up overlay -->
        <div class="popup-overlay" :class="{ active: isExpanded }" @click="closePopup">
          <div class="popup-content" @click.stop>
            <button class="close-button" @click="closePopup">×</button>
            <div class="popup-info" v-if="extraInfo" v-html="extraInfo"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LawyerProfile',
  props: {
    label: {
      type: String,
      default: 'ADVOGADA',
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: 'Serviço jurídico com discrição e prontidão',
    },
    extraInfo: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  computed: {
    formattedName() {
      // Quebra o nome em linhas se contiver espaço
      return this.name.replace(/\s+/g, '\n')
    },
    formattedDescription() {
      return this.description.replace(/\n/g, '<br />')
    },
  },
  methods: {
    toggleExpanded() {
      this.isExpanded = !this.isExpanded
      if (this.isExpanded) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
    closePopup() {
      this.isExpanded = false
      document.body.style.overflow = 'auto'
    },
  },
  beforeUnmount() {
    // Garante que o scroll volta ao normal se o componente for destruído
    document.body.style.overflow = 'auto'
  },
}
</script>

<style scoped>
.main-content {
  min-height: 100vh;
  background: #f1eee9;
  padding: 60px 0 80px 0;
  display: flex;
  align-items: center;
}

.container {
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  margin-top: 20px;
}

.profile-card {
  background: #f1eee9;
  border: 2px solid #8b7355;
  border-radius: 0;
  overflow: visible;
  width: 80%;
  position: relative;
  margin-left: 9.9vw;
}

.profile-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  min-height: 500px;
}

.profile-content.reverse-layout {
  grid-template-columns: 1fr 2fr;
}

.profile-content.reverse-layout .profile-text {
  order: 2;
  margin-left: 280px;
  align-items: flex-end;
  text-align: right;
}

.profile-content.reverse-layout .profile-image {
  order: 1;
}

.profile-content.reverse-layout .lawyer-photo {
  margin-left: 140px;
}

.profile-text {
  padding: 80px 60px;
  background: #f1eee9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 180px;
  max-width: 600px;
  position: relative;
}

.profile-image {
  background: #f1eee9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: visible;
  z-index: 2;
}

.lawyer-photo {
  width: 120%;
  height: 120%;
  object-fit: cover;
  object-position: center top;
  filter: sepia(20%) saturate(120%) brightness(105%);
  position: relative;
  top: -10%;
  margin-right: 100px;
}

.profile-label {
  font-size: 5rem;
  color: #5c5545;
  font-weight: 300;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  font-family: 'Object Sans' sans-serif;
}

.lawyer-name {
  font-size: 8rem;
  font-weight: 100;
  color: #5c5545;
  line-height: 0.9;
  margin: 0 0 30px 0;
  font-family: 'Noto Serif Display';
  white-space: pre-line;
}

.divider {
  width: 200px;
  height: 4px;
  background: #5c5545;
  margin: 0 0 30px 0;
}

.service-description {
  font-size: 3rem;
  color: #5c5545;
  font-weight: 300;
  line-height: 1.2;
  margin: 0;
  font-family: 'Object Sans' sans-serif;
}

/* Botão de expandir/colapsar */
.expand-button {
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
  margin-top: 30px;
  transition: all 0.3s ease;
  font-size: 2rem;
  font-weight: 300;
  z-index: 10;
  position: relative;
}

.expand-button:hover {
  background: #4a473a;
  transform: scale(1.1);
}

.expand-button:focus {
  outline: 2px solid #8b7355;
  outline-offset: 2px;
}

.expand-icon {
  line-height: 1;
  font-family: 'Object Sans' sans-serif;
}

.profile-content.reverse-layout .expand-button {
  align-self: flex-end;
}

/* Pop-up styles */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.popup-overlay.active {
  opacity: 1;
  visibility: visible;
}

.popup-content {
  background: rgba(241, 238, 233, 0.95);
  border: 2px solid #8b7355;
  padding: 50px;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  margin: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.popup-overlay.active .popup-content {
  transform: scale(1);
}

.close-button {
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  font-size: 3rem;
  color: #5c5545;
  cursor: pointer;
  transition: all 0.3s ease;
  line-height: 1;
}

.close-button:hover {
  color: #4a473a;
  transform: scale(1.1);
}

.popup-info {
  font-size: 1.8rem;
  color: #5c5545;
  font-family: 'Object Sans' sans-serif;
  line-height: 1.6;
  margin-top: 20px;
}

.popup-info strong {
  color: #4a473a;
  font-weight: 600;
  font-size: 2rem;
}

/* Media Queries - Mantidas as mesmas do original até o pop-up */
@media (max-width: 1600px) {
  .profile-label {
    font-size: 4.5rem;
  }

  .lawyer-name {
    font-size: 7.5rem;
  }

  .service-description {
    font-size: 2.8rem;
  }

  .profile-text {
    margin-left: 160px;
    padding: 70px 50px;
  }

  .profile-content.reverse-layout .profile-text {
    margin-left: 290px;
  }
}

@media (max-width: 1400px) {
  .profile-card {
    width: 85%;
    margin-left: 7.5vw;
  }

  .profile-label {
    font-size: 4rem;
  }

  .lawyer-name {
    font-size: 7rem;
  }

  .service-description {
    font-size: 2.6rem;
  }

  .profile-text {
    margin-left: 140px;
    padding: 60px 45px;
    max-width: 550px;
  }

  .profile-content.reverse-layout .profile-text {
    margin-left: 280px;
  }

  .lawyer-photo {
    width: 120%;
    height: 120%;
    margin-right: 80px;
  }

  .profile-content.reverse-layout .lawyer-photo {
    margin-left: 160px;
  }
}

@media (max-width: 1200px) {
  .profile-card {
    width: 90%;
    margin-left: 5vw;
  }

  .profile-label {
    font-size: 3.5rem;
  }

  .lawyer-name {
    font-size: 6rem;
  }

  .service-description {
    font-size: 2.2rem;
  }

  .profile-text {
    margin-left: 120px;
    padding: 50px 40px;
    max-width: 500px;
  }

  .profile-content.reverse-layout .profile-text {
    margin-left: 200px;
  }

  .divider {
    width: 180px;
  }

  .lawyer-photo {
    width: 120%;
    height: 120%;
    margin-right: 60px;
  }

  .profile-content.reverse-layout .lawyer-photo {
    margin-left: 90px;
  }
}

@media (max-width: 1024px) {
  .main-content {
    padding: 40px 0 60px 0;
  }

  .profile-card {
    width: 95%;
    margin-left: 2.5vw;
  }

  .profile-content {
    min-height: 450px;
  }

  .profile-label {
    font-size: 3rem;
  }

  .lawyer-name {
    font-size: 5rem;
  }

  .service-description {
    font-size: 2rem;
  }

  .profile-text {
    margin-left: 80px;
    padding: 40px 30px;
    max-width: 450px;
  }

  .profile-content.reverse-layout .profile-text {
    margin-left: 160px;
  }

  .divider {
    width: 160px;
    height: 3px;
  }

  .lawyer-photo {
    width: 120%;
    height: 120%;
    margin-right: 40px;
  }

  .profile-content.reverse-layout .lawyer-photo {
    margin-left: 60px;
  }

  .expand-button {
    width: 50px;
    height: 50px;
    font-size: 1.8rem;
  }

  /* Pop-up adjustments for tablet */
  .popup-content {
    padding: 40px;
    max-width: 90%;
  }

  .popup-info {
    font-size: 1.6rem;
  }

  .popup-info strong {
    font-size: 1.8rem;
  }
}

@media (max-width: 900px) {
  .profile-label {
    font-size: 2.8rem;
  }

  .lawyer-name {
    font-size: 4.5rem;
  }

  .service-description {
    font-size: 1.8rem;
  }

  .profile-text {
    margin-left: 60px;
    padding: 35px 25px;
    max-width: 400px;
  }

  .profile-content.reverse-layout .profile-text {
    margin-left: 120px;
  }

  .divider {
    width: 140px;
  }

  .lawyer-photo {
    width: 120%;
    height: 120%;
    margin-right: 60px;
  }

  .profile-content.reverse-layout .lawyer-photo {
    margin-left: 120px;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 20px 0;
  }

  .profile-content,
  .profile-content.reverse-layout {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .profile-text,
  .profile-content.reverse-layout .profile-text {
    padding: 100px 5vw;
    text-align: center;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
    max-width: none;
    order: initial;
  }

  .profile-image,
  .profile-content.reverse-layout .profile-image {
    margin-right: 0;
    order: initial;
  }

  .profile-content.reverse-layout .lawyer-photo {
    margin-left: 0;
    margin-right: 100px;
  }

  .lawyer-photo {
    width: 100%;
    height: 100%;
    margin-left: 40px;
    margin-top: 110px;
    position: relative;
    top: -5.9%;
  }

  .profile-label {
    font-size: 2.8rem;
  }

  .lawyer-name {
    font-size: 4.5rem;
    text-align: center;
  }

  .divider {
    width: 120px;
    height: 3px;
  }

  .service-description {
    font-size: 2rem;
    text-align: center;
  }

  .profile-image {
    min-height: 400px;
  }

  .expand-button {
    align-self: center;
    width: 45px;
    height: 45px;
    font-size: 1.6rem;
  }

  .profile-content.reverse-layout .expand-button {
    align-self: center;
  }

  /* Pop-up adjustments for mobile */
  .popup-content {
    padding: 30px;
    margin: 10px;
    max-height: 85vh;
  }

  .popup-info {
    font-size: 1.4rem;
  }

  .popup-info strong {
    font-size: 1.6rem;
  }

  .close-button {
    font-size: 2.5rem;
    top: 15px;
    right: 20px;
  }
}

@media (max-width: 480px) {
  .profile-text {
    padding: 40px 5vw;
  }

  .profile-label {
    font-size: 1.8rem;
  }

  .lawyer-name {
    font-size: 3rem;
  }

  .divider {
    width: 90px;
    height: 2px;
  }

  .service-description {
    font-size: 1.3rem;
    text-align: center;
  }

  .profile-image {
    min-height: 300px;
  }

  .lawyer-photo {
    width: 100%;
    height: 100%;
    margin-left: 40px;
    margin-top: 110px;
    position: relative;
    top: -8.5%;
  }

  .expand-button {
    width: 40px;
    height: 40px;
    font-size: 1.4rem;
  }

  /* Pop-up adjustments for small mobile */
  .popup-content {
    padding: 20px;
    margin: 5px;
    max-height: 90vh;
  }

  .popup-info {
    font-size: 1.2rem;
    margin-top: 15px;
  }

  .popup-info strong {
    font-size: 1.4rem;
  }

  .close-button {
    font-size: 2rem;
    top: 10px;
    right: 15px;
  }
}
</style>
