import MapWithMarkers from '../components/MapWithMarkers.vue';

export default {
  title: 'Platespotting/MapWithMarkers',
  component: MapWithMarkers,
};

const Template = () => ({
  components: { MapWithMarkers },
  template: '<map-with-markers :locations="[{Lat: 59.386473, Lng: 14.472318}, {Lat: 59.387273, Lng: 14.472918}]" height="400px"></map-with-markers>',
});

export const Default = Template.bind({});