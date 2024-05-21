import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CronJob } from './cron-job.schema';
import { CreateCronJobDto } from './dto/create-cron-job.dto';
import { UpdateCronJobDto } from './dto/update-cron-job.dto';

@Injectable()
export class CronJobsService {
  constructor(
    @InjectModel(CronJob.name) private cronJobModel: Model<CronJob>,
  ) {}

  async create(createCronJobDto: CreateCronJobDto): Promise<CronJob> {
    const createdCronJob = new this.cronJobModel(createCronJobDto);
    return createdCronJob.save();
  }

  async findAll(): Promise<CronJob[]> {
    return this.cronJobModel.find().exec();
  }

  async findOne(id: string): Promise<CronJob> {
    return this.cronJobModel.findById(id).exec();
  }

  async update(
    id: string,
    updateCronJobDto: UpdateCronJobDto,
  ): Promise<CronJob> {
    return this.cronJobModel
      .findByIdAndUpdate(id, updateCronJobDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<CronJob> {
    return this.cronJobModel.findByIdAndDelete(id).exec();
  }
}
