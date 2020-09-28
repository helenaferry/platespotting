<template>
<div class="home">
    <PageLayout>
        <div slot="main">
            <plate-spottings-data-provider>
                <div slot-scope="dataProvider" class="has-text-centered">
                    <p>Jag letar efter</p>
                    <number-plate :plate="dataProvider.nextPlate" />
					<b-button @click="goToAdd" class="is-primary mt-3" rounded>Hittad!</b-button>
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
import NumberPlate from '../components/NumberPlate.vue';

export default {
    name: 'StartPage',
    components: {
        PageLayout,
        PlateSpottingsDataProvider,
        NumberPlate,
    },
	methods: {
		goToAdd() {
			this.$router.push('add');
		}
	}
};
</script>
