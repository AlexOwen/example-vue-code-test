import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import TableRow from '@/components/TableRow.vue';


describe('TableRow.vue', () => {
  const computed = {
    name: {
      get() { return 'test name'; },
    },
    gender: {
      get() { return 'undisclosed'; },
    },
    age: {
      get() { return '100'; },
    },
    eyeColor: {
      get() { return 'grey'; },
    },
    pet: {
      get() { return 'dog'; },
    },
    fruit: {
      get() { return 'papaya'; },
    },
  };

  it('renders the table row', () => {
    const wrapper = shallowMount(TableRow, {
      computed,
      propsData: { personIndex: 0 },
    });
    expect(wrapper.find('tr')).to.exist;
  });

  it('renders the correct number of input elements', () => {
    const wrapper = shallowMount(TableRow, {
      computed,
      propsData: { personIndex: 0 },
    });

    expect(wrapper.findAll('input').length).to.equal(6);
  });

  it('renders data in a table row correctly', () => {
    const wrapper = shallowMount(TableRow, {
      computed,
      propsData: { personIndex: 0 },
    });

    expect(wrapper.find('.name input').element.value).to.equal('test name');
    expect(wrapper.find('.gender input').element.value).to.equal('undisclosed');
    expect(wrapper.find('.age input').element.value).to.equal('100');
    expect(wrapper.find('.eyecolor input').element.value).to.equal('grey');
    expect(wrapper.find('.preferences_pet input').element.value).to.equal('dog');
    expect(wrapper.find('.preferences_fruit input').element.value).to.equal('papaya');
  });
});
