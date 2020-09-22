import AddSpotting from '../components/AddSpotting.vue';

export default {
  title: 'Platespotting/Add spotting',
  component: AddSpotting,
};

const Template = () => ({
  components: { AddSpotting },
  template: '<add-spotting :plate="3"></add-spotting>',
});

export const Default = Template.bind({});