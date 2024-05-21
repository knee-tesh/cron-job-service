import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CronJobsModule } from './cron-jobs/cron-jobs.module';
import { WebhooksController } from './webhooks/webhooks.controller';

@Module({
  imports: [CronJobsModule],
  controllers: [AppController, WebhooksController],
  providers: [AppService],
})
export class AppModule {}
