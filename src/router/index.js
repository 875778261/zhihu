import { createRouter, createWebHashHistory } from "vue-router";
import routes from './routes'
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});
//前置守卫
router.beforeEach((to, from, next) => {
  next();
})
export default router;
