<template>
  <div class="section">
    <h2 v-if="title">{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LegalSection',
  props: {
    title: { type: String, default: '' },
  },
}
</script>

<style scoped>
.section {
  margin: 50px 0;
}

.section h2 {
  font-size: 2.4rem;
  color: #5c5545;
  font-weight: 400;
  margin-bottom: 25px;
  border-bottom: 2px solid #8b7355;
  padding-bottom: 10px;
}

.section :deep(p) {
  font-size: 1.4rem;
  color: #5c5545;
  line-height: 1.7;
  margin-bottom: 20px;
  text-align: justify;
}

.section :deep(ul) {
  margin: 20px 0;
  padding-left: 0;
}

.section :deep(li) {
  font-size: 1.4rem;
  color: #5c5545;
  line-height: 1.7;
  margin-bottom: 15px;
  list-style: none;
  position: relative;
  padding-left: 25px;
}

.section :deep(li::before) {
  content: '•';
  color: #8b7355;
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 1.8rem;
}

.section :deep(strong) {
  color: #4a473a;
  font-weight: 600;
}

.section :deep(.contact-box) {
  background: #f8f6f1;
  border: 2px solid #8b7355;
  padding: 30px;
  margin: 30px 0;
}

.section :deep(.contact-box p) {
  margin: 10px 0;
}

.section :deep(a) {
  color: #8b7355;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.section :deep(a:hover) {
  color: #5c5545;
}

@media (max-width: 768px) {
  .section h2 {
    font-size: 2rem;
  }
  .section :deep(p),
  .section :deep(li) {
    font-size: 1.25rem;
    text-align: left;
  }
  .section :deep(.contact-box) {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .section h2 {
    font-size: 1.6rem;
  }
  .section :deep(p),
  .section :deep(li) {
    font-size: 1.05rem;
  }
}
</style>
