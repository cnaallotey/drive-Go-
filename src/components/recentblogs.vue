<template>
  <div>
    <section class="dark:bg-gray-800">
      <div class="py-8 mx-auto max-w-screen-xl lg:py-16 px-4">
        <div class="w-full text-left lg:mb-10 mb-8">
          <h2
            class="mb-4 text-3xl lg:text-4xl tracking-tight font-semibold text-slate-900 dark:text-white"
          >
            Recent Articles
          </h2>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
          <article
            v-for="blog in recentblogs"
            :key="blog.id"
            class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="flex justify-between items-center mb-5 text-gray-500">
              <span
                class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800"
              >
                <svg
                  class="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                </svg>
                {{ blog.category }}
              </span>
              <span class="text-sm">{{
                moment(blog["created-on"]).format("MMM Do YY")
              }}</span>
            </div>
            <h2
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <a href="#">{{ blog.name }}</a>
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              {{ blog["post-summary"] }}
            </p>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <img
                  class="w-7 h-7 rounded-full"
                  src="../assets/logoev.png"
                  alt="Bonnie Green avatar"
                />
                <span class="font-medium dark:text-white"> DriveGo Electrtic </span>
              </div>
              <a
                :href="'/blog/' + blog.slug"
                class="inline-flex items-center font-medium text-green-600 dark:text-green-500 hover:underline"
              >
                Read more
                <svg
                  class="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import axios from "axios";
import moment from "moment";

const recentblogs = ref([]);

onMounted(() => {
  const route = useRoute();
  console.log(route.params.id);
  axios
    .get(`/getrecentpost/${route.params.id}`)
    .then((res) => (recentblogs.value = res.data));
});
</script>
