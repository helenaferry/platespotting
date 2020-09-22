<template>
<div class="add-form has-text-centered">
    <p v-if="submitted" class="mt-6">Yay!<br /><br /> <a @click="resetSubmitted">Jag har hittat en till!</a></p>
    <div v-else>
        <p>Jag har hittat</p>
        <number-plate :plate="plate" />
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
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPlate from '../components/NumberPlate.vue';

export default Vue.extend({
    name: 'AddForm',
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
            submitted: false
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
            this.submitted = true;
        },
        resetSubmitted() {
            this.submitted = false;
        },
    },
});
</script>
