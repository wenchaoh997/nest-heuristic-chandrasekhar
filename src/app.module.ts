import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { database } from './config';
import { CoreModule } from './modules/core/core.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
    imports: [CoreModule.forRoot(), DatabaseModule.forRoot(database)],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
