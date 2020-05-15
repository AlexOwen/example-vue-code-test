import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const mutations = {
  setPeople: (state, payload) => {
    state.people = payload;
  },
};

/**
 * Note: an absolute URL is used for fetch to work with node-fetch tests, in production this would
 * be a variable
 */
export const actions = {
  fetchPeople: async (context) => {
    let data = [];
    try {
      data = await (await fetch('http://localhost:8080/data.json')).json();
    } catch (err) {
      console.error('Failed to retrieve data.json: ', err.message);
    }
    context.commit('setPeople', data);
  },
};

export default new Vuex.Store({
  state: {
    people: [],
  },
  mutations,
  actions,
  modules: {
  },
});
