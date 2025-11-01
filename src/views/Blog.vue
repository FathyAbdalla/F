<template>
  <div>
    <div class="blog">
      <h1>Blog</h1>
      <div class="flex">
        <div>
          <img src="../images/blog_entry_01.jpg" width="100%" />
          <h2>Sample Blog Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime culpa similique ex
            nobis accusamus officia laudantium quae! Dicta totam, saepe numquam ipsam cupiditate
            iure suscipit expedita accusantium autem! Quos, eveniet?
          </p>
        </div>
        <div>
          <img src="../images/blog_entry_02.jpg" width="100%" />
          <h2>Sample Blog Title</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae ex nisi
            maiores ea provident expedita in at voluptate adipisci, veritatis amet quidem vitae,
            culpa veniam. Corrupti esse totam neque!
          </p>
        </div>
      </div>
      <div class="flex-two">
        <div>
          <img src="../images/blog_entry_03.jpg" width="100%" />
          <h2>Sample Blog Title</h2>
          <p>lorem</p>
        </div>
        <div>
          <img src="../images/blog_entry_04.jpg" width="100%" />
          <h2>Sample Blog Title</h2>
          <p>lorem</p>
        </div>
        <div>
          <img src="../images/blog_entry_05.jpg" width="100%" />
          <h2>Sample Blog Title</h2>
          <p>lorem</p>
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
h1 {
  color: var(--body-color);
}
.blog {
  text-align: center;
  margin: 20px 50px;
}

.blog .flex {
  display: flex;
  justify-content: space-between;
}

.blog .flex div {
  width: calc((100% - 10%) / 2);
  background-color: var(--body-color);
  color: white;
}
.blog .flex-two {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}

.blog .flex-two div {
  width: calc((100% - 10%) / 3);
  background-color: var(--body-color);
  color: white;
}
</style>
