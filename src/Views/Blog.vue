<script setup>
import Navbar from "../components/navbar.vue";
import Blogpage from "../components/blogpage.vue";
import Foote from "../components/foote.vue";
import Recentblogs from "../components/recentblogs.vue";
</script>

<template>
  <div class="bg-gray-800 w-full h-full overflow-y-scroll">
    <div class="w-full">
      <div class="max-w-screen-xl mx-auto pb-20">
        <Navbar /><Blogpage /><Recentblogs />
      </div>
      <Foote />
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: black;
}
</style>
