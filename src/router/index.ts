import { createRouter, createWebHistory } from "vue-router";
import ChallengesView from "../views/ChallengesView.vue";
import NewChallengeView from "../views/NewChallengeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ChallengesView,
    },
    {
      path: "/new",
      name: "new",
      component: NewChallengeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
