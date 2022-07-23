<script setup>
import Navbar from "../components/navbar.vue";
import Blogshero from "../components/blogshero.vue";
import Bloglist from "../components/bloglist.vue";
import Foote from "../components/foote.vue";
</script>

<template>
  <div class="bg-slate-900 w-screen h-screen overflow-y-scroll">
    <Navbar /><Blogshero /><Bloglist /> <Foote />
  </div>
</template>

<style scoped>
body {
  background-color: black;
}
</style>
