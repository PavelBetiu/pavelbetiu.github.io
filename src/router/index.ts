import { isNil, first } from 'lodash';
import { createRouter, createWebHistory, RouteLocationRaw, RouteRecordNormalized, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import auth from '../services/auth';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/experiment/:id',
    name: 'experimentSingle',
    component: () => import('../views/ExperimentSingle.vue'),
    meta: {
      requiresAuth: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const route: RouteRecordNormalized = first(to.matched);

  if (!isNil(route)) {
    if (route.meta.requiresAuth && !auth.isAuthenticated()) {
      const location: RouteLocationRaw = {
        name: 'login',
        query: {
          redirect: encodeURIComponent(to.fullPath),
        }
      };
      return next(location);
    }
  }
  return next();
});

export default router;
