<template>
	<v-sheet
		color="transparent"
		class="vade-bg-future vade-pt-14 vade-pb-19 vade-max-width mx-auto"
	>
		<h2
			class="original-title vade-h2 vade-lh-101 vade-ls-384 font-weight-regular vade-max-width-500 vade-mb-33"
		>
			{{ sectionContent.title }}
		</h2>
		<div class="d-flex justify-space-between align-end">
			<p class="vade-base-text vade-lh-24 original-text vade-max-width-350">
				{{ sectionContent.text }}
			</p>
			<div>
				<p
					class="vade-base-text vade-lh-28 original-text vade-max-width-200 mb-8"
				>
					{{ sectionContent.subtitle }}
				</p>
				<v-btn
					width="195"
					height="68"
					class="vade-base-text vade-lh-24 text-transform-none vade-ls-45"
					color="#4e66ff"
					elevation="0"
				>
					{{ sectionContent.btn_text }}
				</v-btn>
			</div>
		</div>
	</v-sheet>
</template>

<script setup>
const sectionContent = {
	title: 'Power up the future of cities',
	text: "We're building a new paradigm of urban mobility that understands and adapts to the world around it. We empower cities with dynamic tools to make streets safer, less congested, and more productive.",
	subtitle:
		'Read more on how we’re improving transportation on our Impact page.',
	btn_text: 'Social impact',
};
</script>

<style>
.vade-bg-future {
	background-image: url('../../assets/bg-2.png') !important;
	background-position: center !important;
	background-size: cover !important;
	background-repeat: no-repeat !important;
}

.vade-pt-14 {
	padding-top: 56px;
}

.vade-pb-19 {
	padding-bottom: 76px;
}

.vade-max-width-500 {
	max-width: 500px;
}

.vade-max-width-350 {
	max-width: 350px;
}

.vade-max-width-200 {
	max-width: 200px;
}

.vade-mb-33 {
	margin-bottom: 132px;
}
</style>
