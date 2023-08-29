<template>
	<div class="row q-py-xl q-gutter-md">
		<div class="col-3">
			<q-input label="Pesquisar" outlined />

			<q-list class="q-mt-md" bordered separator>
				<q-item-label header>
					<b class="q-mr-sm">Sources</b>
					<q-badge color="blue" v-if="sNews.sources.length > 0">
						{{ sNews.sources.length }}
					</q-badge>
				</q-item-label>

				<SourceItem
					v-for="source in sNews.sources"
					:key="source.id"
					:source="source"
				/>
			</q-list>
		</div>
		<div class="col">
			<div class="cnt-articles">
				<article-head
					v-for="article in sNews.articles"
					:key="article.url"
					:article="article"
				/>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import { onMounted } from 'vue';

	import ArticleHead from 'src/components/ArticleHead.vue';
	import SourceItem from 'src/components/SourceItem.vue';

	import { NewsContextStore } from 'src/stores/modules/NewsContext.store';

	const sNews = new NewsContextStore();

	onMounted(async () => {
		await Promise.all([
			await sNews.loadTopHeadlines(),
			await sNews.loadSources(),
		]);
	});
</script>
<style lang="scss" scoped>
	.cnt-articles {
		display: grid;
		gap: 16px;
		grid-template-columns: 1fr 1fr;
	}
</style>
