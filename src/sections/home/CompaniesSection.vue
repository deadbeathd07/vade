<template>
	<v-sheet class="vade-pt-31 vade-pb-45 vade-px-26 vade-max-width mx-auto">
		<h3
			class="primary-title vade-h3 vade-lh-50 vade-ls-132 font-weight-regular vade-max-width-450 pb-6"
		>
			{{ sectionContent.title }}
		</h3>
		<p class="primary-text vade-base-text vade-lh-24 max-width-450 vade-mb-24">
			{{ sectionContent.text }}
		</p>
		<h4 class="vade-h4 vade-lh-28 primary-title font-weight-regular mb-9">
			{{ sectionContent.subtitle }}
		</h4>
		<v-container class="d-flex flex-wrap vade-px-18 vade-mb-41">
			<v-row>
				<v-col
					cols="3"
					v-for="(company, i) in companies"
					:key="i"
					class="pa-0 ma-0"
				>
					<component :is="company.icon" />
				</v-col>
			</v-row>
		</v-container>
		<figure class="d-flex">
			<q
				class="original-text vade-quote-text vade-lh-46 vade-ls-32 flex-0-1 vade-mr-19 vade-max-width-600"
			>
				{{ sectionContent.quote.text }}
			</q>
			<figcaption class="flex-0-0 d-flex align-center justify-center">
				<company-logo-9 />
				<div class="ml-5 vade-max-width-170">
					<h6 class="vade-h4 primary-title vade-lh-28 font-weight-regular">
						{{ sectionContent.quote.location }}
					</h6>
					<p class="vade-base-text vade-lh-24 primary-text">
						{{ sectionContent.quote.company }}
					</p>
				</div>
			</figcaption>
		</figure>
	</v-sheet>
</template>

<script setup>
import CompanyLogo1 from '../../components/icons/companies_logo/CompanyLogo1.vue';
import CompanyLogo2 from '../../components/icons/companies_logo/CompanyLogo2.vue';
import CompanyLogo3 from '../../components/icons/companies_logo/CompanyLogo3.vue';
import CompanyLogo4 from '../../components/icons/companies_logo/CompanyLogo4.vue';
import CompanyLogo5 from '../../components/icons/companies_logo/CompanyLogo5.vue';
import CompanyLogo6 from '../../components/icons/companies_logo/CompanyLogo6.vue';
import CompanyLogo7 from '../../components/icons/companies_logo/CompanyLogo7.vue';
import CompanyLogo8 from '../../components/icons/companies_logo/CompanyLogo8.vue';
import CompanyLogo9 from '../../components/icons/companies_logo/companyLogo9.vue';

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

const sectionContent = {
	title: 'Trusted by leaders in urban transportation',
	text: "Transparency and quality are the basis of our work, and we've helped cities and vendors across the United States.",
	subtitle: "Here's who we've worked with",
	quote: {
		text: 'Curb management can help ensure that curb space is allocated more equitably, providing access to this limited resource to all street users, including our most vulnerable.',
		location: 'San Francisco',
		company: 'Municipal Transportation Agency',
	},
};
</script>

<style>
.vade-pt-31 {
	padding-top: 124px;
}

.vade-pb-45 {
	padding-bottom: 180px;
}

.vade-mb-24 {
	margin-bottom: 96px;
}

.vade-px-18 {
	padding-left: 72px !important;
	padding-right: 72px !important;
}

.vade-mb-41 {
	margin-bottom: 164px;
}

.vade-mr-19 {
	margin-right: 76px;
}

.vade-max-width-600 {
	max-width: 600px;
}

.vade-max-width-170 {
	max-width: 170px;
}
</style>
