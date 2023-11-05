<template>
	<v-app-bar
		:elevation="0"
		scroll-behavior="hide"
		class="vade vade-max-width pt-10"
		color="transparent"
		absolute
	>
		<template v-slot:prepend>
			<img src="../assets/logo-1.svg" alt="logo" />
		</template>
		<template v-slot:append>
			<vade-nav :nav="nav" :is-horizontal="true" />
			<v-btn
				width="127"
				variant="outlined"
				class="text-lowercase vade-base-text vade-lh-24 vade-ls-90 opacity-40"
			>
				book a demo
			</v-btn>
		</template>
	</v-app-bar>
</template>

<script setup>
import VadeNav from './VadeNav.vue';

const nav = {
	technology: '/technology',
	'about us': '/about-us',
	impact: '/impact',
	portfolio: '/portfolio',
	blog: '/blog',
};
</script>

<style>
.vade .v-toolbar__prepend {
	margin-inline-start: 0 !important;
}

.vade .v-toolbar__append {
	margin-inline-end: 0 !important;
}
</style>
