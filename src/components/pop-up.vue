<template>
  <div>
    <div class="overlay" @click="closePopup"></div>
    <div class="modal_wrapper">
      <div
        class="block ml-auto mr-auto relative w-[300px] h-[280px] bg-white rounded-md"
      >
        <button
          @click="closePopup"
          class="absolute top-[1%] left-[91%] text-lg"
        >
          x
        </button>

        <div class="mt-[20px] mb-[10px] text-center font-medium">
          <slot name="header"></slot>
        </div>

        <div class="px-[10px]">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-popup",
    methods: {
      closePopup(e) {
        this.$emit("ClosePopup", e);
      },
    },
  };
</script>

<style lang="scss" scoped></style>
