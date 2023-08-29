<template>
	<q-item @click="handleChooseSource" clickable v-ripple>
		<q-item-section>
			<q-item-label>{{ source.name }}</q-item-label>
			<q-item-label caption>{{ source.category }}</q-item-label>
		</q-item-section>
	</q-item>
</template>

<script setup lang="ts">
	import { iSource } from 'src/interfaces/articles';
	import { NewsContextStore } from 'src/stores/modules/NewsContext.store';

	const props = defineProps<{ source: iSource }>();
	const sNews = new NewsContextStore();

	async function handleChooseSource() {
		await sNews.loadTopHeadlines({
			sources: props.source.id,
			// category: props.source.category,
			// language: props.source.language,
			// country: props.source.country,
		});
	}
</script>

<style scoped></style>
