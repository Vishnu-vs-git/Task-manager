import { TaskResponseDTO } from "../dto/task-response.dto";
import { TaskEntity } from "../entities/task.entity";

export class TaskMapper {
  static toResponseDTO(task: TaskEntity): TaskResponseDTO{
    return {
       id: task.id,
       title:task.title,
       status: task.status,
       description:task.description,
       createdAt: task.createdAt,
       updatedAt: task.updatedAt

    }
  }
  static toResponseDTOList(tasks: TaskEntity[]): TaskResponseDTO[] {
    return tasks.map((t) => this.toResponseDTO(t))
  }
}