<template>
  <AddTutorial />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import AddTutorial from "../containers/AddTutorial.vue";

export default defineComponent({
  name: "add-tutorial-page",
  components: { AddTutorial },
});
</script>

<style></style>
