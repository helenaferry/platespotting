
export default {
    name: 'SightingsDataProvider',
    computed: {
		sightings: function () {
			return this.$store.getters['sightings/sightings'];
		}
	},
    render() {
        if (!this.$scopedSlots.default) {
            return;
        }

        const slotScope = {
            sightings: this.sightings,
        };

        return this.$scopedSlots.default(slotScope);
    },
    created() {
		this.$store.dispatch('sightings/fetchSightings');
    }
}
