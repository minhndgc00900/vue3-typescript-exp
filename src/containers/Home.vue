<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <ListTutor
      :tutorials="tutorials"
      :tutorIndex="currentIndex"
      :setActiveTutorial="setActiveTutorial"
      :removeAllTutorials="removeAllTutorials"
    />
    <div class="col-md-6">
      <div v-if="currentTutorial.id">
        <h4>Tutorial</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentTutorial.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label>
          {{ currentTutorial.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label>
          {{ currentTutorial.published ? "Published" : "Pending" }}
        </div>

        <router-link
          :to="'/tutorials/' + currentTutorial.id"
          class="badge badge-warning"
          >Edit</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TutorialDataService from "@/services/TutorialDataService";
import { defineComponent } from "@vue/runtime-core";
import Tutorial from "../types/Tutorial";
import ResponseData from "../types/ResponseData";
import ListTutor from "../components/ListTutor.vue";

export default defineComponent({
  name: "tutorial-list",
  components: {
    ListTutor,
  },
  data() {
    return {
      tutorials: [] as Tutorial[],
      currentTutorial: {} as Tutorial,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then((response: ResponseData) => {
          this.tutorials = response.data;
          console.log(22, response);
        })
        .catch((error: Error) => {
          console.log(error);
        });
    },
    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = {} as Tutorial;
      this.currentIndex = -1;
    },
    setActiveTutorial(tutorial: Tutorial, index = -1) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },
    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then((response: ResponseData) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then((response: ResponseData) => {
          this.tutorials = response.data;
          this.setActiveTutorial({} as Tutorial);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
});
</script>

<style></style>
