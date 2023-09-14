<template>
	<v-footer class="d-flex flex-column">
		<v-sheet class="w-100 d-flex justify-space-between">
			<vade-nav :nav="nav" :is-horizontal="false" />
			<address>
				<p>team@vade.ai</p>
			</address>
		</v-sheet>
		<v-divider />
	</v-footer>
</template>

<script setup>
import VadeNav from './VadeNav.vue';
import { useStore } from 'vuex';

const store = useStore();

const nav = store.state.nav;
</script>

<style></style>
