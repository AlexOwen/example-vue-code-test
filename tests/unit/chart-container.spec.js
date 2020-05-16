import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ChartContainer from '@/components/ChartContainer.vue';

describe('ChartContainer.vue', () => {
  it('renders the chart title', async () => {
    const wrapper = shallowMount(ChartContainer, {
      propsData: { title: 'Chart' },
      mocks: {
        $store: {
          state: {
            people: [],
          },
        },
      },
    });
    expect(wrapper.find('h2').text()).to.equal('Chart');
  });
});
