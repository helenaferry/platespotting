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
    path: '/add',
    name: 'AddSpotting',
    component: () => import('../views/AddSpotting.vue'),
  },
  {
    path: '/list',
    name: 'ListSpottings',
    component: () => import('../views/ListSpottings.vue'),
  },
  {
    path: '/map',
    name: 'ShowAllOnMap',
    component: () => import('../views/ShowAllOnMap.vue'),
  },

];

const router = new VueRouter({
  routes,
});

export default router;
