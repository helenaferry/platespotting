<template>
<div class="add-spotting has-text-centered">
    <section class="section">
        <p>Jag letar efter</p>
        <number-plate :plate="plate" />
    </section>
    <b-collapse v-model="isOpen" aria-id="contentIdForA11y1">
        <b-button class="button is-primary is-rounded" slot="trigger" aria-controls="contentIdForA11y1">Hittad!</b-button>
        <div class="columns is-centered mx-4">
		<div class="column is-6">
            <form @submit.prevent="save" class="has-text-left">
                <b-field label="Datum">
                    <b-datepicker placeholder="Skriv eller välj ett datum..." v-model="date" icon="calendar-today" locale="sv-SE" editable required>
                    </b-datepicker>
                </b-field>

                <b-field label="Vilka teammedlemmar såg?" v-if="teamEffort">
                    <b-checkbox v-model="seenBy" native-value="Jonas">
                        Jonas
                    </b-checkbox>
                    <b-checkbox v-model="seenBy" native-value="Helena">
                        Helena
                    </b-checkbox>
                    <b-checkbox v-model="seenBy" native-value="Sander">
                        Sander
                    </b-checkbox>
                    <b-checkbox v-model="seenBy" native-value="Ava">
                        Ava
                    </b-checkbox>
                </b-field>

                <b-field label="Anteckning">
                    <b-input maxlength="200" type="textarea" v-model="note"></b-input>
                </b-field>

                <b-button type="is-primary" native-type="submit" rounded expanded>Spara</b-button>
            </form>
        </div></div>
    </b-collapse>

</div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPlate from '../components/NumberPlate.vue';
import Buefy from 'buefy';

Vue.use(Buefy);

export default Vue.extend({
    name: 'AddSpotting',
    props: {
        plate: {
            type: Number,
            default: 0,
        },
        teamEffort: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            isOpen: false,
            date: new Date(),
            seenBy: [],
            note: '',
        };
    },
    components: {
        NumberPlate,
    },
    methods: {
        save() {
            console.log('Date: ', this.date);
            console.log('Seen by: ', this.seenBy);
            console.log('Note: ', this.note);

            // if (teamEffort && this.seenBy.length)

            this.$emit('create', {
                plate: this.plate,
                date: this.date,
                seenBy: this.seenBy,
                note: this.note,
            });
            this.isOpen = false;
        },
    },
});
</script>
