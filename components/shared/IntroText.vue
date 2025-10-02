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
  color: #5c5545;
  line-height: 1.6;
  margin-bottom: 30px;
  font-style: italic;
  padding: 20px;
  background: #f8f6f1;
  border-left: 4px solid #8b7355;
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
