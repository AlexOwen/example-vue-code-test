<template>
  <div class="home">
    <Title title="Vue.js Code Test"/>
    <ChartContainer title="Charts"/>
    <Table title="Data"/>
  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import ChartContainer from '@/components/ChartContainer.vue';
import Table from '@/components/Table.vue';

export default {
  name: 'Home',
  components: {
    Title,
    ChartContainer,
    Table,
  },
};
</script>
