<template>
	<v-sheet class="vade-py-25 vade-px-26" color="#f9fbfd">
		<h5 class="primary-title vade-h4 vade-lh-28 mb-6 font-weight-regular">
			{{ sectionContent.title }}
		</h5>
		<v-container class="pa-0 vade-mb-22">
			<v-row>
				<v-col cols="4" v-for="(post, i) in sectionContent.posts" :key="i">
					<v-card rounded="lg" color="white" elevation="0" class="pa-0 ma-0">
						<v-img :height="273" cover :src="post.img" />
						<div
							class="height-160 d-flex flex-column justify-space-between pa-6"
						>
							<v-card-title
								class="vade-h4 vade-lh-22 primary-title font-weight-regular text-wrap pa-0"
							>
								{{ post.title }}
							</v-card-title>
							<v-card-subtitle class="info-text vade-base-text vade-lh-24 pa-0">
								{{ post.date }}
							</v-card-subtitle>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
		<v-btn
			variant="outlined"
			class="vade-base-text vade-lh-18 vade-ls-45 text-transform-none primary-btn-text primary-btn-border"
			width="166"
			height="60"
		>
			{{ sectionContent.btn_text }}
		</v-btn>
	</v-sheet>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const sectionContent = store.state.sections.blog;
</script>

<style>
.vade-py-25 {
	padding-top: 100px;
	padding-bottom: 100px;
}

.height-160 {
	height: 160px;
}

.vade-mb-22 {
	margin-bottom: 88px;
}
</style>
