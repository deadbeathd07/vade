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

<script setup>
const posts = [
	{
		img: 'assets/photo-1.jpg',
		title: '2021 Mid-South Parking and Transportation (MSPTA) Conference',
		date: 'September 21, 2021',
	},
	{
		img: 'assets/photo-2.jpg',
		title: '2021 Parking Industry Expo (PIE)',
		date: 'September 21, 2021',
	},
	{
		img: 'assets/photo-3.jpg',
		title: '2021 International Parking & Mobility Institute (IPMI) Conference',
		date: 'September 16, 2021',
	},
];
</script>

<style></style>
