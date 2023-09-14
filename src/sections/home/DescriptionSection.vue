<template>
	<v-sheet class="vade-bg-primary bg-img-camera">
		<h2>Get to know the curb better</h2>
		<p class="max-width-45">
			Vade replaces legacy parking infrastructure with wireless cameras,
			computer vision, and granular analytics. We make it easy for cities to
			monitor and manage curb space in real-time.
		</p>
		<v-btn
			variant="outlined"
			class="vade-base-text vade-lh-24 text-transform-none"
			size="large"
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

<script>
export default {};
</script>

<style></style>
