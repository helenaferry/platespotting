<template>
<div class="map-with-markers">
    <l-map :zoom="zoom" :center="center" :options="mapOptions" :style="`height:${height};`">
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-marker v-for="(location, index) in locations" v-if="location && location.Lat && location.Lng" :lat-lng="createLatLng(location)" :key="index"></l-marker>
    </l-map>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
    latLng,
    Icon,
} from 'leaflet';

import {
    LMap,
    LTileLayer,
    LMarker,
} from 'vue2-leaflet';

import LocationModel from '../models/LocationModel';

type D = Icon.Default & {
    _getIconUrl ?: string;
};

delete(Icon.Default.prototype as D)._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default Vue.extend({
    name: 'MapWithMarkers',
    props: {
        locations: {
            type: Array,
            default: () => [],
        },
        height: {
            type: String,
            default: '150px',
        },
        zoom: {
            type: Number,
            default: 15,
        },
    },
    components: {
        LMap,
        LTileLayer,
        LMarker,
    },
    data() {
        return {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            currentZoom: 11.5,
            mapOptions: {
                zoomSnap: 0.5,
            },
        };
    },
    computed: {
        center() {
            // TODO Temporary, want to adjust bounds to current markers, how do this with vue2-leaflet?
            const firstLocation = this.locations[0] as LocationModel;
            if (firstLocation && firstLocation.Lat && firstLocation.Lng) {
                return latLng(firstLocation.Lat, firstLocation.Lng);
            } else {
        return latLng(59.386473, 14.472318); // Random ok location for now but fix TODO thingie and remove....
      }
        },
    },
    methods: {
        createLatLng(location: LocationModel) {
            return latLng(location.Lat, location.Lng);
        },
    },
    created() {

    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.map-with-markers {

}
</style>
