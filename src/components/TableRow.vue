<template>
  <tr>
    <td class="name">
      <input
        type="text"
        v-model="name" />
    </td>
    <td class="gender">
      <input type="text"
        v-model="gender" />
      </td>
    <td class="age">
      <input type="text"
        v-model="age" />
    </td>
    <td class="eyecolor">
      <input type="text"
        v-model="eyeColor" />
    </td>
    <td class="preferences_pet">
      <input type="text"
        v-model="pet" />
    </td>
    <td class="preferences_fruit">
      <input type="text"
        v-model="fruit" />
    </td>
  </tr>
</template>

<script>
import store from '../store/index';

/**
 * A row in the data table using data from the Vuex store.
 * Data will be read from and written to the store on input.
 * Column classes and computed propertiesare hard coded with the assumption the
 * JSON data will not change.
 * TODO: dynamically change the column classes and computed properties based on the data.
 */
export default {
  name: 'TableRow',
  props: {
    /**
     * The index in the store's list of people
     */
    personIndex: Number,
  },
  computed: {
    /**
     * The person's name
     */
    name: {
      get() {
        return store.state.people[this.personIndex].name;
      },
      set(value) {
        store.commit('updatePerson', { ...store.state.people[this.personIndex], name: value });
        store.dispatch('refreshChart');
      },
    },
    /**
     * The person's age
     */
    age: {
      get() {
        return store.state.people[this.personIndex].age;
      },
      set(value) {
        store.commit('updatePerson', { ...store.state.people[this.personIndex], age: value });
        store.dispatch('refreshChart');
      },
    },
    /**
     * The person's eye color
     */
    eyeColor: {
      get() {
        return store.state.people[this.personIndex].eyeColor;
      },
      set(value) {
        store.commit('updatePerson', { ...store.state.people[this.personIndex], eyeColor: value });
        store.dispatch('refreshChart');
      },
    },
    /**
     * The person's gender
     */
    gender: {
      get() {
        return store.state.people[this.personIndex].gender;
      },
      set(value) {
        store.commit('updatePerson', { ...store.state.people[this.personIndex], gender: value });
        store.dispatch('refreshChart');
      },
    },
    /**
     * The person's preferred pet
     */
    pet: {
      get() {
        return store.state.people[this.personIndex].preferences.pet;
      },
      set(value) {
        store.commit('updatePerson', { ...store.state.people[this.personIndex], preferences: { ...store.state.people[this.personIndex].preferences, pet: value } });
        store.dispatch('refreshChart');
      },
    },
    /**
     * The person's preferred fruit
     */
    fruit: {
      get() {
        return store.state.people[this.personIndex].preferences.fruit;
      },
      set(value) {
        store.commit('updatePerson', { ...store.state.people[this.personIndex], preferences: { ...store.state.people[this.personIndex].preferences, fruit: value } });
        store.dispatch('refreshChart');
      },
    },
  },
};
</script>
