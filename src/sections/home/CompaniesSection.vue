<template>
	<v-sheet>
		<h2>Trusted by leaders in urban transportation</h2>
		<p>
			Transparency and quality are the basis of our work, and we've helped
			cities and vendors across the United States.
		</p>
		<h6>Here's who we've worked with</h6>
		<v-list color="transparent" class="d-flex flex-wrap">
			<v-list-item v-for="(company, i) in companies" :key="i">
				<template v-slot:prepend>
					<component :is="company.icon" />
				</template>
			</v-list-item>
		</v-list>
		<figure>
			<q>
				Curb management can help ensure that curb space is allocated more
				equitably, providing access to this limited resource to all street
				users, including our most vulnerable.
			</q>
			<figcaption>
				<h6>San Francisco</h6>
				Municipal Transportation Agency
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
</script>

<style></style>
