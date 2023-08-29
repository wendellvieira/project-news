import { Injectable } from '@nestjs/common';
import * as NewsAPI from 'newsapi';
import { QueryTopHead } from 'src/interfaces/NewsApi';

@Injectable()
export class NewsService {
	get signedApi() {
		return new NewsAPI(process.env.NEWS_API_KEY);
	}

	topHeadlines(queries: QueryTopHead) {
		const search: any = {
			language: 'en',
		};

		if (!queries.sources) {
			search.country = queries.country || 'us';
			search.category = queries.category || 'technology';
		} else {
			search.sources = queries.sources;
		}

		if (queries.q) search.q = queries.q;

		return this.signedApi.v2.topHeadlines(search);
	}

	everything() {
		return this.signedApi.v2.everything({
			sources: 'bbc-news,the-verge',
			domains: 'bbc.co.uk, techcrunch.com',
			language: 'en',
			sortBy: 'relevancy',
		});
	}

	sources() {
		return this.signedApi.v2.sources({
			category: 'technology',
			language: 'en',
			country: 'us',
		});
	}
}
