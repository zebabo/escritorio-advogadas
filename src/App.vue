<template>
  <div id="app">
    <!-- Menu lateral global -->
    <SideMenu />

    <!-- Aqui é onde as páginas serão carregadas -->
    <router-view />
  </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue'

export default {
  name: 'App',
  components: {
    SideMenu,
  },
}
</script>

<style>
/* Importar a fonte Aileron Italic */
@font-face {
  font-family: 'Aileron';
  src: url('/fonts/aileron.italic.otf') format('opentype');
  font-weight: normal;
  font-style: italic;
}


@font-face {
  font-family: 'Playfair Display';
  src: url('/fonts/playfair-display.italic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: 'Raleway';
  src: url('/fonts/raleway.regular.ttf') format('truetype');
  font-weight: normal;
}


#app {
  font-family: 'Object Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
}
</style>
