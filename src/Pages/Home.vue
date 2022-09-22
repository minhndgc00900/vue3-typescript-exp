<template>
  <Home />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Home from "../containers/Home.vue";

export default defineComponent({
  name: "home-page",
  components: {
    Home,
  },
});
</script>

<style></style>
