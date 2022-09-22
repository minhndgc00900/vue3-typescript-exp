<template>
  <ContextProvider>
    <Home />
  </ContextProvider>
</template>

<script lang="ts">
import Home from "../containers/Home.vue";
import ContextProvider from "../context/ContextProvider.vue";

export default {
  name: "home-page",
  components: {
    Home,
    ContextProvider,
  },
};
</script>

<style></style>
