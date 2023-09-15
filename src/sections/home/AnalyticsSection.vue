<template>
	<v-sheet class="py-15 vade-px-26">
		<h3
			class="primary-title vade-h3 vade-lh-50 vade-ls-132 font-weight-regular vade-max-width-450 pb-6"
		>
			{{ sectionContent.title }}
		</h3>
		<p class="primary-text vade-base-text vade-lh-24 max-width-450 mb-15">
			{{ sectionContent.text }}
		</p>
		<v-img :src="sectionContent.img_path" />
	</v-sheet>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const sectionContent = store.state.sections.analytics;
</script>

<style></style>
