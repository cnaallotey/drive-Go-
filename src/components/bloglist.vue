<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import axios from "axios";
import Blogcard from "./blogcard.vue";
//import axios from "../axios/axios.js";

const blogs = ref([]);
onMounted(() => {
  axios
    .get("/posts", {
      Headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      //console.log(res.data);
      blogs.value = res.data.items;
      //console.log(blogs.value);
    })
    .catch((err) => console.log(err));
});
</script>

<template>
  <div class="w-full mt-32">
    <div class="max-w-screen-xl mx-auto border-b border-white border-opacity-10 px-4">
      <p class="text-4xl font-semibold text-white mb-5">Recent Articles</p>
    </div>
    <div
      class="max-w-screen-xl mt-10 mx-auto grid grid-cols-l lg:grid-cols-2 gap-10 lg:gap-20 px-4"
    >
      <Blogcard
        v-for="blog in blogs"
        :key="blog.id"
        :name="blog.name"
        :summary="blog['post-summary']"
        :image="blog['main-image']['url']"
        :slug="blog['slug']"
      />
    </div>
  </div>
</template>

<!-- import axios from "axios";

axios.defaults.baseURL= 'https://api.webflow.com/';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + '17c91214e21d30202e2640607d757f553258add5a4e971256809b155d4d86107' -->
