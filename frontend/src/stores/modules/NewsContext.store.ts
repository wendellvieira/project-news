import { Store, Pinia } from 'pinia-class-component';

import { api } from 'src/boot/axios';
import { iArticleHead } from 'src/interfaces/articles';

interface topHeadlinesDto {
	status: 'ok';
	articles: iArticleHead[];
	totalResults: number;
}

@Store()
export class NewsContextStore extends Pinia {
	length = 0;
	articles: iArticleHead[] = [];

	async loadTopHeadlines() {
		try {
			const url = '/v1/news/top-headlines';
			const { data } = await api.get<topHeadlinesDto>(url);
			this.length = data.totalResults;
			this.articles = data.articles;
		} catch (error) {
			throw error;
		}
	}
}
