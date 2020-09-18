import MapWithMarkers from '../components/MapWithMarkers/MapWithMarkers.vue';
import "leaflet/dist/leaflet.css"

export default {
  title: 'Platespotting/MapWithMarkers',
  component: MapWithMarkers,
};

const Template = () => ({
  components: { MapWithMarkers },
  template: '<map-with-markers></map-with-markers>',
});

export const Default = Template.bind({});