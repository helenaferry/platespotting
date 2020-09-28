import {
    mapGetters
} from 'vuex';
export default {
    name: 'UserDataProvider',
	computed: mapGetters('user', {
		isLoggedIn: 'isLoggedIn',
        user: 'user',
    }),
	methods: {
        login(email, password) {
            this.$store.dispatch('user/login', {
				email: email,
				password: password // TODO encrypt?
            });
		},
		logout() {
			this.$store.dispatch('user/logout');
		},
		signUp(name, email, password) {
			this.$store.dispatch('user/signUp', {
				name: name,
				email: email,
				password: password
			});
		}
	},
    render() {
        if (!this.$scopedSlots.default) {
            return;
        }

        const slotScope = {
			user: this.user,
			isLoggedIn: this.isLoggedIn,
			login: this.login,
			logout: this.logout,
			signUp: this.signUp,
        };

        return this.$scopedSlots.default(slotScope);
    },
    created() {
		
    }
}
