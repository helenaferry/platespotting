<template>
<div class="plate-spotting">
    <number-plate :plate="plate" />
    <p class="plate-spotting__date">{{date}}</p>
    <p class="plate-spotting__note">{{note}}</p>
    <map-with-markers v-if="showMap" :locations="[location]"></map-with-markers>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import LocationModel from '../../models/LocationModel';
import MapWithMarkers from '../MapWithMarkers/MapWithMarkers.vue'
import NumberPlate from '../../components/NumberPlate/NumberPlate.vue';

export default Vue.extend({
    name: 'PlateSpotting',
    props: {
        id: {
            type: String,
            default: 'someId'
        },
        plate: {
            type: Number,
            default: 0
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
        },
		showMap: {
			type: Boolean,
			default: false
		}
    },
    components: {
        MapWithMarkers,
		NumberPlate
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.plate-spotting {
	display: flex;
	justify-content: space-between;
	align-items: center;
    border-radius: 15px;
    padding: 15px;
	margin: 20px 0;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
	background-color: #f9f9f9;
}

.plate-spotting .map-with-markers {
	width: 200px;
	flex: 0 0 200px;
}

.plate-spotting__date {
	flex:0 0 200px;
}
.plate-spotting__note {
	flex: 1 0 auto;
	text-align: left;
}
</style>
