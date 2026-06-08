import { TaskStatus } from '../enums/task-status.enum';

export class TaskEntity {
  id?: string;
  title: string;
  description?: string;
  status: TaskStatus;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
  constructor(props: {
    id?: string;
    title: string;
    description?: string;
    status: TaskStatus;
    userId: string;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = props.id;
    this.title = props.title;
    this.description = props.description;
    this.status = props.status;
    this.userId = props.userId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
