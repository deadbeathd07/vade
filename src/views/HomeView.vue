<template>
	<intro-section />
	<description-section />
	<analytics-section />
	<companies-section />
	<future-section />
	<blog-section />
	<form-section />
</template>

<script setup>
import SolarBatteryIcon from '../components/icons/SolarBatteryIcon.vue';
import DatabaseIcon from '../components/icons/DatabaseIcon.vue';
import ChartIcon from '../components/icons/ChartIcon.vue';
import CompanyLogo1 from '../components/icons/companies_logo/CompanyLogo1.vue';
import CompanyLogo2 from '../components/icons/companies_logo/CompanyLogo2.vue';
import CompanyLogo3 from '../components/icons/companies_logo/CompanyLogo3.vue';
import CompanyLogo4 from '../components/icons/companies_logo/CompanyLogo4.vue';
import CompanyLogo5 from '../components/icons/companies_logo/CompanyLogo5.vue';
import CompanyLogo6 from '../components/icons/companies_logo/CompanyLogo6.vue';
import CompanyLogo7 from '../components/icons/companies_logo/CompanyLogo7.vue';
import CompanyLogo8 from '../components/icons/companies_logo/CompanyLogo8.vue';
import IntroSection from '../sections/home/IntroSection.vue';
import DescriptionSection from '../sections/home/DescriptionSection.vue';
import AnalyticsSection from '../sections/home/AnalyticsSection.vue';
import CompaniesSection from '../sections/home/CompaniesSection.vue';
import FutureSection from '../sections/home/FutureSection.vue';
import BlogSection from '../sections/home/BlogSection.vue';
import FormSection from '../sections/home/FormSection.vue';

const options = [
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
];

const companies = [
	{
		icon: CompanyLogo1,
	},
	{
		icon: CompanyLogo2,
	},
	{
		icon: CompanyLogo3,
	},
	{
		icon: CompanyLogo4,
	},
	{
		icon: CompanyLogo5,
	},
	{
		icon: CompanyLogo6,
	},
	{
		icon: CompanyLogo7,
	},
	{
		icon: CompanyLogo8,
	},
];

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
