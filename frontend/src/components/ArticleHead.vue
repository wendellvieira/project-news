<template>
	<q-card>
		<img :src="article.urlToImage" />

		<q-item>
			<q-item-section>
				<q-item-label class="text-bold">
					{{ article.title }}
				</q-item-label>
				<q-item-label caption>
					{{ new Date(article.publishedAt).toLocaleDateString() }}
				</q-item-label>
				<q-item-label caption v-if="article.author">
					By: {{ article.author }}
				</q-item-label>
				<q-item-label overline v-if="article.source.name">
					{{ article.source.name }}
				</q-item-label>
			</q-item-section>

			<!-- <q-item-section side>
				<q-item-label caption>20/15/6544</q-item-label>
			</q-item-section> -->
		</q-item>

		<q-card-section class="q-pt-none text-grey-6">
			<div v-html="article.description"></div>
		</q-card-section>
	</q-card>
</template>
<script setup lang="ts">
	import { iArticleHead } from 'src/interfaces/articles';

	defineProps<{ article: iArticleHead }>();
</script>
<style lang="scss" scoped></style>
