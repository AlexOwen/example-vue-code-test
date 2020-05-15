import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import BarChart from '@/components/BarChart.vue';

describe('BarChart.vue', () => {
  it('renders the bar chart title', async () => {
    const title = 'Bar Chart';
    const wrapper = shallowMount(BarChart, {
      propsData: { title },
    });
    expect(wrapper.find('h2').text()).to.equal(title);
  });

  it('renders the bar chart', async () => {
    const wrapper = shallowMount(BarChart);
    expect(wrapper.find('.bar-chart')).to.exist;
  });
});
