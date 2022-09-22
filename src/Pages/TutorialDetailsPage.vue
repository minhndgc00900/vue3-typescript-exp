<template>
  <TutorialDetailsVue />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import TutorialDetailsVue from "@/containers/TutorialDetails.vue";

export default defineComponent({
  name: "tutorial-detail-page",
  components: {
    TutorialDetailsVue,
  },
});
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
