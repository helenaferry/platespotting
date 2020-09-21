<template>
<div class="add-spotting">
    <p>Jag letar efter</p>
    <number-plate :plate="plate" />
    <button @click="addToday">Hittad idag!</button>
    <button @click="addInclDate">Hittad en annan dag</button>
    <form v-if="adding" @submit.prevent="save">
        <label for="date">Datum</label>
        <input id="date" type="date" v-model="date" required />

		<!-- TODO Setup team members -->
        <label for="seenBy">Vilka såg</label>
        <input type="checkbox" name="seenBy" v-model="seenBy" value="Jonas">Jonas
        <input type="checkbox" name="seenBy" v-model="seenBy" value="Helena">Helena
        <input type="checkbox" name="seenBy" v-model="seenBy" value="Sander">Sander
        <input type="checkbox" name="seenBy" v-model="seenBy" value="Ava">Ava

		<label for="note">Anteckning</label>
		<textarea name="note" v-model="note"/>

		<button>Spara</button>
    </form>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPlate from '@/components/NumberPlate/NumberPlate.vue';

export default Vue.extend({
    name: 'AddSpotting',
    props: {
        plate: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {
            adding: false,
			date: null,
			seenBy: [],
			note: null
        }
    },
    components: {
		NumberPlate
    },
    methods: {
        addToday() {
			this.date = new Date().toISOString().split("T")[0];
            this.adding = true;
        },
        addInclDate() {
			this.date = null;
			this.adding = true;
        },
		save(e) {
			console.log('Date: ', this.date);
			console.log('Seen by: ', this.seenBy);
			console.log('Note: ', this.note);
			this.$emit('create', {plate: this.plate, date: this.date, seenBy: this.seenBy, note: this.note});
		}
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.add-spotting {
    text-align: center;

}
form {
	text-align: left;
	max-width: 400px;
	margin: 40px auto;
}
label {
	display: block;
}
</style>
