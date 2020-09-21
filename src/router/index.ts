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
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: () => import('../views/HelloWorld.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
