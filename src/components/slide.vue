<script setup>
import { ref } from "@vue/reactivity";

import { Swiper, SwiperSlide } from "swiper/vue";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>

<template>
  <div class="h-full w-full">
    <swiper
      :modules="[Navigation, Pagination, Scrollbar, A11y, Autoplay]"
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="h-full w-full"
      autoplay=""
    >
      <swiper-slide
        ><div class="w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1614186462449-59c66ace62c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=100"
            class="object-center object-cover h-full w-full"
            alt=""
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=100"
            class="object-center object-cover h-full w-full"
            alt=""
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="w-full h-full">
          <img
            src="../assets/ev2.jpg"
            class="object-center object-cover h-full w-full"
            alt=""
          /></div
      ></swiper-slide>
      ...
    </swiper>
  </div>
</template>
