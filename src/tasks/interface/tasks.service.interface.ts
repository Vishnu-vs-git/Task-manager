import { TaskResponseDTO } from "../dto/task-response.dto";

export interface ITaskService {
  getTasks():Promise<TaskResponseDTO[]|[]>;
  getTaskById(taskId: string): Promise<TaskResponseDTO>
}