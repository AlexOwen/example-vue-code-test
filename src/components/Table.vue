<template>
  <section>
    <h2>{{ title }}</h2>
    <table>
      <tr>
        <th class="name">Name</th>
        <th class="gender">Gender</th>
        <th class="age">Age</th>
        <th class="eyecolor">Eye Color</th>
        <th class="preferences_pet">Favorite Pet</th>
        <th class="preferences_fruit">Favorite Fruit</th>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  name: 'Table',
  props: {
    title: String,
  },
};
</script>
