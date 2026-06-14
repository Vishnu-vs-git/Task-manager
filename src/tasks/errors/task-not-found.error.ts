import { AppError } from "src/shared/errors/app.error";

export class TaskNotFoundError extends AppError{
  constructor(taskId: string){
    super(
      `Task ${taskId} not found`,
      `TASK_NOT_FOUND`,
       404
    )
  }
}