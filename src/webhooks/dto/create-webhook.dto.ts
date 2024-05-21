import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateWebhookDto {
  @IsNotEmpty()
  @IsString()
  cronJobId: string;

  @IsNotEmpty()
  @IsObject()
  data: any;
}
