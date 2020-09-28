import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import plateSpottings from './plateSpottingsModule';
import user from './userModule';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		plateSpottings, user
	},
	plugins: [createPersistedState()]
});
