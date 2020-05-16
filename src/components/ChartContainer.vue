<template>
  <section class="chart">
    <h2>{{ title }}</h2>
    <BarChart :options="options" :chart-data="chartData"></BarChart>
    <PieChart :options="options" :chart-data="chartData"></PieChart>
  </section>
</template>

<script>
import BarChart from '@/components/BarChart.vue';
import PieChart from '@/components/PieChart.vue';
import store from '../store/index';

export default {
  name: 'Chart',
  props: {
    title: String,
  },
  components: {
    BarChart,
    PieChart,
  },
  computed: {
    chartData: () => ({
      labels: store.state.chartLabels,
      datasets: store.state.chartData,
    }),
  },
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),
};
</script>
