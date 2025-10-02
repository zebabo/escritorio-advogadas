<template>
  <div id="app">
    <!-- Menu lateral global -->
    <SideMenu />

    <!-- Aqui é onde as páginas serão carregadas -->
    <router-view />
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'

export default {
  name: 'App',
  components: {
    SideMenu,
  },
}
</script>

<style>
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
