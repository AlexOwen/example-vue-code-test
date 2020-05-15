import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Title from '@/components/Title.vue';

describe('Title.vue', () => {
  it('renders nh h1 element', async () => {
    const title = 'This is a title';
    const wrapper = shallowMount(Title, {
      propsData: { title },
    });
    expect(wrapper.find('h1')).to.exist;
  });

  it('renders the correct title', async () => {
    const title = 'This is a title';
    const wrapper = shallowMount(Title, {
      propsData: { title },
    });
    expect(wrapper.find('h1').text()).to.equal(title);
  });

  it('renders an empty title', async () => {
    const title = '';
    const wrapper = shallowMount(Title, {
      propsData: { title },
    });
    expect(wrapper.find('h1').text()).to.equal(title);
  });

  it('renders a numeric title', async () => {
    const title = 2;
    const wrapper = shallowMount(Title, {
      propsData: { title },
    });
    expect(wrapper.find('h1').text()).to.equal(title.toString());
  });
});
