import AddSpotting from '../components/AddSpotting/AddSpotting.vue';

export default {
  title: 'Platespotting/Add spotting',
  component: AddSpotting,
};

const Template = () => ({
  components: { AddSpotting },
  template: '<add-spotting></add-spotting>',
});

export const Default = Template.bind({});