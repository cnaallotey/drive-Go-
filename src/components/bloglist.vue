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
  <div class="w-full mt-10 md:mt-16 lg:mt-24">
    <div class="max-w-screen-xl mx-auto border-b border-white border-opacity-10 px-4">
      <p class="text-4xl font-semibold text-white mb-5">Recent Articles</p>
    </div>
    <ul class="flex flex-wrap mb-8 -mx-2 text-center justify-center mt-5">
      <li class="w-full md:w-auto px-2">
        <a
          class="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-slate-200 hover:text-green-500 hover:bg-slate-900 font-bold rounded-md hover:shadow-sm"
          href="#"
          >All Categories</a
        >
      </li>
      <li class="w-full md:w-auto px-2">
        <a
          class="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-slate-200 hover:text-green-500 hover:bg-slate-900 font-bold rounded-md hover:shadow-sm"
          href="#"
          >Technology</a
        >
      </li>
      <li class="w-full md:w-auto px-2">
        <a
          class="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-slate-200 hover:text-green-500 hover:bg-slate-900 font-bold rounded-md hover:shadow-sm"
          href="#"
          >Development</a
        >
      </li>
      <li class="w-full md:w-auto px-2">
        <a
          class="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-slate-200 hover:text-green-500 hover:bg-slate-900 font-bold rounded-md hover:shadow-sm"
          href="#"
          >Marketing</a
        >
      </li>
      <li class="w-full md:w-auto px-2">
        <a
          class="inline-block w-full py-2 px-4 text-sm text-slate-200 hover:text-green-500 hover:bg-slate-900 font-bold rounded-md hover:shadow-sm"
          href="#"
          >Start-up</a
        >
      </li>
    </ul>
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
        :tags="blog.tag.split(',')"
        :category="blog.category"
        :date="blog['created-on']"
      />
    </div>
  </div>
</template>

<!-- import axios from "axios";

axios.defaults.baseURL= 'https://api.webflow.com/';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + '17c91214e21d30202e2640607d757f553258add5a4e971256809b155d4d86107' -->
