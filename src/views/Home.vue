<template>
  <div class="home">
    <Title title="Vue.js Code Test"/>
    <BarChart title="Bar Chart"/>
    <PieChart title="Pie Chart"/>
    <Table title="Data"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue';
import BarChart from '@/components/BarChart.vue';
import PieChart from '@/components/PieChart.vue';
import Table from '@/components/Table.vue';

export default {
  name: 'Home',
  components: {
    Title,
    BarChart,
    PieChart,
    Table,
  },
};
</script>
