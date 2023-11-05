<template>
	<v-sheet
		class="vade-bg-primary bg-img-camera vade-pt-39 vade-px-26 vade-pb-24"
	>
		<h3
			class="primary-title vade-h3 vade-lh-50 vade-ls-132 font-weight-regular vade-max-width-450 pb-6"
		>
			{{ sectionContent.title }}
		</h3>
		<p class="primary-text vade-base-text vade-lh-24 max-width-450 mb-14">
			{{ sectionContent.text }}
		</p>
		<v-btn
			variant="outlined"
			class="vade-base-text vade-lh-18 vade-ls-45 text-transform-none primary-btn-text primary-btn-border vade-mb-36"
			width="270"
			height="60"
		>
			{{ sectionContent.btn_text }}
		</v-btn>
		<v-sheet color="transparent" class="d-flex justify-space-between">
			<v-card
				v-for="(option, index) in sectionContent.options"
				:key="index"
				elevation="0"
				color="transparent"
				class="vade"
				max-width="300"
			>
				<template v-slot:prepend>
					<component :is="option.icon" />
				</template>
				<v-card-title
					class="primary-title vade-h4 vade-lh-28 mt-7 mb-5 py-0 px-0"
				>
					{{ option.title }}
				</v-card-title>
				<v-card-text class="primary-text vade-base-text vade-lh-24 px-0">
					{{ option.text }}
				</v-card-text>
			</v-card>
		</v-sheet>
	</v-sheet>
</template>

<script setup>
import SolarBatteryIcon from '../../components/icons/SolarBatteryIcon.vue';
import DatabaseIcon from '../../components/icons/DatabaseIcon.vue';
import ChartIcon from '../../components/icons/ChartIcon.vue';

const sectionContent = {
	title: 'Get to know the curb better',
	text: 'Vade replaces legacy parking infrastructure with wireless cameras, computer vision, and granular analytics. We make it easy for cities to monitor and manage curb space in real-time.',
	btn_text: 'More about our technology',
	options: [
		{
			icon: SolarBatteryIcon,
			title: 'Fully wireless hardware',
			text: 'We provide solar and cellular cameras that work anywhere, operate 24/7, and take under 10 minutes to install.',
		},
		{
			icon: DatabaseIcon,
			title: 'Real-time data',
			text: 'Measure availability and compliance in real-time with our powerful and accurate computer vision pipeline.',
		},
		{
			icon: ChartIcon,
			title: 'Full service subscription',
			text: 'Full service subscription. One subscription for the cameras, installation, maintenance, implementation, software, and support.',
		},
	],
};
</script>

<style>
.bg-img-camera {
	background-image: url('../../assets/camera.png') !important;
	background-position: right 126px !important;
	background-size: 642px 414px !important;
	background-repeat: no-repeat !important;
}

.vade-pt-39 {
	padding-top: 156px;
}

.vade-pb-24 {
	padding-bottom: 96px;
}

.vade-mb-36 {
	margin-bottom: 144px;
}

.vade .v-card-item {
	padding: 0;
}
</style>
