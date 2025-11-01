<template>
  <div>
    <div class="portfolio">
      <h1>Portfolio</h1>
      <div class="temp">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
h1 {
  color: var(--body-color);
}

.portfolio {
  text-align: center;
  margin: 20px 20px;
}

.portfolio .temp {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 10px;
}

.portfolio .temp img {
  height: 150px;
  background-color: var(--body-color);
}

Footer {
  position: fixed;
  bottom: 0px;
}

@media (max-width: 400px) {
  .portfolio .temp {
    grid-template-columns: 100%;
  }
  Footer {
    position: static;
  }
}
</style>
