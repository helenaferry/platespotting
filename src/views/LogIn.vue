<template>
<div>
    <page-layout>
        <div slot="main">
            <div class="columns is-centered mx-4">
                <div class="column is-6">
                    <user-data-provider>
                        <div slot-scope="dataProvider">
                            <form @submit.prevent="dataProvider.login(email, password)">
                                <label class="has-text-weight-bold" for="emailField">Email</label>
                                <div>
                                    <b-input id="emailField" type="email" v-model="email" required autofocus />
                                </div>
                                <div>
                                    <label class="has-text-weight-bold" for="password">Lösenord</label>
                                    <div>
                                        <b-input id="password" type="password" v-model="password" required />
                                    </div>
                                </div>
                                <div>
                                    <b-button type="is-primary" native-type="submit" rounded class="mt-3 mb-6">
                                        Login
                                    </b-button>
									<p class="has-text-danger">{{dataProvider.errorMsg}}</p>
                                </div>
                                <router-link to="/signup">Registrera</router-link>
                            </form>
													
                        </div>
                    </user-data-provider>
                </div>
            </div>
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
