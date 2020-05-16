<script>
import { Bar, mixins } from 'vue-chartjs';

export default {
  name: 'BarChart',
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.options.scales = {
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
    };
    this.renderChart(this.chartData, this.options);
  },
};
</script>
