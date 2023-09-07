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
			<v-list
				class="d-flex opacity-40"
				:base-color="palette['primary-nav-text']"
			>
				<v-list-item
					v-for="(value, name, index) in nav"
					:key="index"
					class="mr-11"
					@click="goLink(value)"
				>
					<v-list-item-title v-text="name" class="vade-base-text" />
				</v-list-item>
				<v-list-item>
					<v-btn
						size="large"
						variant="outlined"
						class="text-lowercase vade-base-text"
						:color="palette['primary-nav-text']"
						>book a demo</v-btn
					>
				</v-list-item>
			</v-list>
		</template>
	</v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const nav = {
	technology: '/technology',
	'about us': '/about-us',
	impact: '/impact',
	portfolio: '/portfolio',
	blog: '/blog',
};

const palette = store.state.palette;

function goLink(path) {
	return router.push(path);
}
</script>

<style></style>
