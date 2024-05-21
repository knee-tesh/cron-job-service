import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CronJob } from './cron-job.schema';
import { CronJobsService } from './cron-jobs.service';
import { CreateCronJobDto } from './dto/create-cron-job.dto';
import { UpdateCronJobDto } from './dto/update-cron-job.dto';

@Controller('cron-jobs')
export class CronJobsController {
  constructor(private readonly cronJobsService: CronJobsService) {}

  @Post()
  create(@Body() createCronJobDto: CreateCronJobDto): Promise<CronJob> {
    return this.cronJobsService.create(createCronJobDto);
  }

  @Get()
  findAll(): Promise<CronJob[]> {
    return this.cronJobsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CronJob> {
    return this.cronJobsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCronJobDto: UpdateCronJobDto,
  ): Promise<CronJob> {
    return this.cronJobsService.update(id, updateCronJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<CronJob> {
    return this.cronJobsService.remove(id);
  }
}
