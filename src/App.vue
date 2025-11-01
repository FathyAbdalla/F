<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <nav>
        <RouterLink class="link" active-class="active" to="/">Home</RouterLink>
        <RouterLink class="link" active-class="active" to="/Services">Services</RouterLink>
        <RouterLink class="link" active-class="active" to="/Portfolio">Portfolio</RouterLink>
        <span class="logo">F</span>
        <RouterLink class="link" active-class="active" to="/About">About</RouterLink>
        <RouterLink class="link" active-class="active" to="/Blog">Blog</RouterLink>
        <RouterLink class="link" active-class="active" to="/Contact">Contact</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style>
:root {
  --main-color: #3e495b;
  --body-color: #272e3a;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0px;
  font-family: 'work sans';
}
p {
  line-height: 1.6;
}
header {
  margin-top: 30px;
}
.logo {
  font-size: 50px;
  color: orangered;
  background-color: #eee;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}
.link {
  text-decoration: none;
  color: #fff;
  background-color: var(--main-color);
  padding: 10px;
  border-radius: 10px;
}
.link.active {
  color: orangered;
}
.link:hover {
  color: orangered;
}
</style>
