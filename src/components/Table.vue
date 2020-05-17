<template>
  <section class="table-section">
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

/**
 * A table of data.
 * Headers are hard coded with the assumption the JSON data will not change.
 * TODO: dynamically change the headers based on the data.
 */
export default {
  name: 'Table',
  components: {
    TableRow,
  },
  props: {
    /**
     * The title of the table.
     */
    title: String,
  },
};
</script>

<style lang="scss">
.table-section {
  width: 100%;

  table {
    margin: auto;
  }
}
</style>
