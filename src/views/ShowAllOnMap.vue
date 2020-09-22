<template>
<div class="show-all-on-map">
    <PageLayout>
        <div slot="main">
            <plate-spottings-data-provider>
                <div slot-scope="dataProvider">
                    <map-with-markers :locations="dataProvider.plateSpottings.map(plateSpotting => plateSpotting.location)" :zoom="6" height="500px" />
                </div>
            </plate-spottings-data-provider>
        </div>
    </PageLayout>
</div>
</template>

<script>
// @ is an alias to /src
import PageLayout from '@/components/PageLayout.vue';
import PlateSpottingsDataProvider from '../dataproviders/PlateSpottingsDataProvider';
import PlateSpotting from '@/components/PlateSpotting.vue';
import MapWithMarkers from '@/components/MapWithMarkers.vue';

export default {
    name: 'ShowAllOnMap',
    components: {
        PageLayout,
        PlateSpottingsDataProvider,
        PlateSpotting,
        MapWithMarkers,
    },
};
</script>
