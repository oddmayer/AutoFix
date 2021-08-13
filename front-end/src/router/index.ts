import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import app from '../App.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: app,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
