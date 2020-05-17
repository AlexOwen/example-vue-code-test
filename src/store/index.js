import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * Vuex mutations.
 */
export const mutations = {
  /**
   * Set people in the state.
   *
   * @param { object } state The current Vuex state.
   * @param { Array } payload An array of people.
   */
  setPeople: (state, payload) => {
    state.people = payload;
  },

  /**
   * Set the new variable to use as the focus for charts.
   * An underscore is used to represent nested objects, but will only work for one nested level.
   *
   * @param { object } state The current Vuex state.
   * @param { String } payload The variable to use as the focus for the charts.
   */
  setChartOption: (state, payload) => {
    state.chartOption = payload;
  },

  /**
   * Find the new labels to use for the data.
   * This will look at the current chartOption and output a sorted list of all unique values to
   * use as labels on the bar chart axis.
   *
   * @param { object } state The current Vuex state.
   */
  setChartLabels: (state) => {
    const currentOption = state.chartOption;

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

  /**
   * Use the current chartOption and people object to produce Chart.js formatted data.
   * Includes random color generation for the data for each label.
   *
   * @param { object } state The current Vuex state.
   */
  setChartData: (state) => {
    const currentOption = state.chartOption;

    const labelCounts = [];
    state.people.forEach((person) => {
      if (currentOption.includes('_')) {
        const index = state.chartLabels
          .indexOf(person[currentOption.split('_')[0]][currentOption.split('_')[1]]);
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
          colors.push(`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)})`);
        }
        return colors;
      })(),
    }];
  },

  /**
   * Update a person object.
   * TODO: validate the person object's schema.
   *
   * @param { object } state The current Vuex state.
   * @param { object } payload The updated person object.
   */
  updatePerson: (state, payload) => {
    state.people.forEach((person, index) => {
      if (person._id === payload._id) {
        state.people[index] = payload;
      }
    });
  },
};

/**
 * Vuex actions.
 */
export const actions = {
  /**
   * Get the people data from a URL.
   * Note: an absolute URL is used for fetch to work with node-fetch tests, in production this would
   * be a variable.
   * TODO: validate the people against a schema.
   */
  fetchPeople: async (context) => {
    let data = [];
    try {
      data = await (await fetch('http://localhost:8080/data.json')).json();
    } catch (err) {
      console.error('Failed to retrieve data.json: ', err.message);
    }
    context.commit('setPeople', data);
  },

  /**
   * Initialise the charts with an initial option.
   */
  initialiseChart: (context) => {
    context.commit('setChartOption', 'preferences_fruit');
    context.dispatch('refreshChart');
  },

  /**
   * Refresh the chart without re-initialising it.
   */
  refreshChart: (context) => {
    context.commit('setChartLabels');
    context.commit('setChartData');
  },
};

export default new Vuex.Store({
  /**
   * The initial values for the Vuex store.
   */
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
});
