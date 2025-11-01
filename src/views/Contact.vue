<template>
  <div>
    <div class="contact">
      <h1>CONTACT US</h1>
      <p>Feel Free To Connect</p>
      <form action="" class="in">
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="mail" placeholder="Your Mail" />
        <input type="text" name="subject" placeholder="Subject" />
        <input type="text" name="message" placeholder="Enter Message Here..." class="m" />
        <input type="submit" class="s" />
      </form>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.contact {
  text-align: center;
  background-color: var(--body-color);
  color: #fff;
  border-radius: 10px;
  width: 900px;
  height: 500px;
  margin: 20px auto;
  padding: 10px;
}
.in {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.in input {
  width: calc((100% - 20%) / 3);
  height: 30px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  caret-color: var(--body-color);
}
.in .m {
  width: 820px;
  height: 200px;
}

.in .s {
  height: 50px;
  color: var(--body-color);
  font-weight: bold;
}

Footer {
  position: fixed;
  bottom: 0px;
}

@media (max-width: 400px) {
  .contact {
    width: 100%;
  }
  Footer {
    position: static;
  }
}
</style>
