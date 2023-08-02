import { createRouter, createWebHistory } from "vue-router";
import dashboard from "../views/Dash.vue";
import home from "../views/home.vue";

const routes = [
  {
    name: "Dashboard",
    path: "/",
    component: dashboard,
  },
  {
    name: "home",
    path: "/home",
    component: home,
  },
];

const router = Router();
export default router;
function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}
