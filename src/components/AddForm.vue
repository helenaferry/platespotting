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
                    <map-current-location @updateLocation="updateLocation"></map-current-location>
                    <div class="columns" v-if="location">
                        <div class="column">
                            <b-field label="Latitud">
                                <b-input type="text" v-model="location.Lat"></b-input>
                            </b-field>
                        </div>
                        <div class="column">
                            <b-field label="Longitud">
                                <b-input type="text" v-model="location.Lng"></b-input>
                            </b-field>
                        </div>
                    </div>

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
                    <p v-if="errorMsg" class="has-text-danger mb-5">{{errorMsg}}</p>
                    <b-button type="is-primary" native-type="submit" :disabled="!submittable" rounded expanded>Spara</b-button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPlate from '../components/NumberPlate.vue';
import MapCurrentLocation from '../components/MapCurrentLocation.vue';
import LocationModel from '../models/LocationModel';
import Buefy from 'buefy';

Vue.use(Buefy);

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
            date: new Date(),
            location: new LocationModel(),
            seenBy: [],
            note: '',
            submitted: false,
            errorMsg: null,
        };
    },
    components: {
        NumberPlate,
        MapCurrentLocation
    },
    computed: {
        submittable() {
            if (!this.date) {
                return false;
            }
            if (!this.location || this.location.Lat == 0 || this.location.Lng == 0) {
                return false;
            }
            if (this.teamEffort && this.seenBy.length == 0) {
                return false;
            }
            return true;
        }
    },
    methods: {
        save() {
            if (this.teamEffort && this.seenBy.length === 0) {
                this.$data.errorMsg = 'Du måste ange vilka som såg den!';
                return;
            }

            this.$data.errorMsg = null;

            this.$emit('create', {
                plate: this.plate,
                date: this.date.toISOString().split('T')[0],
                location: this.location,
                seenBy: this.seenBy,
                note: this.note,
            });
            this.submitted = true;
        },
        resetSubmitted() {
            this.submitted = false;
        },
        updateLocation(newLocation : LocationModel) {
            this.location = newLocation;
        }
    },
    mounted() {
        this.resetSubmitted();
    }
});
</script>

<style scoped>
 .datepicker {
     z-index: 10000;
 }
</style>
