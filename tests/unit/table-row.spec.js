import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import TableRow from '@/components/TableRow.vue';

describe('TableRow.vue', () => {
  const datum = {
    _id: '5d5d7ad6ae763b95f3a7f3fe',
    age: 31,
    eyeColor: 'blue',
    name: 'Carolina Chaney',
    gender: 'female',
    location: {
      latitude: -3.69726,
      longitude: -122.033715,
    },
    preferences: {
      pet: 'dog',
      fruit: 'banana',
    },
  };

  it('renders the table row', async () => {
    const wrapper = shallowMount(TableRow, {
      propsData: { datum },
    });
    expect(wrapper.find('tr')).to.exist;
  });

  it('renders data in a table row correctly', async () => {
    const wrapper = shallowMount(TableRow, {
      propsData: { datum },
    });

    expect(wrapper.find('.name').text()).to.equal(datum.name);
    expect(wrapper.find('.gender').text()).to.equal(datum.gender);
    expect(wrapper.find('.age').text()).to.equal(datum.age.toString());
    expect(wrapper.find('.eyecolor').text()).to.equal(datum.eyeColor);
    expect(wrapper.find('.preferences_pet').text()).to.equal(datum.preferences.pet);
    expect(wrapper.find('.preferences_fruit').text()).to.equal(datum.preferences.fruit);
  });
});
