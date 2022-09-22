import { inject, reactive } from "vue";
import { createStore } from "vuex";

export default createStore<any>({
  state: {},
  mutations: {},
  actions: {},
});

export const state = Symbol("state");
export const useContext = inject("states");
// export const createStoreContext = () => {
//   const store = reactive({
//     fakeObj: "222",
//   });

//   return {
//     state: readonly(store),
//   };
// };

export const states = reactive({
  fakeObj: "222",
});
