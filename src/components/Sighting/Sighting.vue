<template>
<div class="sighting">
    <p>{{plate}}</p>
	<p>{{date}}</p>
	<p>{{note}}</p>
	<map-with-markers :locations="[location]"></map-with-markers>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import LocationModel from '../../models/LocationModel';
import MapWithMarkers from '../MapWithMarkers/MapWithMarkers.vue'

export default Vue.extend({
    name: 'Sighting',
    props: {
        id: {
            type: String,
            default: 'someId'
        },
        plate: {
			type: String,
			default: '001'
		},
        date: {
			type: String,
			default: '2020-09-18'
		},
        location: {
			type: Object,
			default: () => {}
		},
        note: {
			type: String,
			default: 'Såg den från bussen'
		}
    },
	components: { MapWithMarkers }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.sighting {
	border: 1px solid black;
	display: inline-block;
	border-radius: 15px;
	padding: 10px 30px;
}

</style>
