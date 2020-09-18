import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import PlateSpottingsModel from '../models/PlateSpottingModel';

Vue.use(Vuex);

const client = axios.create();

const state = {
	plateSpottingsUrl: "plateSpottings.json", // TODO ...
	plateSpottings: Array<PlateSpottingsModel>(),
};

const getters = {
	plateSpottings: (state: any) => { return state.plateSpottings; }, // TODO fix ts issues
};

const actions = {
	fetchPlateSpottings({ state, commit }: any) {
		return new Promise((resolve) => {
			client.get(state.plateSpottingsUrl).then((response) => {
				if (response && response.data) {
					commit("setplateSpottings", response.data);
					resolve();
				}
			});
		});
	},
};

const mutations = {
	setplateSpottings(state: any, plateSpottings: Array<PlateSpottingsModel>) {
		Vue.set(state, "plateSpottings", plateSpottings);
	},
}


export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
