<template>
<page-layout>
    <div slot="main">
        <h4>Logga ut?</h4>
        <user-data-provider>
            <div slot-scope="dataProvider">
                User: {{dataProvider.user}}
                <form @submit.prevent="dataProvider.logout">
                    <div>
                        <button type="submit">
                            Logga ut
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
    components: {
        PageLayout,
        UserDataProvider
    },
}
</script>
