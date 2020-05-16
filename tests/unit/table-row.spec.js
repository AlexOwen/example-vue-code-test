import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import TableRow from '@/components/TableRow.vue';

describe('TableRow.vue', () => {
  const person = {
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

  it('renders the table row', () => {
    const wrapper = shallowMount(TableRow, {
      propsData: { personIndex: 0 },
      mocks: {
        $store: {
          state: {
            people: [person],
          },
        },
      },
    });
    expect(wrapper.find('tr')).to.exist;
  });

  it('renders the correct number of input elements', () => {
    const wrapper = shallowMount(TableRow, {
      propsData: { personIndex: 0 },
      mocks: {
        $store: {
          state: {
            people: [person],
          },
        },
      },
    });

    expect(wrapper.findAll('input').length).to.equal(6);
  });

  it('renders data in a table row correctly', () => {
    const wrapper = shallowMount(TableRow, {
      propsData: { personIndex: 0 },
      mocks: {
        $store: {
          state: {
            people: [person],
          },
        },
      },
    });

    expect(wrapper.find('.name input').element.value).to.equal(person.name);
    expect(wrapper.find('.gender input').element.value).to.equal(person.gender);
    expect(wrapper.find('.age input').element.value).to.equal(person.age.toString());
    expect(wrapper.find('.eyecolor input').element.value).to.equal(person.eyeColor);
    expect(wrapper.find('.preferences_pet input').element.value).to.equal(person.preferences.pet);
    expect(wrapper.find('.preferences_fruit input').element.value).to.equal(person.preferences.fruit);
  });
});
