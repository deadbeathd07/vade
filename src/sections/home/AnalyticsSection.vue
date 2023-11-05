<template>
	<v-sheet class="vade-bg-3 my-15 vade-px-26">
		<h3
			class="primary-title vade-h3 vade-lh-50 vade-ls-132 font-weight-regular vade-max-width-450 pb-6"
		>
			{{ sectionContent.title }}
		</h3>
		<p class="primary-text vade-base-text vade-lh-24 max-width-450 mb-15">
			{{ sectionContent.text }}
		</p>
		<v-sheet height="615" color="transparent" />
	</v-sheet>
</template>

<script setup>
const sectionContent = {
	title: 'Collect, analyze, and visualize occupancy data',
	text: 'Visualize demand with dashboards for curb utilization and compliance.',
};
</script>

<style>
.vade-bg-3 {
	background-image: url('../../assets/app.png') !important;
	background-position: right bottom !important;
	background-size: auto !important;
	background-repeat: no-repeat !important;
}
</style>
