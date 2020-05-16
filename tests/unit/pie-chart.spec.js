import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import PieChart from '@/components/PieChart.vue';

describe('PieChart.vue', () => {
  it.only('renders a canvas', async () => {
    const wrapper = shallowMount(PieChart, {
      propsData: {
        chartData: {
          labels: ['test'],
          datasets: [{
            label: 'test',
            backgroundColor: '#f55',
            data: [1, 2],
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      },
    });
    expect(wrapper.find('canvas')).to.exist;
  });
});
