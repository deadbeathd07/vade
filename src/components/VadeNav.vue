<template>
	<v-list
		density="compact"
		:class="[
			'd-flex',
			isHorizontal ? horizontalMainClasses : verticalMainClasses,
		]"
	>
		<v-list-item
			v-for="(value, name, index) in props.nav"
			:key="index"
			:class="isHorizontal && 'mr-11'"
			@click.prevent
		>
			<v-list-item-title
				v-text="name"
				:class="[
					'primary-nav-text',
					isHorizontal ? horizontalTextClasses : verticalTextClasses,
				]"
			/>
		</v-list-item>
	</v-list>
</template>

<script setup>
const props = defineProps({
	nav: Object,
	isHorizontal: Boolean,
});

const horizontalMainClasses = ['flex-row', 'opacity-40', 'bg-transparent'];
const horizontalTextClasses = ['vade-base-text', 'vade-lh-24', 'vade-ls-90'];

const verticalMainClasses = ['flex-column', 'bg-transparent'];
const verticalTextClasses = ['vade-base-text', 'vade-lh-18'];
</script>

<style></style>
