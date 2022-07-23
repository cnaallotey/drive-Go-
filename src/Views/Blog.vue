<script setup>
import Navbar from "../components/navbar.vue";
import Blogpage from "../components/blogpage.vue";
import Foote from "../components/foote.vue";
</script>

<template>
  <div class="bg-slate-900 w-full h-full overflow-y-scroll">
    <div class="w-full">
      <div class="max-w-screen-xl mx-auto"><Navbar /><Blogpage /></div>
      <Foote />
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: black;
}
</style>
