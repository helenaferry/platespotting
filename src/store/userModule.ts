import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import UserModel from '../models/UserModel';

Vue.use(Vuex);

const client = axios.create();

const state = {
	baseBackendUrl: 'http://localhost:3000/',
	auth: false,
	token: '',
	user: {},
};

const getters = {
	isLoggedIn: (state: any) => { return state.auth; },
	user: (state: any) => { return state.user; },
};

const actions = {
	login({ state, commit }: any, {email, password} : any) {
		return new Promise((resolve) => {
			client.post(state.baseBackendUrl+'login', {
				email: email, password: password
			}).then((response) => {
				if (response && response.data) {
					console.log(response.data);
					commit('setUser', response.data.user);
					commit('setAuth', response.data.auth);
					commit('setToken', response.data.token);
					resolve();
				}
			});
		});
	},
	logout({commit} : any) {
		commit('logout');
	},
	signUp({commit}: any, {name, email, password}: any) {
		console.log('signup '+ name);
	}
};

const mutations = {
	setUser(state: any, user: UserModel) {
		Vue.set(state, 'user', user);
	},
	setAuth(state: any, auth: boolean) {
		Vue.set(state, 'auth', auth);
	},
	setToken(state: any, token: string) {
		Vue.set(state, 'token', token);
	},
	logout(state: any) {
		Vue.set(state, 'user', null);
		Vue.set(state, 'token', null);
		Vue.set(state, 'auth', false);
	}
};


export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
