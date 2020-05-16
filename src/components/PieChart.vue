<template>
  <section class="pie-chart">
    <h2>{{ title }}</h2>
  </section>
</template>

<script>
export default {
  name: 'PieChart',
  props: {
    title: String,
  },
};
</script>
