import MapWithMarkers from '../components/MapWithMarkers/MapWithMarkers.vue';
import "leaflet/dist/leaflet.css"

export default {
  title: 'Platespotting/MapWithMarkers',
  component: MapWithMarkers,
};

const Template = () => ({
  components: { MapWithMarkers },
  template: '<map-with-markers :locations="[{Lat: 59.386473, Long: 14.472318}]" height="400px"></map-with-markers>',
});

export const Default = Template.bind({});