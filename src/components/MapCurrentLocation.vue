<template>
<div class="map-with-markers">
    <l-map :zoom="zoom" :center="center" :options="mapOptions" :style="`height:${height};`">
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-marker :lat-lng="center" :draggable="true" @update:latLng="updateLocation"></l-marker>
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
    _getIconUrl ? : string;
};

delete(Icon.Default.prototype as D)._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default Vue.extend({
    name: 'MapCurrentLocation',
    props: {
        location: {
            type: LocationModel,
            default: () => {},
        },
        height: {
            type: String,
            default: '250px',
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
            lat: 0,
            lng: 0,
        };
    },
    computed: {
        center() {
            return latLng(this.$data.lat, this.$data.lng);
        }
    },
    watch: {
        location: {
            deep: true,
            handler(value) {
                this.$data.lat = value.Lat;
                this.$data.lng = value.Lng;
            }
        }
    },
    methods: {
        updateLocation(location: any) {
            if (!location || !location.lat || !location.lng) return;
            let newLocation = new LocationModel();
            newLocation.Lat = location.lat;
            newLocation.Lng = location.lng;
            this.$emit('updateLocation', newLocation);
        },
    },
    mounted() {
        //do we support geolocation
        if (!("geolocation" in navigator)) {
            return;
        }
        // get position
        navigator.geolocation.getCurrentPosition(
            pos => {
                this.$data.lat = pos.coords.latitude;
                this.$data.lng = pos.coords.longitude;
            }
        );
    },
});
</script>
