<template>
  <div
    class="flex flex-wrap grow w-auto p-[10px] m-10 sm:mt-[20px] sm:ml-[40px] lg:ml-[80px]"
  >
    <button class="bg-[#3B82F6] mainBtn" @click="openModal" id="1">
      Заказать в Москву
    </button>
    <button class="bg-[#0D9488] mainBtn" @click="openModal" id="2">
      Заказать в Санкт-Питербург
    </button>
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    methods: {
      ...mapActions("state", ["toggleModal"]),
      openModal(e) {
        this.toggleModal(e.target.id);
        console.log(e.target.id);
      },
    },
  };
</script>

<style></style>
