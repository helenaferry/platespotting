import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';


Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/spottings',
    name: 'Spottings',
    component: () => import('../views/Spottings.vue'),
  },
  {
    path: '/show-all-on-map',
    name: 'ShowAllOnMap',
    component: () => import('../views/ShowAllOnMap.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
