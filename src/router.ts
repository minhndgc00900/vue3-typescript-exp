import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/tutorials",
    name: "home-page",
    component: () => import("./Pages/HomePage.vue"),
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-detail-page",
    component: () => import("./Pages/TutorialDetailsPage.vue"),
  },
  {
    path: "/add",
    name: "add-tutorial-page",
    component: () => import("./Pages/AddTutorialPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
