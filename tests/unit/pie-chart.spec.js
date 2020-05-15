import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import PieChart from '@/components/PieChart.vue';

describe('PieChart.vue', () => {
  it('renders the pie chart title', async () => {
    const title = 'Pie Chart';
    const wrapper = shallowMount(PieChart, {
      propsData: { title },
    });
    expect(wrapper.find('h2').text()).to.equal(title);
  });

  it('renders the pie chart', async () => {
    const wrapper = shallowMount(PieChart);
    expect(wrapper.find('.pie-chart')).to.exist;
  });
});
