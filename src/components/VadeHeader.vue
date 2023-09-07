<template>
	<v-app-bar
		:elevation="0"
		scroll-behavior="hide"
		class="mt-10 vade-max-width"
		color="transparent"
		absolute
	>
		<template v-slot:prepend>
			<img src="../assets/logo-1.svg" alt="logo" />
		</template>
		<template v-slot:append>
			<vade-nav :nav="nav" :color="palette['primary-nav-text']" />
		</template>
	</v-app-bar>
</template>

<script setup>
import { useStore } from 'vuex';
import VadeNav from './VadeNav.vue';

const store = useStore();

const nav = {
	technology: '/technology',
	'about us': '/about-us',
	impact: '/impact',
	portfolio: '/portfolio',
	blog: '/blog',
};

const palette = store.state.palette;
</script>

<style></style>
