<template>
  <div class="col-md-6">
    <h4>Tutorials List</h4>
    <h4 class="">{{ useContext }}</h4>
    <ul class="list-group">
      <li
        class="list-group-item"
        :class="{
          active: index == tutorIndex,
        }"
        v-for="(tutorial, index) in tutorials"
        :key="index"
        @click="setActiveTutorial(tutorial, index)"
      >
        {{ tutorial.title }}
      </li>
    </ul>
    <button
      class="m-3 btn btn-sm btn-danger"
      @click="() => removeAllTutorials()"
    >
      Remove All
    </button>
  </div>
</template>

<script lang="ts">
import { inject } from "vue";
import Tutorial from "../types/Tutorial";

export default {
  setup() {
    const useContext = inject("states");
    return { useContext };
  },
  props: {
    tutorials: {
      type: Array as () => Tutorial[],
    },
    tutorIndex: {
      type: Number,
    },
    setActiveTutorial: {
      type: Function,
      required: true,
    },
    removeAllTutorials: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style></style>
