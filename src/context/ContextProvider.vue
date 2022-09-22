<template>
  <slot />
</template>

<script lang="ts">
import { states } from "../store/index";
import { watch, provide } from "vue";

export default {
  setup() {
    provide("states", states);
    watch(states, (statesCb) => {
      console.log(`!hahaha`, statesCb.fakeObj);
    });
  },
};
</script>
