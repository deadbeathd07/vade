<template>
	<v-app-bar :elevation="0" scroll-behavior="hide" class="mt-10">
		<template v-slot:prepend>
			<img src="../assets/logo-1.svg" alt="logo" />
		</template>
		<template v-slot:append>
			<v-list class="d-flex">
				<v-list-item
					v-for="(value, name, index) in nav"
					:key="index"
					class="mr-12"
					@click="goLink(value)"
				>
					<v-list-item-title v-text="name" />
				</v-list-item>
				<v-list-item>
					<v-btn size="large" variant="outlined" class="text-lowercase"
						>book a demo</v-btn
					>
				</v-list-item>
			</v-list>
		</template>
	</v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const nav = {
	technology: '/technology',
	'about us': '/about-us',
	impact: '/impact',
	portfolio: '/portfolio',
	blog: '/blog',
};
function goLink(path) {
	return router.push(path);
}
</script>

<style></style>
