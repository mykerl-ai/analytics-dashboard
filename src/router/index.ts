import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../layouts/Dashboard.vue";
import Report from "../views/Report.vue";

// Define the routes with TypeScript types
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    redirect: "/report",
    children: [
      {
        path: "/report",
        name: "Report",
        component: Report,
      },
      {
        path: "/people",
        name: "People",
        // Lazy-loaded route
        component: () => import("../views/People.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "404",
        // Lazy-loaded route
        component: () => import("../views/NotFound.vue"),
      },
    ],
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Export the router
export default router;
