<template>
  <div class="intro-texts">
    <p class="intro-text" v-for="(text, index) in texts" :key="index">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'IntroText',
  props: {
    texts: { type: Array, required: true },
  },
}
</script>

<style scoped>
.intro-text {
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 30px;
  font-style: italic;
  padding: 20px;
  background: #5c5545;
  opacity: 0.9;
  border-left: 4px solid #8b7355;
  font-family: 'Noto Serif Display', serif;
}

@media (max-width: 768px) {
  .intro-text {
    font-size: 1.4rem;
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .intro-text {
    font-size: 1.3rem;
  }
}
</style>
