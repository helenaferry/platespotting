import Vue from "vue";
import Vuex from "vuex";

import sightings from './sightingsModule';

Vue.use(Vuex);

export default new Vuex.Store ({
	modules: {
		sightings
	},
});