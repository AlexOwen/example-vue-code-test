import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const mutations = {
  setPeople: (state, payload) => {
    state.people = payload;
  },
  setChartOption: (state, payload) => {
    // update the current displayed variable
    state.chartOption = payload;

    // update the labels for the data
    const labels = [];
    state.people.forEach((person) => {
      if (payload.includes('_')) {
        labels.push(person[payload.split('_')[0]][payload.split('_')[1]]);
      } else {
        labels.push(person[payload]);
      }
    });
    state.chartLabels = [...new Set(labels)];

    // update the data to be displayed
    const labelCount = [];
    state.people.forEach((person) => {
      if (payload.includes('_')) {
        const index = state.chartLabels.indexOf(person[payload.split('_')[0]][payload.split('_')[1]]);
        labelCount[index] = labelCount[index] ? labelCount[index] + 1 : 1;
      } else {
        const index = state.chartLabels.indexOf(person[payload]);
        labelCount[index] = labelCount[index] ? labelCount[index] + 1 : 1;
      }
    });
    state.chartData = [{
      label: state.chartOption,
      data: labelCount,
    }];
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
    context.commit('setChartOption', 'preferences_pet');
  },
};

export default new Vuex.Store({
  state: {
    people: [],
    chartType: 'bar',
    chartLabels: [],
    chartData: [{
      data: null,
    }],
    chartOption: 'eyeColor',
  },
  mutations,
  actions,
  modules: {
  },
});
