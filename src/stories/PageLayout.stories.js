import PageLayout from '../components/PageLayout/PageLayout.vue';

export default {
  title: 'Platespotting/PageLayout',
  component: PageLayout,
};

const Template = () => ({
  components: { PageLayout },
  template: '<page-layout><div slot="main">This is how we put things in the main container.</div></page-layout>',
});

export const Default = Template.bind({});