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
			<address class="flex-0-1 vade-mr-9-pc">
				<a
					href="#"
					target="_blank"
					rel="noopener noreferrer"
					class="font-normal text-decoration-none primary-nav-text vade-base-text vade-lh-18"
				>
					team@vade.ai
				</a>
				<social-networks :list="socialNetworksList" />
				<p
					class="font-normal primary-text vade-base-text vade-lh-24 vade-max-width-175"
				>
					16 W Martin St. Suite 1101, Raleigh, NC 27601
				</p>
			</address>
		</v-sheet>
		<p class="w-100 vade-info-text info-text mb-4">© 2021 VADE Group Inc.</p>
		<v-divider class="w-100" />
		<v-list class="w-100 d-flex pa-0 ma-0 vade-info-text">
			<v-list-item v-for="(item, i) in termsOfUse" :key="i" class="pa-0 mr-3">
				<a href="#" class="text-decoration-none info-text" @click.prevent>{{
					item
				}}</a>
			</v-list-item>
		</v-list>
	</v-footer>
</template>

<script setup>
import VadeNav from './VadeNav.vue';
import SocialNetworks from './SocialNetworks.vue';
import { useStore } from 'vuex';

const store = useStore();

const nav = store.state.nav;

const socialNetworksList = ['facebook', 'instagram', 'twitter', 'linkedin'];
const termsOfUse = ['privacy policy', 'terms of use'];
</script>

<style>
.font-normal {
	font-style: normal;
}
.vade-mr-12-pc {
	margin-right: 12%;
}
.vade-mr-9-pc {
	margin-right: 9%;
}
.vade-max-width-175 {
	max-width: 175px;
}
</style>
