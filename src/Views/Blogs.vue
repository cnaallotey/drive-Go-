<script setup>
import Navbar from "../components/navbar.vue";
import Blogshero from "../components/blogshero.vue";
import Bloglist from "../components/bloglist.vue";
import Foote from "../components/foote.vue";
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
  document.title = "Blogs";
});
</script>

<template>
  <div class="bg-white w-screen h-screen overflow-y-scroll">
    <Blogshero /><Bloglist /> <Foote class="mt-32" />
  </div>
</template>

<style scoped>
body {
  background-color: black;
}
</style>
