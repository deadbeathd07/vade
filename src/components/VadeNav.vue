<template>
	<v-list class="d-flex opacity-40" :base-color="color">
		<v-list-item
			v-for="(value, name, index) in props.nav"
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
				:color="color"
				>book a demo</v-btn
			>
		</v-list-item>
	</v-list>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
	nav: Object,
	color: String,
});

function goLink(path) {
	return router.push(path);
}
</script>

<style></style>
