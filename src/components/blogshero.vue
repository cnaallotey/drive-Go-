<script setup>
import Navbar from "./navbar.vue";
</script>

<template>
  <div class="w-full">
    <div
      class="w-full bg-gray-900 relative z-10 overflow-hidden border-b-8 border-green-700"
    >
      <div class="w-full h-full absolute top-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1617886322207-6f504e7472c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3RyaWMlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=100"
          class="w-full h-full object-cover object-center"
          alt=""
        />
        <!-- <slide class="" /> -->
      </div>

      <section
        class="bg-gray-900 bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 relative z-10"
      >
        <Navbar />
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a
            href="#"
            class="inline-flex justify-between items-center py-1 px-1 mb-7 text-sm text-white bg-gray-800 rounded-full dark:bg-gray-800 dark:text-white"
            role="alert"
          >
            <span class="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 mr-3"
              >Blogs</span
            >
          </a>
          <h1
            class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white"
          >
            Everything Electric Vehicles in Africa
          </h1>
          <p
            class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300"
          >
            Get the latest news, trends, events, fun facts etc on EVs. Subscribe and get
            latest information at your finger tips.
          </p>
          <div
            class="flex flex-col mb-8 lg:mb-16 max-w-2xl mx-auto space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
          >
            <input
              type="text"
              id="large-input"
              placeholder="Enter your email address"
              class="block p-4 w-full text-white bg-gray-700 rounded-lg border border-gray-600 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
            >
              Subscribe
              <svg
                class="ml-2 -mr-1 w-5 h-5"
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
            </button>
          </div>
        </div>
      </section>
      <div class="w-full relative bg-opacity-80 bg-gray-900 hidden">
        <!-- nav -->

        <!-- herosection -->
        <div class="w-full px-4">
          <div
            class="max-w-screen-xl mx-auto py-20 lg:py-48 flex flex-col items-center relative"
          >
            <h1
              class="text-white px-4 text-4xl tracking-tight lg:text-6xl bg-opacity-100 font-extrabold text-center max-w-2xl"
            >
              Driving
              <span class="text-green-500"> Access and Inclusion to EVs</span> in Africa
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
