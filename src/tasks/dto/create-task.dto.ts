import { TaskStatus } from "../enums/task-status.enum";

export class CreateTaskDTO {
  title!: string;
  description?:string;
  status?:TaskStatus
}