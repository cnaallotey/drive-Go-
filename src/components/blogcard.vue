<template>
  <div class="">
    <div class="flex justify-center h-full">
      <div
        class="rounded-lg shadow-lg bg-white w-full overflow-hidden border-4 border-gray-900"
      >
        <a :href="'/blog/' + slug" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img class="" :src="image" alt="" />
        </a>
        <div class="p-6">
          <span
            class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 my-4 rounded"
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
            Article
          </span>
          <h5 class="text-gray-900 text-xl font-medium mb-2">{{ name }}</h5>
          <p class="text-gray-700 text-base mb-4">
            {{ summary }}
          </p>
          <router-link
            :to="'/blog/' + slug"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Read more
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    summary: {
      type: String,
    },
    image: {
      type: String,
    },
    slug: {
      type: String,
    },
  },
};
</script>
