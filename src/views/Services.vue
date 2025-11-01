<template>
  <div>
    <div class="services">
      <h1>SERVICES</h1>
      <div class="circles">
        <span class="circle1"></span>
        <span class="circle2"></span>
        <span class="circle3"></span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laudantium aliquid quos,
        reprehenderit soluta, adipisci incidunt vero architecto est optio corrupti? Labore, libero
        quo. Cumque tempora rem est repellendus saepe?
      </p>
      <div class="content">
        <div class="first">
          <h3>WEB DESIGN</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repudiandae aliquid
            sapiente iure dolore est cumque dolores aut in incidunt natus distinctio inventore non
            repellendus esse exercitationem facilis, commodi nesciunt?
          </p>
        </div>
        <div class="second">
          <h3>GRAPHIC DESIGN</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odit velit tempora
            quo laboriosam consequatur harum. Quibusdam dolor minus voluptatibus quos perferendis
            placeat, magni nihil accusantium commodi quaerat, reiciendis nisi!
          </p>
        </div>
        <div class="third">
          <h3>PHOTOGRAPHY</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse voluptatibus id quae
            nesciunt quo, neque maxime voluptatum rerum repellat dolore sed iure, officiis natus vel
            cupiditate quisquam tenetur voluptatem!
          </p>
        </div>
        <div class="fourth">
          <h3>DEVELOPING</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error non natus obcaecati
            quaerat omnis amet eum libero itaque est officiis nulla, quae tempore qui enim optio
            commodi, inventore ab quisquam.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.services {
  text-align: center;
  margin: 30px 50px;
  width: fit-content;
}
.services h1,
h3 {
  color: var(--body-color);
}

.services .circles {
  height: 100px;
}
.services .circles span {
  display: inline-block;
  margin-left: 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.services .circles .circle1 {
  background-color: #00cc99;
  animation-name: circle-one;
  animation-delay: 500ms;
  animation-duration: 3s;
  animation-iteration-count: 3;
  animation-timing-function: ease-in-out;
}

.services .circles .circle2 {
  background-color: #09c;
  animation-name: circle-two;
  animation-delay: 1000ms;
  animation-duration: 3s;
  animation-iteration-count: 3;
  animation-timing-function: ease-in-out;
}
.services .circles .circle3 {
  background-color: var(--body-color);
  animation-name: circle-three;
  animation-delay: 1500ms;
  animation-duration: 3s;
  animation-iteration-count: 3;
  animation-timing-function: ease-in-out;
}
@keyframes circle-one {
  25% {
    transform: translateY(-50px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes circle-two {
  25% {
    transform: translateY(-50px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes circle-three {
  25% {
    transform: translateY(-50px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0px);
  }
}

.services .content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 5px;
}

Footer {
  position: fixed;
  bottom: 0px;
}

@media (max-width: 400px) {
  Footer {
    position: static;
  }
}
</style>
