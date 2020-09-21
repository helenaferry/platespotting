<template>
<div>
    <header>Platespotting Sverige</header>
    <menu>
        <router-link to="/">Start</router-link> - 
		<router-link to="spottings">Visa sedda</router-link> -
        <router-link to="show-all-on-map">Visa alla på karta</router-link>
    </menu>
    <main>
        <slot name="main" />
    </main>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'PageLayout',
});
</script>
