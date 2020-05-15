<template>
  <tr>
    <td class="name">{{ datum.name }}</td>
    <td class="gender">{{ datum.gender }}</td>
    <td class="age">{{ datum.age }}</td>
    <td class="eyecolor">{{ datum.eyeColor }}</td>
    <td class="preferences_pet">{{ datum.preferences.pet }}</td>
    <td class="preferences_fruit">{{ datum.preferences.fruit }}</td>
  </tr>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
    datum: Object,
  },
};
</script>
