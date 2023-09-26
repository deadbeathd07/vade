<template>
	<v-list lines="one" class="d-flex">
		<v-list-item v-for="(item, i) in props.list" :key="i" class="pa-0 mr-3">
			<a href="#">
				<v-icon
					:icon="'mdi-' + item"
					size="x-large"
					color="black"
					class="vade-social-icon"
				/>
			</a>
		</v-list-item>
	</v-list>
</template>

<script setup>
const props = defineProps({
	list: Array,
});
</script>

<style>
.vade-social-icon:hover {
	color: var(--palette-1-5) !important;
	transition: all 0.3s ease-in;
}
</style>
