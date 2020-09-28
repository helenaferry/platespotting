import {
	mapGetters
} from 'vuex';
export default {
	name: 'UserDataProvider',
	computed: mapGetters('user', {
		isLoggedIn: 'isLoggedIn',
		user: 'user',
	}),
	data() {
		return {
			errorMsg: ''
		}
	},
	methods: {
		login(email, password) {
			this.$store.dispatch('user/login', {
				email: email,
				password: password // TODO encrypt?
			}).catch((err) => {
				this.errorMsg = 'Du blev inte inloggad. Kontrollera dina uppgifter.';
				return;
			}).then(() => {
				if (this.isLoggedIn) {
					this.errorMsg = '';
					this.$router.push('/');
				}
			});
		},
		logout() {
			this.$store.dispatch('user/logout').then(() => {
				this.$router.push('login');
			});
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
			errorMsg: this.errorMsg,
		};

		return this.$scopedSlots.default(slotScope);
	},
	created() {

	}
}
