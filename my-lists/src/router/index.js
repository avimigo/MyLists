import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/HomeView.vue";
import MyProteinListView from "@/components/MyProteinListView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/myprotein",
    name: "MyProteinList",
    component: MyProteinListView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
