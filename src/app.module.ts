import { Module } from '@nestjs/common';
import { TasksModule } from './modules/tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

const uri = "mongodb+srv://Vercel-Admin-atlas-lime-flower:Fx6QxJzkiBnnWwHV@atlas-lime-flower.nk4ejuz.mongodb.net/?retryWrites=true&w=majority"

@Module({
  imports: [TasksModule, MongooseModule.forRoot(uri)],
  controllers: [],
  providers: [],
})
export class AppModule {}
