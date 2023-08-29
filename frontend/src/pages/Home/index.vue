<template>
	<div class="row q-py-xl q-gutter-md">
		<div class="col-3">
			<q-input label="Pesquisar" outlined />
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
	import { NewsContextStore } from 'src/stores/modules/NewsContext.store';
	import ArticleHead from 'src/components/ArticleHead.vue';

	const sNews = new NewsContextStore();

	onMounted(async () => {
		await sNews.loadTopHeadlines();
	});
</script>
<style lang="scss" scoped>
	.cnt-articles {
		display: grid;
		gap: 16px;
		grid-template-columns: 1fr 1fr;
	}
</style>
