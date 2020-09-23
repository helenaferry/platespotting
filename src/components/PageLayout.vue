<template>
<div>
    <header class="is-size-3 mt-4 has-text-centered">Platespotting Sverige</header>

    <menu class="has-text-centered">
        <router-link to="/">Start</router-link> -
		<router-link to="add">Lägg till</router-link> -
        <router-link to="list">Visa sedda</router-link> -
        <router-link to="map">Visa alla på karta</router-link>
    </menu>
    </section>
    <div class="container">
        <main class="mb-6">
            <slot name="main" />
        </main>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Buefy from 'buefy';

Vue.use(Buefy);

export default Vue.extend({
    name: 'PageLayout',
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

menu {
	padding:0;
}

</style>