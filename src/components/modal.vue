<template>
  <div
    x-show="modalOpen"
    x-transition
    class="bg-black bg-opacity-90 fixed top-0 left-0 w-full min-h-screen z-20 h-full flex items-center justify-center px-4 py-5"
  >
    <div
      class="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 md:py-[60px] md:px-[70px] text-center"
    >
      <div class="w-full flex justify-center">
        <img src="../assets/DRIVEGO1.jpg" class="w-40 mx-auto" alt="" />
      </div>
      <h3 class="font-bold text-dark text-xl sm:text-2xl pb-2">
        {{ modalheader }}
      </h3>
      <span class="inline-block bg-primary h-1 w-[90px] mx-auto rounded mb-6"></span>
      <p class="text-base text-body-color leading-relaxed mb-10">
        {{ modalContent }}
      </p>
      <div class="flex flex-wrap -mx-3">
        <div class="w-full px-3">
          <button
            @click="$emit('closeModal', false)"
            class="block text-center w-full p-3 text-base font-medium rounded-lg text-dark border border-[#E9EDF9] hover:bg-green-600 hover:text-white hover:border-green-600 transition"
          >
            Cancel
          </button>
        </div>
        <div class="w-1/2 px-3 hidden">
          <button
            class="block text-center w-full p-3 text-base font-medium rounded-lg bg-primary text-white border border-primary hover:bg-opacity-90 transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalContent: {
      type: String,
    },
    modalheader: {
      type: String,
    },
  },
  created() {
    console.log(this.modalContent);
  },
};
</script>
