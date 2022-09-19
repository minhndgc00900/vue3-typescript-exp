import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("./Page/Home.vue"),
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./Page/TutorialDetails.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./Page/AddTutorial.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
