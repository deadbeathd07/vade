<template>
	<v-sheet color="#ddebff" class="vade-py-27">
		<v-container>
			<v-row>
				<v-col cols="6" class="vade-corners">
					<div
						class="pt-12 pb-15 px-14 vade-content d-flex flex-column justify-space-between align-center"
					>
						<h3 class="vade-h3 vade-lh-50 vade-ls-132 primary-title">
							{{ sectionContent.title }}
						</h3>
						<p class="vade-h4 vade-lh-21 vade-ls-180">
							{{ sectionContent.text }}
						</p>
					</div>
				</v-col>
				<v-col cols="6">
					<v-form>
						<v-text-field
							v-for="(field, i) in sectionContent.fields"
							:key="i"
							:label="field"
						/>
						<v-textarea :label="sectionContent.area" />
						<v-btn
							elevation="0"
							color="#393737"
							class="vade-form-text text-transform-none secondary-btn-text"
							width="184"
							height="68"
						>
							{{ sectionContent.btn_text }}
						</v-btn>
					</v-form>
				</v-col>
			</v-row>
		</v-container>
	</v-sheet>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const sectionContent = store.state.sections.form;
</script>

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
