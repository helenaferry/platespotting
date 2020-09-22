<template>
<div class="home">
    <PageLayout>
        <div slot="main">
            <plate-spottings-data-provider>
                <div slot-scope="dataProvider">
                    <add-spotting :plate="dataProvider.nextPlate" @create="dataProvider.addPlateSpotting" />
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
import AddSpotting from '../components/AddSpotting.vue';

export default {
    name: 'Home',
    components: {
        PageLayout,
        PlateSpottingsDataProvider,
        AddSpotting,
    },
};
</script>
