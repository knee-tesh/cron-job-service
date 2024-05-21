import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CronJob extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  link: string;

  @Prop({ required: true })
  apiKey: string;

  @Prop({ required: true })
  schedule: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const CronJobSchema = SchemaFactory.createForClass(CronJob);

@Schema()
export class CronJobHistory extends Document {
  @Prop({ required: true })
  cronJobId: string;

  @Prop({ required: true })
  trigger: Date;

  @Prop({ required: true })
  response: any;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const CronJobHistorySchema =
  SchemaFactory.createForClass(CronJobHistory);
