<template>
	<v-sheet class="bg-img-1 vade-pt-31 vade-pb-25">
		<h1 class="vade-h1 text-regular vade-lh-115 vade-ls-696 vade-mb-30">
			{{ sectionContent.title }}
		</h1>
		<p class="max-width-365 primary-text vade-base-text vade-lh-24 vade-mb-9">
			{{ sectionContent.text }}
		</p>
		<v-btn
			width="188"
			height="68"
			class="vade-base-text vade-lh-24 text-transform-none vade-ls-45"
			color="yellow"
			elevation="0"
		>
			{{ sectionContent.btn_text }}
		</v-btn>
	</v-sheet>
</template>

<script setup>
const sectionContent = {
	title: 'Connecting the curb to new insights',
	text: 'Real-time curb data for smart cities. Measure occupancy, analyze demand, and manage curb space with the right tools.',
	btn_text: 'Book a demo',
};
</script>

<style>
.vade-pt-31 {
	padding-top: 124px;
}

.vade-pb-25 {
	padding-bottom: 100px;
}

.vade-mb-9 {
	margin-bottom: 36px;
}

.vade-mb-30 {
	margin-bottom: 120px;
}
</style>
