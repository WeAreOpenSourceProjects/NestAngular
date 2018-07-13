import { PipeTransform, Injectable, ArgumentMetadata, HttpStatus, BadRequestException, HttpException } from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { Task } from '../entities/task.entity';

@Injectable()
export class TaskByIdPipe implements PipeTransform<string, Promise<Task>> {

  constructor(private readonly _taskService: TaskService) { }

  async transform(taskId: string, _metadata: ArgumentMetadata): Promise<Task> {
    if (!taskId) {
      throw new HttpException({ error: 'Parameter is required' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const task = await this._taskService.findOne(taskId);

    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    return task;
  }
}
