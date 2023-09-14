<template>
	<v-sheet>
		<h5>Our blog posts</h5>
		<v-card
			v-for="(post, i) in posts"
			:key="i"
			:title="post.title"
			:image="post.img"
		></v-card>
		<v-btn>Read all posts</v-btn>
	</v-sheet>
</template>

<script>
export default {};
</script>

<style></style>
