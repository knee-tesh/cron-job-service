import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CronJobHistory } from '../cron-jobs/cron-job.schema';
import { CreateWebhookDto } from './dto/create-webhook.dto';

@Injectable()
export class WebhooksService {
  constructor(
    @InjectModel(CronJobHistory.name)
    private cronJobHistoryModel: Model<CronJobHistory>,
  ) {}

  async create(createWebhookDto: CreateWebhookDto): Promise<CronJobHistory> {
    const { cronJobId, data } = createWebhookDto;

    const createdHistory = new this.cronJobHistoryModel({
      cronJobId,
      trigger: new Date(),
      response: data,
    });

    return createdHistory.save();
  }

  async findAll(): Promise<CronJobHistory[]> {
    return this.cronJobHistoryModel.find().exec();
  }

  async findByCronJobId(cronJobId: string): Promise<CronJobHistory[]> {
    return this.cronJobHistoryModel.find({ cronJobId }).exec();
  }
}
