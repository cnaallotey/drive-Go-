<template>
  <div>
    <!-- This is the modal component-->
    <div
      x-show="showmodal"
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
      <div
        class="fixed inset-0 transition-opacity bg-gray-300 bg-opacity-50"
        @click="$emit('closeModal', false)"
      ></div>

      <div class="fixed inset-0 z-10 overflow-y-auto" @click="$emit('closeModal', false)">
        <div
          class="flex items-end justify-center min-h-full p-4 text-center sm:items-end lg:items-center sm:p-0"
        >
          <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
          <div
            class="relative overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-3xl sm:my-8 sm:max-w-lg sm:w-full"
          >
            <div class="p-8 bg-white">
              <div class="w-full h-[10rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1629367121610-34e15c4c1f25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZXZzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  class="h-full w-full object-cover object-center"
                  alt=""
                />
              </div>
              <p class="text-base mt-5 font-medium text-gray-700">
                {{ modalContent }}
              </p>
              <button
                @click="$emit('closeModal', false)"
                class="w-full mt-5 bg-green-600 text-sm font-semibold rounded-md text-white py-3"
              >
                close
              </button>
            </div>
          </div>
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
  },
  created() {
    console.log(this.modalContent);
  },
};
</script>
