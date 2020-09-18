import Sighting from '../components/Sighting/Sighting.vue';

export default {
  title: 'Platespotting/Sighting',
  component: Sighting,
};

const Template = () => ({
  components: { Sighting },
  template: '<sighting></sighting>',
});

export const Default = Template.bind({});