<template>
  <section class="chart">
    <h2>{{ title }}</h2>
    <BarChart :options="options" :chart-data="chartData"></BarChart>
  </section>
</template>

<script>
import BarChart from '@/components/BarChart.vue';
import store from '../store/index';

export default {
  name: 'Chart',
  props: {
    title: String,
  },
  components: {
    BarChart,
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
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
          },
        }],
        yAxes: [{
          display: true,
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    },
  }),
  mounted() {
    console.log(JSON.stringify(this.chartData));
  },
};
</script>
