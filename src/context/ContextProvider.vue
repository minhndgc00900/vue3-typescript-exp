<template>
  <Slot />
</template>

<script lang="ts">
import { provide } from "@vue/runtime-core";
import { states } from "../store/index";
import { watch } from "vue";

export default {
  setup() {
    provide("states", states);
    watch(states, (statesCb) => {
      console.log(`!hahaha`, statesCb.fakeObj);
    });
  },
};
</script>
