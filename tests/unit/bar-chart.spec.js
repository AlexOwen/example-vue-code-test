import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import BarChart from '@/components/BarChart.vue';

describe('BarChart.vue', () => {
  it('renders a canvas', async () => {
    const wrapper = shallowMount(BarChart, {
      propsData: {
        chartdata: {
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
