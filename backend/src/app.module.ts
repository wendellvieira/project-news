import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// import { DatabaseConfig } from './configs/Database';
import { NewsModule } from './modules/news/news.module';

@Module({
	imports: [
		ConfigModule.forRoot(),

		// DatabaseConfig(),
		NewsModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
