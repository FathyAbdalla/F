<template>
  <div>
    <div class="about">
      <h1>ABOUT US</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ducimus laudantium culpa ut a
        ipsa numquam nulla iure eum. Facilis alias earum quo et tempore non pariatur odio quisquam
        dignissimos!
      </p>
      <div class="slider" ref="sliderRef">
        <div class="dots">
          <span
            v-for="(dot, i) in images"
            :key="i"
            :class="['dot', { active: i === index }]"
            @click="changeBackground(i)"
          ></span>
        </div>
      </div>
      <div class="comp">
        <h1>ABOUT COMPANY</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo itaque neque
          repellendus corrupti, iusto hic minus, ipsa rem obcaecati, fugiat odio impedit quia
          nesciunt eum voluptas consectetur amet adipisci?
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Footer from '@/components/Footer.vue'
const images = [
  'url("https://picsum.photos/id/1018/1920/1080")',
  'url("https://picsum.photos/id/1025/1920/1080")',
  'url("https://picsum.photos/id/1039/1920/1080")',
]

const sliderRef = ref(null)
const index = ref(0)

function changeBackground(i) {
  index.value = i
  if (sliderRef.value) {
    sliderRef.value.style.backgroundImage = images[i]
  }
}

function nextSlide() {
  index.value = (index.value + 1) % images.length
  changeBackground(index.value)
}

onMounted(() => {
  // safe to access DOM here
  changeBackground(index.value)
  setInterval(nextSlide, 5000)
})
</script>

<style scoped>
h1 {
  color: var(--body-color);
}
.about {
  text-align: center;
  width: 900px;
  margin: 20px auto;
}

.slider {
  position: relative;
  height: 30vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
}

.dots {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: white;
}

Footer {
  position: fixed;
  bottom: 0px;
}
</style>
