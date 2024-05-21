import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateCronJobDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  link: string;

  @IsNotEmpty()
  @IsString()
  apiKey: string;

  @IsNotEmpty()
  @IsString()
  schedule: string;

  @IsNotEmpty()
  @IsDate()
  startDate: Date;
}
