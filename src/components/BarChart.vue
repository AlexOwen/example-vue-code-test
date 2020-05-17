<script>
import { Bar, mixins } from 'vue-chartjs';

/**
 * A bar chart based on Chart.js Bar.
 * https://www.chartjs.org/docs/latest/charts/bar.html
 */
export default {
  name: 'BarChart',
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: {
    /**
     * The data for the chart, in Chart.js format.
     */
    chartData: {
      type: Object,
      default: null,
    },
    /**
     * Options for the chart, in Chart.js format.
     */
    options: {
      type: Object,
      default: null,
    },
  },
  /**
   * Re-render the chart when mounted.
   * Without this it does not re-render on navigation.
   */
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
