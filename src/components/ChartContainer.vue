<template>
  <section class="chart-container">
    <h2>{{ title }}</h2>
    <ChartOptionSelector />
    <div class="charts">
      <BarChart :options="barOptions" :chart-data="chartData" class="barchart"></BarChart>
      <PieChart :options="pieOptions" :chart-data="chartData" class="piechart"></PieChart>
    </div>
  </section>
</template>

<script>
import ChartOptionSelector from '@/components/ChartOptionSelector.vue';
import BarChart from '@/components/BarChart.vue';
import PieChart from '@/components/PieChart.vue';
import store from '../store/index';

/**
 * A container for the charts.
 * Does some of the data formatting and handles interaction with the Vuex store.
 */
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
    /**
     * Data for the chart, formatted for Chart.js.
     * Retrieved from the Vuex store.
     */
    chartData: () => ({
      labels: store.state.chartLabels,
      datasets: store.state.chartData,
    }),
  },
  data: () => ({
    /**
     * Options for the pie chart.
     */
    pieOptions: {
      responsive: true,
      maintainAspectRatio: false,
    },
    /**
     * Options for the bar chart.
     * Enforces visibility and scale for the axes.
     */
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

<style lang="scss">
.chart-container {
  width: 100%;

  .charts {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    div.piechart, div.barchart {
      padding: 0 5%;
    }
  }
}
</style>
