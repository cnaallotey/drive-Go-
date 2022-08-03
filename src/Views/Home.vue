<script setup>
import Landingpage from "../components/landingpage.vue";
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
  document.title = "DriveGo Electric | Driving Access and inclusion to Evs in Africa";
});
</script>

<template>
  <div>
    <Landingpage />
  </div>
</template>
