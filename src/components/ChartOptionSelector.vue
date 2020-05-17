<template>
  <section class="chart-option-selector">
    <div class="option">
      <label for="eyeColor">Eye Color</label>
      <input type="radio" name="option" id="eyeColor" value="eyeColor" v-model="option" />
    </div>
    <div class="option">
      <label for="gender">Gender</label>
      <input type="radio" name="option" id="gender" value="gender" v-model="option" />
    </div>
    <div class="option">
      <label for="age">Age</label>
      <input type="radio" name="option" id="age" value="age" v-model="option" />
    </div>
    <div class="option">
      <label for="preferences_pet">Preferred Pet</label>
      <input type="radio" name="option" id="preferences_pet"
        value="preferences_pet" v-model="option" />
    </div>
    <div class="option">
      <label for="preferences_fruit">Preferred Fruit</label>
      <input type="radio" name="option" id="preferences_fruit"
        value="preferences_fruit" v-model="option" />
    </div>
  </section>
</template>

<script>
import store from '../store/index';

/**
 * Radio buttons for choosing the variable to display in the graphs.
 * Labels and values are hard coded with the assumption the JSON data will not change.
 * TODO: dynamically change the labels and values based on the data.
 */
export default {
  name: 'ChartOptionSelector',
  computed: {
    /**
     * The current variable to display on the graph, from the Vuex store.
     */
    option: {
      get() {
        return store.state.chartOption;
      },
      set(value) {
        store.commit('setChartOption', value);
        store.dispatch('refreshChart');
      },
    },
  },
};
</script>

<style lang="scss">
.chart-option-selector {
  margin: 2em 0;

  .option {
    border: 1px solid #ccc;
    border-radius: 5px;
    display: inline-block;
    margin-left: 20px;
    padding: 0.5em 10px;
  }

  label {
    padding-right: 5px;
    cursor: pointer;
  }

  input {
    cursor: pointer;
  }
}
</style>
