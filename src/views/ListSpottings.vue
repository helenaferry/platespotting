<template>
<div class="home">
    <PageLayout>
        <div slot="main">
            <plate-spottings-data-provider>
                <div slot-scope="dataProvider">
                    <a href="#" @click="dataProvider.toggleSort">Flippa sortering</a> -
                    <a href="#" @click="toggleMap">{{toggleMapText}}</a>
                    <plate-spotting v-for="plateSpotting in dataProvider.plateSpottings" :key="plateSpotting.id" v-bind="plateSpotting" :showMap="showMap" />
                </div>
            </plate-spottings-data-provider>
        </div>
    </PageLayout>
</div>
</template>

<script>
// @ is an alias to /src
import PageLayout from '../components/PageLayout.vue';
import PlateSpottingsDataProvider from '../dataproviders/PlateSpottingsDataProvider';
import PlateSpotting from '../components/PlateSpotting.vue';

export default {
    name: 'ListSpottings',
    components: {
        PageLayout,
        PlateSpottingsDataProvider,
        PlateSpotting,
    },
    data() {
        return {
            showMap: false,
        };
    },
    computed: {
        toggleMapText() {
            return this.showMap ? 'Dölj karta' : 'Visa karta';
        },
    },
    methods: {
        toggleMap() {
            this.showMap = !this.showMap;
        },
    },
};
</script>
