import Vue from 'vue';
import Vuex from 'vuex';

import plateSpottings from './plateSpottingsModule';

Vue.use(Vuex);

export default new Vuex.Store ({
  modules: {
    plateSpottings,
  },
});
