import { createRouter, createWebHistory } from "vue-router";
function loadView(view) {
  return () => import(`./pages/${view}.vue`);
}
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: loadView("LandingPage") }],
});
export default router;
