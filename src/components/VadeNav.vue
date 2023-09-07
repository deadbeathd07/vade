<template>
	<v-list class="d-flex opacity-40" :base-color="color">
		<v-list-item
			v-for="(value, name, index) in props.nav"
			:key="index"
			class="mr-11"
			@click="goLink(value)"
		>
			<v-list-item-title v-text="name" class="vade-base-text vade-lh-24" />
		</v-list-item>
		<v-list-item>
			<v-btn
				size="large"
				variant="outlined"
				class="text-lowercase vade-base-text vade-lh-24"
				:color="color"
			>
				book a demo
			</v-btn>
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
