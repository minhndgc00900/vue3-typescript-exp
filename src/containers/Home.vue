<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="state.title"
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
      :tutorials="state.tutorials"
      :tutorIndex="state.currentIndex"
      :setActiveTutorial="setActiveTutorial"
      :removeAllTutorials="removeAllTutorials"
    />
    <div class="col-md-6">
      <div v-if="state.currentTutorial.id">
        <h4>Tutorial</h4>
        <div>
          <label><strong>Title:</strong></label>
          {{ state.currentTutorial.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label>
          {{ state.currentTutorial.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label>
          {{ state.currentTutorial.published ? "Published" : "Pending" }}
        </div>

        <router-link
          :to="'/tutorials/' + state.currentTutorial.id"
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
import { onMounted, reactive } from "vue";
import Tutorial from "../types/Tutorial";
import ResponseData from "../types/ResponseData";
import ListTutor from "../components/ListTutor.vue";

export default {
  name: "tutorial-list",
  components: {
    ListTutor,
  },
  setup() {
    const state = reactive({
      tutorials: [] as Tutorial[],
      currentTutorial: {} as Tutorial,
      currentIndex: -1,
      title: "",
    });

    const retrieveTutorials = () => {
      TutorialDataService.getAll()
        .then((response: ResponseData) => {
          state.tutorials = response.data;
          console.log(22, response);
        })
        .catch((error: Error) => {
          console.log(error);
        });
    };

    const refreshList = () => {
      retrieveTutorials();
      state.currentTutorial = {} as Tutorial;
      state.currentIndex = -1;
    };

    const setActiveTutorial = (tutorial: Tutorial, index = -1) => {
      state.currentTutorial = tutorial;
      state.currentIndex = index;
    };

    const removeAllTutorials = () => {
      TutorialDataService.deleteAll()
        .then((response: ResponseData) => {
          console.log(response.data);
          refreshList();
        })
        .catch((e: Error) => {
          console.log(e);
        });
    };

    const searchTitle = () => {
      TutorialDataService.findByTitle(state.title)
        .then((response: ResponseData) => {
          state.tutorials = response.data;
          setActiveTutorial({} as Tutorial);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    };

    onMounted(() => {
      retrieveTutorials();
    });

    return {
      state,
      retrieveTutorials,
      refreshList,
      setActiveTutorial,
      removeAllTutorials,
      searchTitle,
    };
  },
};
</script>

<style></style>
