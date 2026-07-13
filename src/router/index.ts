import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
        meta: { title: 'Home' }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        meta: { title: 'About' }
      },
      {
        path: 'skill',
        name: 'skill',
        component: () => import('../views/SkillView.vue'),
        meta: { title: 'Skills' }
      },
      {
        path: 'project',
        meta: { title: 'Project' },
        children: [
          {
            path: '',
            name: 'project',
            component: () => import('../views/ProjectView.vue'),
          },
          {
            path: 'detail/:id',
            name: 'project-detail',
            component: () => import('../components/project/ProjectDetailComponent.vue'),
            meta: { title: 'Detail' },
          },
        ],
      },
      {
        path: 'experience',
        name: 'experience',
        component: () => import('../views/ExperienceView.vue'),
        meta: { title: 'Experience' }
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/ContactView.vue'),
        meta: { title: 'Contact' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: '404 Not Found' }
  }
];

const router = createRouter({
  // Read base URL from environment
  history: createWebHistory('/my-portfolio/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return savedPosition || { top: 0 }
  }
});

// Update the browser tab title on route changes
router.afterEach((to) => {
  const defaultTitle = 'My Portfolio';
  document.title = (to.meta.title as string);
});

export default router;
