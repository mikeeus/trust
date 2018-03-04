import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    state: {
      activeType: null,
      itemsPerPage: 20,
      items: {/* [id: number]: Item */},
      users: {/* [id: string]: User */},
      lists: {
        top: [/* number */],
        new: [],
        show: [],
        ask: [],
        job: [],
      },
    },
    test: [
      1,2,3,4
    ],
    actions,
    mutations,
    getters,
  });
}
