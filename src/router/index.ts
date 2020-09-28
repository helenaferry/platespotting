import Vue from 'vue';
import Router from 'vue-router';
import StartPage from '../views/StartPage.vue';
import LogIn from '../views/LogIn.vue';
import store from '../store/index';

Vue.use(Router);

let router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/login',
			name: 'login',
			component: LogIn,
			meta: {
				guest: true
			},
		},
		{
			path: '/signup',
			name: 'signup',
			component: () => import('../views/SignUp.vue'),
			meta: {
				guest: true
			},
		},
		{
			path: '/logout',
			name: 'logout',
			component: () => import('../views/LogOut.vue'),
			meta: {
				requiresAuth: true
			},
		},
		{
			path: '/',
			name: 'start',
			component: StartPage,
			meta: {
				requiresAuth: true
			},
		},
		{
			path: '/add',
			name: 'AddSpotting',
			component: () => import('../views/AddSpotting.vue'),
			meta: {
				requiresAuth: true
			},
		},
		{
			path: '/list',
			name: 'ListSpottings',
			component: () => import('../views/ListSpottings.vue'),
			meta: {
				requiresAuth: true
			},
		},
		{
			path: '/map',
			name: 'ShowAllOnMap',
			component: () => import('../views/ShowAllOnMap.vue'),
			meta: {
				requiresAuth: true
			},
		},

	]
});

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!store.getters['user/isLoggedIn']) {
			next({
				path: '/login',
				params: { nextUrl: to.fullPath }
			})
		} else {
			next();
		}
	} else {
		next();
	}
})

export default router
