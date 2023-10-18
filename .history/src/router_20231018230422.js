import { createRouter, createWebHistory } from "vue-router";
import ProjectList from "./pages/ProjectList.vue";

const routes = [
  {
    path: "/projects",
    name: "ProjectList",
    component: ProjectList
  }
];

const router = const router = createRouter({
  history: createWebHistory(),
  routes,
});