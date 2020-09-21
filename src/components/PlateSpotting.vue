<template>
<div class="plate-spotting columns has-background-light my-2">
    <div class="column"><number-plate :plate="plate" class="is-pulled-left"/></div>
    <div class="column"><p class="plate-spotting__date">{{date}}</p></div>
    <div class="column"><p class="plate-spotting__note">{{note}}</p></div>
    <div class="column" v-if="showMap"><map-with-markers :locations="[location]"></map-with-markers></div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import LocationModel from '@/models/LocationModel';
import MapWithMarkers from '@/components/MapWithMarkers.vue'
import NumberPlate from '@/components/NumberPlate.vue';

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