<template>
<div class="home">
    <PageLayout>
        <div slot="main">
            <sightings-data-provider>
                <div slot-scope="dataProvider">
                    <sighting v-for="sighting in dataProvider.sightings" v-bind="sighting" />
                </div>
            </sightings-data-provider>
        </div>
    </PageLayout>
</div>
</template>

<script>
// @ is an alias to /src
import PageLayout from '@/components/PageLayout/PageLayout.vue'
import SightingsDataProvider from '../dataproviders/SightingsDataProvider';
import Sighting from '@/components/Sighting/Sighting.vue';

export default {
    name: 'Home',
    components: {
        PageLayout,
        SightingsDataProvider,
		Sighting
    }
}
</script>
