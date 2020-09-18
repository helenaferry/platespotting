
export default {
    name: 'PlateSpottingsDataProvider',
    computed: {
		plateSpottings: function () {
			return this.$store.getters['plateSpottings/plateSpottings'];
		}
	},
    render() {
        if (!this.$scopedSlots.default) {
            return;
        }

        const slotScope = {
            plateSpottings: this.plateSpottings,
        };

        return this.$scopedSlots.default(slotScope);
    },
    created() {
		this.$store.dispatch('plateSpottings/fetchPlateSpottings');
    }
}
