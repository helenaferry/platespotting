<template>
<div class="home">
    <PageLayout>
        <div slot="main">
            <plate-spottings-data-provider>
                <div slot-scope="dataProvider">
                    <plate-spotting v-for="plateSpotting in dataProvider.plateSpottings" v-bind="plateSpotting" />
					<map-with-markers :locations="dataProvider.plateSpottings.map(plateSpotting => plateSpotting.location)" :zoom="6" height="500px"/>
                </div>
            </plate-spottings-data-provider>
        </div>
    </PageLayout>
</div>
</template>

<script>
// @ is an alias to /src
import PageLayout from '@/components/PageLayout/PageLayout.vue'
import PlateSpottingsDataProvider from '../dataproviders/PlateSpottingsDataProvider';
import PlateSpotting from '@/components/PlateSpotting/PlateSpotting.vue';
import MapWithMarkers from '@/components/MapWithMarkers/MapWithMarkers.vue';

export default {
    name: 'Home',
    components: {
        PageLayout,
        PlateSpottingsDataProvider,
		PlateSpotting,
		MapWithMarkers
    }
}
</script>
