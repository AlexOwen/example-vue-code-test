<template>
  <section>
    <h2>{{ title }}</h2>
    <table>
      <tr>
        <th class="name">Name</th>
        <th class="gender">Gender</th>
        <th class="age">Age</th>
        <th class="eyecolor">Eye Color</th>
        <th class="preferences_pet">Preferred Pet</th>
        <th class="preferences_fruit">Preferred Fruit</th>
      </tr>
      <TableRow v-for="(person, index) in $store.state.people"
        :key="person.id"
        :person-index="index" />
    </table>
  </section>
</template>

<script>
import TableRow from '@/components/TableRow.vue';

export default {
  name: 'Table',
  components: {
    TableRow,
  },
  props: {
    title: String,
  },
};
</script>
