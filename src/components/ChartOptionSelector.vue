<template>
  <section>
    <label for="eyeColor">Eye Color</label>
    <input type="radio" name="option" id="eyeColor" value="eyeColor" v-model="option" />
    <label for="gender">Gender</label>
    <input type="radio" name="option" id="gender" value="gender" v-model="option" />
    <label for="age">Age</label>
    <input type="radio" name="option" id="age" value="age" v-model="option" />
    <label for="preferences_pet">Preferred Pet</label>
    <input type="radio" name="option" id="preferences_pet"
      value="preferences_pet" v-model="option" />
    <label for="preferences_fruit">Preferred Fruit</label>
    <input type="radio" name="option" id="preferences_fruit"
      value="preferences_fruit" v-model="option" />
  </section>
</template>

<script>
import store from '../store/index';

export default {
  name: 'ChartOptionSelector',
  computed: {
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
  // methods: {
  //   updateOption: (e) => {
  //     store.commit('setChartOption', e.target.value);
  //   },
  // },
};
</script>
