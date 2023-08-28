import { Module } from '@nestjs/common';

import { DatabaseConfig } from './configs/Database';

@Module({
	imports: [DatabaseConfig()],
	controllers: [],
	providers: [],
})
export class AppModule {}
