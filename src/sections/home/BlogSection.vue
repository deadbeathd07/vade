<template>
	<v-sheet>
		<h5>{{ sectionContent.title }}</h5>
		<v-card
			v-for="(post, i) in sectionContent.posts"
			:key="i"
			:title="post.title"
			:image="post.img"
		></v-card>
		<v-btn>Read all posts</v-btn>
	</v-sheet>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const sectionContent = store.state.sections.blog;
</script>

<style></style>
