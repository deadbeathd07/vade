<script setup>
import VadeHeader from './components/VadeHeader.vue';
import VadeFooter from './components/VadeFooter.vue';
import HomeView from './views/HomeView.vue';
</script>

<template>
	<v-app class="mx-auto pb-8 px-4">
		<vade-header />
		<v-main class="pa-0">
			<home-view />
		</v-main>
		<vade-footer />
	</v-app>
</template>

<style scoped></style>
