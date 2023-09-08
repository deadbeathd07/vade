<template>
	<v-sheet class="bg-img-1">
		<h1 class="vade-h1 text-regular vade-lh-115 vade-ls-696 mb-30">
			Connecting the curb to new insights
		</h1>
		<p class="max-width-365 primary-text vade-base-text vade-lh-24">
			Real-time curb data for smart cities. Measure occupancy, analyze demand,
			and manage curb space with the right tools.
		</p>
		<v-btn
			size="large"
			class="vade-base-text vade-lh-24 text-transform-none"
			color="yellow"
			elevation="0"
		>
			Book a demo
		</v-btn>
	</v-sheet>
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

<script setup>
import SolarBatteryIcon from '../components/icons/SolarBatteryIcon.vue';
import DatabaseIcon from '../components/icons/DatabaseIcon.vue';
import ChartIcon from '../components/icons/ChartIcon.vue';

const options = [
	{
		img: SolarBatteryIcon,
		title: 'Fully wireless hardware',
		text: 'We provide solar and cellular cameras that work anywhere, operate 24/7, and take under 10 minutes to install.',
	},
	{
		img: DatabaseIcon,
		title: 'Real-time data',
		text: 'Measure availability and compliance in real-time with our powerful and accurate computer vision pipeline.',
	},
	{
		img: ChartIcon,
		title: 'Full service subscription',
		text: 'Full service subscription. One subscription for the cameras, installation, maintenance, implementation, software, and support.',
	},
];
</script>

<style>
.bg-img-1 {
	background-image: url('../assets/bg-1.png') !important;
	background-position: center !important;
	background-size: cover !important;
	background-repeat: no-repeat !important;
}

.bg-img-camera {
	background-image: url('../assets/camera.png') !important;
	background-position: right 126px !important;
	background-size: 642px 414px !important;
	background-repeat: no-repeat !important;
}

.text-transform-none {
	text-transform: none !important;
}

.text-regular {
	font-weight: 400;
}

.max-width-365 {
	max-width: 365px;
}

.max-width-450 {
	max-width: 450px;
}
</style>
