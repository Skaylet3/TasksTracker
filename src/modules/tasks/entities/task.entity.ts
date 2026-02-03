import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose'

@Schema()
export class Task {
  _id: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);