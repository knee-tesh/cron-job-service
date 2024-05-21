import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { CreateWebhookDto } from './dto/create-webhook.dto';

@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}

  @Post()
  create(@Body() createWebhookDto: CreateWebhookDto) {
    return this.webhooksService.create(createWebhookDto);
  }

  @Get()
  findAll() {
    return this.webhooksService.findAll();
  }

  @Get('cron-job/:id')
  findByCronJobId(@Param('id') cronJobId: string) {
    return this.webhooksService.findByCronJobId(cronJobId);
  }
}
