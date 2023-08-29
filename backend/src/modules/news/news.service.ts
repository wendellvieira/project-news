import { Injectable } from '@nestjs/common';
import * as NewsAPI from 'newsapi';

@Injectable()
export class NewsService {
	get signedApi() {
		return new NewsAPI(process.env.NEWS_API_KEY);
	}

	topHeadlines() {
		return this.signedApi.v2.topHeadlines({
			category: 'business',
			language: 'en',
			country: 'us',
		});
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
