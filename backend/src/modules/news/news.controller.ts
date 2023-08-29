import { Controller, Get, Query } from '@nestjs/common';
import { NewsService } from './news.service';
import { QueryTopHead } from 'src/interfaces/NewsApi';

@Controller('news')
export class NewsController {
	constructor(private readonly newsService: NewsService) {}

	@Get('top-headlines')
	findTopHeadlines(@Query() queries: QueryTopHead) {
		return this.newsService.topHeadlines(queries);
	}

	@Get('everything')
	findEverything() {
		return this.newsService.everything();
	}

	@Get('sources')
	findSources() {
		return this.newsService.sources();
	}
}
