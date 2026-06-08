import { Inject, Injectable } from '@nestjs/common';
import { TASK_REPOSITORY } from './interface/repository.token';
import type { ITaskRepository } from './interface/tasks.repository.interface';

@Injectable()
export class TasksService {
  constructor(
    @Inject(TASK_REPOSITORY) private readonly _taskRepo: ITaskRepository,
  ) {}
  async getTasks() {
    return this._taskRepo.findAll();
  }
}
