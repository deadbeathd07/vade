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
import IntroSection from '../sections/home/IntroSection.vue';
import DescriptionSection from '../sections/home/DescriptionSection.vue';
import AnalyticsSection from '../sections/home/AnalyticsSection.vue';
import CompaniesSection from '../sections/home/CompaniesSection.vue';
import FutureSection from '../sections/home/FutureSection.vue';
import BlogSection from '../sections/home/BlogSection.vue';
import FormSection from '../sections/home/FormSection.vue';
</script>

<style>
.bg-img-1 {
	background-image: url('../assets/bg-1.png') !important;
	background-position: center !important;
	background-size: cover !important;
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
