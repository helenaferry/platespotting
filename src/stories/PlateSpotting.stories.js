import PlateSpotting from '../components/PlateSpotting.vue';

export default {
  title: 'Platespotting/PlateSpotting',
  component: PlateSpotting,
};

const Template = () => ({
  components: { PlateSpotting },
  template: '<plate-spotting></plate-spotting>',
});

export const Default = Template.bind({});