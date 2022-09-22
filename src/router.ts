import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("./Pages/Home.vue"),
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./Pages/TutorialDetails.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./Pages/AddTutorial.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
