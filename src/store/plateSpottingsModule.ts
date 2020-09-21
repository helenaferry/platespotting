import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import PlateSpottingModel from '../models/PlateSpottingModel';

Vue.use(Vuex);

const client = axios.create();

const state = {
	plateSpottingsUrl: "plateSpottings.json", // TODO ...
	plateSpottings: Array<PlateSpottingModel>(),
	sortOrder: 'desc',
};

const getters = { // TODO fix ts issues
	plateSpottings: (state: any) => {
		if (state.sortOrder === 'desc') {
			return state.plateSpottings.sort((a: PlateSpottingModel, b: PlateSpottingModel) => (a.plate < b.plate) ? 1 : ((b.plate < a.plate) ? -1 : 0));
		}
		return state.plateSpottings.sort((a: PlateSpottingModel, b: PlateSpottingModel) => (a.plate > b.plate) ? 1 : ((b.plate > a.plate) ? -1 : 0));
	},
	highestPlate: (state: any) => {
		return Math.max(...state.plateSpottings.map((spotting : PlateSpottingModel) => spotting.plate));
	},
	nextPlate: (state: any, getters: any) => {
		return getters.highestPlate + 1;
	}
};

const actions = {
	fetchPlateSpottings({ state, commit }: any) {
		if (state.plateSpottings.length) return;
		return new Promise((resolve) => {
			client.get(state.plateSpottingsUrl).then((response) => {
				if (response && response.data) {
					commit("setPlateSpottings", response.data);
					resolve();
				}
			});
		});
	},
	addPlateSpotting({ commit }: any, { plate, date, seenBy, note }: any) {
		let newPlateSpotting = {
			plate: plate,
			date: date,
			seenBy: seenBy,
			note: note
		}
		console.log('action add ', newPlateSpotting);
		// TODO Persist
		commit('addPlateSpotting', newPlateSpotting);
	},
	toggleSort({commit} : any) {
		commit('toggleSort');
	}
};

const mutations = {
	setPlateSpottings(state: any, plateSpottings: Array<PlateSpottingModel>) {
		Vue.set(state, "plateSpottings", plateSpottings);
	},
	addPlateSpotting(state: any, plateSpotting: PlateSpottingModel) {
		console.log('mutation add ', plateSpotting);
		state.plateSpottings.push(plateSpotting);
	},
	toggleSort(state: any) {
		Vue.set(state, "sortOrder", (state.sortOrder === 'asc' ? 'desc' : 'asc'));
	}
}


export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
