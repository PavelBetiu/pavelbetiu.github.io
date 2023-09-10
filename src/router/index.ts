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
    path: '/models',
    name: 'models',
    component: () => import('../views/ModelsView.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
  },
  {
    path: '/people',
    name: 'people',
    component: () => import('../views/People.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('@/views/SignUp.vue')
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
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/services/question-generation',
    name: 'generateQuestions',
    component: () => import('@/components/qgen/GenerateQuestions.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/datasets',
    name: 'datasets',
    component: () => import('@/views/DatasetsView.vue'),
  },
  {
    path: '/datasets/:dataset_id',
    name: 'dataset',
    component: () => import('@/views/DatasetView.vue')
  },
  {
    path: '/processing-queue',
    name: 'processingqueue',
    component: () => import('@/views/ProcessingQueueView.vue'),
  },
  {
    path: '/profile',
    name: 'userprofileView',
    component: () => import('@/views/UserProfileView.vue'),
  },
  {
    path: '/services/stt',
    name: 'speech-to-text',
    component: () => import('@/views/SpeechToText.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/services/text-analysis',
    name: 'text-analysis',
    component: () => import('@/views/TextAnalysisView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/models/:id/prediction',
    name: 'modelpredictionview',
    component: () => import('@/views/ModelPredictionView.vue'),
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
