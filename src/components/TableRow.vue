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

export default {
  name: 'TableRow',
  props: {
    personIndex: Number,
  },
  computed: {
    name: {
      get() {
        return store.state.people[this.personIndex].name;
      },
      set(value) {
        store.commit('updatePerson', { ...store.state.people[this.personIndex], name: value });
        store.dispatch('refreshChart');
      },
    },
    age: {
      get() {
        return store.state.people[this.personIndex].age;
      },
      set(value) {
        store.commit('updatePerson', { ...store.state.people[this.personIndex], age: value });
        store.dispatch('refreshChart');
      },
    },
    eyeColor: {
      get() {
        return store.state.people[this.personIndex].eyeColor;
      },
      set(value) {
        store.commit('updatePerson', { ...store.state.people[this.personIndex], eyeColor: value });
        store.dispatch('refreshChart');
      },
    },
    gender: {
      get() {
        return store.state.people[this.personIndex].gender;
      },
      set(value) {
        store.commit('updatePerson', { ...store.state.people[this.personIndex], gender: value });
        store.dispatch('refreshChart');
      },
    },
    pet: {
      get() {
        return store.state.people[this.personIndex].preferences.pet;
      },
      set(value) {
        store.commit('updatePerson', { ...store.state.people[this.personIndex], preferences: { ...store.state.people[this.personIndex].preferences, pet: value } });
        store.dispatch('refreshChart');
      },
    },
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
