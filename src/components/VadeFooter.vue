<template>
	<v-footer class="d-flex flex-column pa-0 pt-13 pb-5">
		<v-sheet class="w-100 d-flex">
			<v-img
				:width="44"
				:height="48"
				src="assets/logo-2.png"
				class="flex-0-0"
			/>
			<vade-nav
				:nav="nav"
				:is-horizontal="false"
				class="ml-auto flex-0-1 vade-mr-12-pc"
			/>
			<address class="flex-0-1">
				<a
					href="#"
					target="_blank"
					rel="noopener noreferrer"
					class="font-normal text-decoration-none primary-nav-text vade-base-text vade-lh-18"
				>
					team@vade.ai
				</a>
				<social-networks :list="socialNetworksList" />
			</address>
		</v-sheet>
		<v-divider />
	</v-footer>
</template>

<script setup>
import VadeNav from './VadeNav.vue';
import SocialNetworks from './SocialNetworks.vue';
import { useStore } from 'vuex';

const store = useStore();

const nav = store.state.nav;

const socialNetworksList = ['facebook', 'instagram', 'twitter', 'linkedin'];
</script>

<style>
.font-normal {
	font-style: normal;
}
.vade-mr-12-pc {
	margin-right: 12%;
}
</style>
