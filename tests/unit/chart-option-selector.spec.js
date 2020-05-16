import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ChartOptionSelector from '@/components/ChartOptionSelector.vue';

describe('ChartOptionSelector.vue', () => {
  it('renders the correct number of input elements', () => {
    const wrapper = shallowMount(ChartOptionSelector, {
    });

    expect(wrapper.findAll('input').length).to.equal(5);
  });

  it('can change the chart option', () => {
    const wrapper = shallowMount(ChartOptionSelector, {
      computed: {
        option: {
          get() {
            return 'current option';
          },
          set(value) {
            expect(value).to.equal('eyeColor');
          },
        },
      },
      propsData: { personIndex: 0 },
    });

    wrapper.find('input').setChecked();
  });
});
