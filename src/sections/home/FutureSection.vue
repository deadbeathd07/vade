<template>
	<v-sheet>
		<h2>{{ sectionContent.title }}</h2>
		<p>
			{{ sectionContent.text }}
		</p>
		<p>{{ sectionContent.subtitle }}</p>
		<v-btn>{{ sectionContent.btn_text }}</v-btn>
	</v-sheet>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const sectionContent = store.state.sections.future;
</script>

<style></style>
