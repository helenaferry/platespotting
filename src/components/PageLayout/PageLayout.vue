<template>
	<div>
		<header>Platespotting Sverige</header>
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
