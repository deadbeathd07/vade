<template>
	<v-app-bar
		:elevation="0"
		scroll-behavior="hide"
		class="vade-max-width pt-10"
		color="transparent"
		absolute
	>
		<template v-slot:prepend>
			<img src="../assets/logo-1.svg" alt="logo" />
		</template>
		<template v-slot:append>
			<vade-nav :nav="nav" :color="palette['primary-nav-text']" />
			<v-btn
				size="large"
				variant="outlined"
				class="text-lowercase vade-base-text vade-lh-24 opacity-40"
				:color="color"
			>
				book a demo
			</v-btn>
		</template>
	</v-app-bar>
</template>

<script setup>
import { useStore } from 'vuex';
import VadeNav from './VadeNav.vue';

const store = useStore();

const nav = store.state.nav;

const palette = store.state.palette;
</script>

<style></style>
