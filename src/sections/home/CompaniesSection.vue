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

<script>
export default {};
</script>

<style></style>
