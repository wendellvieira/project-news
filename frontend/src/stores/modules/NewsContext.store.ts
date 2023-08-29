import { Store, Pinia } from 'pinia-class-component';

import { api } from 'src/boot/axios';
import { QueryTopHead, iArticleHead, iSource } from 'src/interfaces/articles';

interface topHeadlinesDto {
	status: 'ok';
	articles: iArticleHead[];
	totalResults: number;
}

interface sourceDto {
	status: 'ok';
	sources: iSource[];
}

@Store()
export class NewsContextStore extends Pinia {
	length = 0;
	articles: iArticleHead[] = [];

	sources: iSource[] = [];

	async loadTopHeadlines(params?: QueryTopHead) {
		try {
			const url = '/v1/news/top-headlines';
			const { data } = await api.get<topHeadlinesDto>(url, { params });

			if (data.status !== 'ok') {
				this.length = 0;
				this.articles = [];
				throw new Error('Erro inesperado!');
			}

			this.length = data.totalResults;
			this.articles = data.articles;
		} catch (error) {
			throw error;
		}
	}

	async loadSources() {
		try {
			const url = '/v1/news/sources';
			const { data } = await api.get<sourceDto>(url);

			if (data.status !== 'ok') {
				this.sources = [];
				throw new Error('Erro inesperado!');
			}

			this.sources = data.sources;
		} catch (error) {
			throw error;
		}
	}
}
