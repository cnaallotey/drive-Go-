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
            src="../assets/ev4.jpg"
            class="object-center object-cover h-full w-full"
            alt=""
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="w-full h-full">
          <img
            src="../assets/ev1.jpg"
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
