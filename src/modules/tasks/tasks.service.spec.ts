import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

describe('TasksService', () => {
  let service: TasksService;
  let taskModel: {
    create: jest.Mock;
    find: jest.Mock;
    findById: jest.Mock;
    findByIdAndUpdate: jest.Mock;
  };

  beforeEach(async () => {
    taskModel = {
      create: jest.fn(),
      find: jest.fn(),
      findById: jest.fn(),
      findByIdAndUpdate: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getModelToken(Task.name),
          useValue: taskModel,
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('creates a task', async () => {
    const dto: CreateTaskDto = { title: 'Test task', description: 'Details' };
    const createdTask = { _id: 'task-id', ...dto };
    taskModel.create.mockResolvedValue(createdTask);

    const result = await service.create(dto);

    expect(taskModel.create).toHaveBeenCalledWith(dto);
    expect(result).toBe(createdTask);
  });

  it('returns all tasks', async () => {
    const tasks = [{ _id: 'task-1', title: 'Task 1' }];
    const exec = jest.fn().mockResolvedValue(tasks);
    taskModel.find.mockReturnValue({ exec });

    const result = await service.findAll();

    expect(taskModel.find).toHaveBeenCalledWith();
    expect(exec).toHaveBeenCalledWith();
    expect(result).toBe(tasks);
  });

  it('returns a task by id', async () => {
    const task = { _id: 'task-1', title: 'Task 1' };
    const exec = jest.fn().mockResolvedValue(task);
    taskModel.findById.mockReturnValue({ exec });

    const result = await service.findOne('task-1');

    expect(taskModel.findById).toHaveBeenCalledWith('task-1');
    expect(exec).toHaveBeenCalledWith();
    expect(result).toBe(task);
  });

  it('updates a task by id', async () => {
    const dto: UpdateTaskDto = { title: 'Updated' };
    const updatedTask = { _id: 'task-1', title: 'Updated' };
    const exec = jest.fn().mockResolvedValue(updatedTask);
    taskModel.findByIdAndUpdate.mockReturnValue({ exec });

    const result = await service.update('task-1', dto);

    expect(taskModel.findByIdAndUpdate).toHaveBeenCalledWith('task-1', dto, { new: true });
    expect(exec).toHaveBeenCalledWith();
    expect(result).toBe(updatedTask);
  });

  it('removes a task by id', async () => {
    const deleteOne = jest.fn().mockResolvedValue(undefined);
    const task = { _id: 'task-1', title: 'Task 1', deleteOne };
    const exec = jest.fn().mockResolvedValue(task);
    taskModel.findById.mockReturnValue({ exec });

    const result = await service.remove('task-1');

    expect(taskModel.findById).toHaveBeenCalledWith('task-1');
    expect(deleteOne).toHaveBeenCalledWith();
    expect(result).toBe(task);
  });
});
