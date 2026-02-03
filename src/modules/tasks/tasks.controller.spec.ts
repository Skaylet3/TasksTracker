import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

describe('TasksController', () => {
  let controller: TasksController;
  let tasksService: {
    create: jest.Mock;
    findAll: jest.Mock;
    findOne: jest.Mock;
    update: jest.Mock;
    remove: jest.Mock;
  };

  beforeEach(async () => {
    tasksService = {
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: tasksService,
        },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('creates a task', async () => {
    const dto: CreateTaskDto = { title: 'Test task', description: 'Details' };
    const createdTask = { _id: 'task-id', ...dto };
    tasksService.create.mockResolvedValue(createdTask);

    const result = await controller.create(dto);

    expect(tasksService.create).toHaveBeenCalledWith(dto);
    expect(result).toBe(createdTask);
  });

  it('returns all tasks', async () => {
    const tasks = [{ _id: 'task-1', title: 'Task 1' }];
    tasksService.findAll.mockResolvedValue(tasks);

    const result = await controller.findAll();

    expect(tasksService.findAll).toHaveBeenCalledWith();
    expect(result).toBe(tasks);
  });

  it('returns a task by id', async () => {
    const task = { _id: 'task-1', title: 'Task 1' };
    tasksService.findOne.mockResolvedValue(task);

    const result = await controller.findOne('task-1');

    expect(tasksService.findOne).toHaveBeenCalledWith('task-1');
    expect(result).toBe(task);
  });

  it('updates a task by id', async () => {
    const dto: UpdateTaskDto = { title: 'Updated' };
    const task = { _id: 'task-1', title: 'Updated' };
    tasksService.update.mockResolvedValue(task);

    const result = await controller.update('task-1', dto);

    expect(tasksService.update).toHaveBeenCalledWith('task-1', dto);
    expect(result).toBe(task);
  });

  it('removes a task by id', async () => {
    const task = { _id: 'task-1', title: 'Task 1' };
    tasksService.remove.mockResolvedValue(task);

    const result = await controller.remove('task-1');

    expect(tasksService.remove).toHaveBeenCalledWith('task-1');
    expect(result).toBe(task);
  });
});
