<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import axios from "axios";

import Blogcard from "./blogcard.vue";
//import axios from "../axios/axios.js";

const categories = ref([]);

var val = ref("");

// Filtering the blogs array based on the value of the val variable.
const filtercard = computed(() => {
  return blogs.value.filter((element) => element.category.match(val.value));
});

// A function that is called when a button is clicked. It changes the value of the `val` variable.
const changeval = (x) => {
  val.value = x;
};

// Fetching data from the API and storing it in the `blogs` variable.
const blogs = ref([]);
onMounted(() => {
  axios
    .get("/posts", {
      Headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      blogs.value = res.data.items;
      res.data.items.forEach((element) => {
        if (!categories.value.includes(element.category)) {
          categories.value.push(element.category);
        }
      });
    })
    .catch((err) => console.log(err));
});
</script>

<template>
  <div class="w-full mt-10 md:mt-16 lg:mt-16">
    <div class="max-w-screen-xl mx-auto border-b border-gray-300 border-opacity-50 px-4">
      <p class="text-4xl font-semibold text-slate-900 mb-5">Recent Articles</p>
    </div>
    <div class="md:hidden px-4 mt-5">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select
        id="tabs"
        name="tabs"
        class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        v-model="val"
        @change="changeval(val)"
      >
        <option value="" default>All Categories</option>

        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
    <ul class="md:flex flex-wrap mb-8 -mx-2 text-center justify-center mt-5 hidden">
      <li class="w-full md:w-auto px-2">
        <button
          class="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-slate-700 hover:text-green-500 hover:bg-slate-200 font-bold rounded-md hover:shadow-sm cursor-pointer"
          @click="changeval('')"
          :class="val == '' ? 'bg-green-500 text-white' : ''"
        >
          All Categories
        </button>
      </li>
      <li class="w-full md:w-auto px-2" v-for="category in categories" :key="category">
        <button
          class="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-slate-700 hover:text-green-500 hover:bg-slate-200 font-bold rounded-md hover:shadow-sm cursor-pointer"
          @click="changeval(category)"
          :class="val == category ? 'bg-green-500 text-white' : ''"
        >
          {{ category }}
        </button>
      </li>
    </ul>
    <div
      class="max-w-screen-xl mt-10 mx-auto grid grid-cols-l lg:grid-cols-2 gap-8 md:gap-10 lg:gap-20 px-4"
    >
      <Blogcard
        v-for="blog in filtercard"
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
