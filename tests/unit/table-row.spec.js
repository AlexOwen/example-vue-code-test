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

  it('can update the name', () => {
    const wrapper = shallowMount(TableRow, {
      computed: {
        ...computed,
        name: {
          get() {
            return 'test user';
          },
          set(value) {
            expect(value).to.equal('new name');
          },
        },
      },
      propsData: { personIndex: 0 },
    });

    wrapper.find('.name input').setValue('new name');
  });

  it('can update the age', () => {
    const wrapper = shallowMount(TableRow, {
      computed: {
        ...computed,
        age: {
          get() {
            return '100';
          },
          set(value) {
            expect(value).to.equal('18');
          },
        },
      },
      propsData: { personIndex: 0 },
    });

    wrapper.find('.age input').setValue('18');
  });

  it('can update the gender', () => {
    const wrapper = shallowMount(TableRow, {
      computed: {
        ...computed,
        gender: {
          get() {
            return 'unspecified';
          },
          set(value) {
            expect(value).to.equal('female');
          },
        },
      },
      propsData: { personIndex: 0 },
    });

    wrapper.find('.gender input').setValue('female');
  });

  it('can update the eye color', () => {
    const wrapper = shallowMount(TableRow, {
      computed: {
        ...computed,
        eyeColor: {
          get() {
            return 'green';
          },
          set(value) {
            expect(value).to.equal('black');
          },
        },
      },
      propsData: { personIndex: 0 },
    });

    wrapper.find('.eyecolor input').setValue('black');
  });

  it('can update the preferred pet', () => {
    const wrapper = shallowMount(TableRow, {
      computed: {
        ...computed,
        pet: {
          get() {
            return 'dog';
          },
          set(value) {
            expect(value).to.equal('none');
          },
        },
      },
      propsData: { personIndex: 0 },
    });

    wrapper.find('.preferences_pet input').setValue('none');
  });

  it('can update the preferred fruit', () => {
    const wrapper = shallowMount(TableRow, {
      computed: {
        ...computed,
        fruit: {
          get() {
            return 'grapes';
          },
          set(value) {
            expect(value).to.equal('orange');
          },
        },
      },
      propsData: { personIndex: 0 },
    });

    wrapper.find('.preferences_fruit input').setValue('orange');
  });
});
