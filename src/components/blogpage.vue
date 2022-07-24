<template>
  <div>
    <div class="w-full max-w-screen-xl px-4 mx-auto mt-10 lg:mt-10">
      <nav class="flex mb-5" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <router-link
              to="/blogs"
              class="inline-flex items-center text-sm font-medium text-gray-300 hover:text-gray-200"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                ></path>
              </svg>
              Blog
            </router-link>
          </li>

          <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="w-6 h-6 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
                >{{ blog.name }}</span
              >
            </div>
          </li>
        </ol>
      </nav>
      <div class="w-full h-[600px] bg-black overflow-hidden">
        <img :src="image" class="w-full h-full object-cover object-center" alt="" />
      </div>

      <h2 class="text-4xl font-semibold text-green-500 mt-5">{{ blog.name }}</h2>
      <div class="flex items-center space-x-3 mt-5">
        <div class="w-12 h-12 rounded-full bg-white"></div>
        <div>
          <p class="text-white text-sm font-semibold leading-5">DriveGo Electric</p>
          <p class="text-gray-200 text-sm font-normal">Written : {{ date }}</p>
        </div>
      </div>
      <div class="w-full grid grid-cols-3 lg:grid-cols-5 gap-10 mt-10 lg:mt-12">
        <div
          class="text-gray-200 text-lg space-y-4 col-span-3 blog"
          id="blog"
          v-html="blog['post-body']"
        ></div>
        <div class="col-span-3 lg:col-span-2 h-full">
          <div class="w-full h-full relative">
            <div
              class="w-fit rounded-2xl bg-opacity-75 p-5 bg-white sticky top-0 flex items-center space-x-3"
            >
              <p class="text-gray-900 font-medium text-sm">Share on:</p>
              <a href="#"
                ><img src="../assets/facebook.png" class="w-10 h-10" alt=""
              /></a>
              <a href="#"><img src="../assets/twitter.svg" class="w-10 h-10" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return {
      blog: [],
      image: "",
      date: "",
    };
  },

  mounted() {
    axios.get(`/post/${this.$route.params.id}`).then((res) => {
      //console.log(res.data);
      this.blog = res.data;
      this.image = res.data["main-image"]["url"];
      this.date = moment(res.data["created-on"]).format("MMMM Do YYYY, h:mm:ss a");
    });
  },
  filters: {
    cutdate(value) {
      //new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
      return value.substr(10);
    },
  },
};
</script>

<style scoped>
.blog ::v-deep(h2) {
  @apply text-2xl font-semibold;
}

.blog ::v-deep(blockquote) {
  @apply font-thin italic text-sm;
}
</style>
