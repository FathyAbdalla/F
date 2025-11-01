<template>
  <footer>
    <div class="links">
      <a href="https://facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
      <a href="https://x.com/" target="_blank"><i class="fa-brands fa-square-x-twitter"></i></a>
      <a href="https://github.com/" target="_blank"><i class="fa-brands fa-github"></i></a>
      <a href="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
    </div>
    <div>&copy; {{ year }}-All Right Reserved</div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
footer {
  background-color: var(--main-color);
  color: #fff;
  width: 100%;
  text-align: center;
  padding: 10px 0px;
}

footer .links {
  margin: 10px 0px;
}

footer .links a {
  color: var(--body-color);
  background-color: #fff;
  display: inline-flex;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
}

footer .links a:hover {
  background-color: orangered;
}
</style>
