<template>
  <div>
    <div class="bg-slate-900"></div>
    <div class="w-full max-w-screen-xl px-4 mx-auto mt-10 lg:mt-10">
      <nav class="flex mb-5" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <router-link
              to="/blogs"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
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
                class="w-6 h-6 text-gray-500"
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
                class="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400"
                >{{ blog.name }}</span
              >
            </div>
          </li>
        </ol>
      </nav>
      <h2 class="text-4xl font-semibold text-green-500 mt-4">{{ blog.name }}</h2>
      <div
        class="flex items-center space-x-3 mt-5 w-full mx-0 border-b border-slate-200 border-opacity-50 pb-3"
      >
        <div class="w-12 h-12 rounded-full bg-gray-900 overflow-hidden">
          <img
            :src="blog['author-image'] ? blog['author-image'] : '/logoev.png'"
            class="w-full h-full object-cover object-center"
            alt=""
          />
        </div>
        <div>
          <p class="text-gray-900 text-sm font-semibold leading-5">DriveGo Electric</p>
          <p class="text-gray-700 text-sm font-normal">Written : {{ date }}</p>
        </div>
      </div>
      <div class="max-w-screen-md mx-auto mt-5">
        <p class="text-base font-normal text-gray-700 leading-5">
          {{ blog["post-summary"] }}
        </p>
        <div class="w-full h-[400px] bg-black overflow-hidden mt-5">
          <img :src="image" class="w-full h-full object-cover object-center" alt="" />
        </div>
        <p
          class="font-normal text-xs text-gray-500 italic pl-3 border-l-2 border-gray-400 mt-1"
        >
          {{ blog["image-caption"] }}
        </p>
      </div>

      <div class="max-w-screen-md mx-auto mt-5">
        <div
          class="text-gray-700 text-lg space-y-4 col-span-3 blog"
          id="blog"
          v-html="blog['post-body']"
        ></div>
        <div class="w-full space-x-2 items-center mb-4 flex flex-wrap">
          <p class="text-sm font-medium w-fit text-slate-500 uppercase">Tag:</p>
          <p
            class="text-slate-700 w-fit text-sm italic py-1 px-2 bg-slate-200"
            v-for="tag in tags"
            :key="tag"
          >
            {{ tag }}
          </p>
        </div>
        <div class="col-span-3 lg:col-span-2 h-full">
          <div class="w-full h-full relative">
            <div
              class="w-fit mx-auto rounded-2xl bg-opacity-100 p-5 px-10 bg-slate-100 sticky top-0 flex flex-col items-center space-y-3"
            >
              <p class="text-slate-900 font-medium text-sm">
                Please, Don't forget to share!
              </p>
              <div class="w-fit flex space-x-4">
                <a
                  v-for="sociallink in sociallinks"
                  :key="sociallink"
                  :href="sociallink.link"
                  ><img
                    :src="'/images/' + sociallink.icon"
                    class="w-10 h-10"
                    :alt="sociallink.name"
                /></a>
              </div>
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
      tags: [],
      sociallinks: [
        {
          name: "facebook",
          link: `https://www.facebook.com/dialog/send?app_id=140586622674265&link=${window.location.href}&redirect_uri=${window.location.href}`,
          icon: "facebook2.svg",
        },
        { name: "twitter", link: "#", icon: "twitt.svg" },
        { name: "whatsapp", link: "#", icon: "whatsapp2.svg" },
        {
          name: "linkedin",
          link: `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`,
          icon: "linkedin2.svg",
        },
      ],
    };
  },

  mounted() {
    axios.get(`/post/${this.$route.params.id}`).then((res) => {
      console.log(res.data);
      this.blog = res.data;
      this.image = res.data["main-image"]["url"];
      this.date = moment(res.data["created-on"]).format("MMMM Do YYYY, h:mm:ss a");
      document.title = res.data.name;
      this.tags = res.data.tag.split(",");
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
