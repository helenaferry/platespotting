
export default {
    name: 'PlateSpottingsDataProvider',
    computed: { /* TODO mapGetters? */
		plateSpottings: function () {
			return this.$store.getters['plateSpottings/plateSpottings'];
		},
		nextPlate: function () {
			return this.$store.getters['plateSpottings/nextPlate'];
		}
	},
	methods: {
        addPlateSpotting({ plate, date, seenBy, note  }) {
            this.$store.dispatch('plateSpottings/addPlateSpotting', {
                plate: plate,
                date: date,
				seenBy: seenBy,
				note: note
            });
		},
		toggleSort() {
			console.log('Toggle sort');
			this.$store.dispatch('plateSpottings/toggleSort');
		}
	},
    render() {
        if (!this.$scopedSlots.default) {
            return;
        }

        const slotScope = {
			plateSpottings: this.plateSpottings,
			nextPlate: this.nextPlate,
			addPlateSpotting: this.addPlateSpotting,
			toggleSort: this.toggleSort,
        };

        return this.$scopedSlots.default(slotScope);
    },
    created() {
		this.$store.dispatch('plateSpottings/fetchPlateSpottings');
    }
}
