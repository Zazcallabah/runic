import { createRouter, createWebHistory } from "vue-router";
import ConsonantView from "@/views/ConsonantView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "consonant",
      component: ConsonantView,
    },
     {
      path: "/words",
      name: "words",
      component: () => import("@/views/WordView.vue"),
    },
  ],
});

export default router;
