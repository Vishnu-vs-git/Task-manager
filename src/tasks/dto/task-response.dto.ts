import { TaskStatus } from "../enums/task-status.enum";



export interface TaskResponseDTO {
  id?:string;
  title:string;
  description?:string;
  status: TaskStatus;
  updatedAt?:Date;
  createdAt?:Date;
  
}