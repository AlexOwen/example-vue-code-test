import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Table from '@/components/Table.vue';

describe('Table.vue', () => {
  it('renders the table title', async () => {
    const title = 'Data';
    const wrapper = shallowMount(Table, {
      propsData: { title },
    });
    expect(wrapper.find('h2').text()).to.equal(title);
  });

  it('renders the table', async () => {
    const wrapper = shallowMount(Table);
    expect(wrapper.find('table')).to.exist;
  });

  it('renders the table headers', async () => {
    const wrapper = shallowMount(Table);
    expect(wrapper.find('th')).to.exist;
  });

  it('renders the correct number of table headers', async () => {
    const wrapper = shallowMount(Table);
    expect(wrapper.findAll('th').length).to.equal(6);
  });

  it('renders the table headers correctly', async () => {
    const wrapper = shallowMount(Table);
    expect(wrapper.find('.name').text()).to.equal('Name');
    expect(wrapper.find('.gender').text()).to.equal('Gender');
    expect(wrapper.find('.age').text()).to.equal('Age');
    expect(wrapper.find('.eyecolor').text()).to.equal('Eye Color');
    expect(wrapper.find('.preferences_pet').text()).to.equal('Favorite Pet');
    expect(wrapper.find('.preferences_fruit').text()).to.equal('Favorite Fruit');
  });
});
