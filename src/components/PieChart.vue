<script>
import { Pie, mixins } from 'vue-chartjs';

export default {
  name: 'PieChart',
  extends: Pie,
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
    this.options.scales = {};
    // this.renderChart(this.chartData, this.options);
  },
};
</script>
