/**
 * Created by zinjk on 03.08.2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    positions: [],
    downloaded: 0,
    pointCount: 0,
    team_list: []
  },
  actions: actions.default,
  getters: getters.default,
  mutations: mutations.default,
})
