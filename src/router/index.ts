import { createRouter, createWebHashHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

routes.push({
  path: '/',
  redirect: '/login',
});
// export const router = [
//   {
//     name: "root",
//     path: "/",
//     redirect: "/home",
//     component: () => import("@/layout/basic/index.vue"),
//   },
// ];

//导入生成的路由数据
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (_to, _from, next) => {
  NProgress.start();
  next();
});

router.afterEach((_to) => {
  NProgress.done();
});

export default router;
