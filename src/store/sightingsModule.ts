import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import SightingsModel from '../models/SightingModel';

Vue.use(Vuex);

const client = axios.create();

const state = {
	sightingsUrl: "sightings.json", // TODO ...
	sightings: Array<SightingsModel>(),
};

const getters = {
	sightings: (state: any) => { return state.sightings; }, // TODO fix ts issues
};

const actions = {
	fetchSightings({ state, commit }: any) {
		return new Promise((resolve) => {
			client.get(state.sightingsUrl).then((response) => {
				if (response && response.data) {
					commit("setSightings", response.data);
					resolve();
				}
			});
		});
	},
};

const mutations = {
	setSightings(state: any, sightings: Array<SightingsModel>) {
		Vue.set(state, "sightings", sightings);
	},
}


export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
