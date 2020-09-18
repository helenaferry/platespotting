<template>
<div class="sighting">
    <p>{{plate}}</p>
	<p>{{date}}</p>
	<p>{{note}}</p>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import LocationModel from '../../models/LocationModel';

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
			default: {
				Lat: '59.204458',
				Long: '17.679655'
			}
		},
        note: {
			type: String,
			default: 'Såg den från bussen'
		}
    },
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
