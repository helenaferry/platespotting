<template>
<div class="home">
    <PageLayout>
        <div slot="main">
            <plate-spottings-data-provider>
                <div slot-scope="dataProvider">
                    <add-form :plate="dataProvider.nextPlate" @create="dataProvider.addPlateSpotting" />
                </div>
            </plate-spottings-data-provider>
        </div>
    </PageLayout>
</div>
</template>

<script>
import Vue from 'vue';
import PageLayout from '../components/PageLayout.vue';
import PlateSpottingsDataProvider from '../dataproviders/PlateSpottingsDataProvider';
import AddForm from '../components/AddForm.vue';
import Buefy from 'buefy';

Vue.use(Buefy);

export default Vue.extend({
    name: 'AddSpotting',
    components: {
        PageLayout,
        PlateSpottingsDataProvider,
        AddForm,
    },
});
</script>
