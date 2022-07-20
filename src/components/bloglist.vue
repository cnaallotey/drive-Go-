<script setup>
import { onMounted } from "@vue/runtime-core";
import axios from "axios";
import Blogcard from "./blogcard.vue";
//import axios from "../axios/axios.js";
onMounted(() => {
  axios
    .get("https://api.webflow.com/collections/62d71e6d98f17d9e418535ec/items", {
      Headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 8d0c5bbf3bbbff65298a9ded42ca842a2cfaf48b0c1326445e25188b6bf22d49",
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});
</script>

<template>
  <div class="w-full mt-32">
    <div class="max-w-screen-xl mx-auto border-b border-white border-opacity-10">
      <p class="text-4xl font-semibold text-white mb-5">Recent Articles</p>
    </div>
    <div
      class="max-w-screen-xl mt-10 mx-auto grid grid-cols-l lg:grid-cols-2 gap-10 lg:gap-20"
    >
      <Blogcard />
      <Blogcard />
      <Blogcard />
      <Blogcard />
    </div>
  </div>
</template>

<!-- import axios from "axios";

axios.defaults.baseURL= 'https://api.webflow.com/';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + '17c91214e21d30202e2640607d757f553258add5a4e971256809b155d4d86107' -->
