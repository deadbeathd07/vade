<template>
	<v-sheet color="#ddebff" class="vade-py-27">
		<v-container>
			<v-row>
				<v-col cols="6" class="vade-corners">
					<div
						class="pt-12 pb-15 px-14 vade-content d-flex flex-column justify-space-between align-center"
					>
						<h3 class="vade-h3 vade-lh-50 vade-ls-132 primary-title">
							Let’s find out how your curbs are used.
						</h3>
						<p class="vade-h4 vade-lh-21 vade-ls-180">
							Connect with Vade and see what real-time curb data can do for your
							city.
						</p>
					</div>
				</v-col>
				<v-col cols="6">
					<v-form>
						<v-text-field label="name" />
						<v-text-field label="email" />
						<v-text-field label="company" />
						<v-text-field label="position" />
						<v-textarea label="message" />
						<v-btn>Get in touch</v-btn>
					</v-form>
				</v-col>
			</v-row>
		</v-container>
	</v-sheet>
</template>

<script setup></script>

<style>
.vade-py-27 {
	padding-top: 108px;
	padding-bottom: 108px;
}

.vade-corners {
	display: flex;
	border: 10px solid white;
	border-radius: 14px;
	position: relative;
	z-index: 30;
}

.vade-corners::after {
	content: '';
	position: absolute;
	width: 105%;
	height: 70%;
	top: 15%;
	right: -19px;
	background-color: #ddebff;
	z-index: 30;
}

.vade-corners::before {
	content: '';
	position: absolute;
	width: 80%;
	height: 105%;
	top: -16px;
	right: 10%;
	background-color: #ddebff;
	z-index: 30;
}
.vade-content {
	z-index: 40;
}
</style>
