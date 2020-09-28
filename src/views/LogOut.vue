<template>
<page-layout>
    <div slot="main">
        <div class="columns is-centered mx-4">
            <div class="column is-6 has-text-centered">
                <p class="has-text-weight-bold mb-3">Är du säker på att du vill logga ut?</p>
                <user-data-provider>
                    <div slot-scope="dataProvider">
                        <form @submit.prevent="dataProvider.logout">
                            <div>
                                <b-button type="is-primary" native-type="submit" rounded>
                                    Logga ut
                                </b-button>
                            </div>
                        </form>
                    </div>
                </user-data-provider>
            </div>
        </div>
    </div>
</page-layout>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';
import UserDataProvider from '../dataproviders/UserDataProvider';
export default {
    components: {
        PageLayout,
        UserDataProvider
    },
}
</script>
