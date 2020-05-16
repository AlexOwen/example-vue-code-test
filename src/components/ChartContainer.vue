<template>
  <section class="chart">
    <h2>{{ title }}</h2>
    <ChartOptionSelector />
    <BarChart :options="barOptions" :chart-data="chartData"></BarChart>
    <PieChart :options="pieOptions" :chart-data="chartData"></PieChart>
  </section>
</template>

<script>
import ChartOptionSelector from '@/components/ChartOptionSelector.vue';
import BarChart from '@/components/BarChart.vue';
import PieChart from '@/components/PieChart.vue';
import store from '../store/index';

export default {
  name: 'ChartContainer',
  props: {
    title: String,
  },
  components: {
    ChartOptionSelector,
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
    pieOptions: {
      responsive: true,
      maintainAspectRatio: false,
    },
    barOptions: {
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
};
</script>
