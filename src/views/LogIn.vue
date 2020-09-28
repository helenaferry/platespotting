<template>
<div>
    <page-layout>
        <div slot="main">
            <user-data-provider>
                <div slot-scope="dataProvider">

                    <h4>Login</h4>
                    <form @submit.prevent="dataProvider.login(email, password)">
                        <label for="email">E-Mail Address</label>
                        <div>
                            <input id="email" type="email" v-model="email" required autofocus>
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <div>
                                <input id="password" type="password" v-model="password" required>
                            </div>
                        </div>
                        <div>
                            <button type="submit">
                                Login
                            </button>
                        </div>
                        <router-link to="/signup">Registrera</router-link>
                    </form>
                </div>
            </user-data-provider>
        </div>
    </page-layout>
</div>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';
import UserDataProvider from '../dataproviders/UserDataProvider';
export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    components: {
        PageLayout,
        UserDataProvider
    },
}
</script>
