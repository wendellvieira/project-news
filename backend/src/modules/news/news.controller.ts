import { Controller, Get } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
	constructor(private readonly newsService: NewsService) {}

	@Get('top-headlines')
	findTopHeadlines() {
		return this.newsService.topHeadlines();
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
