import { isNil, first } from 'lodash';
import { createRouter, createWebHistory, RouteLocationRaw, RouteRecordNormalized, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import auth from '@/services/auth';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/people',
    name: 'people' ,
    component: () => import('../views/People.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsListView.vue')
  },
  {
    path: '/projects/:link',
    name: 'projectView',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/services/cscl',
    name: 'serviceCscl',
    component: () => import('@/components/experiments/cscl/Cscl.vue'),
  },
  {
    path: '/generate-questions',
    name: 'generateQuestions',
    component: () => import('@/components/tutor/GenerateQuestions.vue'),
  }
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
