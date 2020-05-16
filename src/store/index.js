import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const mutations = {
  setPeople: (state, payload) => {
    state.people = payload;
  },
  setChartOption: (state, payload) => {
    // update the current displayed variable
    console.log(payload);
    state.chartOption = payload;
  },
  setChartLabels: (state) => {
    const currentOption = state.chartOption;

    // update the labels for the data
    const labels = [];
    state.people.forEach((person) => {
      if (currentOption.includes('_')) {
        labels.push(person[currentOption.split('_')[0]][currentOption.split('_')[1]]);
      } else {
        labels.push(person[currentOption]);
      }
    });
    state.chartLabels = [...new Set(labels.sort())];
  },
  setChartData: (state) => {
    const currentOption = state.chartOption;

    // update the data to be displayed
    const labelCounts = [];
    state.people.forEach((person) => {
      if (currentOption.includes('_')) {
        const index = state.chartLabels.indexOf(person[currentOption.split('_')[0]][currentOption.split('_')[1]]);
        labelCounts[index] = labelCounts[index] ? labelCounts[index] + 1 : 1;
      } else {
        const index = state.chartLabels.indexOf(person[currentOption]);
        labelCounts[index] = labelCounts[index] ? labelCounts[index] + 1 : 1;
      }
    });
    state.chartData = [{
      label: state.chartOption,
      data: labelCounts,
      backgroundColor: (() => {
        const colors = [];
        for (let i = 0; i < state.chartLabels.length; i += 1) {
          colors.push(`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`);
        }
        return colors;
      })(),
    }];
  },
  updatePerson: (state, payload) => {
    state.people.forEach((person, index) => {
      if (person._id === payload._id) {
        state.people[index] = payload;
      }
    });
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
  initialiseChart: (context) => {
    context.commit('setChartOption', 'preferences_fruit');
    context.dispatch('refreshChart');
  },
  refreshChart: (context) => {
    context.commit('setChartLabels');
    context.commit('setChartData');
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
    chartOption: 'preferences_fruit',
  },
  mutations,
  actions,
  modules: {
  },
});
