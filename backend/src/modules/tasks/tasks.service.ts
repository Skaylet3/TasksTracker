import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from 'mongoose';
import { Task } from './entities/task.entity';
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name)
    private taskModel: Model<Task>

  ) {}

  create(createTaskDto: CreateTaskDto) {
    return this.taskModel.create(createTaskDto);

  }

  findAll() {
    return this.taskModel.find().exec();

  }

  findOne(id: string) {
    return this.taskModel.findById(id).exec();

  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskModel
    .findByIdAndUpdate(id, updateTaskDto, { new: true })
    .exec();

  }

  async remove(id: string) {
    const task = await this.findOne(id);

    await task?.deleteOne();

    return task;
    
  }
}
