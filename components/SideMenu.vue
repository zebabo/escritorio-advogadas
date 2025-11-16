<template>
  <div class="side-menu-wrapper">
    <!-- Menu hamburger -->
    <button class="menu-button" @click="toggleMenu" :class="{ 'menu-open': isMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Menu lateral -->
    <nav class="side-menu" :class="{ active: isMenuOpen }">
      <div class="menu-header">
        <h3>Menu</h3>
        <button class="close-button" @click="closeMenu">&times;</button>
      </div>
      <ul class="menu-list">
        <li>
          <router-link to="/" @click="closeMenu" class="menu-link">Início</router-link>
        </li>
        <li>
          <a href="/services" @click="handleMenuClick" class="menu-link">Serviços</a>
        </li>
        <li>
          <router-link to="/team" @click="closeMenu" class="menu-link">Equipa</router-link>
        </li>
        <li>
          <router-link to="/articles" @click="closeMenu" class="menu-link">Artigos</router-link>
        </li>
      </ul>
    </nav>

    <!-- Overlay -->
    <div class="menu-overlay" v-if="isMenuOpen" @click="closeMenu"></div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    handleMenuClick(event) {
      this.closeMenu()
      const href = event.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        this.scrollToSection(href.substring(1))
      }
    },
    scrollToSection(sectionId) {
      setTimeout(() => {
        if (sectionId === 'inicio') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }, 400)
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isMenuOpen) {
        this.closeMenu()
      }
    })
  },
}
</script>

<style scoped>
.side-menu-wrapper {
  position: relative;
}

/* Menu Button - normal desktop */
.menu-button {
  position: fixed;
  top: 25px;
  left: 25px;
  z-index: 1001;
  background: #f1eee9;
  border: 2px solid #8b7355;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 1;
  visibility: visible;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.menu-button.menu-open {
  opacity: 0;
  visibility: hidden;
}

.menu-button:hover {
  background: #e8e4dc;
  border-color: #5c5545;
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.menu-button span {
  display: block;
  width: 25px;
  height: 3px;
  background: #5c5545;
  margin: 5px 0;
  transition: 0.3s;
  border-radius: 2px;
}

.menu-button.menu-open span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.menu-button.menu-open span:nth-child(2) {
  opacity: 0;
}

.menu-button.menu-open span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

/* Side Menu */
.side-menu {
  position: fixed;
  top: 0;
  left: -350px;
  width: 350px;
  height: 100vh;
  background: #ffffff;
  z-index: 1000;
  transition: left 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  padding: 0;
  border-right: 3px solid #8b7355;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
}

.side-menu.active {
  left: 0;
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px;
  border-bottom: 3px solid #8b7355;
  background: #5c5545;
}

.menu-header h3 {
  color: #f1eee9;
  font-size: 1.8rem;
  font-weight: 300;
  font-family: 'Noto Serif Display', serif;
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  color: #f1eee9;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, color 0.2s ease;
}

.close-button:hover {
  transform: rotate(90deg);
  color: #d4cfc4;
}

.menu-list {
  list-style: none;
  padding: 20px 0;
  margin: 0;
}

.menu-list li {
  border-bottom: 1px solid rgba(139, 115, 85, 0.2);
}

.menu-link {
  display: block;
  color: #5c5545;
  text-decoration: none;
  padding: 20px 30px;
  font-size: 1.2rem;
  font-weight: 400;
  transition: all 0.3s ease;
  position: relative;
  font-family: 'Object Sans', sans-serif;
}

.menu-link:hover,
.menu-link.router-link-active {
  background: linear-gradient(90deg, rgba(139, 115, 85, 0.15) 0%, transparent 100%);
  padding-left: 40px;
  color: #8b7355;
}

.menu-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: linear-gradient(180deg, #8b7355 0%, #5c5545 100%);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.menu-link:hover::before,
.menu-link.router-link-active::before {
  transform: scaleY(1);
}

/* Overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(92, 85, 69, 0.4);
  backdrop-filter: blur(6px);
  z-index: 999;
}

/* Responsivo: tablet ≤768px */
@media (max-width: 768px) {
  .menu-button {
    top: 20px;
    left: 20px;
    padding: 10px;
  }

  .menu-button span {
    width: 20px;
    height: 2px;
    margin: 4px 0;
  }

  .side-menu {
    width: 280px;
    left: -280px;
  }

  .menu-header {
    padding: 20px 25px;
  }

  .menu-header h3 {
    font-size: 1.6rem;
  }

  .menu-link {
    padding: 18px 25px;
    font-size: 1.1rem;
  }

  .menu-link:hover {
    padding-left: 35px;
  }
}

/* Responsivo: mobile ≤480px */
@media (max-width: 480px) {
  .menu-button {
    top: 15px;
    left: 15px;
    padding: 8px;
  }

  .menu-button span {
    width: 16px;
    height: 2px;
    margin: 3px 0;
  }

  .side-menu {
    width: 250px;
    left: -250px;
  }

  .menu-header {
    padding: 15px 20px;
  }

  .menu-header h3 {
    font-size: 1.5rem;
  }

  .menu-link {
    padding: 15px 20px;
    font-size: 1rem;
  }

  .menu-link:hover {
    padding-left: 30px;
  }
}
</style>
