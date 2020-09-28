<template>
<page-layout>
    <div slot="main">
        <h4>Register</h4>
        <user-data-provider>
            <div slot-scope="dataProvider">
                <form @submit.prevent="dataProvider.signUp(name, email, password)">
                    <label for="name">Name</label>
                    <div>
                        <input id="name" type="text" v-model="name" required autofocus>
                    </div>

                    <label for="email">E-Mail Address</label>
                    <div>
                        <input id="email" type="email" v-model="email" required>
                    </div>

                    <label for="password">Password</label>
                    <div>
                        <input id="password" type="password" v-model="password" required>
                    </div>

                    <label for="password-confirm">Confirm Password</label>
                    <div>
                        <input id="password-confirm" type="password" v-model="passwordConfirmation" required>
                    </div>

                    <div>
                        <button type="submit">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </user-data-provider>
    </div>
</page-layout>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';
import UserDataProvider from '../dataproviders/UserDataProvider';
export default {
    props: ["nextUrl"],
    components: {
        PageLayout,
        UserDataProvider
    },
    data() {
        return {
            name: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        }
    },

	/* 
	TODO: Check conditions are met to allow submit
	*/
    methods: {
        /*
        handleSubmit(e) {
            console.log('handleSubmit', e);
            if (this.password === this.passwordConfirmation && this.password.length > 0) {
                console.log(this.name);

console.log(this.email);

UserDataProvider.methods.signUp(this.name, this.email, this.password);
            } else {
                this.password = ""
                this.passwordConfirmation = ""

                return alert("Passwords do not match")
            }*/
        /*

            if (this.password === this.password_confirmation && this.password.length > 0) {
                let url = "http://localhost:3000/register";
                this.$http.post(url, {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                    })
                    .then(response => {
                        localStorage.setItem('user', JSON.stringify(response.data.user))
                        localStorage.setItem('jwt', response.data.token)

                        if (localStorage.getItem('jwt') != null) {
                            this.$emit('loggedIn')
                            if (this.$route.params.nextUrl != null) {
                                this.$router.push(this.$route.params.nextUrl)
                            } else {
                                this.$router.push('/')
                            }
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else {
                this.password = ""
                this.passwordConfirm = ""

                return alert("Passwords do not match")
            }


    }*/
}
}
</script>
