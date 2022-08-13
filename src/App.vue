<template>
  <div id="app">
    <PageButtons />
    <ModalWindow />
  </div>
</template>

<script>
  import PageButtons from "./components/PageButtons.vue";
  import ModalWindow from "./components/ModalWindow.vue";
  export default {
    name: "App",
    components: {
      PageButtons,
      ModalWindow,
    },
  };
</script>

<style>
  #app {
  }
</style>
