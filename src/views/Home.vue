<template>
  <div>
    <div class="circles">
      <span class="circle1"></span>
      <span class="circle2"></span>
      <span class="circle3"></span>
    </div>
    <div class="Home">
      <p>Hello,We Are F Company And create</p>
      <h2>BRANDS</h2>
      <p>See Our Services, And Portfolio</p>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.Home {
  text-align: center;
  background-color: var(--body-color);
  color: #fff;
  border-radius: 10px;
  width: 800px;
  margin: 80px auto;
  padding: 10px;
}
.circles {
  text-align: center;
  height: 100px;
  padding: 50px;
  margin-top: 60px;
}
.circles span {
  display: inline-block;
  margin-left: 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.circles .circle1 {
  background-color: var(--main-color);
  animation-name: circle-one;
  animation-delay: 500ms;
  animation-duration: 3s;
  animation-iteration-count: 3;
  animation-timing-function: ease-in-out;
}

.circles .circle2 {
  background-color: #09c;
}
.circles .circle3 {
  background-color: var(--body-color);
  animation-name: circle-three;
  animation-delay: 500ms;
  animation-duration: 3s;
  animation-iteration-count: 3;
  animation-timing-function: ease-in-out;
}

@keyframes circle-one {
  50% {
    transform: translate(-50px, -10px);
  }

  100% {
    transform: translate(0px, -10px);
  }
}

@keyframes circle-three {
  50% {
    transform: translate(50px, -10px);
  }

  100% {
    transform: translate(0px, -10px);
  }
}

Footer {
  position: fixed;
  bottom: 0px;
}

@media (max-width: 400px) {
  .Home {
    width: 100%;
  }
  Footer {
    position: static;
  }
}
</style>
