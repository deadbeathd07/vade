<script setup>
import VadeHeader from './components/VadeHeader.vue';
import VadeFooter from './components/VadeFooter.vue';
import { RouterView } from 'vue-router';
</script>

<template>
	<v-app class="vade-max-width mx-auto pb-8 px-4">
		<vade-header />
		<router-view />
		<vade-footer />
	</v-app>
</template>

<style scoped></style>
