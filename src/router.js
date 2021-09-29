import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/list",
    name: "list",
    component: () => import("./components/PlaysList")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddPlaylist")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;