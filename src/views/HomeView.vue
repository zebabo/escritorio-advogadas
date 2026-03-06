<template>
  <div class="home">
    <IntroSection />
    <MainContent />
    <AppFooter />
  </div>
</template>

<script>
import IntroSection from '../components/IntroSection.vue'
import MainContent from '../components/MainContent.vue'
import Footer from '../components/shared/AppFooter.vue'

export default {
  name: 'HomeView',
  components: {
    IntroSection,
    MainContent,
    AppFooter: Footer,
  },
}
</script>

<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
</style>
