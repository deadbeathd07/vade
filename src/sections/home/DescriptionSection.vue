<template>
	<v-sheet
		class="vade-bg-primary bg-img-camera vade-pt-39 vade-px-26 vade-pb-24"
	>
		<h3
			class="primary-title vade-h3 vade-lh-50 vade-ls-132 font-weight-regular vade-max-width-450 pb-6"
		>
			Get to know the curb better
		</h3>
		<p class="primary-text vade-base-text vade-lh-24 max-width-450 vade-pb-14">
			Vade replaces legacy parking infrastructure with wireless cameras,
			computer vision, and granular analytics. We make it easy for cities to
			monitor and manage curb space in real-time.
		</p>
		<v-btn
			variant="outlined"
			class="vade-base-text vade-lh-18 vade-ls-45 text-transform-none primary-btn-text primary-btn-border"
			width="270"
			height="60"
		>
			More about our technology
		</v-btn>
		<v-sheet color="transparent" class="d-flex">
			<v-card
				v-for="(option, index) in options"
				:key="index"
				:title="option.title"
				:text="option.text"
				elevation="0"
				color="transparent"
			>
				<template v-slot:prepend>
					<component :is="option.img" />
				</template>
			</v-card>
		</v-sheet>
	</v-sheet>
</template>

<script setup></script>

<style>
.vade-pt-39 {
	padding-top: 156px;
}

.vade-pb-14 {
	padding-bottom: 56px;
}

.vade-pb-24 {
	padding-bottom: 96px;
}

.vade-px-26 {
	padding-right: 104px;
	padding-left: 104px;
}

.vade-max-width-450 {
	max-width: 450px;
}
</style>
